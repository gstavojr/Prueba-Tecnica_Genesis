
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime
} = require('./runtime/library.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.22.0
 * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
 */
Prisma.prismaVersion = {
  client: "5.22.0",
  engine: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}




  const path = require('path')

/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.TransferenciaScalarFieldEnum = {
  transferencia_id: 'transferencia_id',
  cuenta_origen_id: 'cuenta_origen_id',
  cuenta_destino_id: 'cuenta_destino_id',
  monto: 'monto',
  descripcion: 'descripcion',
  estado_transferencia_id: 'estado_transferencia_id',
  fecha_creacion: 'fecha_creacion',
  fecha_modificacion: 'fecha_modificacion'
};

exports.Prisma.CuentaScalarFieldEnum = {
  cuenta_id: 'cuenta_id',
  numero_cuenta: 'numero_cuenta',
  usuario_id: 'usuario_id',
  tipo_cuenta_id: 'tipo_cuenta_id',
  saldo: 'saldo',
  fecha_creacion: 'fecha_creacion',
  fecha_modificacion: 'fecha_modificacion'
};

exports.Prisma.Estado_transferenciaScalarFieldEnum = {
  estado_transferencia_id: 'estado_transferencia_id',
  nombre: 'nombre',
  descripcion: 'descripcion',
  fecha_creacion: 'fecha_creacion',
  fecha_modificacion: 'fecha_modificacion'
};

exports.Prisma.MovimientoScalarFieldEnum = {
  movimiento_id: 'movimiento_id',
  cuenta_id: 'cuenta_id',
  tipo_movimiento_id: 'tipo_movimiento_id',
  monto: 'monto',
  transferencia_id: 'transferencia_id',
  saldo_anterior: 'saldo_anterior',
  saldo_nuevo: 'saldo_nuevo',
  descripcion: 'descripcion',
  fecha_creacion: 'fecha_creacion',
  fecha_modificacion: 'fecha_modificacion'
};

exports.Prisma.Tipo_cuentaScalarFieldEnum = {
  tipo_cuenta_id: 'tipo_cuenta_id',
  nombre: 'nombre',
  descripcion: 'descripcion',
  fecha_creacion: 'fecha_creacion',
  fecha_modificacion: 'fecha_modificacion'
};

exports.Prisma.Tipo_movimientoScalarFieldEnum = {
  tipo_movimiento_id: 'tipo_movimiento_id',
  nombre: 'nombre',
  descripcion: 'descripcion',
  fecha_creacion: 'fecha_creacion',
  fecha_modificacion: 'fecha_modificacion'
};

exports.Prisma.UsuarioScalarFieldEnum = {
  usuario_id: 'usuario_id',
  nombre: 'nombre',
  email: 'email',
  contrasena: 'contrasena',
  fecha_creacion: 'fecha_creacion',
  fecha_modificacion: 'fecha_modificacion'
};

exports.Prisma.TokenScalarFieldEnum = {
  token_id: 'token_id',
  usuario_id: 'usuario_id',
  token: 'token',
  expira_en: 'expira_en',
  revocado: 'revocado',
  fecha_creacion: 'fecha_creacion'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  Transferencia: 'Transferencia',
  cuenta: 'cuenta',
  estado_transferencia: 'estado_transferencia',
  movimiento: 'movimiento',
  tipo_cuenta: 'tipo_cuenta',
  tipo_movimiento: 'tipo_movimiento',
  usuario: 'usuario',
  token: 'token'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\Gustavo\\Downloads\\PruebaTecnica\\Prueba-Tecnica_Genesis\\backend\\src\\generated\\prisma",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "sourceFilePath": "C:\\Users\\Gustavo\\Downloads\\PruebaTecnica\\Prueba-Tecnica_Genesis\\backend\\prisma\\schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../../../prisma",
  "clientVersion": "5.22.0",
  "engineVersion": "605197351a3c8bdd595af2d2a9bc3025bca48ea2",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mysql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "generator client {\n  provider = \"prisma-client-js\"\n  output   = \"../src/generated/prisma\"\n}\n\ndatasource db {\n  provider = \"mysql\"\n  url      = env(\"DATABASE_URL\")\n}\n\nmodel Transferencia {\n  transferencia_id                               Int                  @id @default(autoincrement())\n  cuenta_origen_id                               Int\n  cuenta_destino_id                              Int\n  monto                                          Decimal              @db.Decimal(15, 2)\n  descripcion                                    String?              @db.VarChar(255)\n  estado_transferencia_id                        Int\n  fecha_creacion                                 DateTime?            @default(now()) @db.Timestamp(0)\n  fecha_modificacion                             DateTime?            @default(now()) @db.Timestamp(0)\n  cuenta_Transferencia_cuenta_origen_idTocuenta  cuenta               @relation(\"Transferencia_cuenta_origen_idTocuenta\", fields: [cuenta_origen_id], references: [cuenta_id], onDelete: NoAction, onUpdate: NoAction, map: \"Transferencia_ibfk_1\")\n  cuenta_Transferencia_cuenta_destino_idTocuenta cuenta               @relation(\"Transferencia_cuenta_destino_idTocuenta\", fields: [cuenta_destino_id], references: [cuenta_id], onDelete: NoAction, onUpdate: NoAction, map: \"Transferencia_ibfk_2\")\n  estado_transferencia                           estado_transferencia @relation(fields: [estado_transferencia_id], references: [estado_transferencia_id], onDelete: NoAction, onUpdate: NoAction, map: \"Transferencia_ibfk_3\")\n  movimiento                                     movimiento[]\n\n  @@index([cuenta_destino_id], map: \"cuenta_destino_id\")\n  @@index([cuenta_origen_id], map: \"cuenta_origen_id\")\n  @@index([estado_transferencia_id], map: \"estado_transferencia_id\")\n}\n\nmodel cuenta {\n  cuenta_id                                             Int             @id @default(autoincrement())\n  numero_cuenta                                         String          @unique(map: \"numero_cuenta\") @db.VarChar(100)\n  usuario_id                                            Int\n  tipo_cuenta_id                                        Int\n  saldo                                                 Decimal         @default(0.00) @db.Decimal(15, 2)\n  fecha_creacion                                        DateTime?       @default(now()) @db.Timestamp(0)\n  fecha_modificacion                                    DateTime?       @default(now()) @db.Timestamp(0)\n  Transferencia_Transferencia_cuenta_origen_idTocuenta  Transferencia[] @relation(\"Transferencia_cuenta_origen_idTocuenta\")\n  Transferencia_Transferencia_cuenta_destino_idTocuenta Transferencia[] @relation(\"Transferencia_cuenta_destino_idTocuenta\")\n  usuario                                               usuario         @relation(fields: [usuario_id], references: [usuario_id], onDelete: NoAction, onUpdate: NoAction, map: \"cuenta_ibfk_1\")\n  tipo_cuenta                                           tipo_cuenta     @relation(fields: [tipo_cuenta_id], references: [tipo_cuenta_id], onDelete: NoAction, onUpdate: NoAction, map: \"cuenta_ibfk_2\")\n  movimiento                                            movimiento[]\n\n  @@index([tipo_cuenta_id], map: \"tipo_cuenta_id\")\n  @@index([usuario_id], map: \"usuario_id\")\n}\n\nmodel estado_transferencia {\n  estado_transferencia_id Int             @id @default(autoincrement())\n  nombre                  String          @unique(map: \"nombre\") @db.VarChar(255)\n  descripcion             String          @db.VarChar(255)\n  fecha_creacion          DateTime?       @default(now()) @db.Timestamp(0)\n  fecha_modificacion      DateTime?       @default(now()) @db.Timestamp(0)\n  Transferencia           Transferencia[]\n}\n\nmodel movimiento {\n  movimiento_id      Int             @id @default(autoincrement())\n  cuenta_id          Int\n  tipo_movimiento_id Int\n  monto              Decimal         @db.Decimal(15, 2)\n  transferencia_id   Int?\n  saldo_anterior     Decimal         @db.Decimal(15, 2)\n  saldo_nuevo        Decimal         @db.Decimal(15, 2)\n  descripcion        String?         @db.VarChar(255)\n  fecha_creacion     DateTime?       @default(now()) @db.Timestamp(0)\n  fecha_modificacion DateTime?       @default(now()) @db.Timestamp(0)\n  cuenta             cuenta          @relation(fields: [cuenta_id], references: [cuenta_id], onDelete: NoAction, onUpdate: NoAction, map: \"movimiento_ibfk_1\")\n  tipo_movimiento    tipo_movimiento @relation(fields: [tipo_movimiento_id], references: [tipo_movimiento_id], onDelete: NoAction, onUpdate: NoAction, map: \"movimiento_ibfk_2\")\n  Transferencia      Transferencia?  @relation(fields: [transferencia_id], references: [transferencia_id], onDelete: NoAction, onUpdate: NoAction, map: \"movimiento_ibfk_3\")\n\n  @@index([cuenta_id], map: \"cuenta_id\")\n  @@index([tipo_movimiento_id], map: \"tipo_movimiento_id\")\n  @@index([transferencia_id], map: \"transferencia_id\")\n}\n\nmodel tipo_cuenta {\n  tipo_cuenta_id     Int       @id @default(autoincrement())\n  nombre             String    @unique(map: \"nombre\") @db.VarChar(255)\n  descripcion        String    @db.VarChar(255)\n  fecha_creacion     DateTime? @default(now()) @db.Timestamp(0)\n  fecha_modificacion DateTime? @default(now()) @db.Timestamp(0)\n  cuenta             cuenta[]\n}\n\nmodel tipo_movimiento {\n  tipo_movimiento_id Int          @id @default(autoincrement())\n  nombre             String       @unique(map: \"nombre\") @db.VarChar(255)\n  descripcion        String       @db.VarChar(255)\n  fecha_creacion     DateTime?    @default(now()) @db.Timestamp(0)\n  fecha_modificacion DateTime?    @default(now()) @db.Timestamp(0)\n  movimiento         movimiento[]\n}\n\nmodel usuario {\n  usuario_id         Int       @id @default(autoincrement())\n  nombre             String    @db.VarChar(255)\n  email              String    @unique(map: \"email\") @db.VarChar(255)\n  contrasena         String    @db.Text\n  fecha_creacion     DateTime? @default(now()) @db.Timestamp(0)\n  fecha_modificacion DateTime? @default(now()) @db.Timestamp(0)\n  cuenta             cuenta[]\n  token              token[]\n}\n\nmodel token {\n  token_id       Int      @id @default(autoincrement())\n  usuario_id     Int\n  token          String   @unique(map: \"uq_refresh_token\") @db.VarChar(512)\n  expira_en      DateTime @db.DateTime(0)\n  revocado       Boolean  @default(false)\n  fecha_creacion DateTime @default(now()) @db.DateTime(0)\n  usuario        usuario  @relation(fields: [usuario_id], references: [usuario_id], onDelete: Cascade, onUpdate: NoAction, map: \"fk_refresh_token_usuario\")\n\n  @@index([usuario_id], map: \"fk_refresh_token_usuario\")\n}\n",
  "inlineSchemaHash": "a1cddd6162f42d55c9bd8a31dcf077b571839f418df48635a7f7d3afc7ce1d70",
  "copyEngine": true
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "src/generated/prisma",
    "generated/prisma",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"Transferencia\":{\"dbName\":null,\"fields\":[{\"name\":\"transferencia_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cuenta_origen_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cuenta_destino_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"monto\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"descripcion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"estado_transferencia_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fecha_creacion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fecha_modificacion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cuenta_Transferencia_cuenta_origen_idTocuenta\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"cuenta\",\"relationName\":\"Transferencia_cuenta_origen_idTocuenta\",\"relationFromFields\":[\"cuenta_origen_id\"],\"relationToFields\":[\"cuenta_id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cuenta_Transferencia_cuenta_destino_idTocuenta\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"cuenta\",\"relationName\":\"Transferencia_cuenta_destino_idTocuenta\",\"relationFromFields\":[\"cuenta_destino_id\"],\"relationToFields\":[\"cuenta_id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"estado_transferencia\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"estado_transferencia\",\"relationName\":\"TransferenciaToestado_transferencia\",\"relationFromFields\":[\"estado_transferencia_id\"],\"relationToFields\":[\"estado_transferencia_id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"movimiento\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"movimiento\",\"relationName\":\"TransferenciaTomovimiento\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"cuenta\":{\"dbName\":null,\"fields\":[{\"name\":\"cuenta_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"numero_cuenta\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuario_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tipo_cuenta_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"saldo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Decimal\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fecha_creacion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fecha_modificacion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Transferencia_Transferencia_cuenta_origen_idTocuenta\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Transferencia\",\"relationName\":\"Transferencia_cuenta_origen_idTocuenta\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Transferencia_Transferencia_cuenta_destino_idTocuenta\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Transferencia\",\"relationName\":\"Transferencia_cuenta_destino_idTocuenta\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuario\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"usuario\",\"relationName\":\"cuentaTousuario\",\"relationFromFields\":[\"usuario_id\"],\"relationToFields\":[\"usuario_id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tipo_cuenta\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"tipo_cuenta\",\"relationName\":\"cuentaTotipo_cuenta\",\"relationFromFields\":[\"tipo_cuenta_id\"],\"relationToFields\":[\"tipo_cuenta_id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"movimiento\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"movimiento\",\"relationName\":\"cuentaTomovimiento\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"estado_transferencia\":{\"dbName\":null,\"fields\":[{\"name\":\"estado_transferencia_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nombre\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"descripcion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fecha_creacion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fecha_modificacion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Transferencia\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Transferencia\",\"relationName\":\"TransferenciaToestado_transferencia\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"movimiento\":{\"dbName\":null,\"fields\":[{\"name\":\"movimiento_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cuenta_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tipo_movimiento_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"monto\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"transferencia_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"saldo_anterior\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"saldo_nuevo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"descripcion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fecha_creacion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fecha_modificacion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cuenta\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"cuenta\",\"relationName\":\"cuentaTomovimiento\",\"relationFromFields\":[\"cuenta_id\"],\"relationToFields\":[\"cuenta_id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tipo_movimiento\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"tipo_movimiento\",\"relationName\":\"movimientoTotipo_movimiento\",\"relationFromFields\":[\"tipo_movimiento_id\"],\"relationToFields\":[\"tipo_movimiento_id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Transferencia\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Transferencia\",\"relationName\":\"TransferenciaTomovimiento\",\"relationFromFields\":[\"transferencia_id\"],\"relationToFields\":[\"transferencia_id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"tipo_cuenta\":{\"dbName\":null,\"fields\":[{\"name\":\"tipo_cuenta_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nombre\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"descripcion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fecha_creacion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fecha_modificacion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cuenta\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"cuenta\",\"relationName\":\"cuentaTotipo_cuenta\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"tipo_movimiento\":{\"dbName\":null,\"fields\":[{\"name\":\"tipo_movimiento_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nombre\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"descripcion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fecha_creacion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fecha_modificacion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"movimiento\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"movimiento\",\"relationName\":\"movimientoTotipo_movimiento\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"usuario\":{\"dbName\":null,\"fields\":[{\"name\":\"usuario_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nombre\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contrasena\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fecha_creacion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fecha_modificacion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cuenta\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"cuenta\",\"relationName\":\"cuentaTousuario\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"token\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"token\",\"relationName\":\"tokenTousuario\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"token\":{\"dbName\":null,\"fields\":[{\"name\":\"token_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuario_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"token\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"expira_en\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"revocado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fecha_creacion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuario\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"usuario\",\"relationName\":\"tokenTousuario\",\"relationFromFields\":[\"usuario_id\"],\"relationToFields\":[\"usuario_id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined


const { warnEnvConflicts } = require('./runtime/library.js')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "query_engine-windows.dll.node");
path.join(process.cwd(), "src/generated/prisma/query_engine-windows.dll.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "src/generated/prisma/schema.prisma")
