export interface Token {
  token_id?: number;
  usuario_id: number;
  token: string;
  expira_en: Date;
  revocado?: boolean;
  fecha_creacion?: Date;
}


export interface TokenPair {
  accessToken: string;
  refreshToken: string;
}