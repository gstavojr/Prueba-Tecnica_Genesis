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



CREATE TABLE token (
token_id          INT             NOT NULL AUTO_INCREMENT,
  usuario_id        INT             NOT NULL,
  token             VARCHAR(512)    NOT NULL,
  expira_en         DATETIME        NOT NULL,
  revocado          TINYINT(1)      NOT NULL DEFAULT 0,
  fecha_creacion    DATETIME        NOT NULL DEFAULT CURRENT_TIMESTAMP,

  CONSTRAINT pk_refresh_token PRIMARY KEY (token_id),
  CONSTRAINT uq_refresh_token UNIQUE (token),
  CONSTRAINT fk_refresh_token_usuario FOREIGN KEY (usuario_id)
    REFERENCES usuario (usuario_id)
    ON DELETE CASCADE
)

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


INSERT INTO cuenta (numero_cuenta, usuario_id, tipo_cuenta_id, saldo)
VALUES
  ('LEND-0002-AHO-001', 2, 1, 1000.00),
  ('LEND-0003-AHO-001', 3, 1, 2500.00);


SELECT c.cuenta_id, u.nombre, c.numero_cuenta, tc.nombre AS tipo, c.saldo
FROM cuenta c
JOIN usuario u ON u.usuario_id = c.usuario_id
JOIN tipo_cuenta tc ON tc.tipo_cuenta_id = c.tipo_cuenta_id;