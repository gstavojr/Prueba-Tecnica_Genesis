import { CreateTransferenciaDTO, TransferenciaPublic } from "@domain/entities/Transferencia";
import { BusinessRuleError } from "@domain/exceptions/Exception";
import { ITransferenciaRepository } from "@domain/repositories/ITransferenciaRepository";


interface CrearTransferenciaInput {
  cuenta_origen_id:  number;
  cuenta_destino_id: number;
  monto:             number;
  descripcion?:      string;
}

interface CrearTransferenciaOutput {
  mensaje:      string;
  transferencia: TransferenciaPublic;
}

export class CrearTransferenciaUseCase {
  constructor(
    private transferenciaRepository: ITransferenciaRepository
  ) {}

  async execute(input: CrearTransferenciaInput): Promise<CrearTransferenciaOutput> {

    if (input.cuenta_origen_id === input.cuenta_destino_id) {
      throw new BusinessRuleError('La cuenta origen y destino no pueden ser la misma');
    }

    if (input.monto <= 0) {
      throw new BusinessRuleError('El monto debe ser mayor a cero');
    }

    const dto: CreateTransferenciaDTO = {
      cuenta_origen_id:  input.cuenta_origen_id,
      cuenta_destino_id: input.cuenta_destino_id,
      monto:             input.monto,
      descripcion:       input.descripcion,
    };

    // La lógica atómica (débito + crédito + saldos) vive en el repository
    const transferencia = await this.transferenciaRepository.create(dto);

    return {
      mensaje:      'Transferencia realizada exitosamente',
      transferencia,
    };
  }
}