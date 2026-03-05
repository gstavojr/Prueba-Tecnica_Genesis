CREATE DATABASE IF NOT EXISTS banca_prueba;

USE banca_prueba;

CREATE TABLE usuario (
  usuario_id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  contrasena TEXT NOT NULL,
  fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  fecha_modificacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE tipo_cuenta(
  tipo_cuenta_id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL UNIQUE,
  descripcion varchar(255) NOT NULL,
  fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  fecha_modificacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


CREATE TABLE tipo_movimiento(
  tipo_movimiento_id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL UNIQUE,
  descripcion varchar(255) NOT NULL,
  fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  fecha_modificacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE estado_transferencia(
  estado_transferencia_id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL UNIQUE,
  descripcion varchar(255) NOT NULL,
  fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  fecha_modificacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE cuenta (
  cuenta_id INT AUTO_INCREMENT PRIMARY KEY,
  numero_cuenta VARCHAR(100) NOT NULL UNIQUE,
  usuario_id INT NOT NULL,
  tipo_cuenta_id INT NOT NULL,
  saldo DECIMAL(15, 2) NOT NULL DEFAULT 0.00,
  fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  fecha_modificacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (usuario_id) REFERENCES usuario(usuario_id),
  FOREIGN KEY (tipo_cuenta_id) REFERENCES tipo_cuenta(tipo_cuenta_id)
);


CREATE TABLE Transferencia (
  transferencia_id INT AUTO_INCREMENT PRIMARY KEY,
  cuenta_origen_id INT NOT NULL,
  cuenta_destino_id INT NOT NULL,
  monto DECIMAL(15, 2) NOT NULL,
  descripcion VARCHAR(255),
  estado_transferencia_id INT NOT NULL,
  fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  fecha_modificacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (cuenta_origen_id) REFERENCES cuenta(cuenta_id),
  FOREIGN KEY (cuenta_destino_id) REFERENCES cuenta(cuenta_id),
  FOREIGN KEY (estado_transferencia_id) REFERENCES estado_transferencia(estado_transferencia_id)
)

CREATE TABLE movimiento (
  movimiento_id INT AUTO_INCREMENT PRIMARY KEY,
  cuenta_id INT NOT NULL,
  tipo_movimiento_id INT NOT NULL,
  monto DECIMAL(15, 2) NOT NULL,
  transferencia_id INT,
  saldo_anterior DECIMAL(15, 2) NOT NULL,
  saldo_nuevo DECIMAL(15, 2) NOT NULL,
  descripcion VARCHAR(255),
  fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  fecha_modificacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (cuenta_id) REFERENCES cuenta(cuenta_id),
  FOREIGN KEY (tipo_movimiento_id) REFERENCES tipo_movimiento(tipo_movimiento_id),
  FOREIGN KEY (transferencia_id) REFERENCES Transferencia(transferencia_id)
);


INSERT INTO tipo_cuenta (nombre, descripcion)
VALUES
('Ahorro', 'Cuenta de ahorro tradicional'),
('Monetaria', 'Cuenta para transacciones frecuentes');


INSERT INTO tipo_movimiento (nombre, descripcion)
VALUES
('Débito', 'Salida de dinero'),
('Crédito', 'Ingreso de dinero');

INSERT INTO estado_transferencia (nombre, descripcion)
VALUES
('Pendiente', 'Transferencia en proceso'),
('Completada', 'Transferencia realizada correctamente');


