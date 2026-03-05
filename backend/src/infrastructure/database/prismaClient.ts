import { PrismaClient } from "../../generated/prisma";

export const prisma = new PrismaClient();

export const testConnection = async(): Promise<void> => {
  try {
    await prisma.$connect();
    console.log("Conexión a la base de datos establecida correctamente.");
  } catch (error) {
    console.error("Error al conectar a la base de datos:", error);
    process.exit(1); // Salir del proceso con un código de error
  }
}