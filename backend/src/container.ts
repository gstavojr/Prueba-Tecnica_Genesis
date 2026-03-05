import { LoginUseCase } from "@application/auth/LoginUseCase";
import { RegisterUseCase } from "@application/auth/RegisterUseCase";
import { CrearTransferenciaUseCase } from "@application/CrearTransferenciaUseCase";
import { ObtenerEstadoCuentasPorUsuarioUseCase, ObtenerEstadoCuentaUseCase } from "@application/ObtenerEstadoCuentasUseCase ";
import { ObtenerMovimientosUseCase } from "@application/ObtenerMovimientosUseCase";
import { JwtService } from "@infrastructure/auth/JwtService";
import { EstadoCuentaRepository } from "@infrastructure/database/repositories/EstadoCuentaRepository";
import { MovimientoRepository } from "@infrastructure/database/repositories/MovimientoResponsitory";
import { TokenRespository } from "@infrastructure/database/repositories/TokenRespository";
import { TransferenciaRepository } from "@infrastructure/database/repositories/TransferenciaRepository";
import { UserRespository } from "@infrastructure/database/repositories/UserRepository";
import { AuthController } from "@interfaces/http/controllers/auth.controller";
import { BancaController } from "@interfaces/http/controllers/banca.controller";

const userResponsitory = new UserRespository();
const tokenRepository = new TokenRespository ();
const jwtService = new JwtService();

const registerUseCase = new RegisterUseCase(userResponsitory, tokenRepository, jwtService);
const loginUserCase = new LoginUseCase(userResponsitory, tokenRepository, jwtService);

const authController = new AuthController(registerUseCase, loginUserCase);


// Banca

const movimientoRepository = new MovimientoRepository();
const transferenciaRepository = new TransferenciaRepository();
const estadoCuentaRepository = new EstadoCuentaRepository();


const obtenerMovimientosUseCase             = new ObtenerMovimientosUseCase(movimientoRepository);
const crearTransferenciaUseCase             = new CrearTransferenciaUseCase(transferenciaRepository);
const obtenerEstadoCuentaUseCase            = new ObtenerEstadoCuentaUseCase(estadoCuentaRepository);
const obtenerEstadoCuentasPorUsuarioUseCase = new ObtenerEstadoCuentasPorUsuarioUseCase(estadoCuentaRepository);

const bancaController = new BancaController(
  obtenerMovimientosUseCase,
  crearTransferenciaUseCase,
  obtenerEstadoCuentaUseCase,
  obtenerEstadoCuentasPorUsuarioUseCase,
);



export const container = {
  authController,
  bancaController
}



