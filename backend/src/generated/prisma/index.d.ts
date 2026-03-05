
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Transferencia
 * 
 */
export type Transferencia = $Result.DefaultSelection<Prisma.$TransferenciaPayload>
/**
 * Model cuenta
 * 
 */
export type cuenta = $Result.DefaultSelection<Prisma.$cuentaPayload>
/**
 * Model estado_transferencia
 * 
 */
export type estado_transferencia = $Result.DefaultSelection<Prisma.$estado_transferenciaPayload>
/**
 * Model movimiento
 * 
 */
export type movimiento = $Result.DefaultSelection<Prisma.$movimientoPayload>
/**
 * Model tipo_cuenta
 * 
 */
export type tipo_cuenta = $Result.DefaultSelection<Prisma.$tipo_cuentaPayload>
/**
 * Model tipo_movimiento
 * 
 */
export type tipo_movimiento = $Result.DefaultSelection<Prisma.$tipo_movimientoPayload>
/**
 * Model usuario
 * 
 */
export type usuario = $Result.DefaultSelection<Prisma.$usuarioPayload>
/**
 * Model token
 * 
 */
export type token = $Result.DefaultSelection<Prisma.$tokenPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Transferencias
 * const transferencias = await prisma.transferencia.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Transferencias
   * const transferencias = await prisma.transferencia.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.transferencia`: Exposes CRUD operations for the **Transferencia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transferencias
    * const transferencias = await prisma.transferencia.findMany()
    * ```
    */
  get transferencia(): Prisma.TransferenciaDelegate<ExtArgs>;

  /**
   * `prisma.cuenta`: Exposes CRUD operations for the **cuenta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cuentas
    * const cuentas = await prisma.cuenta.findMany()
    * ```
    */
  get cuenta(): Prisma.cuentaDelegate<ExtArgs>;

  /**
   * `prisma.estado_transferencia`: Exposes CRUD operations for the **estado_transferencia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Estado_transferencias
    * const estado_transferencias = await prisma.estado_transferencia.findMany()
    * ```
    */
  get estado_transferencia(): Prisma.estado_transferenciaDelegate<ExtArgs>;

  /**
   * `prisma.movimiento`: Exposes CRUD operations for the **movimiento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Movimientos
    * const movimientos = await prisma.movimiento.findMany()
    * ```
    */
  get movimiento(): Prisma.movimientoDelegate<ExtArgs>;

  /**
   * `prisma.tipo_cuenta`: Exposes CRUD operations for the **tipo_cuenta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tipo_cuentas
    * const tipo_cuentas = await prisma.tipo_cuenta.findMany()
    * ```
    */
  get tipo_cuenta(): Prisma.tipo_cuentaDelegate<ExtArgs>;

  /**
   * `prisma.tipo_movimiento`: Exposes CRUD operations for the **tipo_movimiento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tipo_movimientos
    * const tipo_movimientos = await prisma.tipo_movimiento.findMany()
    * ```
    */
  get tipo_movimiento(): Prisma.tipo_movimientoDelegate<ExtArgs>;

  /**
   * `prisma.usuario`: Exposes CRUD operations for the **usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.usuarioDelegate<ExtArgs>;

  /**
   * `prisma.token`: Exposes CRUD operations for the **token** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tokens
    * const tokens = await prisma.token.findMany()
    * ```
    */
  get token(): Prisma.tokenDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Transferencia: 'Transferencia',
    cuenta: 'cuenta',
    estado_transferencia: 'estado_transferencia',
    movimiento: 'movimiento',
    tipo_cuenta: 'tipo_cuenta',
    tipo_movimiento: 'tipo_movimiento',
    usuario: 'usuario',
    token: 'token'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "transferencia" | "cuenta" | "estado_transferencia" | "movimiento" | "tipo_cuenta" | "tipo_movimiento" | "usuario" | "token"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Transferencia: {
        payload: Prisma.$TransferenciaPayload<ExtArgs>
        fields: Prisma.TransferenciaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransferenciaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransferenciaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransferenciaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransferenciaPayload>
          }
          findFirst: {
            args: Prisma.TransferenciaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransferenciaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransferenciaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransferenciaPayload>
          }
          findMany: {
            args: Prisma.TransferenciaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransferenciaPayload>[]
          }
          create: {
            args: Prisma.TransferenciaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransferenciaPayload>
          }
          createMany: {
            args: Prisma.TransferenciaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TransferenciaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransferenciaPayload>
          }
          update: {
            args: Prisma.TransferenciaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransferenciaPayload>
          }
          deleteMany: {
            args: Prisma.TransferenciaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransferenciaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TransferenciaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransferenciaPayload>
          }
          aggregate: {
            args: Prisma.TransferenciaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransferencia>
          }
          groupBy: {
            args: Prisma.TransferenciaGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransferenciaGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransferenciaCountArgs<ExtArgs>
            result: $Utils.Optional<TransferenciaCountAggregateOutputType> | number
          }
        }
      }
      cuenta: {
        payload: Prisma.$cuentaPayload<ExtArgs>
        fields: Prisma.cuentaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cuentaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cuentaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cuentaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cuentaPayload>
          }
          findFirst: {
            args: Prisma.cuentaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cuentaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cuentaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cuentaPayload>
          }
          findMany: {
            args: Prisma.cuentaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cuentaPayload>[]
          }
          create: {
            args: Prisma.cuentaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cuentaPayload>
          }
          createMany: {
            args: Prisma.cuentaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.cuentaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cuentaPayload>
          }
          update: {
            args: Prisma.cuentaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cuentaPayload>
          }
          deleteMany: {
            args: Prisma.cuentaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cuentaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.cuentaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cuentaPayload>
          }
          aggregate: {
            args: Prisma.CuentaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCuenta>
          }
          groupBy: {
            args: Prisma.cuentaGroupByArgs<ExtArgs>
            result: $Utils.Optional<CuentaGroupByOutputType>[]
          }
          count: {
            args: Prisma.cuentaCountArgs<ExtArgs>
            result: $Utils.Optional<CuentaCountAggregateOutputType> | number
          }
        }
      }
      estado_transferencia: {
        payload: Prisma.$estado_transferenciaPayload<ExtArgs>
        fields: Prisma.estado_transferenciaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.estado_transferenciaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estado_transferenciaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.estado_transferenciaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estado_transferenciaPayload>
          }
          findFirst: {
            args: Prisma.estado_transferenciaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estado_transferenciaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.estado_transferenciaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estado_transferenciaPayload>
          }
          findMany: {
            args: Prisma.estado_transferenciaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estado_transferenciaPayload>[]
          }
          create: {
            args: Prisma.estado_transferenciaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estado_transferenciaPayload>
          }
          createMany: {
            args: Prisma.estado_transferenciaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.estado_transferenciaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estado_transferenciaPayload>
          }
          update: {
            args: Prisma.estado_transferenciaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estado_transferenciaPayload>
          }
          deleteMany: {
            args: Prisma.estado_transferenciaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.estado_transferenciaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.estado_transferenciaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estado_transferenciaPayload>
          }
          aggregate: {
            args: Prisma.Estado_transferenciaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEstado_transferencia>
          }
          groupBy: {
            args: Prisma.estado_transferenciaGroupByArgs<ExtArgs>
            result: $Utils.Optional<Estado_transferenciaGroupByOutputType>[]
          }
          count: {
            args: Prisma.estado_transferenciaCountArgs<ExtArgs>
            result: $Utils.Optional<Estado_transferenciaCountAggregateOutputType> | number
          }
        }
      }
      movimiento: {
        payload: Prisma.$movimientoPayload<ExtArgs>
        fields: Prisma.movimientoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.movimientoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$movimientoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.movimientoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$movimientoPayload>
          }
          findFirst: {
            args: Prisma.movimientoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$movimientoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.movimientoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$movimientoPayload>
          }
          findMany: {
            args: Prisma.movimientoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$movimientoPayload>[]
          }
          create: {
            args: Prisma.movimientoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$movimientoPayload>
          }
          createMany: {
            args: Prisma.movimientoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.movimientoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$movimientoPayload>
          }
          update: {
            args: Prisma.movimientoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$movimientoPayload>
          }
          deleteMany: {
            args: Prisma.movimientoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.movimientoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.movimientoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$movimientoPayload>
          }
          aggregate: {
            args: Prisma.MovimientoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMovimiento>
          }
          groupBy: {
            args: Prisma.movimientoGroupByArgs<ExtArgs>
            result: $Utils.Optional<MovimientoGroupByOutputType>[]
          }
          count: {
            args: Prisma.movimientoCountArgs<ExtArgs>
            result: $Utils.Optional<MovimientoCountAggregateOutputType> | number
          }
        }
      }
      tipo_cuenta: {
        payload: Prisma.$tipo_cuentaPayload<ExtArgs>
        fields: Prisma.tipo_cuentaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tipo_cuentaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_cuentaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tipo_cuentaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_cuentaPayload>
          }
          findFirst: {
            args: Prisma.tipo_cuentaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_cuentaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tipo_cuentaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_cuentaPayload>
          }
          findMany: {
            args: Prisma.tipo_cuentaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_cuentaPayload>[]
          }
          create: {
            args: Prisma.tipo_cuentaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_cuentaPayload>
          }
          createMany: {
            args: Prisma.tipo_cuentaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tipo_cuentaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_cuentaPayload>
          }
          update: {
            args: Prisma.tipo_cuentaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_cuentaPayload>
          }
          deleteMany: {
            args: Prisma.tipo_cuentaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tipo_cuentaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tipo_cuentaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_cuentaPayload>
          }
          aggregate: {
            args: Prisma.Tipo_cuentaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTipo_cuenta>
          }
          groupBy: {
            args: Prisma.tipo_cuentaGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tipo_cuentaGroupByOutputType>[]
          }
          count: {
            args: Prisma.tipo_cuentaCountArgs<ExtArgs>
            result: $Utils.Optional<Tipo_cuentaCountAggregateOutputType> | number
          }
        }
      }
      tipo_movimiento: {
        payload: Prisma.$tipo_movimientoPayload<ExtArgs>
        fields: Prisma.tipo_movimientoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tipo_movimientoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_movimientoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tipo_movimientoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_movimientoPayload>
          }
          findFirst: {
            args: Prisma.tipo_movimientoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_movimientoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tipo_movimientoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_movimientoPayload>
          }
          findMany: {
            args: Prisma.tipo_movimientoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_movimientoPayload>[]
          }
          create: {
            args: Prisma.tipo_movimientoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_movimientoPayload>
          }
          createMany: {
            args: Prisma.tipo_movimientoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tipo_movimientoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_movimientoPayload>
          }
          update: {
            args: Prisma.tipo_movimientoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_movimientoPayload>
          }
          deleteMany: {
            args: Prisma.tipo_movimientoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tipo_movimientoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tipo_movimientoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_movimientoPayload>
          }
          aggregate: {
            args: Prisma.Tipo_movimientoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTipo_movimiento>
          }
          groupBy: {
            args: Prisma.tipo_movimientoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tipo_movimientoGroupByOutputType>[]
          }
          count: {
            args: Prisma.tipo_movimientoCountArgs<ExtArgs>
            result: $Utils.Optional<Tipo_movimientoCountAggregateOutputType> | number
          }
        }
      }
      usuario: {
        payload: Prisma.$usuarioPayload<ExtArgs>
        fields: Prisma.usuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          findFirst: {
            args: Prisma.usuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          findMany: {
            args: Prisma.usuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>[]
          }
          create: {
            args: Prisma.usuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          createMany: {
            args: Prisma.usuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.usuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          update: {
            args: Prisma.usuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          deleteMany: {
            args: Prisma.usuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.usuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.usuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      token: {
        payload: Prisma.$tokenPayload<ExtArgs>
        fields: Prisma.tokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tokenPayload>
          }
          findFirst: {
            args: Prisma.tokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tokenPayload>
          }
          findMany: {
            args: Prisma.tokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tokenPayload>[]
          }
          create: {
            args: Prisma.tokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tokenPayload>
          }
          createMany: {
            args: Prisma.tokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tokenPayload>
          }
          update: {
            args: Prisma.tokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tokenPayload>
          }
          deleteMany: {
            args: Prisma.tokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tokenPayload>
          }
          aggregate: {
            args: Prisma.TokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateToken>
          }
          groupBy: {
            args: Prisma.tokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<TokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.tokenCountArgs<ExtArgs>
            result: $Utils.Optional<TokenCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type TransferenciaCountOutputType
   */

  export type TransferenciaCountOutputType = {
    movimiento: number
  }

  export type TransferenciaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movimiento?: boolean | TransferenciaCountOutputTypeCountMovimientoArgs
  }

  // Custom InputTypes
  /**
   * TransferenciaCountOutputType without action
   */
  export type TransferenciaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransferenciaCountOutputType
     */
    select?: TransferenciaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TransferenciaCountOutputType without action
   */
  export type TransferenciaCountOutputTypeCountMovimientoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: movimientoWhereInput
  }


  /**
   * Count Type CuentaCountOutputType
   */

  export type CuentaCountOutputType = {
    Transferencia_Transferencia_cuenta_origen_idTocuenta: number
    Transferencia_Transferencia_cuenta_destino_idTocuenta: number
    movimiento: number
  }

  export type CuentaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Transferencia_Transferencia_cuenta_origen_idTocuenta?: boolean | CuentaCountOutputTypeCountTransferencia_Transferencia_cuenta_origen_idTocuentaArgs
    Transferencia_Transferencia_cuenta_destino_idTocuenta?: boolean | CuentaCountOutputTypeCountTransferencia_Transferencia_cuenta_destino_idTocuentaArgs
    movimiento?: boolean | CuentaCountOutputTypeCountMovimientoArgs
  }

  // Custom InputTypes
  /**
   * CuentaCountOutputType without action
   */
  export type CuentaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CuentaCountOutputType
     */
    select?: CuentaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CuentaCountOutputType without action
   */
  export type CuentaCountOutputTypeCountTransferencia_Transferencia_cuenta_origen_idTocuentaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransferenciaWhereInput
  }

  /**
   * CuentaCountOutputType without action
   */
  export type CuentaCountOutputTypeCountTransferencia_Transferencia_cuenta_destino_idTocuentaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransferenciaWhereInput
  }

  /**
   * CuentaCountOutputType without action
   */
  export type CuentaCountOutputTypeCountMovimientoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: movimientoWhereInput
  }


  /**
   * Count Type Estado_transferenciaCountOutputType
   */

  export type Estado_transferenciaCountOutputType = {
    Transferencia: number
  }

  export type Estado_transferenciaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Transferencia?: boolean | Estado_transferenciaCountOutputTypeCountTransferenciaArgs
  }

  // Custom InputTypes
  /**
   * Estado_transferenciaCountOutputType without action
   */
  export type Estado_transferenciaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estado_transferenciaCountOutputType
     */
    select?: Estado_transferenciaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Estado_transferenciaCountOutputType without action
   */
  export type Estado_transferenciaCountOutputTypeCountTransferenciaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransferenciaWhereInput
  }


  /**
   * Count Type Tipo_cuentaCountOutputType
   */

  export type Tipo_cuentaCountOutputType = {
    cuenta: number
  }

  export type Tipo_cuentaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cuenta?: boolean | Tipo_cuentaCountOutputTypeCountCuentaArgs
  }

  // Custom InputTypes
  /**
   * Tipo_cuentaCountOutputType without action
   */
  export type Tipo_cuentaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tipo_cuentaCountOutputType
     */
    select?: Tipo_cuentaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Tipo_cuentaCountOutputType without action
   */
  export type Tipo_cuentaCountOutputTypeCountCuentaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cuentaWhereInput
  }


  /**
   * Count Type Tipo_movimientoCountOutputType
   */

  export type Tipo_movimientoCountOutputType = {
    movimiento: number
  }

  export type Tipo_movimientoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movimiento?: boolean | Tipo_movimientoCountOutputTypeCountMovimientoArgs
  }

  // Custom InputTypes
  /**
   * Tipo_movimientoCountOutputType without action
   */
  export type Tipo_movimientoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tipo_movimientoCountOutputType
     */
    select?: Tipo_movimientoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Tipo_movimientoCountOutputType without action
   */
  export type Tipo_movimientoCountOutputTypeCountMovimientoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: movimientoWhereInput
  }


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    cuenta: number
    token: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cuenta?: boolean | UsuarioCountOutputTypeCountCuentaArgs
    token?: boolean | UsuarioCountOutputTypeCountTokenArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountCuentaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cuentaWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tokenWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Transferencia
   */

  export type AggregateTransferencia = {
    _count: TransferenciaCountAggregateOutputType | null
    _avg: TransferenciaAvgAggregateOutputType | null
    _sum: TransferenciaSumAggregateOutputType | null
    _min: TransferenciaMinAggregateOutputType | null
    _max: TransferenciaMaxAggregateOutputType | null
  }

  export type TransferenciaAvgAggregateOutputType = {
    transferencia_id: number | null
    cuenta_origen_id: number | null
    cuenta_destino_id: number | null
    monto: Decimal | null
    estado_transferencia_id: number | null
  }

  export type TransferenciaSumAggregateOutputType = {
    transferencia_id: number | null
    cuenta_origen_id: number | null
    cuenta_destino_id: number | null
    monto: Decimal | null
    estado_transferencia_id: number | null
  }

  export type TransferenciaMinAggregateOutputType = {
    transferencia_id: number | null
    cuenta_origen_id: number | null
    cuenta_destino_id: number | null
    monto: Decimal | null
    descripcion: string | null
    estado_transferencia_id: number | null
    fecha_creacion: Date | null
    fecha_modificacion: Date | null
  }

  export type TransferenciaMaxAggregateOutputType = {
    transferencia_id: number | null
    cuenta_origen_id: number | null
    cuenta_destino_id: number | null
    monto: Decimal | null
    descripcion: string | null
    estado_transferencia_id: number | null
    fecha_creacion: Date | null
    fecha_modificacion: Date | null
  }

  export type TransferenciaCountAggregateOutputType = {
    transferencia_id: number
    cuenta_origen_id: number
    cuenta_destino_id: number
    monto: number
    descripcion: number
    estado_transferencia_id: number
    fecha_creacion: number
    fecha_modificacion: number
    _all: number
  }


  export type TransferenciaAvgAggregateInputType = {
    transferencia_id?: true
    cuenta_origen_id?: true
    cuenta_destino_id?: true
    monto?: true
    estado_transferencia_id?: true
  }

  export type TransferenciaSumAggregateInputType = {
    transferencia_id?: true
    cuenta_origen_id?: true
    cuenta_destino_id?: true
    monto?: true
    estado_transferencia_id?: true
  }

  export type TransferenciaMinAggregateInputType = {
    transferencia_id?: true
    cuenta_origen_id?: true
    cuenta_destino_id?: true
    monto?: true
    descripcion?: true
    estado_transferencia_id?: true
    fecha_creacion?: true
    fecha_modificacion?: true
  }

  export type TransferenciaMaxAggregateInputType = {
    transferencia_id?: true
    cuenta_origen_id?: true
    cuenta_destino_id?: true
    monto?: true
    descripcion?: true
    estado_transferencia_id?: true
    fecha_creacion?: true
    fecha_modificacion?: true
  }

  export type TransferenciaCountAggregateInputType = {
    transferencia_id?: true
    cuenta_origen_id?: true
    cuenta_destino_id?: true
    monto?: true
    descripcion?: true
    estado_transferencia_id?: true
    fecha_creacion?: true
    fecha_modificacion?: true
    _all?: true
  }

  export type TransferenciaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transferencia to aggregate.
     */
    where?: TransferenciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transferencias to fetch.
     */
    orderBy?: TransferenciaOrderByWithRelationInput | TransferenciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransferenciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transferencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transferencias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transferencias
    **/
    _count?: true | TransferenciaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransferenciaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransferenciaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransferenciaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransferenciaMaxAggregateInputType
  }

  export type GetTransferenciaAggregateType<T extends TransferenciaAggregateArgs> = {
        [P in keyof T & keyof AggregateTransferencia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransferencia[P]>
      : GetScalarType<T[P], AggregateTransferencia[P]>
  }




  export type TransferenciaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransferenciaWhereInput
    orderBy?: TransferenciaOrderByWithAggregationInput | TransferenciaOrderByWithAggregationInput[]
    by: TransferenciaScalarFieldEnum[] | TransferenciaScalarFieldEnum
    having?: TransferenciaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransferenciaCountAggregateInputType | true
    _avg?: TransferenciaAvgAggregateInputType
    _sum?: TransferenciaSumAggregateInputType
    _min?: TransferenciaMinAggregateInputType
    _max?: TransferenciaMaxAggregateInputType
  }

  export type TransferenciaGroupByOutputType = {
    transferencia_id: number
    cuenta_origen_id: number
    cuenta_destino_id: number
    monto: Decimal
    descripcion: string | null
    estado_transferencia_id: number
    fecha_creacion: Date | null
    fecha_modificacion: Date | null
    _count: TransferenciaCountAggregateOutputType | null
    _avg: TransferenciaAvgAggregateOutputType | null
    _sum: TransferenciaSumAggregateOutputType | null
    _min: TransferenciaMinAggregateOutputType | null
    _max: TransferenciaMaxAggregateOutputType | null
  }

  type GetTransferenciaGroupByPayload<T extends TransferenciaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransferenciaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransferenciaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransferenciaGroupByOutputType[P]>
            : GetScalarType<T[P], TransferenciaGroupByOutputType[P]>
        }
      >
    >


  export type TransferenciaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    transferencia_id?: boolean
    cuenta_origen_id?: boolean
    cuenta_destino_id?: boolean
    monto?: boolean
    descripcion?: boolean
    estado_transferencia_id?: boolean
    fecha_creacion?: boolean
    fecha_modificacion?: boolean
    cuenta_Transferencia_cuenta_origen_idTocuenta?: boolean | cuentaDefaultArgs<ExtArgs>
    cuenta_Transferencia_cuenta_destino_idTocuenta?: boolean | cuentaDefaultArgs<ExtArgs>
    estado_transferencia?: boolean | estado_transferenciaDefaultArgs<ExtArgs>
    movimiento?: boolean | Transferencia$movimientoArgs<ExtArgs>
    _count?: boolean | TransferenciaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transferencia"]>


  export type TransferenciaSelectScalar = {
    transferencia_id?: boolean
    cuenta_origen_id?: boolean
    cuenta_destino_id?: boolean
    monto?: boolean
    descripcion?: boolean
    estado_transferencia_id?: boolean
    fecha_creacion?: boolean
    fecha_modificacion?: boolean
  }

  export type TransferenciaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cuenta_Transferencia_cuenta_origen_idTocuenta?: boolean | cuentaDefaultArgs<ExtArgs>
    cuenta_Transferencia_cuenta_destino_idTocuenta?: boolean | cuentaDefaultArgs<ExtArgs>
    estado_transferencia?: boolean | estado_transferenciaDefaultArgs<ExtArgs>
    movimiento?: boolean | Transferencia$movimientoArgs<ExtArgs>
    _count?: boolean | TransferenciaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TransferenciaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transferencia"
    objects: {
      cuenta_Transferencia_cuenta_origen_idTocuenta: Prisma.$cuentaPayload<ExtArgs>
      cuenta_Transferencia_cuenta_destino_idTocuenta: Prisma.$cuentaPayload<ExtArgs>
      estado_transferencia: Prisma.$estado_transferenciaPayload<ExtArgs>
      movimiento: Prisma.$movimientoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      transferencia_id: number
      cuenta_origen_id: number
      cuenta_destino_id: number
      monto: Prisma.Decimal
      descripcion: string | null
      estado_transferencia_id: number
      fecha_creacion: Date | null
      fecha_modificacion: Date | null
    }, ExtArgs["result"]["transferencia"]>
    composites: {}
  }

  type TransferenciaGetPayload<S extends boolean | null | undefined | TransferenciaDefaultArgs> = $Result.GetResult<Prisma.$TransferenciaPayload, S>

  type TransferenciaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TransferenciaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TransferenciaCountAggregateInputType | true
    }

  export interface TransferenciaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transferencia'], meta: { name: 'Transferencia' } }
    /**
     * Find zero or one Transferencia that matches the filter.
     * @param {TransferenciaFindUniqueArgs} args - Arguments to find a Transferencia
     * @example
     * // Get one Transferencia
     * const transferencia = await prisma.transferencia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransferenciaFindUniqueArgs>(args: SelectSubset<T, TransferenciaFindUniqueArgs<ExtArgs>>): Prisma__TransferenciaClient<$Result.GetResult<Prisma.$TransferenciaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Transferencia that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TransferenciaFindUniqueOrThrowArgs} args - Arguments to find a Transferencia
     * @example
     * // Get one Transferencia
     * const transferencia = await prisma.transferencia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransferenciaFindUniqueOrThrowArgs>(args: SelectSubset<T, TransferenciaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransferenciaClient<$Result.GetResult<Prisma.$TransferenciaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Transferencia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransferenciaFindFirstArgs} args - Arguments to find a Transferencia
     * @example
     * // Get one Transferencia
     * const transferencia = await prisma.transferencia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransferenciaFindFirstArgs>(args?: SelectSubset<T, TransferenciaFindFirstArgs<ExtArgs>>): Prisma__TransferenciaClient<$Result.GetResult<Prisma.$TransferenciaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Transferencia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransferenciaFindFirstOrThrowArgs} args - Arguments to find a Transferencia
     * @example
     * // Get one Transferencia
     * const transferencia = await prisma.transferencia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransferenciaFindFirstOrThrowArgs>(args?: SelectSubset<T, TransferenciaFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransferenciaClient<$Result.GetResult<Prisma.$TransferenciaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Transferencias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransferenciaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transferencias
     * const transferencias = await prisma.transferencia.findMany()
     * 
     * // Get first 10 Transferencias
     * const transferencias = await prisma.transferencia.findMany({ take: 10 })
     * 
     * // Only select the `transferencia_id`
     * const transferenciaWithTransferencia_idOnly = await prisma.transferencia.findMany({ select: { transferencia_id: true } })
     * 
     */
    findMany<T extends TransferenciaFindManyArgs>(args?: SelectSubset<T, TransferenciaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransferenciaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Transferencia.
     * @param {TransferenciaCreateArgs} args - Arguments to create a Transferencia.
     * @example
     * // Create one Transferencia
     * const Transferencia = await prisma.transferencia.create({
     *   data: {
     *     // ... data to create a Transferencia
     *   }
     * })
     * 
     */
    create<T extends TransferenciaCreateArgs>(args: SelectSubset<T, TransferenciaCreateArgs<ExtArgs>>): Prisma__TransferenciaClient<$Result.GetResult<Prisma.$TransferenciaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Transferencias.
     * @param {TransferenciaCreateManyArgs} args - Arguments to create many Transferencias.
     * @example
     * // Create many Transferencias
     * const transferencia = await prisma.transferencia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransferenciaCreateManyArgs>(args?: SelectSubset<T, TransferenciaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Transferencia.
     * @param {TransferenciaDeleteArgs} args - Arguments to delete one Transferencia.
     * @example
     * // Delete one Transferencia
     * const Transferencia = await prisma.transferencia.delete({
     *   where: {
     *     // ... filter to delete one Transferencia
     *   }
     * })
     * 
     */
    delete<T extends TransferenciaDeleteArgs>(args: SelectSubset<T, TransferenciaDeleteArgs<ExtArgs>>): Prisma__TransferenciaClient<$Result.GetResult<Prisma.$TransferenciaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Transferencia.
     * @param {TransferenciaUpdateArgs} args - Arguments to update one Transferencia.
     * @example
     * // Update one Transferencia
     * const transferencia = await prisma.transferencia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransferenciaUpdateArgs>(args: SelectSubset<T, TransferenciaUpdateArgs<ExtArgs>>): Prisma__TransferenciaClient<$Result.GetResult<Prisma.$TransferenciaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Transferencias.
     * @param {TransferenciaDeleteManyArgs} args - Arguments to filter Transferencias to delete.
     * @example
     * // Delete a few Transferencias
     * const { count } = await prisma.transferencia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransferenciaDeleteManyArgs>(args?: SelectSubset<T, TransferenciaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transferencias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransferenciaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transferencias
     * const transferencia = await prisma.transferencia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransferenciaUpdateManyArgs>(args: SelectSubset<T, TransferenciaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Transferencia.
     * @param {TransferenciaUpsertArgs} args - Arguments to update or create a Transferencia.
     * @example
     * // Update or create a Transferencia
     * const transferencia = await prisma.transferencia.upsert({
     *   create: {
     *     // ... data to create a Transferencia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transferencia we want to update
     *   }
     * })
     */
    upsert<T extends TransferenciaUpsertArgs>(args: SelectSubset<T, TransferenciaUpsertArgs<ExtArgs>>): Prisma__TransferenciaClient<$Result.GetResult<Prisma.$TransferenciaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Transferencias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransferenciaCountArgs} args - Arguments to filter Transferencias to count.
     * @example
     * // Count the number of Transferencias
     * const count = await prisma.transferencia.count({
     *   where: {
     *     // ... the filter for the Transferencias we want to count
     *   }
     * })
    **/
    count<T extends TransferenciaCountArgs>(
      args?: Subset<T, TransferenciaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransferenciaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transferencia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransferenciaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransferenciaAggregateArgs>(args: Subset<T, TransferenciaAggregateArgs>): Prisma.PrismaPromise<GetTransferenciaAggregateType<T>>

    /**
     * Group by Transferencia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransferenciaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TransferenciaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransferenciaGroupByArgs['orderBy'] }
        : { orderBy?: TransferenciaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TransferenciaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransferenciaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transferencia model
   */
  readonly fields: TransferenciaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transferencia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransferenciaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cuenta_Transferencia_cuenta_origen_idTocuenta<T extends cuentaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, cuentaDefaultArgs<ExtArgs>>): Prisma__cuentaClient<$Result.GetResult<Prisma.$cuentaPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    cuenta_Transferencia_cuenta_destino_idTocuenta<T extends cuentaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, cuentaDefaultArgs<ExtArgs>>): Prisma__cuentaClient<$Result.GetResult<Prisma.$cuentaPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    estado_transferencia<T extends estado_transferenciaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, estado_transferenciaDefaultArgs<ExtArgs>>): Prisma__estado_transferenciaClient<$Result.GetResult<Prisma.$estado_transferenciaPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    movimiento<T extends Transferencia$movimientoArgs<ExtArgs> = {}>(args?: Subset<T, Transferencia$movimientoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$movimientoPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Transferencia model
   */ 
  interface TransferenciaFieldRefs {
    readonly transferencia_id: FieldRef<"Transferencia", 'Int'>
    readonly cuenta_origen_id: FieldRef<"Transferencia", 'Int'>
    readonly cuenta_destino_id: FieldRef<"Transferencia", 'Int'>
    readonly monto: FieldRef<"Transferencia", 'Decimal'>
    readonly descripcion: FieldRef<"Transferencia", 'String'>
    readonly estado_transferencia_id: FieldRef<"Transferencia", 'Int'>
    readonly fecha_creacion: FieldRef<"Transferencia", 'DateTime'>
    readonly fecha_modificacion: FieldRef<"Transferencia", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Transferencia findUnique
   */
  export type TransferenciaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transferencia
     */
    select?: TransferenciaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransferenciaInclude<ExtArgs> | null
    /**
     * Filter, which Transferencia to fetch.
     */
    where: TransferenciaWhereUniqueInput
  }

  /**
   * Transferencia findUniqueOrThrow
   */
  export type TransferenciaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transferencia
     */
    select?: TransferenciaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransferenciaInclude<ExtArgs> | null
    /**
     * Filter, which Transferencia to fetch.
     */
    where: TransferenciaWhereUniqueInput
  }

  /**
   * Transferencia findFirst
   */
  export type TransferenciaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transferencia
     */
    select?: TransferenciaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransferenciaInclude<ExtArgs> | null
    /**
     * Filter, which Transferencia to fetch.
     */
    where?: TransferenciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transferencias to fetch.
     */
    orderBy?: TransferenciaOrderByWithRelationInput | TransferenciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transferencias.
     */
    cursor?: TransferenciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transferencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transferencias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transferencias.
     */
    distinct?: TransferenciaScalarFieldEnum | TransferenciaScalarFieldEnum[]
  }

  /**
   * Transferencia findFirstOrThrow
   */
  export type TransferenciaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transferencia
     */
    select?: TransferenciaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransferenciaInclude<ExtArgs> | null
    /**
     * Filter, which Transferencia to fetch.
     */
    where?: TransferenciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transferencias to fetch.
     */
    orderBy?: TransferenciaOrderByWithRelationInput | TransferenciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transferencias.
     */
    cursor?: TransferenciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transferencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transferencias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transferencias.
     */
    distinct?: TransferenciaScalarFieldEnum | TransferenciaScalarFieldEnum[]
  }

  /**
   * Transferencia findMany
   */
  export type TransferenciaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transferencia
     */
    select?: TransferenciaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransferenciaInclude<ExtArgs> | null
    /**
     * Filter, which Transferencias to fetch.
     */
    where?: TransferenciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transferencias to fetch.
     */
    orderBy?: TransferenciaOrderByWithRelationInput | TransferenciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transferencias.
     */
    cursor?: TransferenciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transferencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transferencias.
     */
    skip?: number
    distinct?: TransferenciaScalarFieldEnum | TransferenciaScalarFieldEnum[]
  }

  /**
   * Transferencia create
   */
  export type TransferenciaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transferencia
     */
    select?: TransferenciaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransferenciaInclude<ExtArgs> | null
    /**
     * The data needed to create a Transferencia.
     */
    data: XOR<TransferenciaCreateInput, TransferenciaUncheckedCreateInput>
  }

  /**
   * Transferencia createMany
   */
  export type TransferenciaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transferencias.
     */
    data: TransferenciaCreateManyInput | TransferenciaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transferencia update
   */
  export type TransferenciaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transferencia
     */
    select?: TransferenciaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransferenciaInclude<ExtArgs> | null
    /**
     * The data needed to update a Transferencia.
     */
    data: XOR<TransferenciaUpdateInput, TransferenciaUncheckedUpdateInput>
    /**
     * Choose, which Transferencia to update.
     */
    where: TransferenciaWhereUniqueInput
  }

  /**
   * Transferencia updateMany
   */
  export type TransferenciaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transferencias.
     */
    data: XOR<TransferenciaUpdateManyMutationInput, TransferenciaUncheckedUpdateManyInput>
    /**
     * Filter which Transferencias to update
     */
    where?: TransferenciaWhereInput
  }

  /**
   * Transferencia upsert
   */
  export type TransferenciaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transferencia
     */
    select?: TransferenciaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransferenciaInclude<ExtArgs> | null
    /**
     * The filter to search for the Transferencia to update in case it exists.
     */
    where: TransferenciaWhereUniqueInput
    /**
     * In case the Transferencia found by the `where` argument doesn't exist, create a new Transferencia with this data.
     */
    create: XOR<TransferenciaCreateInput, TransferenciaUncheckedCreateInput>
    /**
     * In case the Transferencia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransferenciaUpdateInput, TransferenciaUncheckedUpdateInput>
  }

  /**
   * Transferencia delete
   */
  export type TransferenciaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transferencia
     */
    select?: TransferenciaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransferenciaInclude<ExtArgs> | null
    /**
     * Filter which Transferencia to delete.
     */
    where: TransferenciaWhereUniqueInput
  }

  /**
   * Transferencia deleteMany
   */
  export type TransferenciaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transferencias to delete
     */
    where?: TransferenciaWhereInput
  }

  /**
   * Transferencia.movimiento
   */
  export type Transferencia$movimientoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movimiento
     */
    select?: movimientoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movimientoInclude<ExtArgs> | null
    where?: movimientoWhereInput
    orderBy?: movimientoOrderByWithRelationInput | movimientoOrderByWithRelationInput[]
    cursor?: movimientoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MovimientoScalarFieldEnum | MovimientoScalarFieldEnum[]
  }

  /**
   * Transferencia without action
   */
  export type TransferenciaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transferencia
     */
    select?: TransferenciaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransferenciaInclude<ExtArgs> | null
  }


  /**
   * Model cuenta
   */

  export type AggregateCuenta = {
    _count: CuentaCountAggregateOutputType | null
    _avg: CuentaAvgAggregateOutputType | null
    _sum: CuentaSumAggregateOutputType | null
    _min: CuentaMinAggregateOutputType | null
    _max: CuentaMaxAggregateOutputType | null
  }

  export type CuentaAvgAggregateOutputType = {
    cuenta_id: number | null
    usuario_id: number | null
    tipo_cuenta_id: number | null
    saldo: Decimal | null
  }

  export type CuentaSumAggregateOutputType = {
    cuenta_id: number | null
    usuario_id: number | null
    tipo_cuenta_id: number | null
    saldo: Decimal | null
  }

  export type CuentaMinAggregateOutputType = {
    cuenta_id: number | null
    numero_cuenta: string | null
    usuario_id: number | null
    tipo_cuenta_id: number | null
    saldo: Decimal | null
    fecha_creacion: Date | null
    fecha_modificacion: Date | null
  }

  export type CuentaMaxAggregateOutputType = {
    cuenta_id: number | null
    numero_cuenta: string | null
    usuario_id: number | null
    tipo_cuenta_id: number | null
    saldo: Decimal | null
    fecha_creacion: Date | null
    fecha_modificacion: Date | null
  }

  export type CuentaCountAggregateOutputType = {
    cuenta_id: number
    numero_cuenta: number
    usuario_id: number
    tipo_cuenta_id: number
    saldo: number
    fecha_creacion: number
    fecha_modificacion: number
    _all: number
  }


  export type CuentaAvgAggregateInputType = {
    cuenta_id?: true
    usuario_id?: true
    tipo_cuenta_id?: true
    saldo?: true
  }

  export type CuentaSumAggregateInputType = {
    cuenta_id?: true
    usuario_id?: true
    tipo_cuenta_id?: true
    saldo?: true
  }

  export type CuentaMinAggregateInputType = {
    cuenta_id?: true
    numero_cuenta?: true
    usuario_id?: true
    tipo_cuenta_id?: true
    saldo?: true
    fecha_creacion?: true
    fecha_modificacion?: true
  }

  export type CuentaMaxAggregateInputType = {
    cuenta_id?: true
    numero_cuenta?: true
    usuario_id?: true
    tipo_cuenta_id?: true
    saldo?: true
    fecha_creacion?: true
    fecha_modificacion?: true
  }

  export type CuentaCountAggregateInputType = {
    cuenta_id?: true
    numero_cuenta?: true
    usuario_id?: true
    tipo_cuenta_id?: true
    saldo?: true
    fecha_creacion?: true
    fecha_modificacion?: true
    _all?: true
  }

  export type CuentaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cuenta to aggregate.
     */
    where?: cuentaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cuentas to fetch.
     */
    orderBy?: cuentaOrderByWithRelationInput | cuentaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cuentaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cuentas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cuentas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cuentas
    **/
    _count?: true | CuentaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CuentaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CuentaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CuentaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CuentaMaxAggregateInputType
  }

  export type GetCuentaAggregateType<T extends CuentaAggregateArgs> = {
        [P in keyof T & keyof AggregateCuenta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCuenta[P]>
      : GetScalarType<T[P], AggregateCuenta[P]>
  }




  export type cuentaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cuentaWhereInput
    orderBy?: cuentaOrderByWithAggregationInput | cuentaOrderByWithAggregationInput[]
    by: CuentaScalarFieldEnum[] | CuentaScalarFieldEnum
    having?: cuentaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CuentaCountAggregateInputType | true
    _avg?: CuentaAvgAggregateInputType
    _sum?: CuentaSumAggregateInputType
    _min?: CuentaMinAggregateInputType
    _max?: CuentaMaxAggregateInputType
  }

  export type CuentaGroupByOutputType = {
    cuenta_id: number
    numero_cuenta: string
    usuario_id: number
    tipo_cuenta_id: number
    saldo: Decimal
    fecha_creacion: Date | null
    fecha_modificacion: Date | null
    _count: CuentaCountAggregateOutputType | null
    _avg: CuentaAvgAggregateOutputType | null
    _sum: CuentaSumAggregateOutputType | null
    _min: CuentaMinAggregateOutputType | null
    _max: CuentaMaxAggregateOutputType | null
  }

  type GetCuentaGroupByPayload<T extends cuentaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CuentaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CuentaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CuentaGroupByOutputType[P]>
            : GetScalarType<T[P], CuentaGroupByOutputType[P]>
        }
      >
    >


  export type cuentaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cuenta_id?: boolean
    numero_cuenta?: boolean
    usuario_id?: boolean
    tipo_cuenta_id?: boolean
    saldo?: boolean
    fecha_creacion?: boolean
    fecha_modificacion?: boolean
    Transferencia_Transferencia_cuenta_origen_idTocuenta?: boolean | cuenta$Transferencia_Transferencia_cuenta_origen_idTocuentaArgs<ExtArgs>
    Transferencia_Transferencia_cuenta_destino_idTocuenta?: boolean | cuenta$Transferencia_Transferencia_cuenta_destino_idTocuentaArgs<ExtArgs>
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
    tipo_cuenta?: boolean | tipo_cuentaDefaultArgs<ExtArgs>
    movimiento?: boolean | cuenta$movimientoArgs<ExtArgs>
    _count?: boolean | CuentaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cuenta"]>


  export type cuentaSelectScalar = {
    cuenta_id?: boolean
    numero_cuenta?: boolean
    usuario_id?: boolean
    tipo_cuenta_id?: boolean
    saldo?: boolean
    fecha_creacion?: boolean
    fecha_modificacion?: boolean
  }

  export type cuentaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Transferencia_Transferencia_cuenta_origen_idTocuenta?: boolean | cuenta$Transferencia_Transferencia_cuenta_origen_idTocuentaArgs<ExtArgs>
    Transferencia_Transferencia_cuenta_destino_idTocuenta?: boolean | cuenta$Transferencia_Transferencia_cuenta_destino_idTocuentaArgs<ExtArgs>
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
    tipo_cuenta?: boolean | tipo_cuentaDefaultArgs<ExtArgs>
    movimiento?: boolean | cuenta$movimientoArgs<ExtArgs>
    _count?: boolean | CuentaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $cuentaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cuenta"
    objects: {
      Transferencia_Transferencia_cuenta_origen_idTocuenta: Prisma.$TransferenciaPayload<ExtArgs>[]
      Transferencia_Transferencia_cuenta_destino_idTocuenta: Prisma.$TransferenciaPayload<ExtArgs>[]
      usuario: Prisma.$usuarioPayload<ExtArgs>
      tipo_cuenta: Prisma.$tipo_cuentaPayload<ExtArgs>
      movimiento: Prisma.$movimientoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      cuenta_id: number
      numero_cuenta: string
      usuario_id: number
      tipo_cuenta_id: number
      saldo: Prisma.Decimal
      fecha_creacion: Date | null
      fecha_modificacion: Date | null
    }, ExtArgs["result"]["cuenta"]>
    composites: {}
  }

  type cuentaGetPayload<S extends boolean | null | undefined | cuentaDefaultArgs> = $Result.GetResult<Prisma.$cuentaPayload, S>

  type cuentaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<cuentaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CuentaCountAggregateInputType | true
    }

  export interface cuentaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cuenta'], meta: { name: 'cuenta' } }
    /**
     * Find zero or one Cuenta that matches the filter.
     * @param {cuentaFindUniqueArgs} args - Arguments to find a Cuenta
     * @example
     * // Get one Cuenta
     * const cuenta = await prisma.cuenta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cuentaFindUniqueArgs>(args: SelectSubset<T, cuentaFindUniqueArgs<ExtArgs>>): Prisma__cuentaClient<$Result.GetResult<Prisma.$cuentaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Cuenta that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {cuentaFindUniqueOrThrowArgs} args - Arguments to find a Cuenta
     * @example
     * // Get one Cuenta
     * const cuenta = await prisma.cuenta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cuentaFindUniqueOrThrowArgs>(args: SelectSubset<T, cuentaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cuentaClient<$Result.GetResult<Prisma.$cuentaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Cuenta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cuentaFindFirstArgs} args - Arguments to find a Cuenta
     * @example
     * // Get one Cuenta
     * const cuenta = await prisma.cuenta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cuentaFindFirstArgs>(args?: SelectSubset<T, cuentaFindFirstArgs<ExtArgs>>): Prisma__cuentaClient<$Result.GetResult<Prisma.$cuentaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Cuenta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cuentaFindFirstOrThrowArgs} args - Arguments to find a Cuenta
     * @example
     * // Get one Cuenta
     * const cuenta = await prisma.cuenta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cuentaFindFirstOrThrowArgs>(args?: SelectSubset<T, cuentaFindFirstOrThrowArgs<ExtArgs>>): Prisma__cuentaClient<$Result.GetResult<Prisma.$cuentaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Cuentas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cuentaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cuentas
     * const cuentas = await prisma.cuenta.findMany()
     * 
     * // Get first 10 Cuentas
     * const cuentas = await prisma.cuenta.findMany({ take: 10 })
     * 
     * // Only select the `cuenta_id`
     * const cuentaWithCuenta_idOnly = await prisma.cuenta.findMany({ select: { cuenta_id: true } })
     * 
     */
    findMany<T extends cuentaFindManyArgs>(args?: SelectSubset<T, cuentaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cuentaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Cuenta.
     * @param {cuentaCreateArgs} args - Arguments to create a Cuenta.
     * @example
     * // Create one Cuenta
     * const Cuenta = await prisma.cuenta.create({
     *   data: {
     *     // ... data to create a Cuenta
     *   }
     * })
     * 
     */
    create<T extends cuentaCreateArgs>(args: SelectSubset<T, cuentaCreateArgs<ExtArgs>>): Prisma__cuentaClient<$Result.GetResult<Prisma.$cuentaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Cuentas.
     * @param {cuentaCreateManyArgs} args - Arguments to create many Cuentas.
     * @example
     * // Create many Cuentas
     * const cuenta = await prisma.cuenta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cuentaCreateManyArgs>(args?: SelectSubset<T, cuentaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cuenta.
     * @param {cuentaDeleteArgs} args - Arguments to delete one Cuenta.
     * @example
     * // Delete one Cuenta
     * const Cuenta = await prisma.cuenta.delete({
     *   where: {
     *     // ... filter to delete one Cuenta
     *   }
     * })
     * 
     */
    delete<T extends cuentaDeleteArgs>(args: SelectSubset<T, cuentaDeleteArgs<ExtArgs>>): Prisma__cuentaClient<$Result.GetResult<Prisma.$cuentaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Cuenta.
     * @param {cuentaUpdateArgs} args - Arguments to update one Cuenta.
     * @example
     * // Update one Cuenta
     * const cuenta = await prisma.cuenta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cuentaUpdateArgs>(args: SelectSubset<T, cuentaUpdateArgs<ExtArgs>>): Prisma__cuentaClient<$Result.GetResult<Prisma.$cuentaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Cuentas.
     * @param {cuentaDeleteManyArgs} args - Arguments to filter Cuentas to delete.
     * @example
     * // Delete a few Cuentas
     * const { count } = await prisma.cuenta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cuentaDeleteManyArgs>(args?: SelectSubset<T, cuentaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cuentas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cuentaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cuentas
     * const cuenta = await prisma.cuenta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cuentaUpdateManyArgs>(args: SelectSubset<T, cuentaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cuenta.
     * @param {cuentaUpsertArgs} args - Arguments to update or create a Cuenta.
     * @example
     * // Update or create a Cuenta
     * const cuenta = await prisma.cuenta.upsert({
     *   create: {
     *     // ... data to create a Cuenta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cuenta we want to update
     *   }
     * })
     */
    upsert<T extends cuentaUpsertArgs>(args: SelectSubset<T, cuentaUpsertArgs<ExtArgs>>): Prisma__cuentaClient<$Result.GetResult<Prisma.$cuentaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Cuentas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cuentaCountArgs} args - Arguments to filter Cuentas to count.
     * @example
     * // Count the number of Cuentas
     * const count = await prisma.cuenta.count({
     *   where: {
     *     // ... the filter for the Cuentas we want to count
     *   }
     * })
    **/
    count<T extends cuentaCountArgs>(
      args?: Subset<T, cuentaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CuentaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cuenta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuentaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CuentaAggregateArgs>(args: Subset<T, CuentaAggregateArgs>): Prisma.PrismaPromise<GetCuentaAggregateType<T>>

    /**
     * Group by Cuenta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cuentaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends cuentaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cuentaGroupByArgs['orderBy'] }
        : { orderBy?: cuentaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, cuentaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCuentaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cuenta model
   */
  readonly fields: cuentaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cuenta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cuentaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Transferencia_Transferencia_cuenta_origen_idTocuenta<T extends cuenta$Transferencia_Transferencia_cuenta_origen_idTocuentaArgs<ExtArgs> = {}>(args?: Subset<T, cuenta$Transferencia_Transferencia_cuenta_origen_idTocuentaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransferenciaPayload<ExtArgs>, T, "findMany"> | Null>
    Transferencia_Transferencia_cuenta_destino_idTocuenta<T extends cuenta$Transferencia_Transferencia_cuenta_destino_idTocuentaArgs<ExtArgs> = {}>(args?: Subset<T, cuenta$Transferencia_Transferencia_cuenta_destino_idTocuentaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransferenciaPayload<ExtArgs>, T, "findMany"> | Null>
    usuario<T extends usuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usuarioDefaultArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    tipo_cuenta<T extends tipo_cuentaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tipo_cuentaDefaultArgs<ExtArgs>>): Prisma__tipo_cuentaClient<$Result.GetResult<Prisma.$tipo_cuentaPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    movimiento<T extends cuenta$movimientoArgs<ExtArgs> = {}>(args?: Subset<T, cuenta$movimientoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$movimientoPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the cuenta model
   */ 
  interface cuentaFieldRefs {
    readonly cuenta_id: FieldRef<"cuenta", 'Int'>
    readonly numero_cuenta: FieldRef<"cuenta", 'String'>
    readonly usuario_id: FieldRef<"cuenta", 'Int'>
    readonly tipo_cuenta_id: FieldRef<"cuenta", 'Int'>
    readonly saldo: FieldRef<"cuenta", 'Decimal'>
    readonly fecha_creacion: FieldRef<"cuenta", 'DateTime'>
    readonly fecha_modificacion: FieldRef<"cuenta", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * cuenta findUnique
   */
  export type cuentaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cuenta
     */
    select?: cuentaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cuentaInclude<ExtArgs> | null
    /**
     * Filter, which cuenta to fetch.
     */
    where: cuentaWhereUniqueInput
  }

  /**
   * cuenta findUniqueOrThrow
   */
  export type cuentaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cuenta
     */
    select?: cuentaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cuentaInclude<ExtArgs> | null
    /**
     * Filter, which cuenta to fetch.
     */
    where: cuentaWhereUniqueInput
  }

  /**
   * cuenta findFirst
   */
  export type cuentaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cuenta
     */
    select?: cuentaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cuentaInclude<ExtArgs> | null
    /**
     * Filter, which cuenta to fetch.
     */
    where?: cuentaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cuentas to fetch.
     */
    orderBy?: cuentaOrderByWithRelationInput | cuentaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cuentas.
     */
    cursor?: cuentaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cuentas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cuentas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cuentas.
     */
    distinct?: CuentaScalarFieldEnum | CuentaScalarFieldEnum[]
  }

  /**
   * cuenta findFirstOrThrow
   */
  export type cuentaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cuenta
     */
    select?: cuentaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cuentaInclude<ExtArgs> | null
    /**
     * Filter, which cuenta to fetch.
     */
    where?: cuentaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cuentas to fetch.
     */
    orderBy?: cuentaOrderByWithRelationInput | cuentaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cuentas.
     */
    cursor?: cuentaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cuentas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cuentas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cuentas.
     */
    distinct?: CuentaScalarFieldEnum | CuentaScalarFieldEnum[]
  }

  /**
   * cuenta findMany
   */
  export type cuentaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cuenta
     */
    select?: cuentaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cuentaInclude<ExtArgs> | null
    /**
     * Filter, which cuentas to fetch.
     */
    where?: cuentaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cuentas to fetch.
     */
    orderBy?: cuentaOrderByWithRelationInput | cuentaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cuentas.
     */
    cursor?: cuentaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cuentas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cuentas.
     */
    skip?: number
    distinct?: CuentaScalarFieldEnum | CuentaScalarFieldEnum[]
  }

  /**
   * cuenta create
   */
  export type cuentaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cuenta
     */
    select?: cuentaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cuentaInclude<ExtArgs> | null
    /**
     * The data needed to create a cuenta.
     */
    data: XOR<cuentaCreateInput, cuentaUncheckedCreateInput>
  }

  /**
   * cuenta createMany
   */
  export type cuentaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cuentas.
     */
    data: cuentaCreateManyInput | cuentaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cuenta update
   */
  export type cuentaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cuenta
     */
    select?: cuentaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cuentaInclude<ExtArgs> | null
    /**
     * The data needed to update a cuenta.
     */
    data: XOR<cuentaUpdateInput, cuentaUncheckedUpdateInput>
    /**
     * Choose, which cuenta to update.
     */
    where: cuentaWhereUniqueInput
  }

  /**
   * cuenta updateMany
   */
  export type cuentaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cuentas.
     */
    data: XOR<cuentaUpdateManyMutationInput, cuentaUncheckedUpdateManyInput>
    /**
     * Filter which cuentas to update
     */
    where?: cuentaWhereInput
  }

  /**
   * cuenta upsert
   */
  export type cuentaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cuenta
     */
    select?: cuentaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cuentaInclude<ExtArgs> | null
    /**
     * The filter to search for the cuenta to update in case it exists.
     */
    where: cuentaWhereUniqueInput
    /**
     * In case the cuenta found by the `where` argument doesn't exist, create a new cuenta with this data.
     */
    create: XOR<cuentaCreateInput, cuentaUncheckedCreateInput>
    /**
     * In case the cuenta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cuentaUpdateInput, cuentaUncheckedUpdateInput>
  }

  /**
   * cuenta delete
   */
  export type cuentaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cuenta
     */
    select?: cuentaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cuentaInclude<ExtArgs> | null
    /**
     * Filter which cuenta to delete.
     */
    where: cuentaWhereUniqueInput
  }

  /**
   * cuenta deleteMany
   */
  export type cuentaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cuentas to delete
     */
    where?: cuentaWhereInput
  }

  /**
   * cuenta.Transferencia_Transferencia_cuenta_origen_idTocuenta
   */
  export type cuenta$Transferencia_Transferencia_cuenta_origen_idTocuentaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transferencia
     */
    select?: TransferenciaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransferenciaInclude<ExtArgs> | null
    where?: TransferenciaWhereInput
    orderBy?: TransferenciaOrderByWithRelationInput | TransferenciaOrderByWithRelationInput[]
    cursor?: TransferenciaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransferenciaScalarFieldEnum | TransferenciaScalarFieldEnum[]
  }

  /**
   * cuenta.Transferencia_Transferencia_cuenta_destino_idTocuenta
   */
  export type cuenta$Transferencia_Transferencia_cuenta_destino_idTocuentaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transferencia
     */
    select?: TransferenciaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransferenciaInclude<ExtArgs> | null
    where?: TransferenciaWhereInput
    orderBy?: TransferenciaOrderByWithRelationInput | TransferenciaOrderByWithRelationInput[]
    cursor?: TransferenciaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransferenciaScalarFieldEnum | TransferenciaScalarFieldEnum[]
  }

  /**
   * cuenta.movimiento
   */
  export type cuenta$movimientoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movimiento
     */
    select?: movimientoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movimientoInclude<ExtArgs> | null
    where?: movimientoWhereInput
    orderBy?: movimientoOrderByWithRelationInput | movimientoOrderByWithRelationInput[]
    cursor?: movimientoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MovimientoScalarFieldEnum | MovimientoScalarFieldEnum[]
  }

  /**
   * cuenta without action
   */
  export type cuentaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cuenta
     */
    select?: cuentaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cuentaInclude<ExtArgs> | null
  }


  /**
   * Model estado_transferencia
   */

  export type AggregateEstado_transferencia = {
    _count: Estado_transferenciaCountAggregateOutputType | null
    _avg: Estado_transferenciaAvgAggregateOutputType | null
    _sum: Estado_transferenciaSumAggregateOutputType | null
    _min: Estado_transferenciaMinAggregateOutputType | null
    _max: Estado_transferenciaMaxAggregateOutputType | null
  }

  export type Estado_transferenciaAvgAggregateOutputType = {
    estado_transferencia_id: number | null
  }

  export type Estado_transferenciaSumAggregateOutputType = {
    estado_transferencia_id: number | null
  }

  export type Estado_transferenciaMinAggregateOutputType = {
    estado_transferencia_id: number | null
    nombre: string | null
    descripcion: string | null
    fecha_creacion: Date | null
    fecha_modificacion: Date | null
  }

  export type Estado_transferenciaMaxAggregateOutputType = {
    estado_transferencia_id: number | null
    nombre: string | null
    descripcion: string | null
    fecha_creacion: Date | null
    fecha_modificacion: Date | null
  }

  export type Estado_transferenciaCountAggregateOutputType = {
    estado_transferencia_id: number
    nombre: number
    descripcion: number
    fecha_creacion: number
    fecha_modificacion: number
    _all: number
  }


  export type Estado_transferenciaAvgAggregateInputType = {
    estado_transferencia_id?: true
  }

  export type Estado_transferenciaSumAggregateInputType = {
    estado_transferencia_id?: true
  }

  export type Estado_transferenciaMinAggregateInputType = {
    estado_transferencia_id?: true
    nombre?: true
    descripcion?: true
    fecha_creacion?: true
    fecha_modificacion?: true
  }

  export type Estado_transferenciaMaxAggregateInputType = {
    estado_transferencia_id?: true
    nombre?: true
    descripcion?: true
    fecha_creacion?: true
    fecha_modificacion?: true
  }

  export type Estado_transferenciaCountAggregateInputType = {
    estado_transferencia_id?: true
    nombre?: true
    descripcion?: true
    fecha_creacion?: true
    fecha_modificacion?: true
    _all?: true
  }

  export type Estado_transferenciaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which estado_transferencia to aggregate.
     */
    where?: estado_transferenciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of estado_transferencias to fetch.
     */
    orderBy?: estado_transferenciaOrderByWithRelationInput | estado_transferenciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: estado_transferenciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` estado_transferencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` estado_transferencias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned estado_transferencias
    **/
    _count?: true | Estado_transferenciaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Estado_transferenciaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Estado_transferenciaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Estado_transferenciaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Estado_transferenciaMaxAggregateInputType
  }

  export type GetEstado_transferenciaAggregateType<T extends Estado_transferenciaAggregateArgs> = {
        [P in keyof T & keyof AggregateEstado_transferencia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEstado_transferencia[P]>
      : GetScalarType<T[P], AggregateEstado_transferencia[P]>
  }




  export type estado_transferenciaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: estado_transferenciaWhereInput
    orderBy?: estado_transferenciaOrderByWithAggregationInput | estado_transferenciaOrderByWithAggregationInput[]
    by: Estado_transferenciaScalarFieldEnum[] | Estado_transferenciaScalarFieldEnum
    having?: estado_transferenciaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Estado_transferenciaCountAggregateInputType | true
    _avg?: Estado_transferenciaAvgAggregateInputType
    _sum?: Estado_transferenciaSumAggregateInputType
    _min?: Estado_transferenciaMinAggregateInputType
    _max?: Estado_transferenciaMaxAggregateInputType
  }

  export type Estado_transferenciaGroupByOutputType = {
    estado_transferencia_id: number
    nombre: string
    descripcion: string
    fecha_creacion: Date | null
    fecha_modificacion: Date | null
    _count: Estado_transferenciaCountAggregateOutputType | null
    _avg: Estado_transferenciaAvgAggregateOutputType | null
    _sum: Estado_transferenciaSumAggregateOutputType | null
    _min: Estado_transferenciaMinAggregateOutputType | null
    _max: Estado_transferenciaMaxAggregateOutputType | null
  }

  type GetEstado_transferenciaGroupByPayload<T extends estado_transferenciaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Estado_transferenciaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Estado_transferenciaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Estado_transferenciaGroupByOutputType[P]>
            : GetScalarType<T[P], Estado_transferenciaGroupByOutputType[P]>
        }
      >
    >


  export type estado_transferenciaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    estado_transferencia_id?: boolean
    nombre?: boolean
    descripcion?: boolean
    fecha_creacion?: boolean
    fecha_modificacion?: boolean
    Transferencia?: boolean | estado_transferencia$TransferenciaArgs<ExtArgs>
    _count?: boolean | Estado_transferenciaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["estado_transferencia"]>


  export type estado_transferenciaSelectScalar = {
    estado_transferencia_id?: boolean
    nombre?: boolean
    descripcion?: boolean
    fecha_creacion?: boolean
    fecha_modificacion?: boolean
  }

  export type estado_transferenciaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Transferencia?: boolean | estado_transferencia$TransferenciaArgs<ExtArgs>
    _count?: boolean | Estado_transferenciaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $estado_transferenciaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "estado_transferencia"
    objects: {
      Transferencia: Prisma.$TransferenciaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      estado_transferencia_id: number
      nombre: string
      descripcion: string
      fecha_creacion: Date | null
      fecha_modificacion: Date | null
    }, ExtArgs["result"]["estado_transferencia"]>
    composites: {}
  }

  type estado_transferenciaGetPayload<S extends boolean | null | undefined | estado_transferenciaDefaultArgs> = $Result.GetResult<Prisma.$estado_transferenciaPayload, S>

  type estado_transferenciaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<estado_transferenciaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Estado_transferenciaCountAggregateInputType | true
    }

  export interface estado_transferenciaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['estado_transferencia'], meta: { name: 'estado_transferencia' } }
    /**
     * Find zero or one Estado_transferencia that matches the filter.
     * @param {estado_transferenciaFindUniqueArgs} args - Arguments to find a Estado_transferencia
     * @example
     * // Get one Estado_transferencia
     * const estado_transferencia = await prisma.estado_transferencia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends estado_transferenciaFindUniqueArgs>(args: SelectSubset<T, estado_transferenciaFindUniqueArgs<ExtArgs>>): Prisma__estado_transferenciaClient<$Result.GetResult<Prisma.$estado_transferenciaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Estado_transferencia that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {estado_transferenciaFindUniqueOrThrowArgs} args - Arguments to find a Estado_transferencia
     * @example
     * // Get one Estado_transferencia
     * const estado_transferencia = await prisma.estado_transferencia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends estado_transferenciaFindUniqueOrThrowArgs>(args: SelectSubset<T, estado_transferenciaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__estado_transferenciaClient<$Result.GetResult<Prisma.$estado_transferenciaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Estado_transferencia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {estado_transferenciaFindFirstArgs} args - Arguments to find a Estado_transferencia
     * @example
     * // Get one Estado_transferencia
     * const estado_transferencia = await prisma.estado_transferencia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends estado_transferenciaFindFirstArgs>(args?: SelectSubset<T, estado_transferenciaFindFirstArgs<ExtArgs>>): Prisma__estado_transferenciaClient<$Result.GetResult<Prisma.$estado_transferenciaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Estado_transferencia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {estado_transferenciaFindFirstOrThrowArgs} args - Arguments to find a Estado_transferencia
     * @example
     * // Get one Estado_transferencia
     * const estado_transferencia = await prisma.estado_transferencia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends estado_transferenciaFindFirstOrThrowArgs>(args?: SelectSubset<T, estado_transferenciaFindFirstOrThrowArgs<ExtArgs>>): Prisma__estado_transferenciaClient<$Result.GetResult<Prisma.$estado_transferenciaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Estado_transferencias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {estado_transferenciaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Estado_transferencias
     * const estado_transferencias = await prisma.estado_transferencia.findMany()
     * 
     * // Get first 10 Estado_transferencias
     * const estado_transferencias = await prisma.estado_transferencia.findMany({ take: 10 })
     * 
     * // Only select the `estado_transferencia_id`
     * const estado_transferenciaWithEstado_transferencia_idOnly = await prisma.estado_transferencia.findMany({ select: { estado_transferencia_id: true } })
     * 
     */
    findMany<T extends estado_transferenciaFindManyArgs>(args?: SelectSubset<T, estado_transferenciaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$estado_transferenciaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Estado_transferencia.
     * @param {estado_transferenciaCreateArgs} args - Arguments to create a Estado_transferencia.
     * @example
     * // Create one Estado_transferencia
     * const Estado_transferencia = await prisma.estado_transferencia.create({
     *   data: {
     *     // ... data to create a Estado_transferencia
     *   }
     * })
     * 
     */
    create<T extends estado_transferenciaCreateArgs>(args: SelectSubset<T, estado_transferenciaCreateArgs<ExtArgs>>): Prisma__estado_transferenciaClient<$Result.GetResult<Prisma.$estado_transferenciaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Estado_transferencias.
     * @param {estado_transferenciaCreateManyArgs} args - Arguments to create many Estado_transferencias.
     * @example
     * // Create many Estado_transferencias
     * const estado_transferencia = await prisma.estado_transferencia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends estado_transferenciaCreateManyArgs>(args?: SelectSubset<T, estado_transferenciaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Estado_transferencia.
     * @param {estado_transferenciaDeleteArgs} args - Arguments to delete one Estado_transferencia.
     * @example
     * // Delete one Estado_transferencia
     * const Estado_transferencia = await prisma.estado_transferencia.delete({
     *   where: {
     *     // ... filter to delete one Estado_transferencia
     *   }
     * })
     * 
     */
    delete<T extends estado_transferenciaDeleteArgs>(args: SelectSubset<T, estado_transferenciaDeleteArgs<ExtArgs>>): Prisma__estado_transferenciaClient<$Result.GetResult<Prisma.$estado_transferenciaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Estado_transferencia.
     * @param {estado_transferenciaUpdateArgs} args - Arguments to update one Estado_transferencia.
     * @example
     * // Update one Estado_transferencia
     * const estado_transferencia = await prisma.estado_transferencia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends estado_transferenciaUpdateArgs>(args: SelectSubset<T, estado_transferenciaUpdateArgs<ExtArgs>>): Prisma__estado_transferenciaClient<$Result.GetResult<Prisma.$estado_transferenciaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Estado_transferencias.
     * @param {estado_transferenciaDeleteManyArgs} args - Arguments to filter Estado_transferencias to delete.
     * @example
     * // Delete a few Estado_transferencias
     * const { count } = await prisma.estado_transferencia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends estado_transferenciaDeleteManyArgs>(args?: SelectSubset<T, estado_transferenciaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Estado_transferencias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {estado_transferenciaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Estado_transferencias
     * const estado_transferencia = await prisma.estado_transferencia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends estado_transferenciaUpdateManyArgs>(args: SelectSubset<T, estado_transferenciaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Estado_transferencia.
     * @param {estado_transferenciaUpsertArgs} args - Arguments to update or create a Estado_transferencia.
     * @example
     * // Update or create a Estado_transferencia
     * const estado_transferencia = await prisma.estado_transferencia.upsert({
     *   create: {
     *     // ... data to create a Estado_transferencia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Estado_transferencia we want to update
     *   }
     * })
     */
    upsert<T extends estado_transferenciaUpsertArgs>(args: SelectSubset<T, estado_transferenciaUpsertArgs<ExtArgs>>): Prisma__estado_transferenciaClient<$Result.GetResult<Prisma.$estado_transferenciaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Estado_transferencias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {estado_transferenciaCountArgs} args - Arguments to filter Estado_transferencias to count.
     * @example
     * // Count the number of Estado_transferencias
     * const count = await prisma.estado_transferencia.count({
     *   where: {
     *     // ... the filter for the Estado_transferencias we want to count
     *   }
     * })
    **/
    count<T extends estado_transferenciaCountArgs>(
      args?: Subset<T, estado_transferenciaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Estado_transferenciaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Estado_transferencia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Estado_transferenciaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Estado_transferenciaAggregateArgs>(args: Subset<T, Estado_transferenciaAggregateArgs>): Prisma.PrismaPromise<GetEstado_transferenciaAggregateType<T>>

    /**
     * Group by Estado_transferencia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {estado_transferenciaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends estado_transferenciaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: estado_transferenciaGroupByArgs['orderBy'] }
        : { orderBy?: estado_transferenciaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, estado_transferenciaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEstado_transferenciaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the estado_transferencia model
   */
  readonly fields: estado_transferenciaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for estado_transferencia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__estado_transferenciaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Transferencia<T extends estado_transferencia$TransferenciaArgs<ExtArgs> = {}>(args?: Subset<T, estado_transferencia$TransferenciaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransferenciaPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the estado_transferencia model
   */ 
  interface estado_transferenciaFieldRefs {
    readonly estado_transferencia_id: FieldRef<"estado_transferencia", 'Int'>
    readonly nombre: FieldRef<"estado_transferencia", 'String'>
    readonly descripcion: FieldRef<"estado_transferencia", 'String'>
    readonly fecha_creacion: FieldRef<"estado_transferencia", 'DateTime'>
    readonly fecha_modificacion: FieldRef<"estado_transferencia", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * estado_transferencia findUnique
   */
  export type estado_transferenciaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estado_transferencia
     */
    select?: estado_transferenciaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estado_transferenciaInclude<ExtArgs> | null
    /**
     * Filter, which estado_transferencia to fetch.
     */
    where: estado_transferenciaWhereUniqueInput
  }

  /**
   * estado_transferencia findUniqueOrThrow
   */
  export type estado_transferenciaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estado_transferencia
     */
    select?: estado_transferenciaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estado_transferenciaInclude<ExtArgs> | null
    /**
     * Filter, which estado_transferencia to fetch.
     */
    where: estado_transferenciaWhereUniqueInput
  }

  /**
   * estado_transferencia findFirst
   */
  export type estado_transferenciaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estado_transferencia
     */
    select?: estado_transferenciaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estado_transferenciaInclude<ExtArgs> | null
    /**
     * Filter, which estado_transferencia to fetch.
     */
    where?: estado_transferenciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of estado_transferencias to fetch.
     */
    orderBy?: estado_transferenciaOrderByWithRelationInput | estado_transferenciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for estado_transferencias.
     */
    cursor?: estado_transferenciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` estado_transferencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` estado_transferencias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of estado_transferencias.
     */
    distinct?: Estado_transferenciaScalarFieldEnum | Estado_transferenciaScalarFieldEnum[]
  }

  /**
   * estado_transferencia findFirstOrThrow
   */
  export type estado_transferenciaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estado_transferencia
     */
    select?: estado_transferenciaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estado_transferenciaInclude<ExtArgs> | null
    /**
     * Filter, which estado_transferencia to fetch.
     */
    where?: estado_transferenciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of estado_transferencias to fetch.
     */
    orderBy?: estado_transferenciaOrderByWithRelationInput | estado_transferenciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for estado_transferencias.
     */
    cursor?: estado_transferenciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` estado_transferencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` estado_transferencias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of estado_transferencias.
     */
    distinct?: Estado_transferenciaScalarFieldEnum | Estado_transferenciaScalarFieldEnum[]
  }

  /**
   * estado_transferencia findMany
   */
  export type estado_transferenciaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estado_transferencia
     */
    select?: estado_transferenciaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estado_transferenciaInclude<ExtArgs> | null
    /**
     * Filter, which estado_transferencias to fetch.
     */
    where?: estado_transferenciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of estado_transferencias to fetch.
     */
    orderBy?: estado_transferenciaOrderByWithRelationInput | estado_transferenciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing estado_transferencias.
     */
    cursor?: estado_transferenciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` estado_transferencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` estado_transferencias.
     */
    skip?: number
    distinct?: Estado_transferenciaScalarFieldEnum | Estado_transferenciaScalarFieldEnum[]
  }

  /**
   * estado_transferencia create
   */
  export type estado_transferenciaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estado_transferencia
     */
    select?: estado_transferenciaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estado_transferenciaInclude<ExtArgs> | null
    /**
     * The data needed to create a estado_transferencia.
     */
    data: XOR<estado_transferenciaCreateInput, estado_transferenciaUncheckedCreateInput>
  }

  /**
   * estado_transferencia createMany
   */
  export type estado_transferenciaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many estado_transferencias.
     */
    data: estado_transferenciaCreateManyInput | estado_transferenciaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * estado_transferencia update
   */
  export type estado_transferenciaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estado_transferencia
     */
    select?: estado_transferenciaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estado_transferenciaInclude<ExtArgs> | null
    /**
     * The data needed to update a estado_transferencia.
     */
    data: XOR<estado_transferenciaUpdateInput, estado_transferenciaUncheckedUpdateInput>
    /**
     * Choose, which estado_transferencia to update.
     */
    where: estado_transferenciaWhereUniqueInput
  }

  /**
   * estado_transferencia updateMany
   */
  export type estado_transferenciaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update estado_transferencias.
     */
    data: XOR<estado_transferenciaUpdateManyMutationInput, estado_transferenciaUncheckedUpdateManyInput>
    /**
     * Filter which estado_transferencias to update
     */
    where?: estado_transferenciaWhereInput
  }

  /**
   * estado_transferencia upsert
   */
  export type estado_transferenciaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estado_transferencia
     */
    select?: estado_transferenciaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estado_transferenciaInclude<ExtArgs> | null
    /**
     * The filter to search for the estado_transferencia to update in case it exists.
     */
    where: estado_transferenciaWhereUniqueInput
    /**
     * In case the estado_transferencia found by the `where` argument doesn't exist, create a new estado_transferencia with this data.
     */
    create: XOR<estado_transferenciaCreateInput, estado_transferenciaUncheckedCreateInput>
    /**
     * In case the estado_transferencia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<estado_transferenciaUpdateInput, estado_transferenciaUncheckedUpdateInput>
  }

  /**
   * estado_transferencia delete
   */
  export type estado_transferenciaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estado_transferencia
     */
    select?: estado_transferenciaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estado_transferenciaInclude<ExtArgs> | null
    /**
     * Filter which estado_transferencia to delete.
     */
    where: estado_transferenciaWhereUniqueInput
  }

  /**
   * estado_transferencia deleteMany
   */
  export type estado_transferenciaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which estado_transferencias to delete
     */
    where?: estado_transferenciaWhereInput
  }

  /**
   * estado_transferencia.Transferencia
   */
  export type estado_transferencia$TransferenciaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transferencia
     */
    select?: TransferenciaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransferenciaInclude<ExtArgs> | null
    where?: TransferenciaWhereInput
    orderBy?: TransferenciaOrderByWithRelationInput | TransferenciaOrderByWithRelationInput[]
    cursor?: TransferenciaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransferenciaScalarFieldEnum | TransferenciaScalarFieldEnum[]
  }

  /**
   * estado_transferencia without action
   */
  export type estado_transferenciaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estado_transferencia
     */
    select?: estado_transferenciaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estado_transferenciaInclude<ExtArgs> | null
  }


  /**
   * Model movimiento
   */

  export type AggregateMovimiento = {
    _count: MovimientoCountAggregateOutputType | null
    _avg: MovimientoAvgAggregateOutputType | null
    _sum: MovimientoSumAggregateOutputType | null
    _min: MovimientoMinAggregateOutputType | null
    _max: MovimientoMaxAggregateOutputType | null
  }

  export type MovimientoAvgAggregateOutputType = {
    movimiento_id: number | null
    cuenta_id: number | null
    tipo_movimiento_id: number | null
    monto: Decimal | null
    transferencia_id: number | null
    saldo_anterior: Decimal | null
    saldo_nuevo: Decimal | null
  }

  export type MovimientoSumAggregateOutputType = {
    movimiento_id: number | null
    cuenta_id: number | null
    tipo_movimiento_id: number | null
    monto: Decimal | null
    transferencia_id: number | null
    saldo_anterior: Decimal | null
    saldo_nuevo: Decimal | null
  }

  export type MovimientoMinAggregateOutputType = {
    movimiento_id: number | null
    cuenta_id: number | null
    tipo_movimiento_id: number | null
    monto: Decimal | null
    transferencia_id: number | null
    saldo_anterior: Decimal | null
    saldo_nuevo: Decimal | null
    descripcion: string | null
    fecha_creacion: Date | null
    fecha_modificacion: Date | null
  }

  export type MovimientoMaxAggregateOutputType = {
    movimiento_id: number | null
    cuenta_id: number | null
    tipo_movimiento_id: number | null
    monto: Decimal | null
    transferencia_id: number | null
    saldo_anterior: Decimal | null
    saldo_nuevo: Decimal | null
    descripcion: string | null
    fecha_creacion: Date | null
    fecha_modificacion: Date | null
  }

  export type MovimientoCountAggregateOutputType = {
    movimiento_id: number
    cuenta_id: number
    tipo_movimiento_id: number
    monto: number
    transferencia_id: number
    saldo_anterior: number
    saldo_nuevo: number
    descripcion: number
    fecha_creacion: number
    fecha_modificacion: number
    _all: number
  }


  export type MovimientoAvgAggregateInputType = {
    movimiento_id?: true
    cuenta_id?: true
    tipo_movimiento_id?: true
    monto?: true
    transferencia_id?: true
    saldo_anterior?: true
    saldo_nuevo?: true
  }

  export type MovimientoSumAggregateInputType = {
    movimiento_id?: true
    cuenta_id?: true
    tipo_movimiento_id?: true
    monto?: true
    transferencia_id?: true
    saldo_anterior?: true
    saldo_nuevo?: true
  }

  export type MovimientoMinAggregateInputType = {
    movimiento_id?: true
    cuenta_id?: true
    tipo_movimiento_id?: true
    monto?: true
    transferencia_id?: true
    saldo_anterior?: true
    saldo_nuevo?: true
    descripcion?: true
    fecha_creacion?: true
    fecha_modificacion?: true
  }

  export type MovimientoMaxAggregateInputType = {
    movimiento_id?: true
    cuenta_id?: true
    tipo_movimiento_id?: true
    monto?: true
    transferencia_id?: true
    saldo_anterior?: true
    saldo_nuevo?: true
    descripcion?: true
    fecha_creacion?: true
    fecha_modificacion?: true
  }

  export type MovimientoCountAggregateInputType = {
    movimiento_id?: true
    cuenta_id?: true
    tipo_movimiento_id?: true
    monto?: true
    transferencia_id?: true
    saldo_anterior?: true
    saldo_nuevo?: true
    descripcion?: true
    fecha_creacion?: true
    fecha_modificacion?: true
    _all?: true
  }

  export type MovimientoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which movimiento to aggregate.
     */
    where?: movimientoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of movimientos to fetch.
     */
    orderBy?: movimientoOrderByWithRelationInput | movimientoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: movimientoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` movimientos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` movimientos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned movimientos
    **/
    _count?: true | MovimientoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MovimientoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MovimientoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MovimientoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MovimientoMaxAggregateInputType
  }

  export type GetMovimientoAggregateType<T extends MovimientoAggregateArgs> = {
        [P in keyof T & keyof AggregateMovimiento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMovimiento[P]>
      : GetScalarType<T[P], AggregateMovimiento[P]>
  }




  export type movimientoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: movimientoWhereInput
    orderBy?: movimientoOrderByWithAggregationInput | movimientoOrderByWithAggregationInput[]
    by: MovimientoScalarFieldEnum[] | MovimientoScalarFieldEnum
    having?: movimientoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MovimientoCountAggregateInputType | true
    _avg?: MovimientoAvgAggregateInputType
    _sum?: MovimientoSumAggregateInputType
    _min?: MovimientoMinAggregateInputType
    _max?: MovimientoMaxAggregateInputType
  }

  export type MovimientoGroupByOutputType = {
    movimiento_id: number
    cuenta_id: number
    tipo_movimiento_id: number
    monto: Decimal
    transferencia_id: number | null
    saldo_anterior: Decimal
    saldo_nuevo: Decimal
    descripcion: string | null
    fecha_creacion: Date | null
    fecha_modificacion: Date | null
    _count: MovimientoCountAggregateOutputType | null
    _avg: MovimientoAvgAggregateOutputType | null
    _sum: MovimientoSumAggregateOutputType | null
    _min: MovimientoMinAggregateOutputType | null
    _max: MovimientoMaxAggregateOutputType | null
  }

  type GetMovimientoGroupByPayload<T extends movimientoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MovimientoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MovimientoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MovimientoGroupByOutputType[P]>
            : GetScalarType<T[P], MovimientoGroupByOutputType[P]>
        }
      >
    >


  export type movimientoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    movimiento_id?: boolean
    cuenta_id?: boolean
    tipo_movimiento_id?: boolean
    monto?: boolean
    transferencia_id?: boolean
    saldo_anterior?: boolean
    saldo_nuevo?: boolean
    descripcion?: boolean
    fecha_creacion?: boolean
    fecha_modificacion?: boolean
    cuenta?: boolean | cuentaDefaultArgs<ExtArgs>
    tipo_movimiento?: boolean | tipo_movimientoDefaultArgs<ExtArgs>
    Transferencia?: boolean | movimiento$TransferenciaArgs<ExtArgs>
  }, ExtArgs["result"]["movimiento"]>


  export type movimientoSelectScalar = {
    movimiento_id?: boolean
    cuenta_id?: boolean
    tipo_movimiento_id?: boolean
    monto?: boolean
    transferencia_id?: boolean
    saldo_anterior?: boolean
    saldo_nuevo?: boolean
    descripcion?: boolean
    fecha_creacion?: boolean
    fecha_modificacion?: boolean
  }

  export type movimientoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cuenta?: boolean | cuentaDefaultArgs<ExtArgs>
    tipo_movimiento?: boolean | tipo_movimientoDefaultArgs<ExtArgs>
    Transferencia?: boolean | movimiento$TransferenciaArgs<ExtArgs>
  }

  export type $movimientoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "movimiento"
    objects: {
      cuenta: Prisma.$cuentaPayload<ExtArgs>
      tipo_movimiento: Prisma.$tipo_movimientoPayload<ExtArgs>
      Transferencia: Prisma.$TransferenciaPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      movimiento_id: number
      cuenta_id: number
      tipo_movimiento_id: number
      monto: Prisma.Decimal
      transferencia_id: number | null
      saldo_anterior: Prisma.Decimal
      saldo_nuevo: Prisma.Decimal
      descripcion: string | null
      fecha_creacion: Date | null
      fecha_modificacion: Date | null
    }, ExtArgs["result"]["movimiento"]>
    composites: {}
  }

  type movimientoGetPayload<S extends boolean | null | undefined | movimientoDefaultArgs> = $Result.GetResult<Prisma.$movimientoPayload, S>

  type movimientoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<movimientoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MovimientoCountAggregateInputType | true
    }

  export interface movimientoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['movimiento'], meta: { name: 'movimiento' } }
    /**
     * Find zero or one Movimiento that matches the filter.
     * @param {movimientoFindUniqueArgs} args - Arguments to find a Movimiento
     * @example
     * // Get one Movimiento
     * const movimiento = await prisma.movimiento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends movimientoFindUniqueArgs>(args: SelectSubset<T, movimientoFindUniqueArgs<ExtArgs>>): Prisma__movimientoClient<$Result.GetResult<Prisma.$movimientoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Movimiento that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {movimientoFindUniqueOrThrowArgs} args - Arguments to find a Movimiento
     * @example
     * // Get one Movimiento
     * const movimiento = await prisma.movimiento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends movimientoFindUniqueOrThrowArgs>(args: SelectSubset<T, movimientoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__movimientoClient<$Result.GetResult<Prisma.$movimientoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Movimiento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {movimientoFindFirstArgs} args - Arguments to find a Movimiento
     * @example
     * // Get one Movimiento
     * const movimiento = await prisma.movimiento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends movimientoFindFirstArgs>(args?: SelectSubset<T, movimientoFindFirstArgs<ExtArgs>>): Prisma__movimientoClient<$Result.GetResult<Prisma.$movimientoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Movimiento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {movimientoFindFirstOrThrowArgs} args - Arguments to find a Movimiento
     * @example
     * // Get one Movimiento
     * const movimiento = await prisma.movimiento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends movimientoFindFirstOrThrowArgs>(args?: SelectSubset<T, movimientoFindFirstOrThrowArgs<ExtArgs>>): Prisma__movimientoClient<$Result.GetResult<Prisma.$movimientoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Movimientos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {movimientoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Movimientos
     * const movimientos = await prisma.movimiento.findMany()
     * 
     * // Get first 10 Movimientos
     * const movimientos = await prisma.movimiento.findMany({ take: 10 })
     * 
     * // Only select the `movimiento_id`
     * const movimientoWithMovimiento_idOnly = await prisma.movimiento.findMany({ select: { movimiento_id: true } })
     * 
     */
    findMany<T extends movimientoFindManyArgs>(args?: SelectSubset<T, movimientoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$movimientoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Movimiento.
     * @param {movimientoCreateArgs} args - Arguments to create a Movimiento.
     * @example
     * // Create one Movimiento
     * const Movimiento = await prisma.movimiento.create({
     *   data: {
     *     // ... data to create a Movimiento
     *   }
     * })
     * 
     */
    create<T extends movimientoCreateArgs>(args: SelectSubset<T, movimientoCreateArgs<ExtArgs>>): Prisma__movimientoClient<$Result.GetResult<Prisma.$movimientoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Movimientos.
     * @param {movimientoCreateManyArgs} args - Arguments to create many Movimientos.
     * @example
     * // Create many Movimientos
     * const movimiento = await prisma.movimiento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends movimientoCreateManyArgs>(args?: SelectSubset<T, movimientoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Movimiento.
     * @param {movimientoDeleteArgs} args - Arguments to delete one Movimiento.
     * @example
     * // Delete one Movimiento
     * const Movimiento = await prisma.movimiento.delete({
     *   where: {
     *     // ... filter to delete one Movimiento
     *   }
     * })
     * 
     */
    delete<T extends movimientoDeleteArgs>(args: SelectSubset<T, movimientoDeleteArgs<ExtArgs>>): Prisma__movimientoClient<$Result.GetResult<Prisma.$movimientoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Movimiento.
     * @param {movimientoUpdateArgs} args - Arguments to update one Movimiento.
     * @example
     * // Update one Movimiento
     * const movimiento = await prisma.movimiento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends movimientoUpdateArgs>(args: SelectSubset<T, movimientoUpdateArgs<ExtArgs>>): Prisma__movimientoClient<$Result.GetResult<Prisma.$movimientoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Movimientos.
     * @param {movimientoDeleteManyArgs} args - Arguments to filter Movimientos to delete.
     * @example
     * // Delete a few Movimientos
     * const { count } = await prisma.movimiento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends movimientoDeleteManyArgs>(args?: SelectSubset<T, movimientoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Movimientos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {movimientoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Movimientos
     * const movimiento = await prisma.movimiento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends movimientoUpdateManyArgs>(args: SelectSubset<T, movimientoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Movimiento.
     * @param {movimientoUpsertArgs} args - Arguments to update or create a Movimiento.
     * @example
     * // Update or create a Movimiento
     * const movimiento = await prisma.movimiento.upsert({
     *   create: {
     *     // ... data to create a Movimiento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Movimiento we want to update
     *   }
     * })
     */
    upsert<T extends movimientoUpsertArgs>(args: SelectSubset<T, movimientoUpsertArgs<ExtArgs>>): Prisma__movimientoClient<$Result.GetResult<Prisma.$movimientoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Movimientos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {movimientoCountArgs} args - Arguments to filter Movimientos to count.
     * @example
     * // Count the number of Movimientos
     * const count = await prisma.movimiento.count({
     *   where: {
     *     // ... the filter for the Movimientos we want to count
     *   }
     * })
    **/
    count<T extends movimientoCountArgs>(
      args?: Subset<T, movimientoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MovimientoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Movimiento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimientoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MovimientoAggregateArgs>(args: Subset<T, MovimientoAggregateArgs>): Prisma.PrismaPromise<GetMovimientoAggregateType<T>>

    /**
     * Group by Movimiento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {movimientoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends movimientoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: movimientoGroupByArgs['orderBy'] }
        : { orderBy?: movimientoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, movimientoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMovimientoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the movimiento model
   */
  readonly fields: movimientoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for movimiento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__movimientoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cuenta<T extends cuentaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, cuentaDefaultArgs<ExtArgs>>): Prisma__cuentaClient<$Result.GetResult<Prisma.$cuentaPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    tipo_movimiento<T extends tipo_movimientoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tipo_movimientoDefaultArgs<ExtArgs>>): Prisma__tipo_movimientoClient<$Result.GetResult<Prisma.$tipo_movimientoPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    Transferencia<T extends movimiento$TransferenciaArgs<ExtArgs> = {}>(args?: Subset<T, movimiento$TransferenciaArgs<ExtArgs>>): Prisma__TransferenciaClient<$Result.GetResult<Prisma.$TransferenciaPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the movimiento model
   */ 
  interface movimientoFieldRefs {
    readonly movimiento_id: FieldRef<"movimiento", 'Int'>
    readonly cuenta_id: FieldRef<"movimiento", 'Int'>
    readonly tipo_movimiento_id: FieldRef<"movimiento", 'Int'>
    readonly monto: FieldRef<"movimiento", 'Decimal'>
    readonly transferencia_id: FieldRef<"movimiento", 'Int'>
    readonly saldo_anterior: FieldRef<"movimiento", 'Decimal'>
    readonly saldo_nuevo: FieldRef<"movimiento", 'Decimal'>
    readonly descripcion: FieldRef<"movimiento", 'String'>
    readonly fecha_creacion: FieldRef<"movimiento", 'DateTime'>
    readonly fecha_modificacion: FieldRef<"movimiento", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * movimiento findUnique
   */
  export type movimientoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movimiento
     */
    select?: movimientoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movimientoInclude<ExtArgs> | null
    /**
     * Filter, which movimiento to fetch.
     */
    where: movimientoWhereUniqueInput
  }

  /**
   * movimiento findUniqueOrThrow
   */
  export type movimientoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movimiento
     */
    select?: movimientoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movimientoInclude<ExtArgs> | null
    /**
     * Filter, which movimiento to fetch.
     */
    where: movimientoWhereUniqueInput
  }

  /**
   * movimiento findFirst
   */
  export type movimientoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movimiento
     */
    select?: movimientoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movimientoInclude<ExtArgs> | null
    /**
     * Filter, which movimiento to fetch.
     */
    where?: movimientoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of movimientos to fetch.
     */
    orderBy?: movimientoOrderByWithRelationInput | movimientoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for movimientos.
     */
    cursor?: movimientoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` movimientos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` movimientos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of movimientos.
     */
    distinct?: MovimientoScalarFieldEnum | MovimientoScalarFieldEnum[]
  }

  /**
   * movimiento findFirstOrThrow
   */
  export type movimientoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movimiento
     */
    select?: movimientoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movimientoInclude<ExtArgs> | null
    /**
     * Filter, which movimiento to fetch.
     */
    where?: movimientoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of movimientos to fetch.
     */
    orderBy?: movimientoOrderByWithRelationInput | movimientoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for movimientos.
     */
    cursor?: movimientoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` movimientos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` movimientos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of movimientos.
     */
    distinct?: MovimientoScalarFieldEnum | MovimientoScalarFieldEnum[]
  }

  /**
   * movimiento findMany
   */
  export type movimientoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movimiento
     */
    select?: movimientoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movimientoInclude<ExtArgs> | null
    /**
     * Filter, which movimientos to fetch.
     */
    where?: movimientoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of movimientos to fetch.
     */
    orderBy?: movimientoOrderByWithRelationInput | movimientoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing movimientos.
     */
    cursor?: movimientoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` movimientos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` movimientos.
     */
    skip?: number
    distinct?: MovimientoScalarFieldEnum | MovimientoScalarFieldEnum[]
  }

  /**
   * movimiento create
   */
  export type movimientoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movimiento
     */
    select?: movimientoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movimientoInclude<ExtArgs> | null
    /**
     * The data needed to create a movimiento.
     */
    data: XOR<movimientoCreateInput, movimientoUncheckedCreateInput>
  }

  /**
   * movimiento createMany
   */
  export type movimientoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many movimientos.
     */
    data: movimientoCreateManyInput | movimientoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * movimiento update
   */
  export type movimientoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movimiento
     */
    select?: movimientoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movimientoInclude<ExtArgs> | null
    /**
     * The data needed to update a movimiento.
     */
    data: XOR<movimientoUpdateInput, movimientoUncheckedUpdateInput>
    /**
     * Choose, which movimiento to update.
     */
    where: movimientoWhereUniqueInput
  }

  /**
   * movimiento updateMany
   */
  export type movimientoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update movimientos.
     */
    data: XOR<movimientoUpdateManyMutationInput, movimientoUncheckedUpdateManyInput>
    /**
     * Filter which movimientos to update
     */
    where?: movimientoWhereInput
  }

  /**
   * movimiento upsert
   */
  export type movimientoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movimiento
     */
    select?: movimientoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movimientoInclude<ExtArgs> | null
    /**
     * The filter to search for the movimiento to update in case it exists.
     */
    where: movimientoWhereUniqueInput
    /**
     * In case the movimiento found by the `where` argument doesn't exist, create a new movimiento with this data.
     */
    create: XOR<movimientoCreateInput, movimientoUncheckedCreateInput>
    /**
     * In case the movimiento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<movimientoUpdateInput, movimientoUncheckedUpdateInput>
  }

  /**
   * movimiento delete
   */
  export type movimientoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movimiento
     */
    select?: movimientoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movimientoInclude<ExtArgs> | null
    /**
     * Filter which movimiento to delete.
     */
    where: movimientoWhereUniqueInput
  }

  /**
   * movimiento deleteMany
   */
  export type movimientoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which movimientos to delete
     */
    where?: movimientoWhereInput
  }

  /**
   * movimiento.Transferencia
   */
  export type movimiento$TransferenciaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transferencia
     */
    select?: TransferenciaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransferenciaInclude<ExtArgs> | null
    where?: TransferenciaWhereInput
  }

  /**
   * movimiento without action
   */
  export type movimientoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movimiento
     */
    select?: movimientoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movimientoInclude<ExtArgs> | null
  }


  /**
   * Model tipo_cuenta
   */

  export type AggregateTipo_cuenta = {
    _count: Tipo_cuentaCountAggregateOutputType | null
    _avg: Tipo_cuentaAvgAggregateOutputType | null
    _sum: Tipo_cuentaSumAggregateOutputType | null
    _min: Tipo_cuentaMinAggregateOutputType | null
    _max: Tipo_cuentaMaxAggregateOutputType | null
  }

  export type Tipo_cuentaAvgAggregateOutputType = {
    tipo_cuenta_id: number | null
  }

  export type Tipo_cuentaSumAggregateOutputType = {
    tipo_cuenta_id: number | null
  }

  export type Tipo_cuentaMinAggregateOutputType = {
    tipo_cuenta_id: number | null
    nombre: string | null
    descripcion: string | null
    fecha_creacion: Date | null
    fecha_modificacion: Date | null
  }

  export type Tipo_cuentaMaxAggregateOutputType = {
    tipo_cuenta_id: number | null
    nombre: string | null
    descripcion: string | null
    fecha_creacion: Date | null
    fecha_modificacion: Date | null
  }

  export type Tipo_cuentaCountAggregateOutputType = {
    tipo_cuenta_id: number
    nombre: number
    descripcion: number
    fecha_creacion: number
    fecha_modificacion: number
    _all: number
  }


  export type Tipo_cuentaAvgAggregateInputType = {
    tipo_cuenta_id?: true
  }

  export type Tipo_cuentaSumAggregateInputType = {
    tipo_cuenta_id?: true
  }

  export type Tipo_cuentaMinAggregateInputType = {
    tipo_cuenta_id?: true
    nombre?: true
    descripcion?: true
    fecha_creacion?: true
    fecha_modificacion?: true
  }

  export type Tipo_cuentaMaxAggregateInputType = {
    tipo_cuenta_id?: true
    nombre?: true
    descripcion?: true
    fecha_creacion?: true
    fecha_modificacion?: true
  }

  export type Tipo_cuentaCountAggregateInputType = {
    tipo_cuenta_id?: true
    nombre?: true
    descripcion?: true
    fecha_creacion?: true
    fecha_modificacion?: true
    _all?: true
  }

  export type Tipo_cuentaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tipo_cuenta to aggregate.
     */
    where?: tipo_cuentaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipo_cuentas to fetch.
     */
    orderBy?: tipo_cuentaOrderByWithRelationInput | tipo_cuentaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tipo_cuentaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipo_cuentas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipo_cuentas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tipo_cuentas
    **/
    _count?: true | Tipo_cuentaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tipo_cuentaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tipo_cuentaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tipo_cuentaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tipo_cuentaMaxAggregateInputType
  }

  export type GetTipo_cuentaAggregateType<T extends Tipo_cuentaAggregateArgs> = {
        [P in keyof T & keyof AggregateTipo_cuenta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTipo_cuenta[P]>
      : GetScalarType<T[P], AggregateTipo_cuenta[P]>
  }




  export type tipo_cuentaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tipo_cuentaWhereInput
    orderBy?: tipo_cuentaOrderByWithAggregationInput | tipo_cuentaOrderByWithAggregationInput[]
    by: Tipo_cuentaScalarFieldEnum[] | Tipo_cuentaScalarFieldEnum
    having?: tipo_cuentaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tipo_cuentaCountAggregateInputType | true
    _avg?: Tipo_cuentaAvgAggregateInputType
    _sum?: Tipo_cuentaSumAggregateInputType
    _min?: Tipo_cuentaMinAggregateInputType
    _max?: Tipo_cuentaMaxAggregateInputType
  }

  export type Tipo_cuentaGroupByOutputType = {
    tipo_cuenta_id: number
    nombre: string
    descripcion: string
    fecha_creacion: Date | null
    fecha_modificacion: Date | null
    _count: Tipo_cuentaCountAggregateOutputType | null
    _avg: Tipo_cuentaAvgAggregateOutputType | null
    _sum: Tipo_cuentaSumAggregateOutputType | null
    _min: Tipo_cuentaMinAggregateOutputType | null
    _max: Tipo_cuentaMaxAggregateOutputType | null
  }

  type GetTipo_cuentaGroupByPayload<T extends tipo_cuentaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tipo_cuentaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tipo_cuentaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tipo_cuentaGroupByOutputType[P]>
            : GetScalarType<T[P], Tipo_cuentaGroupByOutputType[P]>
        }
      >
    >


  export type tipo_cuentaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tipo_cuenta_id?: boolean
    nombre?: boolean
    descripcion?: boolean
    fecha_creacion?: boolean
    fecha_modificacion?: boolean
    cuenta?: boolean | tipo_cuenta$cuentaArgs<ExtArgs>
    _count?: boolean | Tipo_cuentaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tipo_cuenta"]>


  export type tipo_cuentaSelectScalar = {
    tipo_cuenta_id?: boolean
    nombre?: boolean
    descripcion?: boolean
    fecha_creacion?: boolean
    fecha_modificacion?: boolean
  }

  export type tipo_cuentaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cuenta?: boolean | tipo_cuenta$cuentaArgs<ExtArgs>
    _count?: boolean | Tipo_cuentaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $tipo_cuentaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tipo_cuenta"
    objects: {
      cuenta: Prisma.$cuentaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      tipo_cuenta_id: number
      nombre: string
      descripcion: string
      fecha_creacion: Date | null
      fecha_modificacion: Date | null
    }, ExtArgs["result"]["tipo_cuenta"]>
    composites: {}
  }

  type tipo_cuentaGetPayload<S extends boolean | null | undefined | tipo_cuentaDefaultArgs> = $Result.GetResult<Prisma.$tipo_cuentaPayload, S>

  type tipo_cuentaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<tipo_cuentaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Tipo_cuentaCountAggregateInputType | true
    }

  export interface tipo_cuentaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tipo_cuenta'], meta: { name: 'tipo_cuenta' } }
    /**
     * Find zero or one Tipo_cuenta that matches the filter.
     * @param {tipo_cuentaFindUniqueArgs} args - Arguments to find a Tipo_cuenta
     * @example
     * // Get one Tipo_cuenta
     * const tipo_cuenta = await prisma.tipo_cuenta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tipo_cuentaFindUniqueArgs>(args: SelectSubset<T, tipo_cuentaFindUniqueArgs<ExtArgs>>): Prisma__tipo_cuentaClient<$Result.GetResult<Prisma.$tipo_cuentaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Tipo_cuenta that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {tipo_cuentaFindUniqueOrThrowArgs} args - Arguments to find a Tipo_cuenta
     * @example
     * // Get one Tipo_cuenta
     * const tipo_cuenta = await prisma.tipo_cuenta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tipo_cuentaFindUniqueOrThrowArgs>(args: SelectSubset<T, tipo_cuentaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tipo_cuentaClient<$Result.GetResult<Prisma.$tipo_cuentaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Tipo_cuenta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipo_cuentaFindFirstArgs} args - Arguments to find a Tipo_cuenta
     * @example
     * // Get one Tipo_cuenta
     * const tipo_cuenta = await prisma.tipo_cuenta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tipo_cuentaFindFirstArgs>(args?: SelectSubset<T, tipo_cuentaFindFirstArgs<ExtArgs>>): Prisma__tipo_cuentaClient<$Result.GetResult<Prisma.$tipo_cuentaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Tipo_cuenta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipo_cuentaFindFirstOrThrowArgs} args - Arguments to find a Tipo_cuenta
     * @example
     * // Get one Tipo_cuenta
     * const tipo_cuenta = await prisma.tipo_cuenta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tipo_cuentaFindFirstOrThrowArgs>(args?: SelectSubset<T, tipo_cuentaFindFirstOrThrowArgs<ExtArgs>>): Prisma__tipo_cuentaClient<$Result.GetResult<Prisma.$tipo_cuentaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Tipo_cuentas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipo_cuentaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tipo_cuentas
     * const tipo_cuentas = await prisma.tipo_cuenta.findMany()
     * 
     * // Get first 10 Tipo_cuentas
     * const tipo_cuentas = await prisma.tipo_cuenta.findMany({ take: 10 })
     * 
     * // Only select the `tipo_cuenta_id`
     * const tipo_cuentaWithTipo_cuenta_idOnly = await prisma.tipo_cuenta.findMany({ select: { tipo_cuenta_id: true } })
     * 
     */
    findMany<T extends tipo_cuentaFindManyArgs>(args?: SelectSubset<T, tipo_cuentaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tipo_cuentaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Tipo_cuenta.
     * @param {tipo_cuentaCreateArgs} args - Arguments to create a Tipo_cuenta.
     * @example
     * // Create one Tipo_cuenta
     * const Tipo_cuenta = await prisma.tipo_cuenta.create({
     *   data: {
     *     // ... data to create a Tipo_cuenta
     *   }
     * })
     * 
     */
    create<T extends tipo_cuentaCreateArgs>(args: SelectSubset<T, tipo_cuentaCreateArgs<ExtArgs>>): Prisma__tipo_cuentaClient<$Result.GetResult<Prisma.$tipo_cuentaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Tipo_cuentas.
     * @param {tipo_cuentaCreateManyArgs} args - Arguments to create many Tipo_cuentas.
     * @example
     * // Create many Tipo_cuentas
     * const tipo_cuenta = await prisma.tipo_cuenta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tipo_cuentaCreateManyArgs>(args?: SelectSubset<T, tipo_cuentaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tipo_cuenta.
     * @param {tipo_cuentaDeleteArgs} args - Arguments to delete one Tipo_cuenta.
     * @example
     * // Delete one Tipo_cuenta
     * const Tipo_cuenta = await prisma.tipo_cuenta.delete({
     *   where: {
     *     // ... filter to delete one Tipo_cuenta
     *   }
     * })
     * 
     */
    delete<T extends tipo_cuentaDeleteArgs>(args: SelectSubset<T, tipo_cuentaDeleteArgs<ExtArgs>>): Prisma__tipo_cuentaClient<$Result.GetResult<Prisma.$tipo_cuentaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Tipo_cuenta.
     * @param {tipo_cuentaUpdateArgs} args - Arguments to update one Tipo_cuenta.
     * @example
     * // Update one Tipo_cuenta
     * const tipo_cuenta = await prisma.tipo_cuenta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tipo_cuentaUpdateArgs>(args: SelectSubset<T, tipo_cuentaUpdateArgs<ExtArgs>>): Prisma__tipo_cuentaClient<$Result.GetResult<Prisma.$tipo_cuentaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Tipo_cuentas.
     * @param {tipo_cuentaDeleteManyArgs} args - Arguments to filter Tipo_cuentas to delete.
     * @example
     * // Delete a few Tipo_cuentas
     * const { count } = await prisma.tipo_cuenta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tipo_cuentaDeleteManyArgs>(args?: SelectSubset<T, tipo_cuentaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tipo_cuentas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipo_cuentaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tipo_cuentas
     * const tipo_cuenta = await prisma.tipo_cuenta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tipo_cuentaUpdateManyArgs>(args: SelectSubset<T, tipo_cuentaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tipo_cuenta.
     * @param {tipo_cuentaUpsertArgs} args - Arguments to update or create a Tipo_cuenta.
     * @example
     * // Update or create a Tipo_cuenta
     * const tipo_cuenta = await prisma.tipo_cuenta.upsert({
     *   create: {
     *     // ... data to create a Tipo_cuenta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tipo_cuenta we want to update
     *   }
     * })
     */
    upsert<T extends tipo_cuentaUpsertArgs>(args: SelectSubset<T, tipo_cuentaUpsertArgs<ExtArgs>>): Prisma__tipo_cuentaClient<$Result.GetResult<Prisma.$tipo_cuentaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Tipo_cuentas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipo_cuentaCountArgs} args - Arguments to filter Tipo_cuentas to count.
     * @example
     * // Count the number of Tipo_cuentas
     * const count = await prisma.tipo_cuenta.count({
     *   where: {
     *     // ... the filter for the Tipo_cuentas we want to count
     *   }
     * })
    **/
    count<T extends tipo_cuentaCountArgs>(
      args?: Subset<T, tipo_cuentaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tipo_cuentaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tipo_cuenta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tipo_cuentaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Tipo_cuentaAggregateArgs>(args: Subset<T, Tipo_cuentaAggregateArgs>): Prisma.PrismaPromise<GetTipo_cuentaAggregateType<T>>

    /**
     * Group by Tipo_cuenta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipo_cuentaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tipo_cuentaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tipo_cuentaGroupByArgs['orderBy'] }
        : { orderBy?: tipo_cuentaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tipo_cuentaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTipo_cuentaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tipo_cuenta model
   */
  readonly fields: tipo_cuentaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tipo_cuenta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tipo_cuentaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cuenta<T extends tipo_cuenta$cuentaArgs<ExtArgs> = {}>(args?: Subset<T, tipo_cuenta$cuentaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cuentaPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tipo_cuenta model
   */ 
  interface tipo_cuentaFieldRefs {
    readonly tipo_cuenta_id: FieldRef<"tipo_cuenta", 'Int'>
    readonly nombre: FieldRef<"tipo_cuenta", 'String'>
    readonly descripcion: FieldRef<"tipo_cuenta", 'String'>
    readonly fecha_creacion: FieldRef<"tipo_cuenta", 'DateTime'>
    readonly fecha_modificacion: FieldRef<"tipo_cuenta", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * tipo_cuenta findUnique
   */
  export type tipo_cuentaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_cuenta
     */
    select?: tipo_cuentaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_cuentaInclude<ExtArgs> | null
    /**
     * Filter, which tipo_cuenta to fetch.
     */
    where: tipo_cuentaWhereUniqueInput
  }

  /**
   * tipo_cuenta findUniqueOrThrow
   */
  export type tipo_cuentaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_cuenta
     */
    select?: tipo_cuentaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_cuentaInclude<ExtArgs> | null
    /**
     * Filter, which tipo_cuenta to fetch.
     */
    where: tipo_cuentaWhereUniqueInput
  }

  /**
   * tipo_cuenta findFirst
   */
  export type tipo_cuentaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_cuenta
     */
    select?: tipo_cuentaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_cuentaInclude<ExtArgs> | null
    /**
     * Filter, which tipo_cuenta to fetch.
     */
    where?: tipo_cuentaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipo_cuentas to fetch.
     */
    orderBy?: tipo_cuentaOrderByWithRelationInput | tipo_cuentaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tipo_cuentas.
     */
    cursor?: tipo_cuentaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipo_cuentas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipo_cuentas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tipo_cuentas.
     */
    distinct?: Tipo_cuentaScalarFieldEnum | Tipo_cuentaScalarFieldEnum[]
  }

  /**
   * tipo_cuenta findFirstOrThrow
   */
  export type tipo_cuentaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_cuenta
     */
    select?: tipo_cuentaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_cuentaInclude<ExtArgs> | null
    /**
     * Filter, which tipo_cuenta to fetch.
     */
    where?: tipo_cuentaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipo_cuentas to fetch.
     */
    orderBy?: tipo_cuentaOrderByWithRelationInput | tipo_cuentaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tipo_cuentas.
     */
    cursor?: tipo_cuentaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipo_cuentas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipo_cuentas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tipo_cuentas.
     */
    distinct?: Tipo_cuentaScalarFieldEnum | Tipo_cuentaScalarFieldEnum[]
  }

  /**
   * tipo_cuenta findMany
   */
  export type tipo_cuentaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_cuenta
     */
    select?: tipo_cuentaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_cuentaInclude<ExtArgs> | null
    /**
     * Filter, which tipo_cuentas to fetch.
     */
    where?: tipo_cuentaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipo_cuentas to fetch.
     */
    orderBy?: tipo_cuentaOrderByWithRelationInput | tipo_cuentaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tipo_cuentas.
     */
    cursor?: tipo_cuentaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipo_cuentas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipo_cuentas.
     */
    skip?: number
    distinct?: Tipo_cuentaScalarFieldEnum | Tipo_cuentaScalarFieldEnum[]
  }

  /**
   * tipo_cuenta create
   */
  export type tipo_cuentaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_cuenta
     */
    select?: tipo_cuentaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_cuentaInclude<ExtArgs> | null
    /**
     * The data needed to create a tipo_cuenta.
     */
    data: XOR<tipo_cuentaCreateInput, tipo_cuentaUncheckedCreateInput>
  }

  /**
   * tipo_cuenta createMany
   */
  export type tipo_cuentaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tipo_cuentas.
     */
    data: tipo_cuentaCreateManyInput | tipo_cuentaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tipo_cuenta update
   */
  export type tipo_cuentaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_cuenta
     */
    select?: tipo_cuentaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_cuentaInclude<ExtArgs> | null
    /**
     * The data needed to update a tipo_cuenta.
     */
    data: XOR<tipo_cuentaUpdateInput, tipo_cuentaUncheckedUpdateInput>
    /**
     * Choose, which tipo_cuenta to update.
     */
    where: tipo_cuentaWhereUniqueInput
  }

  /**
   * tipo_cuenta updateMany
   */
  export type tipo_cuentaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tipo_cuentas.
     */
    data: XOR<tipo_cuentaUpdateManyMutationInput, tipo_cuentaUncheckedUpdateManyInput>
    /**
     * Filter which tipo_cuentas to update
     */
    where?: tipo_cuentaWhereInput
  }

  /**
   * tipo_cuenta upsert
   */
  export type tipo_cuentaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_cuenta
     */
    select?: tipo_cuentaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_cuentaInclude<ExtArgs> | null
    /**
     * The filter to search for the tipo_cuenta to update in case it exists.
     */
    where: tipo_cuentaWhereUniqueInput
    /**
     * In case the tipo_cuenta found by the `where` argument doesn't exist, create a new tipo_cuenta with this data.
     */
    create: XOR<tipo_cuentaCreateInput, tipo_cuentaUncheckedCreateInput>
    /**
     * In case the tipo_cuenta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tipo_cuentaUpdateInput, tipo_cuentaUncheckedUpdateInput>
  }

  /**
   * tipo_cuenta delete
   */
  export type tipo_cuentaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_cuenta
     */
    select?: tipo_cuentaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_cuentaInclude<ExtArgs> | null
    /**
     * Filter which tipo_cuenta to delete.
     */
    where: tipo_cuentaWhereUniqueInput
  }

  /**
   * tipo_cuenta deleteMany
   */
  export type tipo_cuentaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tipo_cuentas to delete
     */
    where?: tipo_cuentaWhereInput
  }

  /**
   * tipo_cuenta.cuenta
   */
  export type tipo_cuenta$cuentaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cuenta
     */
    select?: cuentaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cuentaInclude<ExtArgs> | null
    where?: cuentaWhereInput
    orderBy?: cuentaOrderByWithRelationInput | cuentaOrderByWithRelationInput[]
    cursor?: cuentaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CuentaScalarFieldEnum | CuentaScalarFieldEnum[]
  }

  /**
   * tipo_cuenta without action
   */
  export type tipo_cuentaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_cuenta
     */
    select?: tipo_cuentaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_cuentaInclude<ExtArgs> | null
  }


  /**
   * Model tipo_movimiento
   */

  export type AggregateTipo_movimiento = {
    _count: Tipo_movimientoCountAggregateOutputType | null
    _avg: Tipo_movimientoAvgAggregateOutputType | null
    _sum: Tipo_movimientoSumAggregateOutputType | null
    _min: Tipo_movimientoMinAggregateOutputType | null
    _max: Tipo_movimientoMaxAggregateOutputType | null
  }

  export type Tipo_movimientoAvgAggregateOutputType = {
    tipo_movimiento_id: number | null
  }

  export type Tipo_movimientoSumAggregateOutputType = {
    tipo_movimiento_id: number | null
  }

  export type Tipo_movimientoMinAggregateOutputType = {
    tipo_movimiento_id: number | null
    nombre: string | null
    descripcion: string | null
    fecha_creacion: Date | null
    fecha_modificacion: Date | null
  }

  export type Tipo_movimientoMaxAggregateOutputType = {
    tipo_movimiento_id: number | null
    nombre: string | null
    descripcion: string | null
    fecha_creacion: Date | null
    fecha_modificacion: Date | null
  }

  export type Tipo_movimientoCountAggregateOutputType = {
    tipo_movimiento_id: number
    nombre: number
    descripcion: number
    fecha_creacion: number
    fecha_modificacion: number
    _all: number
  }


  export type Tipo_movimientoAvgAggregateInputType = {
    tipo_movimiento_id?: true
  }

  export type Tipo_movimientoSumAggregateInputType = {
    tipo_movimiento_id?: true
  }

  export type Tipo_movimientoMinAggregateInputType = {
    tipo_movimiento_id?: true
    nombre?: true
    descripcion?: true
    fecha_creacion?: true
    fecha_modificacion?: true
  }

  export type Tipo_movimientoMaxAggregateInputType = {
    tipo_movimiento_id?: true
    nombre?: true
    descripcion?: true
    fecha_creacion?: true
    fecha_modificacion?: true
  }

  export type Tipo_movimientoCountAggregateInputType = {
    tipo_movimiento_id?: true
    nombre?: true
    descripcion?: true
    fecha_creacion?: true
    fecha_modificacion?: true
    _all?: true
  }

  export type Tipo_movimientoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tipo_movimiento to aggregate.
     */
    where?: tipo_movimientoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipo_movimientos to fetch.
     */
    orderBy?: tipo_movimientoOrderByWithRelationInput | tipo_movimientoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tipo_movimientoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipo_movimientos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipo_movimientos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tipo_movimientos
    **/
    _count?: true | Tipo_movimientoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tipo_movimientoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tipo_movimientoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tipo_movimientoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tipo_movimientoMaxAggregateInputType
  }

  export type GetTipo_movimientoAggregateType<T extends Tipo_movimientoAggregateArgs> = {
        [P in keyof T & keyof AggregateTipo_movimiento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTipo_movimiento[P]>
      : GetScalarType<T[P], AggregateTipo_movimiento[P]>
  }




  export type tipo_movimientoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tipo_movimientoWhereInput
    orderBy?: tipo_movimientoOrderByWithAggregationInput | tipo_movimientoOrderByWithAggregationInput[]
    by: Tipo_movimientoScalarFieldEnum[] | Tipo_movimientoScalarFieldEnum
    having?: tipo_movimientoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tipo_movimientoCountAggregateInputType | true
    _avg?: Tipo_movimientoAvgAggregateInputType
    _sum?: Tipo_movimientoSumAggregateInputType
    _min?: Tipo_movimientoMinAggregateInputType
    _max?: Tipo_movimientoMaxAggregateInputType
  }

  export type Tipo_movimientoGroupByOutputType = {
    tipo_movimiento_id: number
    nombre: string
    descripcion: string
    fecha_creacion: Date | null
    fecha_modificacion: Date | null
    _count: Tipo_movimientoCountAggregateOutputType | null
    _avg: Tipo_movimientoAvgAggregateOutputType | null
    _sum: Tipo_movimientoSumAggregateOutputType | null
    _min: Tipo_movimientoMinAggregateOutputType | null
    _max: Tipo_movimientoMaxAggregateOutputType | null
  }

  type GetTipo_movimientoGroupByPayload<T extends tipo_movimientoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tipo_movimientoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tipo_movimientoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tipo_movimientoGroupByOutputType[P]>
            : GetScalarType<T[P], Tipo_movimientoGroupByOutputType[P]>
        }
      >
    >


  export type tipo_movimientoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tipo_movimiento_id?: boolean
    nombre?: boolean
    descripcion?: boolean
    fecha_creacion?: boolean
    fecha_modificacion?: boolean
    movimiento?: boolean | tipo_movimiento$movimientoArgs<ExtArgs>
    _count?: boolean | Tipo_movimientoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tipo_movimiento"]>


  export type tipo_movimientoSelectScalar = {
    tipo_movimiento_id?: boolean
    nombre?: boolean
    descripcion?: boolean
    fecha_creacion?: boolean
    fecha_modificacion?: boolean
  }

  export type tipo_movimientoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movimiento?: boolean | tipo_movimiento$movimientoArgs<ExtArgs>
    _count?: boolean | Tipo_movimientoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $tipo_movimientoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tipo_movimiento"
    objects: {
      movimiento: Prisma.$movimientoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      tipo_movimiento_id: number
      nombre: string
      descripcion: string
      fecha_creacion: Date | null
      fecha_modificacion: Date | null
    }, ExtArgs["result"]["tipo_movimiento"]>
    composites: {}
  }

  type tipo_movimientoGetPayload<S extends boolean | null | undefined | tipo_movimientoDefaultArgs> = $Result.GetResult<Prisma.$tipo_movimientoPayload, S>

  type tipo_movimientoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<tipo_movimientoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Tipo_movimientoCountAggregateInputType | true
    }

  export interface tipo_movimientoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tipo_movimiento'], meta: { name: 'tipo_movimiento' } }
    /**
     * Find zero or one Tipo_movimiento that matches the filter.
     * @param {tipo_movimientoFindUniqueArgs} args - Arguments to find a Tipo_movimiento
     * @example
     * // Get one Tipo_movimiento
     * const tipo_movimiento = await prisma.tipo_movimiento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tipo_movimientoFindUniqueArgs>(args: SelectSubset<T, tipo_movimientoFindUniqueArgs<ExtArgs>>): Prisma__tipo_movimientoClient<$Result.GetResult<Prisma.$tipo_movimientoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Tipo_movimiento that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {tipo_movimientoFindUniqueOrThrowArgs} args - Arguments to find a Tipo_movimiento
     * @example
     * // Get one Tipo_movimiento
     * const tipo_movimiento = await prisma.tipo_movimiento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tipo_movimientoFindUniqueOrThrowArgs>(args: SelectSubset<T, tipo_movimientoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tipo_movimientoClient<$Result.GetResult<Prisma.$tipo_movimientoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Tipo_movimiento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipo_movimientoFindFirstArgs} args - Arguments to find a Tipo_movimiento
     * @example
     * // Get one Tipo_movimiento
     * const tipo_movimiento = await prisma.tipo_movimiento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tipo_movimientoFindFirstArgs>(args?: SelectSubset<T, tipo_movimientoFindFirstArgs<ExtArgs>>): Prisma__tipo_movimientoClient<$Result.GetResult<Prisma.$tipo_movimientoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Tipo_movimiento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipo_movimientoFindFirstOrThrowArgs} args - Arguments to find a Tipo_movimiento
     * @example
     * // Get one Tipo_movimiento
     * const tipo_movimiento = await prisma.tipo_movimiento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tipo_movimientoFindFirstOrThrowArgs>(args?: SelectSubset<T, tipo_movimientoFindFirstOrThrowArgs<ExtArgs>>): Prisma__tipo_movimientoClient<$Result.GetResult<Prisma.$tipo_movimientoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Tipo_movimientos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipo_movimientoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tipo_movimientos
     * const tipo_movimientos = await prisma.tipo_movimiento.findMany()
     * 
     * // Get first 10 Tipo_movimientos
     * const tipo_movimientos = await prisma.tipo_movimiento.findMany({ take: 10 })
     * 
     * // Only select the `tipo_movimiento_id`
     * const tipo_movimientoWithTipo_movimiento_idOnly = await prisma.tipo_movimiento.findMany({ select: { tipo_movimiento_id: true } })
     * 
     */
    findMany<T extends tipo_movimientoFindManyArgs>(args?: SelectSubset<T, tipo_movimientoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tipo_movimientoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Tipo_movimiento.
     * @param {tipo_movimientoCreateArgs} args - Arguments to create a Tipo_movimiento.
     * @example
     * // Create one Tipo_movimiento
     * const Tipo_movimiento = await prisma.tipo_movimiento.create({
     *   data: {
     *     // ... data to create a Tipo_movimiento
     *   }
     * })
     * 
     */
    create<T extends tipo_movimientoCreateArgs>(args: SelectSubset<T, tipo_movimientoCreateArgs<ExtArgs>>): Prisma__tipo_movimientoClient<$Result.GetResult<Prisma.$tipo_movimientoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Tipo_movimientos.
     * @param {tipo_movimientoCreateManyArgs} args - Arguments to create many Tipo_movimientos.
     * @example
     * // Create many Tipo_movimientos
     * const tipo_movimiento = await prisma.tipo_movimiento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tipo_movimientoCreateManyArgs>(args?: SelectSubset<T, tipo_movimientoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tipo_movimiento.
     * @param {tipo_movimientoDeleteArgs} args - Arguments to delete one Tipo_movimiento.
     * @example
     * // Delete one Tipo_movimiento
     * const Tipo_movimiento = await prisma.tipo_movimiento.delete({
     *   where: {
     *     // ... filter to delete one Tipo_movimiento
     *   }
     * })
     * 
     */
    delete<T extends tipo_movimientoDeleteArgs>(args: SelectSubset<T, tipo_movimientoDeleteArgs<ExtArgs>>): Prisma__tipo_movimientoClient<$Result.GetResult<Prisma.$tipo_movimientoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Tipo_movimiento.
     * @param {tipo_movimientoUpdateArgs} args - Arguments to update one Tipo_movimiento.
     * @example
     * // Update one Tipo_movimiento
     * const tipo_movimiento = await prisma.tipo_movimiento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tipo_movimientoUpdateArgs>(args: SelectSubset<T, tipo_movimientoUpdateArgs<ExtArgs>>): Prisma__tipo_movimientoClient<$Result.GetResult<Prisma.$tipo_movimientoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Tipo_movimientos.
     * @param {tipo_movimientoDeleteManyArgs} args - Arguments to filter Tipo_movimientos to delete.
     * @example
     * // Delete a few Tipo_movimientos
     * const { count } = await prisma.tipo_movimiento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tipo_movimientoDeleteManyArgs>(args?: SelectSubset<T, tipo_movimientoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tipo_movimientos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipo_movimientoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tipo_movimientos
     * const tipo_movimiento = await prisma.tipo_movimiento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tipo_movimientoUpdateManyArgs>(args: SelectSubset<T, tipo_movimientoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tipo_movimiento.
     * @param {tipo_movimientoUpsertArgs} args - Arguments to update or create a Tipo_movimiento.
     * @example
     * // Update or create a Tipo_movimiento
     * const tipo_movimiento = await prisma.tipo_movimiento.upsert({
     *   create: {
     *     // ... data to create a Tipo_movimiento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tipo_movimiento we want to update
     *   }
     * })
     */
    upsert<T extends tipo_movimientoUpsertArgs>(args: SelectSubset<T, tipo_movimientoUpsertArgs<ExtArgs>>): Prisma__tipo_movimientoClient<$Result.GetResult<Prisma.$tipo_movimientoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Tipo_movimientos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipo_movimientoCountArgs} args - Arguments to filter Tipo_movimientos to count.
     * @example
     * // Count the number of Tipo_movimientos
     * const count = await prisma.tipo_movimiento.count({
     *   where: {
     *     // ... the filter for the Tipo_movimientos we want to count
     *   }
     * })
    **/
    count<T extends tipo_movimientoCountArgs>(
      args?: Subset<T, tipo_movimientoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tipo_movimientoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tipo_movimiento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tipo_movimientoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Tipo_movimientoAggregateArgs>(args: Subset<T, Tipo_movimientoAggregateArgs>): Prisma.PrismaPromise<GetTipo_movimientoAggregateType<T>>

    /**
     * Group by Tipo_movimiento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipo_movimientoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tipo_movimientoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tipo_movimientoGroupByArgs['orderBy'] }
        : { orderBy?: tipo_movimientoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tipo_movimientoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTipo_movimientoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tipo_movimiento model
   */
  readonly fields: tipo_movimientoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tipo_movimiento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tipo_movimientoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    movimiento<T extends tipo_movimiento$movimientoArgs<ExtArgs> = {}>(args?: Subset<T, tipo_movimiento$movimientoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$movimientoPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tipo_movimiento model
   */ 
  interface tipo_movimientoFieldRefs {
    readonly tipo_movimiento_id: FieldRef<"tipo_movimiento", 'Int'>
    readonly nombre: FieldRef<"tipo_movimiento", 'String'>
    readonly descripcion: FieldRef<"tipo_movimiento", 'String'>
    readonly fecha_creacion: FieldRef<"tipo_movimiento", 'DateTime'>
    readonly fecha_modificacion: FieldRef<"tipo_movimiento", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * tipo_movimiento findUnique
   */
  export type tipo_movimientoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_movimiento
     */
    select?: tipo_movimientoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_movimientoInclude<ExtArgs> | null
    /**
     * Filter, which tipo_movimiento to fetch.
     */
    where: tipo_movimientoWhereUniqueInput
  }

  /**
   * tipo_movimiento findUniqueOrThrow
   */
  export type tipo_movimientoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_movimiento
     */
    select?: tipo_movimientoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_movimientoInclude<ExtArgs> | null
    /**
     * Filter, which tipo_movimiento to fetch.
     */
    where: tipo_movimientoWhereUniqueInput
  }

  /**
   * tipo_movimiento findFirst
   */
  export type tipo_movimientoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_movimiento
     */
    select?: tipo_movimientoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_movimientoInclude<ExtArgs> | null
    /**
     * Filter, which tipo_movimiento to fetch.
     */
    where?: tipo_movimientoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipo_movimientos to fetch.
     */
    orderBy?: tipo_movimientoOrderByWithRelationInput | tipo_movimientoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tipo_movimientos.
     */
    cursor?: tipo_movimientoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipo_movimientos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipo_movimientos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tipo_movimientos.
     */
    distinct?: Tipo_movimientoScalarFieldEnum | Tipo_movimientoScalarFieldEnum[]
  }

  /**
   * tipo_movimiento findFirstOrThrow
   */
  export type tipo_movimientoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_movimiento
     */
    select?: tipo_movimientoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_movimientoInclude<ExtArgs> | null
    /**
     * Filter, which tipo_movimiento to fetch.
     */
    where?: tipo_movimientoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipo_movimientos to fetch.
     */
    orderBy?: tipo_movimientoOrderByWithRelationInput | tipo_movimientoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tipo_movimientos.
     */
    cursor?: tipo_movimientoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipo_movimientos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipo_movimientos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tipo_movimientos.
     */
    distinct?: Tipo_movimientoScalarFieldEnum | Tipo_movimientoScalarFieldEnum[]
  }

  /**
   * tipo_movimiento findMany
   */
  export type tipo_movimientoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_movimiento
     */
    select?: tipo_movimientoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_movimientoInclude<ExtArgs> | null
    /**
     * Filter, which tipo_movimientos to fetch.
     */
    where?: tipo_movimientoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipo_movimientos to fetch.
     */
    orderBy?: tipo_movimientoOrderByWithRelationInput | tipo_movimientoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tipo_movimientos.
     */
    cursor?: tipo_movimientoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipo_movimientos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipo_movimientos.
     */
    skip?: number
    distinct?: Tipo_movimientoScalarFieldEnum | Tipo_movimientoScalarFieldEnum[]
  }

  /**
   * tipo_movimiento create
   */
  export type tipo_movimientoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_movimiento
     */
    select?: tipo_movimientoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_movimientoInclude<ExtArgs> | null
    /**
     * The data needed to create a tipo_movimiento.
     */
    data: XOR<tipo_movimientoCreateInput, tipo_movimientoUncheckedCreateInput>
  }

  /**
   * tipo_movimiento createMany
   */
  export type tipo_movimientoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tipo_movimientos.
     */
    data: tipo_movimientoCreateManyInput | tipo_movimientoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tipo_movimiento update
   */
  export type tipo_movimientoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_movimiento
     */
    select?: tipo_movimientoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_movimientoInclude<ExtArgs> | null
    /**
     * The data needed to update a tipo_movimiento.
     */
    data: XOR<tipo_movimientoUpdateInput, tipo_movimientoUncheckedUpdateInput>
    /**
     * Choose, which tipo_movimiento to update.
     */
    where: tipo_movimientoWhereUniqueInput
  }

  /**
   * tipo_movimiento updateMany
   */
  export type tipo_movimientoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tipo_movimientos.
     */
    data: XOR<tipo_movimientoUpdateManyMutationInput, tipo_movimientoUncheckedUpdateManyInput>
    /**
     * Filter which tipo_movimientos to update
     */
    where?: tipo_movimientoWhereInput
  }

  /**
   * tipo_movimiento upsert
   */
  export type tipo_movimientoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_movimiento
     */
    select?: tipo_movimientoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_movimientoInclude<ExtArgs> | null
    /**
     * The filter to search for the tipo_movimiento to update in case it exists.
     */
    where: tipo_movimientoWhereUniqueInput
    /**
     * In case the tipo_movimiento found by the `where` argument doesn't exist, create a new tipo_movimiento with this data.
     */
    create: XOR<tipo_movimientoCreateInput, tipo_movimientoUncheckedCreateInput>
    /**
     * In case the tipo_movimiento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tipo_movimientoUpdateInput, tipo_movimientoUncheckedUpdateInput>
  }

  /**
   * tipo_movimiento delete
   */
  export type tipo_movimientoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_movimiento
     */
    select?: tipo_movimientoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_movimientoInclude<ExtArgs> | null
    /**
     * Filter which tipo_movimiento to delete.
     */
    where: tipo_movimientoWhereUniqueInput
  }

  /**
   * tipo_movimiento deleteMany
   */
  export type tipo_movimientoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tipo_movimientos to delete
     */
    where?: tipo_movimientoWhereInput
  }

  /**
   * tipo_movimiento.movimiento
   */
  export type tipo_movimiento$movimientoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movimiento
     */
    select?: movimientoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movimientoInclude<ExtArgs> | null
    where?: movimientoWhereInput
    orderBy?: movimientoOrderByWithRelationInput | movimientoOrderByWithRelationInput[]
    cursor?: movimientoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MovimientoScalarFieldEnum | MovimientoScalarFieldEnum[]
  }

  /**
   * tipo_movimiento without action
   */
  export type tipo_movimientoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_movimiento
     */
    select?: tipo_movimientoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_movimientoInclude<ExtArgs> | null
  }


  /**
   * Model usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    usuario_id: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    usuario_id: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    usuario_id: number | null
    nombre: string | null
    email: string | null
    contrasena: string | null
    fecha_creacion: Date | null
    fecha_modificacion: Date | null
  }

  export type UsuarioMaxAggregateOutputType = {
    usuario_id: number | null
    nombre: string | null
    email: string | null
    contrasena: string | null
    fecha_creacion: Date | null
    fecha_modificacion: Date | null
  }

  export type UsuarioCountAggregateOutputType = {
    usuario_id: number
    nombre: number
    email: number
    contrasena: number
    fecha_creacion: number
    fecha_modificacion: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    usuario_id?: true
  }

  export type UsuarioSumAggregateInputType = {
    usuario_id?: true
  }

  export type UsuarioMinAggregateInputType = {
    usuario_id?: true
    nombre?: true
    email?: true
    contrasena?: true
    fecha_creacion?: true
    fecha_modificacion?: true
  }

  export type UsuarioMaxAggregateInputType = {
    usuario_id?: true
    nombre?: true
    email?: true
    contrasena?: true
    fecha_creacion?: true
    fecha_modificacion?: true
  }

  export type UsuarioCountAggregateInputType = {
    usuario_id?: true
    nombre?: true
    email?: true
    contrasena?: true
    fecha_creacion?: true
    fecha_modificacion?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuario to aggregate.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type usuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuarioWhereInput
    orderBy?: usuarioOrderByWithAggregationInput | usuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: usuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    usuario_id: number
    nombre: string
    email: string
    contrasena: string
    fecha_creacion: Date | null
    fecha_modificacion: Date | null
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends usuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type usuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    usuario_id?: boolean
    nombre?: boolean
    email?: boolean
    contrasena?: boolean
    fecha_creacion?: boolean
    fecha_modificacion?: boolean
    cuenta?: boolean | usuario$cuentaArgs<ExtArgs>
    token?: boolean | usuario$tokenArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>


  export type usuarioSelectScalar = {
    usuario_id?: boolean
    nombre?: boolean
    email?: boolean
    contrasena?: boolean
    fecha_creacion?: boolean
    fecha_modificacion?: boolean
  }

  export type usuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cuenta?: boolean | usuario$cuentaArgs<ExtArgs>
    token?: boolean | usuario$tokenArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $usuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "usuario"
    objects: {
      cuenta: Prisma.$cuentaPayload<ExtArgs>[]
      token: Prisma.$tokenPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      usuario_id: number
      nombre: string
      email: string
      contrasena: string
      fecha_creacion: Date | null
      fecha_modificacion: Date | null
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type usuarioGetPayload<S extends boolean | null | undefined | usuarioDefaultArgs> = $Result.GetResult<Prisma.$usuarioPayload, S>

  type usuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<usuarioFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface usuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['usuario'], meta: { name: 'usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {usuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usuarioFindUniqueArgs>(args: SelectSubset<T, usuarioFindUniqueArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {usuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, usuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usuarioFindFirstArgs>(args?: SelectSubset<T, usuarioFindFirstArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, usuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `usuario_id`
     * const usuarioWithUsuario_idOnly = await prisma.usuario.findMany({ select: { usuario_id: true } })
     * 
     */
    findMany<T extends usuarioFindManyArgs>(args?: SelectSubset<T, usuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Usuario.
     * @param {usuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends usuarioCreateArgs>(args: SelectSubset<T, usuarioCreateArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Usuarios.
     * @param {usuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usuarioCreateManyArgs>(args?: SelectSubset<T, usuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Usuario.
     * @param {usuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends usuarioDeleteArgs>(args: SelectSubset<T, usuarioDeleteArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Usuario.
     * @param {usuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usuarioUpdateArgs>(args: SelectSubset<T, usuarioUpdateArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Usuarios.
     * @param {usuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usuarioDeleteManyArgs>(args?: SelectSubset<T, usuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usuarioUpdateManyArgs>(args: SelectSubset<T, usuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuario.
     * @param {usuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends usuarioUpsertArgs>(args: SelectSubset<T, usuarioUpsertArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends usuarioCountArgs>(
      args?: Subset<T, usuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usuarioGroupByArgs['orderBy'] }
        : { orderBy?: usuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the usuario model
   */
  readonly fields: usuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cuenta<T extends usuario$cuentaArgs<ExtArgs> = {}>(args?: Subset<T, usuario$cuentaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cuentaPayload<ExtArgs>, T, "findMany"> | Null>
    token<T extends usuario$tokenArgs<ExtArgs> = {}>(args?: Subset<T, usuario$tokenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tokenPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the usuario model
   */ 
  interface usuarioFieldRefs {
    readonly usuario_id: FieldRef<"usuario", 'Int'>
    readonly nombre: FieldRef<"usuario", 'String'>
    readonly email: FieldRef<"usuario", 'String'>
    readonly contrasena: FieldRef<"usuario", 'String'>
    readonly fecha_creacion: FieldRef<"usuario", 'DateTime'>
    readonly fecha_modificacion: FieldRef<"usuario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * usuario findUnique
   */
  export type usuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario findUniqueOrThrow
   */
  export type usuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario findFirst
   */
  export type usuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * usuario findFirstOrThrow
   */
  export type usuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * usuario findMany
   */
  export type usuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing usuarios.
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * usuario create
   */
  export type usuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a usuario.
     */
    data: XOR<usuarioCreateInput, usuarioUncheckedCreateInput>
  }

  /**
   * usuario createMany
   */
  export type usuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many usuarios.
     */
    data: usuarioCreateManyInput | usuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usuario update
   */
  export type usuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a usuario.
     */
    data: XOR<usuarioUpdateInput, usuarioUncheckedUpdateInput>
    /**
     * Choose, which usuario to update.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario updateMany
   */
  export type usuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update usuarios.
     */
    data: XOR<usuarioUpdateManyMutationInput, usuarioUncheckedUpdateManyInput>
    /**
     * Filter which usuarios to update
     */
    where?: usuarioWhereInput
  }

  /**
   * usuario upsert
   */
  export type usuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the usuario to update in case it exists.
     */
    where: usuarioWhereUniqueInput
    /**
     * In case the usuario found by the `where` argument doesn't exist, create a new usuario with this data.
     */
    create: XOR<usuarioCreateInput, usuarioUncheckedCreateInput>
    /**
     * In case the usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usuarioUpdateInput, usuarioUncheckedUpdateInput>
  }

  /**
   * usuario delete
   */
  export type usuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter which usuario to delete.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario deleteMany
   */
  export type usuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to delete
     */
    where?: usuarioWhereInput
  }

  /**
   * usuario.cuenta
   */
  export type usuario$cuentaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cuenta
     */
    select?: cuentaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cuentaInclude<ExtArgs> | null
    where?: cuentaWhereInput
    orderBy?: cuentaOrderByWithRelationInput | cuentaOrderByWithRelationInput[]
    cursor?: cuentaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CuentaScalarFieldEnum | CuentaScalarFieldEnum[]
  }

  /**
   * usuario.token
   */
  export type usuario$tokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token
     */
    select?: tokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tokenInclude<ExtArgs> | null
    where?: tokenWhereInput
    orderBy?: tokenOrderByWithRelationInput | tokenOrderByWithRelationInput[]
    cursor?: tokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * usuario without action
   */
  export type usuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
  }


  /**
   * Model token
   */

  export type AggregateToken = {
    _count: TokenCountAggregateOutputType | null
    _avg: TokenAvgAggregateOutputType | null
    _sum: TokenSumAggregateOutputType | null
    _min: TokenMinAggregateOutputType | null
    _max: TokenMaxAggregateOutputType | null
  }

  export type TokenAvgAggregateOutputType = {
    token_id: number | null
    usuario_id: number | null
  }

  export type TokenSumAggregateOutputType = {
    token_id: number | null
    usuario_id: number | null
  }

  export type TokenMinAggregateOutputType = {
    token_id: number | null
    usuario_id: number | null
    token: string | null
    expira_en: Date | null
    revocado: boolean | null
    fecha_creacion: Date | null
  }

  export type TokenMaxAggregateOutputType = {
    token_id: number | null
    usuario_id: number | null
    token: string | null
    expira_en: Date | null
    revocado: boolean | null
    fecha_creacion: Date | null
  }

  export type TokenCountAggregateOutputType = {
    token_id: number
    usuario_id: number
    token: number
    expira_en: number
    revocado: number
    fecha_creacion: number
    _all: number
  }


  export type TokenAvgAggregateInputType = {
    token_id?: true
    usuario_id?: true
  }

  export type TokenSumAggregateInputType = {
    token_id?: true
    usuario_id?: true
  }

  export type TokenMinAggregateInputType = {
    token_id?: true
    usuario_id?: true
    token?: true
    expira_en?: true
    revocado?: true
    fecha_creacion?: true
  }

  export type TokenMaxAggregateInputType = {
    token_id?: true
    usuario_id?: true
    token?: true
    expira_en?: true
    revocado?: true
    fecha_creacion?: true
  }

  export type TokenCountAggregateInputType = {
    token_id?: true
    usuario_id?: true
    token?: true
    expira_en?: true
    revocado?: true
    fecha_creacion?: true
    _all?: true
  }

  export type TokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which token to aggregate.
     */
    where?: tokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tokens to fetch.
     */
    orderBy?: tokenOrderByWithRelationInput | tokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tokens
    **/
    _count?: true | TokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TokenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TokenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TokenMaxAggregateInputType
  }

  export type GetTokenAggregateType<T extends TokenAggregateArgs> = {
        [P in keyof T & keyof AggregateToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateToken[P]>
      : GetScalarType<T[P], AggregateToken[P]>
  }




  export type tokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tokenWhereInput
    orderBy?: tokenOrderByWithAggregationInput | tokenOrderByWithAggregationInput[]
    by: TokenScalarFieldEnum[] | TokenScalarFieldEnum
    having?: tokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TokenCountAggregateInputType | true
    _avg?: TokenAvgAggregateInputType
    _sum?: TokenSumAggregateInputType
    _min?: TokenMinAggregateInputType
    _max?: TokenMaxAggregateInputType
  }

  export type TokenGroupByOutputType = {
    token_id: number
    usuario_id: number
    token: string
    expira_en: Date
    revocado: boolean
    fecha_creacion: Date
    _count: TokenCountAggregateOutputType | null
    _avg: TokenAvgAggregateOutputType | null
    _sum: TokenSumAggregateOutputType | null
    _min: TokenMinAggregateOutputType | null
    _max: TokenMaxAggregateOutputType | null
  }

  type GetTokenGroupByPayload<T extends tokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TokenGroupByOutputType[P]>
            : GetScalarType<T[P], TokenGroupByOutputType[P]>
        }
      >
    >


  export type tokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    token_id?: boolean
    usuario_id?: boolean
    token?: boolean
    expira_en?: boolean
    revocado?: boolean
    fecha_creacion?: boolean
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["token"]>


  export type tokenSelectScalar = {
    token_id?: boolean
    usuario_id?: boolean
    token?: boolean
    expira_en?: boolean
    revocado?: boolean
    fecha_creacion?: boolean
  }

  export type tokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
  }

  export type $tokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "token"
    objects: {
      usuario: Prisma.$usuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      token_id: number
      usuario_id: number
      token: string
      expira_en: Date
      revocado: boolean
      fecha_creacion: Date
    }, ExtArgs["result"]["token"]>
    composites: {}
  }

  type tokenGetPayload<S extends boolean | null | undefined | tokenDefaultArgs> = $Result.GetResult<Prisma.$tokenPayload, S>

  type tokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<tokenFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TokenCountAggregateInputType | true
    }

  export interface tokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['token'], meta: { name: 'token' } }
    /**
     * Find zero or one Token that matches the filter.
     * @param {tokenFindUniqueArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tokenFindUniqueArgs>(args: SelectSubset<T, tokenFindUniqueArgs<ExtArgs>>): Prisma__tokenClient<$Result.GetResult<Prisma.$tokenPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Token that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {tokenFindUniqueOrThrowArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tokenFindUniqueOrThrowArgs>(args: SelectSubset<T, tokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tokenClient<$Result.GetResult<Prisma.$tokenPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Token that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tokenFindFirstArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tokenFindFirstArgs>(args?: SelectSubset<T, tokenFindFirstArgs<ExtArgs>>): Prisma__tokenClient<$Result.GetResult<Prisma.$tokenPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Token that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tokenFindFirstOrThrowArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tokenFindFirstOrThrowArgs>(args?: SelectSubset<T, tokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__tokenClient<$Result.GetResult<Prisma.$tokenPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tokens
     * const tokens = await prisma.token.findMany()
     * 
     * // Get first 10 Tokens
     * const tokens = await prisma.token.findMany({ take: 10 })
     * 
     * // Only select the `token_id`
     * const tokenWithToken_idOnly = await prisma.token.findMany({ select: { token_id: true } })
     * 
     */
    findMany<T extends tokenFindManyArgs>(args?: SelectSubset<T, tokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tokenPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Token.
     * @param {tokenCreateArgs} args - Arguments to create a Token.
     * @example
     * // Create one Token
     * const Token = await prisma.token.create({
     *   data: {
     *     // ... data to create a Token
     *   }
     * })
     * 
     */
    create<T extends tokenCreateArgs>(args: SelectSubset<T, tokenCreateArgs<ExtArgs>>): Prisma__tokenClient<$Result.GetResult<Prisma.$tokenPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Tokens.
     * @param {tokenCreateManyArgs} args - Arguments to create many Tokens.
     * @example
     * // Create many Tokens
     * const token = await prisma.token.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tokenCreateManyArgs>(args?: SelectSubset<T, tokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Token.
     * @param {tokenDeleteArgs} args - Arguments to delete one Token.
     * @example
     * // Delete one Token
     * const Token = await prisma.token.delete({
     *   where: {
     *     // ... filter to delete one Token
     *   }
     * })
     * 
     */
    delete<T extends tokenDeleteArgs>(args: SelectSubset<T, tokenDeleteArgs<ExtArgs>>): Prisma__tokenClient<$Result.GetResult<Prisma.$tokenPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Token.
     * @param {tokenUpdateArgs} args - Arguments to update one Token.
     * @example
     * // Update one Token
     * const token = await prisma.token.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tokenUpdateArgs>(args: SelectSubset<T, tokenUpdateArgs<ExtArgs>>): Prisma__tokenClient<$Result.GetResult<Prisma.$tokenPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Tokens.
     * @param {tokenDeleteManyArgs} args - Arguments to filter Tokens to delete.
     * @example
     * // Delete a few Tokens
     * const { count } = await prisma.token.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tokenDeleteManyArgs>(args?: SelectSubset<T, tokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tokens
     * const token = await prisma.token.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tokenUpdateManyArgs>(args: SelectSubset<T, tokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Token.
     * @param {tokenUpsertArgs} args - Arguments to update or create a Token.
     * @example
     * // Update or create a Token
     * const token = await prisma.token.upsert({
     *   create: {
     *     // ... data to create a Token
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Token we want to update
     *   }
     * })
     */
    upsert<T extends tokenUpsertArgs>(args: SelectSubset<T, tokenUpsertArgs<ExtArgs>>): Prisma__tokenClient<$Result.GetResult<Prisma.$tokenPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tokenCountArgs} args - Arguments to filter Tokens to count.
     * @example
     * // Count the number of Tokens
     * const count = await prisma.token.count({
     *   where: {
     *     // ... the filter for the Tokens we want to count
     *   }
     * })
    **/
    count<T extends tokenCountArgs>(
      args?: Subset<T, tokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TokenAggregateArgs>(args: Subset<T, TokenAggregateArgs>): Prisma.PrismaPromise<GetTokenAggregateType<T>>

    /**
     * Group by Token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tokenGroupByArgs['orderBy'] }
        : { orderBy?: tokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the token model
   */
  readonly fields: tokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for token.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends usuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usuarioDefaultArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the token model
   */ 
  interface tokenFieldRefs {
    readonly token_id: FieldRef<"token", 'Int'>
    readonly usuario_id: FieldRef<"token", 'Int'>
    readonly token: FieldRef<"token", 'String'>
    readonly expira_en: FieldRef<"token", 'DateTime'>
    readonly revocado: FieldRef<"token", 'Boolean'>
    readonly fecha_creacion: FieldRef<"token", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * token findUnique
   */
  export type tokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token
     */
    select?: tokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tokenInclude<ExtArgs> | null
    /**
     * Filter, which token to fetch.
     */
    where: tokenWhereUniqueInput
  }

  /**
   * token findUniqueOrThrow
   */
  export type tokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token
     */
    select?: tokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tokenInclude<ExtArgs> | null
    /**
     * Filter, which token to fetch.
     */
    where: tokenWhereUniqueInput
  }

  /**
   * token findFirst
   */
  export type tokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token
     */
    select?: tokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tokenInclude<ExtArgs> | null
    /**
     * Filter, which token to fetch.
     */
    where?: tokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tokens to fetch.
     */
    orderBy?: tokenOrderByWithRelationInput | tokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tokens.
     */
    cursor?: tokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tokens.
     */
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * token findFirstOrThrow
   */
  export type tokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token
     */
    select?: tokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tokenInclude<ExtArgs> | null
    /**
     * Filter, which token to fetch.
     */
    where?: tokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tokens to fetch.
     */
    orderBy?: tokenOrderByWithRelationInput | tokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tokens.
     */
    cursor?: tokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tokens.
     */
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * token findMany
   */
  export type tokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token
     */
    select?: tokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tokenInclude<ExtArgs> | null
    /**
     * Filter, which tokens to fetch.
     */
    where?: tokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tokens to fetch.
     */
    orderBy?: tokenOrderByWithRelationInput | tokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tokens.
     */
    cursor?: tokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tokens.
     */
    skip?: number
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * token create
   */
  export type tokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token
     */
    select?: tokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tokenInclude<ExtArgs> | null
    /**
     * The data needed to create a token.
     */
    data: XOR<tokenCreateInput, tokenUncheckedCreateInput>
  }

  /**
   * token createMany
   */
  export type tokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tokens.
     */
    data: tokenCreateManyInput | tokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * token update
   */
  export type tokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token
     */
    select?: tokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tokenInclude<ExtArgs> | null
    /**
     * The data needed to update a token.
     */
    data: XOR<tokenUpdateInput, tokenUncheckedUpdateInput>
    /**
     * Choose, which token to update.
     */
    where: tokenWhereUniqueInput
  }

  /**
   * token updateMany
   */
  export type tokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tokens.
     */
    data: XOR<tokenUpdateManyMutationInput, tokenUncheckedUpdateManyInput>
    /**
     * Filter which tokens to update
     */
    where?: tokenWhereInput
  }

  /**
   * token upsert
   */
  export type tokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token
     */
    select?: tokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tokenInclude<ExtArgs> | null
    /**
     * The filter to search for the token to update in case it exists.
     */
    where: tokenWhereUniqueInput
    /**
     * In case the token found by the `where` argument doesn't exist, create a new token with this data.
     */
    create: XOR<tokenCreateInput, tokenUncheckedCreateInput>
    /**
     * In case the token was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tokenUpdateInput, tokenUncheckedUpdateInput>
  }

  /**
   * token delete
   */
  export type tokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token
     */
    select?: tokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tokenInclude<ExtArgs> | null
    /**
     * Filter which token to delete.
     */
    where: tokenWhereUniqueInput
  }

  /**
   * token deleteMany
   */
  export type tokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tokens to delete
     */
    where?: tokenWhereInput
  }

  /**
   * token without action
   */
  export type tokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token
     */
    select?: tokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tokenInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const TransferenciaScalarFieldEnum: {
    transferencia_id: 'transferencia_id',
    cuenta_origen_id: 'cuenta_origen_id',
    cuenta_destino_id: 'cuenta_destino_id',
    monto: 'monto',
    descripcion: 'descripcion',
    estado_transferencia_id: 'estado_transferencia_id',
    fecha_creacion: 'fecha_creacion',
    fecha_modificacion: 'fecha_modificacion'
  };

  export type TransferenciaScalarFieldEnum = (typeof TransferenciaScalarFieldEnum)[keyof typeof TransferenciaScalarFieldEnum]


  export const CuentaScalarFieldEnum: {
    cuenta_id: 'cuenta_id',
    numero_cuenta: 'numero_cuenta',
    usuario_id: 'usuario_id',
    tipo_cuenta_id: 'tipo_cuenta_id',
    saldo: 'saldo',
    fecha_creacion: 'fecha_creacion',
    fecha_modificacion: 'fecha_modificacion'
  };

  export type CuentaScalarFieldEnum = (typeof CuentaScalarFieldEnum)[keyof typeof CuentaScalarFieldEnum]


  export const Estado_transferenciaScalarFieldEnum: {
    estado_transferencia_id: 'estado_transferencia_id',
    nombre: 'nombre',
    descripcion: 'descripcion',
    fecha_creacion: 'fecha_creacion',
    fecha_modificacion: 'fecha_modificacion'
  };

  export type Estado_transferenciaScalarFieldEnum = (typeof Estado_transferenciaScalarFieldEnum)[keyof typeof Estado_transferenciaScalarFieldEnum]


  export const MovimientoScalarFieldEnum: {
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

  export type MovimientoScalarFieldEnum = (typeof MovimientoScalarFieldEnum)[keyof typeof MovimientoScalarFieldEnum]


  export const Tipo_cuentaScalarFieldEnum: {
    tipo_cuenta_id: 'tipo_cuenta_id',
    nombre: 'nombre',
    descripcion: 'descripcion',
    fecha_creacion: 'fecha_creacion',
    fecha_modificacion: 'fecha_modificacion'
  };

  export type Tipo_cuentaScalarFieldEnum = (typeof Tipo_cuentaScalarFieldEnum)[keyof typeof Tipo_cuentaScalarFieldEnum]


  export const Tipo_movimientoScalarFieldEnum: {
    tipo_movimiento_id: 'tipo_movimiento_id',
    nombre: 'nombre',
    descripcion: 'descripcion',
    fecha_creacion: 'fecha_creacion',
    fecha_modificacion: 'fecha_modificacion'
  };

  export type Tipo_movimientoScalarFieldEnum = (typeof Tipo_movimientoScalarFieldEnum)[keyof typeof Tipo_movimientoScalarFieldEnum]


  export const UsuarioScalarFieldEnum: {
    usuario_id: 'usuario_id',
    nombre: 'nombre',
    email: 'email',
    contrasena: 'contrasena',
    fecha_creacion: 'fecha_creacion',
    fecha_modificacion: 'fecha_modificacion'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const TokenScalarFieldEnum: {
    token_id: 'token_id',
    usuario_id: 'usuario_id',
    token: 'token',
    expira_en: 'expira_en',
    revocado: 'revocado',
    fecha_creacion: 'fecha_creacion'
  };

  export type TokenScalarFieldEnum = (typeof TokenScalarFieldEnum)[keyof typeof TokenScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type TransferenciaWhereInput = {
    AND?: TransferenciaWhereInput | TransferenciaWhereInput[]
    OR?: TransferenciaWhereInput[]
    NOT?: TransferenciaWhereInput | TransferenciaWhereInput[]
    transferencia_id?: IntFilter<"Transferencia"> | number
    cuenta_origen_id?: IntFilter<"Transferencia"> | number
    cuenta_destino_id?: IntFilter<"Transferencia"> | number
    monto?: DecimalFilter<"Transferencia"> | Decimal | DecimalJsLike | number | string
    descripcion?: StringNullableFilter<"Transferencia"> | string | null
    estado_transferencia_id?: IntFilter<"Transferencia"> | number
    fecha_creacion?: DateTimeNullableFilter<"Transferencia"> | Date | string | null
    fecha_modificacion?: DateTimeNullableFilter<"Transferencia"> | Date | string | null
    cuenta_Transferencia_cuenta_origen_idTocuenta?: XOR<CuentaRelationFilter, cuentaWhereInput>
    cuenta_Transferencia_cuenta_destino_idTocuenta?: XOR<CuentaRelationFilter, cuentaWhereInput>
    estado_transferencia?: XOR<Estado_transferenciaRelationFilter, estado_transferenciaWhereInput>
    movimiento?: MovimientoListRelationFilter
  }

  export type TransferenciaOrderByWithRelationInput = {
    transferencia_id?: SortOrder
    cuenta_origen_id?: SortOrder
    cuenta_destino_id?: SortOrder
    monto?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    estado_transferencia_id?: SortOrder
    fecha_creacion?: SortOrderInput | SortOrder
    fecha_modificacion?: SortOrderInput | SortOrder
    cuenta_Transferencia_cuenta_origen_idTocuenta?: cuentaOrderByWithRelationInput
    cuenta_Transferencia_cuenta_destino_idTocuenta?: cuentaOrderByWithRelationInput
    estado_transferencia?: estado_transferenciaOrderByWithRelationInput
    movimiento?: movimientoOrderByRelationAggregateInput
  }

  export type TransferenciaWhereUniqueInput = Prisma.AtLeast<{
    transferencia_id?: number
    AND?: TransferenciaWhereInput | TransferenciaWhereInput[]
    OR?: TransferenciaWhereInput[]
    NOT?: TransferenciaWhereInput | TransferenciaWhereInput[]
    cuenta_origen_id?: IntFilter<"Transferencia"> | number
    cuenta_destino_id?: IntFilter<"Transferencia"> | number
    monto?: DecimalFilter<"Transferencia"> | Decimal | DecimalJsLike | number | string
    descripcion?: StringNullableFilter<"Transferencia"> | string | null
    estado_transferencia_id?: IntFilter<"Transferencia"> | number
    fecha_creacion?: DateTimeNullableFilter<"Transferencia"> | Date | string | null
    fecha_modificacion?: DateTimeNullableFilter<"Transferencia"> | Date | string | null
    cuenta_Transferencia_cuenta_origen_idTocuenta?: XOR<CuentaRelationFilter, cuentaWhereInput>
    cuenta_Transferencia_cuenta_destino_idTocuenta?: XOR<CuentaRelationFilter, cuentaWhereInput>
    estado_transferencia?: XOR<Estado_transferenciaRelationFilter, estado_transferenciaWhereInput>
    movimiento?: MovimientoListRelationFilter
  }, "transferencia_id">

  export type TransferenciaOrderByWithAggregationInput = {
    transferencia_id?: SortOrder
    cuenta_origen_id?: SortOrder
    cuenta_destino_id?: SortOrder
    monto?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    estado_transferencia_id?: SortOrder
    fecha_creacion?: SortOrderInput | SortOrder
    fecha_modificacion?: SortOrderInput | SortOrder
    _count?: TransferenciaCountOrderByAggregateInput
    _avg?: TransferenciaAvgOrderByAggregateInput
    _max?: TransferenciaMaxOrderByAggregateInput
    _min?: TransferenciaMinOrderByAggregateInput
    _sum?: TransferenciaSumOrderByAggregateInput
  }

  export type TransferenciaScalarWhereWithAggregatesInput = {
    AND?: TransferenciaScalarWhereWithAggregatesInput | TransferenciaScalarWhereWithAggregatesInput[]
    OR?: TransferenciaScalarWhereWithAggregatesInput[]
    NOT?: TransferenciaScalarWhereWithAggregatesInput | TransferenciaScalarWhereWithAggregatesInput[]
    transferencia_id?: IntWithAggregatesFilter<"Transferencia"> | number
    cuenta_origen_id?: IntWithAggregatesFilter<"Transferencia"> | number
    cuenta_destino_id?: IntWithAggregatesFilter<"Transferencia"> | number
    monto?: DecimalWithAggregatesFilter<"Transferencia"> | Decimal | DecimalJsLike | number | string
    descripcion?: StringNullableWithAggregatesFilter<"Transferencia"> | string | null
    estado_transferencia_id?: IntWithAggregatesFilter<"Transferencia"> | number
    fecha_creacion?: DateTimeNullableWithAggregatesFilter<"Transferencia"> | Date | string | null
    fecha_modificacion?: DateTimeNullableWithAggregatesFilter<"Transferencia"> | Date | string | null
  }

  export type cuentaWhereInput = {
    AND?: cuentaWhereInput | cuentaWhereInput[]
    OR?: cuentaWhereInput[]
    NOT?: cuentaWhereInput | cuentaWhereInput[]
    cuenta_id?: IntFilter<"cuenta"> | number
    numero_cuenta?: StringFilter<"cuenta"> | string
    usuario_id?: IntFilter<"cuenta"> | number
    tipo_cuenta_id?: IntFilter<"cuenta"> | number
    saldo?: DecimalFilter<"cuenta"> | Decimal | DecimalJsLike | number | string
    fecha_creacion?: DateTimeNullableFilter<"cuenta"> | Date | string | null
    fecha_modificacion?: DateTimeNullableFilter<"cuenta"> | Date | string | null
    Transferencia_Transferencia_cuenta_origen_idTocuenta?: TransferenciaListRelationFilter
    Transferencia_Transferencia_cuenta_destino_idTocuenta?: TransferenciaListRelationFilter
    usuario?: XOR<UsuarioRelationFilter, usuarioWhereInput>
    tipo_cuenta?: XOR<Tipo_cuentaRelationFilter, tipo_cuentaWhereInput>
    movimiento?: MovimientoListRelationFilter
  }

  export type cuentaOrderByWithRelationInput = {
    cuenta_id?: SortOrder
    numero_cuenta?: SortOrder
    usuario_id?: SortOrder
    tipo_cuenta_id?: SortOrder
    saldo?: SortOrder
    fecha_creacion?: SortOrderInput | SortOrder
    fecha_modificacion?: SortOrderInput | SortOrder
    Transferencia_Transferencia_cuenta_origen_idTocuenta?: TransferenciaOrderByRelationAggregateInput
    Transferencia_Transferencia_cuenta_destino_idTocuenta?: TransferenciaOrderByRelationAggregateInput
    usuario?: usuarioOrderByWithRelationInput
    tipo_cuenta?: tipo_cuentaOrderByWithRelationInput
    movimiento?: movimientoOrderByRelationAggregateInput
  }

  export type cuentaWhereUniqueInput = Prisma.AtLeast<{
    cuenta_id?: number
    numero_cuenta?: string
    AND?: cuentaWhereInput | cuentaWhereInput[]
    OR?: cuentaWhereInput[]
    NOT?: cuentaWhereInput | cuentaWhereInput[]
    usuario_id?: IntFilter<"cuenta"> | number
    tipo_cuenta_id?: IntFilter<"cuenta"> | number
    saldo?: DecimalFilter<"cuenta"> | Decimal | DecimalJsLike | number | string
    fecha_creacion?: DateTimeNullableFilter<"cuenta"> | Date | string | null
    fecha_modificacion?: DateTimeNullableFilter<"cuenta"> | Date | string | null
    Transferencia_Transferencia_cuenta_origen_idTocuenta?: TransferenciaListRelationFilter
    Transferencia_Transferencia_cuenta_destino_idTocuenta?: TransferenciaListRelationFilter
    usuario?: XOR<UsuarioRelationFilter, usuarioWhereInput>
    tipo_cuenta?: XOR<Tipo_cuentaRelationFilter, tipo_cuentaWhereInput>
    movimiento?: MovimientoListRelationFilter
  }, "cuenta_id" | "numero_cuenta">

  export type cuentaOrderByWithAggregationInput = {
    cuenta_id?: SortOrder
    numero_cuenta?: SortOrder
    usuario_id?: SortOrder
    tipo_cuenta_id?: SortOrder
    saldo?: SortOrder
    fecha_creacion?: SortOrderInput | SortOrder
    fecha_modificacion?: SortOrderInput | SortOrder
    _count?: cuentaCountOrderByAggregateInput
    _avg?: cuentaAvgOrderByAggregateInput
    _max?: cuentaMaxOrderByAggregateInput
    _min?: cuentaMinOrderByAggregateInput
    _sum?: cuentaSumOrderByAggregateInput
  }

  export type cuentaScalarWhereWithAggregatesInput = {
    AND?: cuentaScalarWhereWithAggregatesInput | cuentaScalarWhereWithAggregatesInput[]
    OR?: cuentaScalarWhereWithAggregatesInput[]
    NOT?: cuentaScalarWhereWithAggregatesInput | cuentaScalarWhereWithAggregatesInput[]
    cuenta_id?: IntWithAggregatesFilter<"cuenta"> | number
    numero_cuenta?: StringWithAggregatesFilter<"cuenta"> | string
    usuario_id?: IntWithAggregatesFilter<"cuenta"> | number
    tipo_cuenta_id?: IntWithAggregatesFilter<"cuenta"> | number
    saldo?: DecimalWithAggregatesFilter<"cuenta"> | Decimal | DecimalJsLike | number | string
    fecha_creacion?: DateTimeNullableWithAggregatesFilter<"cuenta"> | Date | string | null
    fecha_modificacion?: DateTimeNullableWithAggregatesFilter<"cuenta"> | Date | string | null
  }

  export type estado_transferenciaWhereInput = {
    AND?: estado_transferenciaWhereInput | estado_transferenciaWhereInput[]
    OR?: estado_transferenciaWhereInput[]
    NOT?: estado_transferenciaWhereInput | estado_transferenciaWhereInput[]
    estado_transferencia_id?: IntFilter<"estado_transferencia"> | number
    nombre?: StringFilter<"estado_transferencia"> | string
    descripcion?: StringFilter<"estado_transferencia"> | string
    fecha_creacion?: DateTimeNullableFilter<"estado_transferencia"> | Date | string | null
    fecha_modificacion?: DateTimeNullableFilter<"estado_transferencia"> | Date | string | null
    Transferencia?: TransferenciaListRelationFilter
  }

  export type estado_transferenciaOrderByWithRelationInput = {
    estado_transferencia_id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    fecha_creacion?: SortOrderInput | SortOrder
    fecha_modificacion?: SortOrderInput | SortOrder
    Transferencia?: TransferenciaOrderByRelationAggregateInput
  }

  export type estado_transferenciaWhereUniqueInput = Prisma.AtLeast<{
    estado_transferencia_id?: number
    nombre?: string
    AND?: estado_transferenciaWhereInput | estado_transferenciaWhereInput[]
    OR?: estado_transferenciaWhereInput[]
    NOT?: estado_transferenciaWhereInput | estado_transferenciaWhereInput[]
    descripcion?: StringFilter<"estado_transferencia"> | string
    fecha_creacion?: DateTimeNullableFilter<"estado_transferencia"> | Date | string | null
    fecha_modificacion?: DateTimeNullableFilter<"estado_transferencia"> | Date | string | null
    Transferencia?: TransferenciaListRelationFilter
  }, "estado_transferencia_id" | "nombre">

  export type estado_transferenciaOrderByWithAggregationInput = {
    estado_transferencia_id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    fecha_creacion?: SortOrderInput | SortOrder
    fecha_modificacion?: SortOrderInput | SortOrder
    _count?: estado_transferenciaCountOrderByAggregateInput
    _avg?: estado_transferenciaAvgOrderByAggregateInput
    _max?: estado_transferenciaMaxOrderByAggregateInput
    _min?: estado_transferenciaMinOrderByAggregateInput
    _sum?: estado_transferenciaSumOrderByAggregateInput
  }

  export type estado_transferenciaScalarWhereWithAggregatesInput = {
    AND?: estado_transferenciaScalarWhereWithAggregatesInput | estado_transferenciaScalarWhereWithAggregatesInput[]
    OR?: estado_transferenciaScalarWhereWithAggregatesInput[]
    NOT?: estado_transferenciaScalarWhereWithAggregatesInput | estado_transferenciaScalarWhereWithAggregatesInput[]
    estado_transferencia_id?: IntWithAggregatesFilter<"estado_transferencia"> | number
    nombre?: StringWithAggregatesFilter<"estado_transferencia"> | string
    descripcion?: StringWithAggregatesFilter<"estado_transferencia"> | string
    fecha_creacion?: DateTimeNullableWithAggregatesFilter<"estado_transferencia"> | Date | string | null
    fecha_modificacion?: DateTimeNullableWithAggregatesFilter<"estado_transferencia"> | Date | string | null
  }

  export type movimientoWhereInput = {
    AND?: movimientoWhereInput | movimientoWhereInput[]
    OR?: movimientoWhereInput[]
    NOT?: movimientoWhereInput | movimientoWhereInput[]
    movimiento_id?: IntFilter<"movimiento"> | number
    cuenta_id?: IntFilter<"movimiento"> | number
    tipo_movimiento_id?: IntFilter<"movimiento"> | number
    monto?: DecimalFilter<"movimiento"> | Decimal | DecimalJsLike | number | string
    transferencia_id?: IntNullableFilter<"movimiento"> | number | null
    saldo_anterior?: DecimalFilter<"movimiento"> | Decimal | DecimalJsLike | number | string
    saldo_nuevo?: DecimalFilter<"movimiento"> | Decimal | DecimalJsLike | number | string
    descripcion?: StringNullableFilter<"movimiento"> | string | null
    fecha_creacion?: DateTimeNullableFilter<"movimiento"> | Date | string | null
    fecha_modificacion?: DateTimeNullableFilter<"movimiento"> | Date | string | null
    cuenta?: XOR<CuentaRelationFilter, cuentaWhereInput>
    tipo_movimiento?: XOR<Tipo_movimientoRelationFilter, tipo_movimientoWhereInput>
    Transferencia?: XOR<TransferenciaNullableRelationFilter, TransferenciaWhereInput> | null
  }

  export type movimientoOrderByWithRelationInput = {
    movimiento_id?: SortOrder
    cuenta_id?: SortOrder
    tipo_movimiento_id?: SortOrder
    monto?: SortOrder
    transferencia_id?: SortOrderInput | SortOrder
    saldo_anterior?: SortOrder
    saldo_nuevo?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    fecha_creacion?: SortOrderInput | SortOrder
    fecha_modificacion?: SortOrderInput | SortOrder
    cuenta?: cuentaOrderByWithRelationInput
    tipo_movimiento?: tipo_movimientoOrderByWithRelationInput
    Transferencia?: TransferenciaOrderByWithRelationInput
  }

  export type movimientoWhereUniqueInput = Prisma.AtLeast<{
    movimiento_id?: number
    AND?: movimientoWhereInput | movimientoWhereInput[]
    OR?: movimientoWhereInput[]
    NOT?: movimientoWhereInput | movimientoWhereInput[]
    cuenta_id?: IntFilter<"movimiento"> | number
    tipo_movimiento_id?: IntFilter<"movimiento"> | number
    monto?: DecimalFilter<"movimiento"> | Decimal | DecimalJsLike | number | string
    transferencia_id?: IntNullableFilter<"movimiento"> | number | null
    saldo_anterior?: DecimalFilter<"movimiento"> | Decimal | DecimalJsLike | number | string
    saldo_nuevo?: DecimalFilter<"movimiento"> | Decimal | DecimalJsLike | number | string
    descripcion?: StringNullableFilter<"movimiento"> | string | null
    fecha_creacion?: DateTimeNullableFilter<"movimiento"> | Date | string | null
    fecha_modificacion?: DateTimeNullableFilter<"movimiento"> | Date | string | null
    cuenta?: XOR<CuentaRelationFilter, cuentaWhereInput>
    tipo_movimiento?: XOR<Tipo_movimientoRelationFilter, tipo_movimientoWhereInput>
    Transferencia?: XOR<TransferenciaNullableRelationFilter, TransferenciaWhereInput> | null
  }, "movimiento_id">

  export type movimientoOrderByWithAggregationInput = {
    movimiento_id?: SortOrder
    cuenta_id?: SortOrder
    tipo_movimiento_id?: SortOrder
    monto?: SortOrder
    transferencia_id?: SortOrderInput | SortOrder
    saldo_anterior?: SortOrder
    saldo_nuevo?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    fecha_creacion?: SortOrderInput | SortOrder
    fecha_modificacion?: SortOrderInput | SortOrder
    _count?: movimientoCountOrderByAggregateInput
    _avg?: movimientoAvgOrderByAggregateInput
    _max?: movimientoMaxOrderByAggregateInput
    _min?: movimientoMinOrderByAggregateInput
    _sum?: movimientoSumOrderByAggregateInput
  }

  export type movimientoScalarWhereWithAggregatesInput = {
    AND?: movimientoScalarWhereWithAggregatesInput | movimientoScalarWhereWithAggregatesInput[]
    OR?: movimientoScalarWhereWithAggregatesInput[]
    NOT?: movimientoScalarWhereWithAggregatesInput | movimientoScalarWhereWithAggregatesInput[]
    movimiento_id?: IntWithAggregatesFilter<"movimiento"> | number
    cuenta_id?: IntWithAggregatesFilter<"movimiento"> | number
    tipo_movimiento_id?: IntWithAggregatesFilter<"movimiento"> | number
    monto?: DecimalWithAggregatesFilter<"movimiento"> | Decimal | DecimalJsLike | number | string
    transferencia_id?: IntNullableWithAggregatesFilter<"movimiento"> | number | null
    saldo_anterior?: DecimalWithAggregatesFilter<"movimiento"> | Decimal | DecimalJsLike | number | string
    saldo_nuevo?: DecimalWithAggregatesFilter<"movimiento"> | Decimal | DecimalJsLike | number | string
    descripcion?: StringNullableWithAggregatesFilter<"movimiento"> | string | null
    fecha_creacion?: DateTimeNullableWithAggregatesFilter<"movimiento"> | Date | string | null
    fecha_modificacion?: DateTimeNullableWithAggregatesFilter<"movimiento"> | Date | string | null
  }

  export type tipo_cuentaWhereInput = {
    AND?: tipo_cuentaWhereInput | tipo_cuentaWhereInput[]
    OR?: tipo_cuentaWhereInput[]
    NOT?: tipo_cuentaWhereInput | tipo_cuentaWhereInput[]
    tipo_cuenta_id?: IntFilter<"tipo_cuenta"> | number
    nombre?: StringFilter<"tipo_cuenta"> | string
    descripcion?: StringFilter<"tipo_cuenta"> | string
    fecha_creacion?: DateTimeNullableFilter<"tipo_cuenta"> | Date | string | null
    fecha_modificacion?: DateTimeNullableFilter<"tipo_cuenta"> | Date | string | null
    cuenta?: CuentaListRelationFilter
  }

  export type tipo_cuentaOrderByWithRelationInput = {
    tipo_cuenta_id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    fecha_creacion?: SortOrderInput | SortOrder
    fecha_modificacion?: SortOrderInput | SortOrder
    cuenta?: cuentaOrderByRelationAggregateInput
  }

  export type tipo_cuentaWhereUniqueInput = Prisma.AtLeast<{
    tipo_cuenta_id?: number
    nombre?: string
    AND?: tipo_cuentaWhereInput | tipo_cuentaWhereInput[]
    OR?: tipo_cuentaWhereInput[]
    NOT?: tipo_cuentaWhereInput | tipo_cuentaWhereInput[]
    descripcion?: StringFilter<"tipo_cuenta"> | string
    fecha_creacion?: DateTimeNullableFilter<"tipo_cuenta"> | Date | string | null
    fecha_modificacion?: DateTimeNullableFilter<"tipo_cuenta"> | Date | string | null
    cuenta?: CuentaListRelationFilter
  }, "tipo_cuenta_id" | "nombre">

  export type tipo_cuentaOrderByWithAggregationInput = {
    tipo_cuenta_id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    fecha_creacion?: SortOrderInput | SortOrder
    fecha_modificacion?: SortOrderInput | SortOrder
    _count?: tipo_cuentaCountOrderByAggregateInput
    _avg?: tipo_cuentaAvgOrderByAggregateInput
    _max?: tipo_cuentaMaxOrderByAggregateInput
    _min?: tipo_cuentaMinOrderByAggregateInput
    _sum?: tipo_cuentaSumOrderByAggregateInput
  }

  export type tipo_cuentaScalarWhereWithAggregatesInput = {
    AND?: tipo_cuentaScalarWhereWithAggregatesInput | tipo_cuentaScalarWhereWithAggregatesInput[]
    OR?: tipo_cuentaScalarWhereWithAggregatesInput[]
    NOT?: tipo_cuentaScalarWhereWithAggregatesInput | tipo_cuentaScalarWhereWithAggregatesInput[]
    tipo_cuenta_id?: IntWithAggregatesFilter<"tipo_cuenta"> | number
    nombre?: StringWithAggregatesFilter<"tipo_cuenta"> | string
    descripcion?: StringWithAggregatesFilter<"tipo_cuenta"> | string
    fecha_creacion?: DateTimeNullableWithAggregatesFilter<"tipo_cuenta"> | Date | string | null
    fecha_modificacion?: DateTimeNullableWithAggregatesFilter<"tipo_cuenta"> | Date | string | null
  }

  export type tipo_movimientoWhereInput = {
    AND?: tipo_movimientoWhereInput | tipo_movimientoWhereInput[]
    OR?: tipo_movimientoWhereInput[]
    NOT?: tipo_movimientoWhereInput | tipo_movimientoWhereInput[]
    tipo_movimiento_id?: IntFilter<"tipo_movimiento"> | number
    nombre?: StringFilter<"tipo_movimiento"> | string
    descripcion?: StringFilter<"tipo_movimiento"> | string
    fecha_creacion?: DateTimeNullableFilter<"tipo_movimiento"> | Date | string | null
    fecha_modificacion?: DateTimeNullableFilter<"tipo_movimiento"> | Date | string | null
    movimiento?: MovimientoListRelationFilter
  }

  export type tipo_movimientoOrderByWithRelationInput = {
    tipo_movimiento_id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    fecha_creacion?: SortOrderInput | SortOrder
    fecha_modificacion?: SortOrderInput | SortOrder
    movimiento?: movimientoOrderByRelationAggregateInput
  }

  export type tipo_movimientoWhereUniqueInput = Prisma.AtLeast<{
    tipo_movimiento_id?: number
    nombre?: string
    AND?: tipo_movimientoWhereInput | tipo_movimientoWhereInput[]
    OR?: tipo_movimientoWhereInput[]
    NOT?: tipo_movimientoWhereInput | tipo_movimientoWhereInput[]
    descripcion?: StringFilter<"tipo_movimiento"> | string
    fecha_creacion?: DateTimeNullableFilter<"tipo_movimiento"> | Date | string | null
    fecha_modificacion?: DateTimeNullableFilter<"tipo_movimiento"> | Date | string | null
    movimiento?: MovimientoListRelationFilter
  }, "tipo_movimiento_id" | "nombre">

  export type tipo_movimientoOrderByWithAggregationInput = {
    tipo_movimiento_id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    fecha_creacion?: SortOrderInput | SortOrder
    fecha_modificacion?: SortOrderInput | SortOrder
    _count?: tipo_movimientoCountOrderByAggregateInput
    _avg?: tipo_movimientoAvgOrderByAggregateInput
    _max?: tipo_movimientoMaxOrderByAggregateInput
    _min?: tipo_movimientoMinOrderByAggregateInput
    _sum?: tipo_movimientoSumOrderByAggregateInput
  }

  export type tipo_movimientoScalarWhereWithAggregatesInput = {
    AND?: tipo_movimientoScalarWhereWithAggregatesInput | tipo_movimientoScalarWhereWithAggregatesInput[]
    OR?: tipo_movimientoScalarWhereWithAggregatesInput[]
    NOT?: tipo_movimientoScalarWhereWithAggregatesInput | tipo_movimientoScalarWhereWithAggregatesInput[]
    tipo_movimiento_id?: IntWithAggregatesFilter<"tipo_movimiento"> | number
    nombre?: StringWithAggregatesFilter<"tipo_movimiento"> | string
    descripcion?: StringWithAggregatesFilter<"tipo_movimiento"> | string
    fecha_creacion?: DateTimeNullableWithAggregatesFilter<"tipo_movimiento"> | Date | string | null
    fecha_modificacion?: DateTimeNullableWithAggregatesFilter<"tipo_movimiento"> | Date | string | null
  }

  export type usuarioWhereInput = {
    AND?: usuarioWhereInput | usuarioWhereInput[]
    OR?: usuarioWhereInput[]
    NOT?: usuarioWhereInput | usuarioWhereInput[]
    usuario_id?: IntFilter<"usuario"> | number
    nombre?: StringFilter<"usuario"> | string
    email?: StringFilter<"usuario"> | string
    contrasena?: StringFilter<"usuario"> | string
    fecha_creacion?: DateTimeNullableFilter<"usuario"> | Date | string | null
    fecha_modificacion?: DateTimeNullableFilter<"usuario"> | Date | string | null
    cuenta?: CuentaListRelationFilter
    token?: TokenListRelationFilter
  }

  export type usuarioOrderByWithRelationInput = {
    usuario_id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    contrasena?: SortOrder
    fecha_creacion?: SortOrderInput | SortOrder
    fecha_modificacion?: SortOrderInput | SortOrder
    cuenta?: cuentaOrderByRelationAggregateInput
    token?: tokenOrderByRelationAggregateInput
  }

  export type usuarioWhereUniqueInput = Prisma.AtLeast<{
    usuario_id?: number
    email?: string
    AND?: usuarioWhereInput | usuarioWhereInput[]
    OR?: usuarioWhereInput[]
    NOT?: usuarioWhereInput | usuarioWhereInput[]
    nombre?: StringFilter<"usuario"> | string
    contrasena?: StringFilter<"usuario"> | string
    fecha_creacion?: DateTimeNullableFilter<"usuario"> | Date | string | null
    fecha_modificacion?: DateTimeNullableFilter<"usuario"> | Date | string | null
    cuenta?: CuentaListRelationFilter
    token?: TokenListRelationFilter
  }, "usuario_id" | "email">

  export type usuarioOrderByWithAggregationInput = {
    usuario_id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    contrasena?: SortOrder
    fecha_creacion?: SortOrderInput | SortOrder
    fecha_modificacion?: SortOrderInput | SortOrder
    _count?: usuarioCountOrderByAggregateInput
    _avg?: usuarioAvgOrderByAggregateInput
    _max?: usuarioMaxOrderByAggregateInput
    _min?: usuarioMinOrderByAggregateInput
    _sum?: usuarioSumOrderByAggregateInput
  }

  export type usuarioScalarWhereWithAggregatesInput = {
    AND?: usuarioScalarWhereWithAggregatesInput | usuarioScalarWhereWithAggregatesInput[]
    OR?: usuarioScalarWhereWithAggregatesInput[]
    NOT?: usuarioScalarWhereWithAggregatesInput | usuarioScalarWhereWithAggregatesInput[]
    usuario_id?: IntWithAggregatesFilter<"usuario"> | number
    nombre?: StringWithAggregatesFilter<"usuario"> | string
    email?: StringWithAggregatesFilter<"usuario"> | string
    contrasena?: StringWithAggregatesFilter<"usuario"> | string
    fecha_creacion?: DateTimeNullableWithAggregatesFilter<"usuario"> | Date | string | null
    fecha_modificacion?: DateTimeNullableWithAggregatesFilter<"usuario"> | Date | string | null
  }

  export type tokenWhereInput = {
    AND?: tokenWhereInput | tokenWhereInput[]
    OR?: tokenWhereInput[]
    NOT?: tokenWhereInput | tokenWhereInput[]
    token_id?: IntFilter<"token"> | number
    usuario_id?: IntFilter<"token"> | number
    token?: StringFilter<"token"> | string
    expira_en?: DateTimeFilter<"token"> | Date | string
    revocado?: BoolFilter<"token"> | boolean
    fecha_creacion?: DateTimeFilter<"token"> | Date | string
    usuario?: XOR<UsuarioRelationFilter, usuarioWhereInput>
  }

  export type tokenOrderByWithRelationInput = {
    token_id?: SortOrder
    usuario_id?: SortOrder
    token?: SortOrder
    expira_en?: SortOrder
    revocado?: SortOrder
    fecha_creacion?: SortOrder
    usuario?: usuarioOrderByWithRelationInput
  }

  export type tokenWhereUniqueInput = Prisma.AtLeast<{
    token_id?: number
    token?: string
    AND?: tokenWhereInput | tokenWhereInput[]
    OR?: tokenWhereInput[]
    NOT?: tokenWhereInput | tokenWhereInput[]
    usuario_id?: IntFilter<"token"> | number
    expira_en?: DateTimeFilter<"token"> | Date | string
    revocado?: BoolFilter<"token"> | boolean
    fecha_creacion?: DateTimeFilter<"token"> | Date | string
    usuario?: XOR<UsuarioRelationFilter, usuarioWhereInput>
  }, "token_id" | "token">

  export type tokenOrderByWithAggregationInput = {
    token_id?: SortOrder
    usuario_id?: SortOrder
    token?: SortOrder
    expira_en?: SortOrder
    revocado?: SortOrder
    fecha_creacion?: SortOrder
    _count?: tokenCountOrderByAggregateInput
    _avg?: tokenAvgOrderByAggregateInput
    _max?: tokenMaxOrderByAggregateInput
    _min?: tokenMinOrderByAggregateInput
    _sum?: tokenSumOrderByAggregateInput
  }

  export type tokenScalarWhereWithAggregatesInput = {
    AND?: tokenScalarWhereWithAggregatesInput | tokenScalarWhereWithAggregatesInput[]
    OR?: tokenScalarWhereWithAggregatesInput[]
    NOT?: tokenScalarWhereWithAggregatesInput | tokenScalarWhereWithAggregatesInput[]
    token_id?: IntWithAggregatesFilter<"token"> | number
    usuario_id?: IntWithAggregatesFilter<"token"> | number
    token?: StringWithAggregatesFilter<"token"> | string
    expira_en?: DateTimeWithAggregatesFilter<"token"> | Date | string
    revocado?: BoolWithAggregatesFilter<"token"> | boolean
    fecha_creacion?: DateTimeWithAggregatesFilter<"token"> | Date | string
  }

  export type TransferenciaCreateInput = {
    monto: Decimal | DecimalJsLike | number | string
    descripcion?: string | null
    fecha_creacion?: Date | string | null
    fecha_modificacion?: Date | string | null
    cuenta_Transferencia_cuenta_origen_idTocuenta: cuentaCreateNestedOneWithoutTransferencia_Transferencia_cuenta_origen_idTocuentaInput
    cuenta_Transferencia_cuenta_destino_idTocuenta: cuentaCreateNestedOneWithoutTransferencia_Transferencia_cuenta_destino_idTocuentaInput
    estado_transferencia: estado_transferenciaCreateNestedOneWithoutTransferenciaInput
    movimiento?: movimientoCreateNestedManyWithoutTransferenciaInput
  }

  export type TransferenciaUncheckedCreateInput = {
    transferencia_id?: number
    cuenta_origen_id: number
    cuenta_destino_id: number
    monto: Decimal | DecimalJsLike | number | string
    descripcion?: string | null
    estado_transferencia_id: number
    fecha_creacion?: Date | string | null
    fecha_modificacion?: Date | string | null
    movimiento?: movimientoUncheckedCreateNestedManyWithoutTransferenciaInput
  }

  export type TransferenciaUpdateInput = {
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_modificacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cuenta_Transferencia_cuenta_origen_idTocuenta?: cuentaUpdateOneRequiredWithoutTransferencia_Transferencia_cuenta_origen_idTocuentaNestedInput
    cuenta_Transferencia_cuenta_destino_idTocuenta?: cuentaUpdateOneRequiredWithoutTransferencia_Transferencia_cuenta_destino_idTocuentaNestedInput
    estado_transferencia?: estado_transferenciaUpdateOneRequiredWithoutTransferenciaNestedInput
    movimiento?: movimientoUpdateManyWithoutTransferenciaNestedInput
  }

  export type TransferenciaUncheckedUpdateInput = {
    transferencia_id?: IntFieldUpdateOperationsInput | number
    cuenta_origen_id?: IntFieldUpdateOperationsInput | number
    cuenta_destino_id?: IntFieldUpdateOperationsInput | number
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    estado_transferencia_id?: IntFieldUpdateOperationsInput | number
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_modificacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    movimiento?: movimientoUncheckedUpdateManyWithoutTransferenciaNestedInput
  }

  export type TransferenciaCreateManyInput = {
    transferencia_id?: number
    cuenta_origen_id: number
    cuenta_destino_id: number
    monto: Decimal | DecimalJsLike | number | string
    descripcion?: string | null
    estado_transferencia_id: number
    fecha_creacion?: Date | string | null
    fecha_modificacion?: Date | string | null
  }

  export type TransferenciaUpdateManyMutationInput = {
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_modificacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TransferenciaUncheckedUpdateManyInput = {
    transferencia_id?: IntFieldUpdateOperationsInput | number
    cuenta_origen_id?: IntFieldUpdateOperationsInput | number
    cuenta_destino_id?: IntFieldUpdateOperationsInput | number
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    estado_transferencia_id?: IntFieldUpdateOperationsInput | number
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_modificacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type cuentaCreateInput = {
    numero_cuenta: string
    saldo?: Decimal | DecimalJsLike | number | string
    fecha_creacion?: Date | string | null
    fecha_modificacion?: Date | string | null
    Transferencia_Transferencia_cuenta_origen_idTocuenta?: TransferenciaCreateNestedManyWithoutCuenta_Transferencia_cuenta_origen_idTocuentaInput
    Transferencia_Transferencia_cuenta_destino_idTocuenta?: TransferenciaCreateNestedManyWithoutCuenta_Transferencia_cuenta_destino_idTocuentaInput
    usuario: usuarioCreateNestedOneWithoutCuentaInput
    tipo_cuenta: tipo_cuentaCreateNestedOneWithoutCuentaInput
    movimiento?: movimientoCreateNestedManyWithoutCuentaInput
  }

  export type cuentaUncheckedCreateInput = {
    cuenta_id?: number
    numero_cuenta: string
    usuario_id: number
    tipo_cuenta_id: number
    saldo?: Decimal | DecimalJsLike | number | string
    fecha_creacion?: Date | string | null
    fecha_modificacion?: Date | string | null
    Transferencia_Transferencia_cuenta_origen_idTocuenta?: TransferenciaUncheckedCreateNestedManyWithoutCuenta_Transferencia_cuenta_origen_idTocuentaInput
    Transferencia_Transferencia_cuenta_destino_idTocuenta?: TransferenciaUncheckedCreateNestedManyWithoutCuenta_Transferencia_cuenta_destino_idTocuentaInput
    movimiento?: movimientoUncheckedCreateNestedManyWithoutCuentaInput
  }

  export type cuentaUpdateInput = {
    numero_cuenta?: StringFieldUpdateOperationsInput | string
    saldo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_modificacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Transferencia_Transferencia_cuenta_origen_idTocuenta?: TransferenciaUpdateManyWithoutCuenta_Transferencia_cuenta_origen_idTocuentaNestedInput
    Transferencia_Transferencia_cuenta_destino_idTocuenta?: TransferenciaUpdateManyWithoutCuenta_Transferencia_cuenta_destino_idTocuentaNestedInput
    usuario?: usuarioUpdateOneRequiredWithoutCuentaNestedInput
    tipo_cuenta?: tipo_cuentaUpdateOneRequiredWithoutCuentaNestedInput
    movimiento?: movimientoUpdateManyWithoutCuentaNestedInput
  }

  export type cuentaUncheckedUpdateInput = {
    cuenta_id?: IntFieldUpdateOperationsInput | number
    numero_cuenta?: StringFieldUpdateOperationsInput | string
    usuario_id?: IntFieldUpdateOperationsInput | number
    tipo_cuenta_id?: IntFieldUpdateOperationsInput | number
    saldo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_modificacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Transferencia_Transferencia_cuenta_origen_idTocuenta?: TransferenciaUncheckedUpdateManyWithoutCuenta_Transferencia_cuenta_origen_idTocuentaNestedInput
    Transferencia_Transferencia_cuenta_destino_idTocuenta?: TransferenciaUncheckedUpdateManyWithoutCuenta_Transferencia_cuenta_destino_idTocuentaNestedInput
    movimiento?: movimientoUncheckedUpdateManyWithoutCuentaNestedInput
  }

  export type cuentaCreateManyInput = {
    cuenta_id?: number
    numero_cuenta: string
    usuario_id: number
    tipo_cuenta_id: number
    saldo?: Decimal | DecimalJsLike | number | string
    fecha_creacion?: Date | string | null
    fecha_modificacion?: Date | string | null
  }

  export type cuentaUpdateManyMutationInput = {
    numero_cuenta?: StringFieldUpdateOperationsInput | string
    saldo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_modificacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type cuentaUncheckedUpdateManyInput = {
    cuenta_id?: IntFieldUpdateOperationsInput | number
    numero_cuenta?: StringFieldUpdateOperationsInput | string
    usuario_id?: IntFieldUpdateOperationsInput | number
    tipo_cuenta_id?: IntFieldUpdateOperationsInput | number
    saldo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_modificacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type estado_transferenciaCreateInput = {
    nombre: string
    descripcion: string
    fecha_creacion?: Date | string | null
    fecha_modificacion?: Date | string | null
    Transferencia?: TransferenciaCreateNestedManyWithoutEstado_transferenciaInput
  }

  export type estado_transferenciaUncheckedCreateInput = {
    estado_transferencia_id?: number
    nombre: string
    descripcion: string
    fecha_creacion?: Date | string | null
    fecha_modificacion?: Date | string | null
    Transferencia?: TransferenciaUncheckedCreateNestedManyWithoutEstado_transferenciaInput
  }

  export type estado_transferenciaUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_modificacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Transferencia?: TransferenciaUpdateManyWithoutEstado_transferenciaNestedInput
  }

  export type estado_transferenciaUncheckedUpdateInput = {
    estado_transferencia_id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_modificacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Transferencia?: TransferenciaUncheckedUpdateManyWithoutEstado_transferenciaNestedInput
  }

  export type estado_transferenciaCreateManyInput = {
    estado_transferencia_id?: number
    nombre: string
    descripcion: string
    fecha_creacion?: Date | string | null
    fecha_modificacion?: Date | string | null
  }

  export type estado_transferenciaUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_modificacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type estado_transferenciaUncheckedUpdateManyInput = {
    estado_transferencia_id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_modificacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type movimientoCreateInput = {
    monto: Decimal | DecimalJsLike | number | string
    saldo_anterior: Decimal | DecimalJsLike | number | string
    saldo_nuevo: Decimal | DecimalJsLike | number | string
    descripcion?: string | null
    fecha_creacion?: Date | string | null
    fecha_modificacion?: Date | string | null
    cuenta: cuentaCreateNestedOneWithoutMovimientoInput
    tipo_movimiento: tipo_movimientoCreateNestedOneWithoutMovimientoInput
    Transferencia?: TransferenciaCreateNestedOneWithoutMovimientoInput
  }

  export type movimientoUncheckedCreateInput = {
    movimiento_id?: number
    cuenta_id: number
    tipo_movimiento_id: number
    monto: Decimal | DecimalJsLike | number | string
    transferencia_id?: number | null
    saldo_anterior: Decimal | DecimalJsLike | number | string
    saldo_nuevo: Decimal | DecimalJsLike | number | string
    descripcion?: string | null
    fecha_creacion?: Date | string | null
    fecha_modificacion?: Date | string | null
  }

  export type movimientoUpdateInput = {
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    saldo_anterior?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    saldo_nuevo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_modificacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cuenta?: cuentaUpdateOneRequiredWithoutMovimientoNestedInput
    tipo_movimiento?: tipo_movimientoUpdateOneRequiredWithoutMovimientoNestedInput
    Transferencia?: TransferenciaUpdateOneWithoutMovimientoNestedInput
  }

  export type movimientoUncheckedUpdateInput = {
    movimiento_id?: IntFieldUpdateOperationsInput | number
    cuenta_id?: IntFieldUpdateOperationsInput | number
    tipo_movimiento_id?: IntFieldUpdateOperationsInput | number
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    transferencia_id?: NullableIntFieldUpdateOperationsInput | number | null
    saldo_anterior?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    saldo_nuevo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_modificacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type movimientoCreateManyInput = {
    movimiento_id?: number
    cuenta_id: number
    tipo_movimiento_id: number
    monto: Decimal | DecimalJsLike | number | string
    transferencia_id?: number | null
    saldo_anterior: Decimal | DecimalJsLike | number | string
    saldo_nuevo: Decimal | DecimalJsLike | number | string
    descripcion?: string | null
    fecha_creacion?: Date | string | null
    fecha_modificacion?: Date | string | null
  }

  export type movimientoUpdateManyMutationInput = {
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    saldo_anterior?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    saldo_nuevo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_modificacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type movimientoUncheckedUpdateManyInput = {
    movimiento_id?: IntFieldUpdateOperationsInput | number
    cuenta_id?: IntFieldUpdateOperationsInput | number
    tipo_movimiento_id?: IntFieldUpdateOperationsInput | number
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    transferencia_id?: NullableIntFieldUpdateOperationsInput | number | null
    saldo_anterior?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    saldo_nuevo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_modificacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tipo_cuentaCreateInput = {
    nombre: string
    descripcion: string
    fecha_creacion?: Date | string | null
    fecha_modificacion?: Date | string | null
    cuenta?: cuentaCreateNestedManyWithoutTipo_cuentaInput
  }

  export type tipo_cuentaUncheckedCreateInput = {
    tipo_cuenta_id?: number
    nombre: string
    descripcion: string
    fecha_creacion?: Date | string | null
    fecha_modificacion?: Date | string | null
    cuenta?: cuentaUncheckedCreateNestedManyWithoutTipo_cuentaInput
  }

  export type tipo_cuentaUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_modificacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cuenta?: cuentaUpdateManyWithoutTipo_cuentaNestedInput
  }

  export type tipo_cuentaUncheckedUpdateInput = {
    tipo_cuenta_id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_modificacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cuenta?: cuentaUncheckedUpdateManyWithoutTipo_cuentaNestedInput
  }

  export type tipo_cuentaCreateManyInput = {
    tipo_cuenta_id?: number
    nombre: string
    descripcion: string
    fecha_creacion?: Date | string | null
    fecha_modificacion?: Date | string | null
  }

  export type tipo_cuentaUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_modificacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tipo_cuentaUncheckedUpdateManyInput = {
    tipo_cuenta_id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_modificacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tipo_movimientoCreateInput = {
    nombre: string
    descripcion: string
    fecha_creacion?: Date | string | null
    fecha_modificacion?: Date | string | null
    movimiento?: movimientoCreateNestedManyWithoutTipo_movimientoInput
  }

  export type tipo_movimientoUncheckedCreateInput = {
    tipo_movimiento_id?: number
    nombre: string
    descripcion: string
    fecha_creacion?: Date | string | null
    fecha_modificacion?: Date | string | null
    movimiento?: movimientoUncheckedCreateNestedManyWithoutTipo_movimientoInput
  }

  export type tipo_movimientoUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_modificacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    movimiento?: movimientoUpdateManyWithoutTipo_movimientoNestedInput
  }

  export type tipo_movimientoUncheckedUpdateInput = {
    tipo_movimiento_id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_modificacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    movimiento?: movimientoUncheckedUpdateManyWithoutTipo_movimientoNestedInput
  }

  export type tipo_movimientoCreateManyInput = {
    tipo_movimiento_id?: number
    nombre: string
    descripcion: string
    fecha_creacion?: Date | string | null
    fecha_modificacion?: Date | string | null
  }

  export type tipo_movimientoUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_modificacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tipo_movimientoUncheckedUpdateManyInput = {
    tipo_movimiento_id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_modificacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usuarioCreateInput = {
    nombre: string
    email: string
    contrasena: string
    fecha_creacion?: Date | string | null
    fecha_modificacion?: Date | string | null
    cuenta?: cuentaCreateNestedManyWithoutUsuarioInput
    token?: tokenCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioUncheckedCreateInput = {
    usuario_id?: number
    nombre: string
    email: string
    contrasena: string
    fecha_creacion?: Date | string | null
    fecha_modificacion?: Date | string | null
    cuenta?: cuentaUncheckedCreateNestedManyWithoutUsuarioInput
    token?: tokenUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_modificacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cuenta?: cuentaUpdateManyWithoutUsuarioNestedInput
    token?: tokenUpdateManyWithoutUsuarioNestedInput
  }

  export type usuarioUncheckedUpdateInput = {
    usuario_id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_modificacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cuenta?: cuentaUncheckedUpdateManyWithoutUsuarioNestedInput
    token?: tokenUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type usuarioCreateManyInput = {
    usuario_id?: number
    nombre: string
    email: string
    contrasena: string
    fecha_creacion?: Date | string | null
    fecha_modificacion?: Date | string | null
  }

  export type usuarioUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_modificacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usuarioUncheckedUpdateManyInput = {
    usuario_id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_modificacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tokenCreateInput = {
    token: string
    expira_en: Date | string
    revocado?: boolean
    fecha_creacion?: Date | string
    usuario: usuarioCreateNestedOneWithoutTokenInput
  }

  export type tokenUncheckedCreateInput = {
    token_id?: number
    usuario_id: number
    token: string
    expira_en: Date | string
    revocado?: boolean
    fecha_creacion?: Date | string
  }

  export type tokenUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    expira_en?: DateTimeFieldUpdateOperationsInput | Date | string
    revocado?: BoolFieldUpdateOperationsInput | boolean
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: usuarioUpdateOneRequiredWithoutTokenNestedInput
  }

  export type tokenUncheckedUpdateInput = {
    token_id?: IntFieldUpdateOperationsInput | number
    usuario_id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    expira_en?: DateTimeFieldUpdateOperationsInput | Date | string
    revocado?: BoolFieldUpdateOperationsInput | boolean
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tokenCreateManyInput = {
    token_id?: number
    usuario_id: number
    token: string
    expira_en: Date | string
    revocado?: boolean
    fecha_creacion?: Date | string
  }

  export type tokenUpdateManyMutationInput = {
    token?: StringFieldUpdateOperationsInput | string
    expira_en?: DateTimeFieldUpdateOperationsInput | Date | string
    revocado?: BoolFieldUpdateOperationsInput | boolean
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tokenUncheckedUpdateManyInput = {
    token_id?: IntFieldUpdateOperationsInput | number
    usuario_id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    expira_en?: DateTimeFieldUpdateOperationsInput | Date | string
    revocado?: BoolFieldUpdateOperationsInput | boolean
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type CuentaRelationFilter = {
    is?: cuentaWhereInput
    isNot?: cuentaWhereInput
  }

  export type Estado_transferenciaRelationFilter = {
    is?: estado_transferenciaWhereInput
    isNot?: estado_transferenciaWhereInput
  }

  export type MovimientoListRelationFilter = {
    every?: movimientoWhereInput
    some?: movimientoWhereInput
    none?: movimientoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type movimientoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TransferenciaCountOrderByAggregateInput = {
    transferencia_id?: SortOrder
    cuenta_origen_id?: SortOrder
    cuenta_destino_id?: SortOrder
    monto?: SortOrder
    descripcion?: SortOrder
    estado_transferencia_id?: SortOrder
    fecha_creacion?: SortOrder
    fecha_modificacion?: SortOrder
  }

  export type TransferenciaAvgOrderByAggregateInput = {
    transferencia_id?: SortOrder
    cuenta_origen_id?: SortOrder
    cuenta_destino_id?: SortOrder
    monto?: SortOrder
    estado_transferencia_id?: SortOrder
  }

  export type TransferenciaMaxOrderByAggregateInput = {
    transferencia_id?: SortOrder
    cuenta_origen_id?: SortOrder
    cuenta_destino_id?: SortOrder
    monto?: SortOrder
    descripcion?: SortOrder
    estado_transferencia_id?: SortOrder
    fecha_creacion?: SortOrder
    fecha_modificacion?: SortOrder
  }

  export type TransferenciaMinOrderByAggregateInput = {
    transferencia_id?: SortOrder
    cuenta_origen_id?: SortOrder
    cuenta_destino_id?: SortOrder
    monto?: SortOrder
    descripcion?: SortOrder
    estado_transferencia_id?: SortOrder
    fecha_creacion?: SortOrder
    fecha_modificacion?: SortOrder
  }

  export type TransferenciaSumOrderByAggregateInput = {
    transferencia_id?: SortOrder
    cuenta_origen_id?: SortOrder
    cuenta_destino_id?: SortOrder
    monto?: SortOrder
    estado_transferencia_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type TransferenciaListRelationFilter = {
    every?: TransferenciaWhereInput
    some?: TransferenciaWhereInput
    none?: TransferenciaWhereInput
  }

  export type UsuarioRelationFilter = {
    is?: usuarioWhereInput
    isNot?: usuarioWhereInput
  }

  export type Tipo_cuentaRelationFilter = {
    is?: tipo_cuentaWhereInput
    isNot?: tipo_cuentaWhereInput
  }

  export type TransferenciaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type cuentaCountOrderByAggregateInput = {
    cuenta_id?: SortOrder
    numero_cuenta?: SortOrder
    usuario_id?: SortOrder
    tipo_cuenta_id?: SortOrder
    saldo?: SortOrder
    fecha_creacion?: SortOrder
    fecha_modificacion?: SortOrder
  }

  export type cuentaAvgOrderByAggregateInput = {
    cuenta_id?: SortOrder
    usuario_id?: SortOrder
    tipo_cuenta_id?: SortOrder
    saldo?: SortOrder
  }

  export type cuentaMaxOrderByAggregateInput = {
    cuenta_id?: SortOrder
    numero_cuenta?: SortOrder
    usuario_id?: SortOrder
    tipo_cuenta_id?: SortOrder
    saldo?: SortOrder
    fecha_creacion?: SortOrder
    fecha_modificacion?: SortOrder
  }

  export type cuentaMinOrderByAggregateInput = {
    cuenta_id?: SortOrder
    numero_cuenta?: SortOrder
    usuario_id?: SortOrder
    tipo_cuenta_id?: SortOrder
    saldo?: SortOrder
    fecha_creacion?: SortOrder
    fecha_modificacion?: SortOrder
  }

  export type cuentaSumOrderByAggregateInput = {
    cuenta_id?: SortOrder
    usuario_id?: SortOrder
    tipo_cuenta_id?: SortOrder
    saldo?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type estado_transferenciaCountOrderByAggregateInput = {
    estado_transferencia_id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    fecha_creacion?: SortOrder
    fecha_modificacion?: SortOrder
  }

  export type estado_transferenciaAvgOrderByAggregateInput = {
    estado_transferencia_id?: SortOrder
  }

  export type estado_transferenciaMaxOrderByAggregateInput = {
    estado_transferencia_id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    fecha_creacion?: SortOrder
    fecha_modificacion?: SortOrder
  }

  export type estado_transferenciaMinOrderByAggregateInput = {
    estado_transferencia_id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    fecha_creacion?: SortOrder
    fecha_modificacion?: SortOrder
  }

  export type estado_transferenciaSumOrderByAggregateInput = {
    estado_transferencia_id?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type Tipo_movimientoRelationFilter = {
    is?: tipo_movimientoWhereInput
    isNot?: tipo_movimientoWhereInput
  }

  export type TransferenciaNullableRelationFilter = {
    is?: TransferenciaWhereInput | null
    isNot?: TransferenciaWhereInput | null
  }

  export type movimientoCountOrderByAggregateInput = {
    movimiento_id?: SortOrder
    cuenta_id?: SortOrder
    tipo_movimiento_id?: SortOrder
    monto?: SortOrder
    transferencia_id?: SortOrder
    saldo_anterior?: SortOrder
    saldo_nuevo?: SortOrder
    descripcion?: SortOrder
    fecha_creacion?: SortOrder
    fecha_modificacion?: SortOrder
  }

  export type movimientoAvgOrderByAggregateInput = {
    movimiento_id?: SortOrder
    cuenta_id?: SortOrder
    tipo_movimiento_id?: SortOrder
    monto?: SortOrder
    transferencia_id?: SortOrder
    saldo_anterior?: SortOrder
    saldo_nuevo?: SortOrder
  }

  export type movimientoMaxOrderByAggregateInput = {
    movimiento_id?: SortOrder
    cuenta_id?: SortOrder
    tipo_movimiento_id?: SortOrder
    monto?: SortOrder
    transferencia_id?: SortOrder
    saldo_anterior?: SortOrder
    saldo_nuevo?: SortOrder
    descripcion?: SortOrder
    fecha_creacion?: SortOrder
    fecha_modificacion?: SortOrder
  }

  export type movimientoMinOrderByAggregateInput = {
    movimiento_id?: SortOrder
    cuenta_id?: SortOrder
    tipo_movimiento_id?: SortOrder
    monto?: SortOrder
    transferencia_id?: SortOrder
    saldo_anterior?: SortOrder
    saldo_nuevo?: SortOrder
    descripcion?: SortOrder
    fecha_creacion?: SortOrder
    fecha_modificacion?: SortOrder
  }

  export type movimientoSumOrderByAggregateInput = {
    movimiento_id?: SortOrder
    cuenta_id?: SortOrder
    tipo_movimiento_id?: SortOrder
    monto?: SortOrder
    transferencia_id?: SortOrder
    saldo_anterior?: SortOrder
    saldo_nuevo?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type CuentaListRelationFilter = {
    every?: cuentaWhereInput
    some?: cuentaWhereInput
    none?: cuentaWhereInput
  }

  export type cuentaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tipo_cuentaCountOrderByAggregateInput = {
    tipo_cuenta_id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    fecha_creacion?: SortOrder
    fecha_modificacion?: SortOrder
  }

  export type tipo_cuentaAvgOrderByAggregateInput = {
    tipo_cuenta_id?: SortOrder
  }

  export type tipo_cuentaMaxOrderByAggregateInput = {
    tipo_cuenta_id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    fecha_creacion?: SortOrder
    fecha_modificacion?: SortOrder
  }

  export type tipo_cuentaMinOrderByAggregateInput = {
    tipo_cuenta_id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    fecha_creacion?: SortOrder
    fecha_modificacion?: SortOrder
  }

  export type tipo_cuentaSumOrderByAggregateInput = {
    tipo_cuenta_id?: SortOrder
  }

  export type tipo_movimientoCountOrderByAggregateInput = {
    tipo_movimiento_id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    fecha_creacion?: SortOrder
    fecha_modificacion?: SortOrder
  }

  export type tipo_movimientoAvgOrderByAggregateInput = {
    tipo_movimiento_id?: SortOrder
  }

  export type tipo_movimientoMaxOrderByAggregateInput = {
    tipo_movimiento_id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    fecha_creacion?: SortOrder
    fecha_modificacion?: SortOrder
  }

  export type tipo_movimientoMinOrderByAggregateInput = {
    tipo_movimiento_id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    fecha_creacion?: SortOrder
    fecha_modificacion?: SortOrder
  }

  export type tipo_movimientoSumOrderByAggregateInput = {
    tipo_movimiento_id?: SortOrder
  }

  export type TokenListRelationFilter = {
    every?: tokenWhereInput
    some?: tokenWhereInput
    none?: tokenWhereInput
  }

  export type tokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usuarioCountOrderByAggregateInput = {
    usuario_id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    contrasena?: SortOrder
    fecha_creacion?: SortOrder
    fecha_modificacion?: SortOrder
  }

  export type usuarioAvgOrderByAggregateInput = {
    usuario_id?: SortOrder
  }

  export type usuarioMaxOrderByAggregateInput = {
    usuario_id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    contrasena?: SortOrder
    fecha_creacion?: SortOrder
    fecha_modificacion?: SortOrder
  }

  export type usuarioMinOrderByAggregateInput = {
    usuario_id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    contrasena?: SortOrder
    fecha_creacion?: SortOrder
    fecha_modificacion?: SortOrder
  }

  export type usuarioSumOrderByAggregateInput = {
    usuario_id?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type tokenCountOrderByAggregateInput = {
    token_id?: SortOrder
    usuario_id?: SortOrder
    token?: SortOrder
    expira_en?: SortOrder
    revocado?: SortOrder
    fecha_creacion?: SortOrder
  }

  export type tokenAvgOrderByAggregateInput = {
    token_id?: SortOrder
    usuario_id?: SortOrder
  }

  export type tokenMaxOrderByAggregateInput = {
    token_id?: SortOrder
    usuario_id?: SortOrder
    token?: SortOrder
    expira_en?: SortOrder
    revocado?: SortOrder
    fecha_creacion?: SortOrder
  }

  export type tokenMinOrderByAggregateInput = {
    token_id?: SortOrder
    usuario_id?: SortOrder
    token?: SortOrder
    expira_en?: SortOrder
    revocado?: SortOrder
    fecha_creacion?: SortOrder
  }

  export type tokenSumOrderByAggregateInput = {
    token_id?: SortOrder
    usuario_id?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type cuentaCreateNestedOneWithoutTransferencia_Transferencia_cuenta_origen_idTocuentaInput = {
    create?: XOR<cuentaCreateWithoutTransferencia_Transferencia_cuenta_origen_idTocuentaInput, cuentaUncheckedCreateWithoutTransferencia_Transferencia_cuenta_origen_idTocuentaInput>
    connectOrCreate?: cuentaCreateOrConnectWithoutTransferencia_Transferencia_cuenta_origen_idTocuentaInput
    connect?: cuentaWhereUniqueInput
  }

  export type cuentaCreateNestedOneWithoutTransferencia_Transferencia_cuenta_destino_idTocuentaInput = {
    create?: XOR<cuentaCreateWithoutTransferencia_Transferencia_cuenta_destino_idTocuentaInput, cuentaUncheckedCreateWithoutTransferencia_Transferencia_cuenta_destino_idTocuentaInput>
    connectOrCreate?: cuentaCreateOrConnectWithoutTransferencia_Transferencia_cuenta_destino_idTocuentaInput
    connect?: cuentaWhereUniqueInput
  }

  export type estado_transferenciaCreateNestedOneWithoutTransferenciaInput = {
    create?: XOR<estado_transferenciaCreateWithoutTransferenciaInput, estado_transferenciaUncheckedCreateWithoutTransferenciaInput>
    connectOrCreate?: estado_transferenciaCreateOrConnectWithoutTransferenciaInput
    connect?: estado_transferenciaWhereUniqueInput
  }

  export type movimientoCreateNestedManyWithoutTransferenciaInput = {
    create?: XOR<movimientoCreateWithoutTransferenciaInput, movimientoUncheckedCreateWithoutTransferenciaInput> | movimientoCreateWithoutTransferenciaInput[] | movimientoUncheckedCreateWithoutTransferenciaInput[]
    connectOrCreate?: movimientoCreateOrConnectWithoutTransferenciaInput | movimientoCreateOrConnectWithoutTransferenciaInput[]
    createMany?: movimientoCreateManyTransferenciaInputEnvelope
    connect?: movimientoWhereUniqueInput | movimientoWhereUniqueInput[]
  }

  export type movimientoUncheckedCreateNestedManyWithoutTransferenciaInput = {
    create?: XOR<movimientoCreateWithoutTransferenciaInput, movimientoUncheckedCreateWithoutTransferenciaInput> | movimientoCreateWithoutTransferenciaInput[] | movimientoUncheckedCreateWithoutTransferenciaInput[]
    connectOrCreate?: movimientoCreateOrConnectWithoutTransferenciaInput | movimientoCreateOrConnectWithoutTransferenciaInput[]
    createMany?: movimientoCreateManyTransferenciaInputEnvelope
    connect?: movimientoWhereUniqueInput | movimientoWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type cuentaUpdateOneRequiredWithoutTransferencia_Transferencia_cuenta_origen_idTocuentaNestedInput = {
    create?: XOR<cuentaCreateWithoutTransferencia_Transferencia_cuenta_origen_idTocuentaInput, cuentaUncheckedCreateWithoutTransferencia_Transferencia_cuenta_origen_idTocuentaInput>
    connectOrCreate?: cuentaCreateOrConnectWithoutTransferencia_Transferencia_cuenta_origen_idTocuentaInput
    upsert?: cuentaUpsertWithoutTransferencia_Transferencia_cuenta_origen_idTocuentaInput
    connect?: cuentaWhereUniqueInput
    update?: XOR<XOR<cuentaUpdateToOneWithWhereWithoutTransferencia_Transferencia_cuenta_origen_idTocuentaInput, cuentaUpdateWithoutTransferencia_Transferencia_cuenta_origen_idTocuentaInput>, cuentaUncheckedUpdateWithoutTransferencia_Transferencia_cuenta_origen_idTocuentaInput>
  }

  export type cuentaUpdateOneRequiredWithoutTransferencia_Transferencia_cuenta_destino_idTocuentaNestedInput = {
    create?: XOR<cuentaCreateWithoutTransferencia_Transferencia_cuenta_destino_idTocuentaInput, cuentaUncheckedCreateWithoutTransferencia_Transferencia_cuenta_destino_idTocuentaInput>
    connectOrCreate?: cuentaCreateOrConnectWithoutTransferencia_Transferencia_cuenta_destino_idTocuentaInput
    upsert?: cuentaUpsertWithoutTransferencia_Transferencia_cuenta_destino_idTocuentaInput
    connect?: cuentaWhereUniqueInput
    update?: XOR<XOR<cuentaUpdateToOneWithWhereWithoutTransferencia_Transferencia_cuenta_destino_idTocuentaInput, cuentaUpdateWithoutTransferencia_Transferencia_cuenta_destino_idTocuentaInput>, cuentaUncheckedUpdateWithoutTransferencia_Transferencia_cuenta_destino_idTocuentaInput>
  }

  export type estado_transferenciaUpdateOneRequiredWithoutTransferenciaNestedInput = {
    create?: XOR<estado_transferenciaCreateWithoutTransferenciaInput, estado_transferenciaUncheckedCreateWithoutTransferenciaInput>
    connectOrCreate?: estado_transferenciaCreateOrConnectWithoutTransferenciaInput
    upsert?: estado_transferenciaUpsertWithoutTransferenciaInput
    connect?: estado_transferenciaWhereUniqueInput
    update?: XOR<XOR<estado_transferenciaUpdateToOneWithWhereWithoutTransferenciaInput, estado_transferenciaUpdateWithoutTransferenciaInput>, estado_transferenciaUncheckedUpdateWithoutTransferenciaInput>
  }

  export type movimientoUpdateManyWithoutTransferenciaNestedInput = {
    create?: XOR<movimientoCreateWithoutTransferenciaInput, movimientoUncheckedCreateWithoutTransferenciaInput> | movimientoCreateWithoutTransferenciaInput[] | movimientoUncheckedCreateWithoutTransferenciaInput[]
    connectOrCreate?: movimientoCreateOrConnectWithoutTransferenciaInput | movimientoCreateOrConnectWithoutTransferenciaInput[]
    upsert?: movimientoUpsertWithWhereUniqueWithoutTransferenciaInput | movimientoUpsertWithWhereUniqueWithoutTransferenciaInput[]
    createMany?: movimientoCreateManyTransferenciaInputEnvelope
    set?: movimientoWhereUniqueInput | movimientoWhereUniqueInput[]
    disconnect?: movimientoWhereUniqueInput | movimientoWhereUniqueInput[]
    delete?: movimientoWhereUniqueInput | movimientoWhereUniqueInput[]
    connect?: movimientoWhereUniqueInput | movimientoWhereUniqueInput[]
    update?: movimientoUpdateWithWhereUniqueWithoutTransferenciaInput | movimientoUpdateWithWhereUniqueWithoutTransferenciaInput[]
    updateMany?: movimientoUpdateManyWithWhereWithoutTransferenciaInput | movimientoUpdateManyWithWhereWithoutTransferenciaInput[]
    deleteMany?: movimientoScalarWhereInput | movimientoScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type movimientoUncheckedUpdateManyWithoutTransferenciaNestedInput = {
    create?: XOR<movimientoCreateWithoutTransferenciaInput, movimientoUncheckedCreateWithoutTransferenciaInput> | movimientoCreateWithoutTransferenciaInput[] | movimientoUncheckedCreateWithoutTransferenciaInput[]
    connectOrCreate?: movimientoCreateOrConnectWithoutTransferenciaInput | movimientoCreateOrConnectWithoutTransferenciaInput[]
    upsert?: movimientoUpsertWithWhereUniqueWithoutTransferenciaInput | movimientoUpsertWithWhereUniqueWithoutTransferenciaInput[]
    createMany?: movimientoCreateManyTransferenciaInputEnvelope
    set?: movimientoWhereUniqueInput | movimientoWhereUniqueInput[]
    disconnect?: movimientoWhereUniqueInput | movimientoWhereUniqueInput[]
    delete?: movimientoWhereUniqueInput | movimientoWhereUniqueInput[]
    connect?: movimientoWhereUniqueInput | movimientoWhereUniqueInput[]
    update?: movimientoUpdateWithWhereUniqueWithoutTransferenciaInput | movimientoUpdateWithWhereUniqueWithoutTransferenciaInput[]
    updateMany?: movimientoUpdateManyWithWhereWithoutTransferenciaInput | movimientoUpdateManyWithWhereWithoutTransferenciaInput[]
    deleteMany?: movimientoScalarWhereInput | movimientoScalarWhereInput[]
  }

  export type TransferenciaCreateNestedManyWithoutCuenta_Transferencia_cuenta_origen_idTocuentaInput = {
    create?: XOR<TransferenciaCreateWithoutCuenta_Transferencia_cuenta_origen_idTocuentaInput, TransferenciaUncheckedCreateWithoutCuenta_Transferencia_cuenta_origen_idTocuentaInput> | TransferenciaCreateWithoutCuenta_Transferencia_cuenta_origen_idTocuentaInput[] | TransferenciaUncheckedCreateWithoutCuenta_Transferencia_cuenta_origen_idTocuentaInput[]
    connectOrCreate?: TransferenciaCreateOrConnectWithoutCuenta_Transferencia_cuenta_origen_idTocuentaInput | TransferenciaCreateOrConnectWithoutCuenta_Transferencia_cuenta_origen_idTocuentaInput[]
    createMany?: TransferenciaCreateManyCuenta_Transferencia_cuenta_origen_idTocuentaInputEnvelope
    connect?: TransferenciaWhereUniqueInput | TransferenciaWhereUniqueInput[]
  }

  export type TransferenciaCreateNestedManyWithoutCuenta_Transferencia_cuenta_destino_idTocuentaInput = {
    create?: XOR<TransferenciaCreateWithoutCuenta_Transferencia_cuenta_destino_idTocuentaInput, TransferenciaUncheckedCreateWithoutCuenta_Transferencia_cuenta_destino_idTocuentaInput> | TransferenciaCreateWithoutCuenta_Transferencia_cuenta_destino_idTocuentaInput[] | TransferenciaUncheckedCreateWithoutCuenta_Transferencia_cuenta_destino_idTocuentaInput[]
    connectOrCreate?: TransferenciaCreateOrConnectWithoutCuenta_Transferencia_cuenta_destino_idTocuentaInput | TransferenciaCreateOrConnectWithoutCuenta_Transferencia_cuenta_destino_idTocuentaInput[]
    createMany?: TransferenciaCreateManyCuenta_Transferencia_cuenta_destino_idTocuentaInputEnvelope
    connect?: TransferenciaWhereUniqueInput | TransferenciaWhereUniqueInput[]
  }

  export type usuarioCreateNestedOneWithoutCuentaInput = {
    create?: XOR<usuarioCreateWithoutCuentaInput, usuarioUncheckedCreateWithoutCuentaInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutCuentaInput
    connect?: usuarioWhereUniqueInput
  }

  export type tipo_cuentaCreateNestedOneWithoutCuentaInput = {
    create?: XOR<tipo_cuentaCreateWithoutCuentaInput, tipo_cuentaUncheckedCreateWithoutCuentaInput>
    connectOrCreate?: tipo_cuentaCreateOrConnectWithoutCuentaInput
    connect?: tipo_cuentaWhereUniqueInput
  }

  export type movimientoCreateNestedManyWithoutCuentaInput = {
    create?: XOR<movimientoCreateWithoutCuentaInput, movimientoUncheckedCreateWithoutCuentaInput> | movimientoCreateWithoutCuentaInput[] | movimientoUncheckedCreateWithoutCuentaInput[]
    connectOrCreate?: movimientoCreateOrConnectWithoutCuentaInput | movimientoCreateOrConnectWithoutCuentaInput[]
    createMany?: movimientoCreateManyCuentaInputEnvelope
    connect?: movimientoWhereUniqueInput | movimientoWhereUniqueInput[]
  }

  export type TransferenciaUncheckedCreateNestedManyWithoutCuenta_Transferencia_cuenta_origen_idTocuentaInput = {
    create?: XOR<TransferenciaCreateWithoutCuenta_Transferencia_cuenta_origen_idTocuentaInput, TransferenciaUncheckedCreateWithoutCuenta_Transferencia_cuenta_origen_idTocuentaInput> | TransferenciaCreateWithoutCuenta_Transferencia_cuenta_origen_idTocuentaInput[] | TransferenciaUncheckedCreateWithoutCuenta_Transferencia_cuenta_origen_idTocuentaInput[]
    connectOrCreate?: TransferenciaCreateOrConnectWithoutCuenta_Transferencia_cuenta_origen_idTocuentaInput | TransferenciaCreateOrConnectWithoutCuenta_Transferencia_cuenta_origen_idTocuentaInput[]
    createMany?: TransferenciaCreateManyCuenta_Transferencia_cuenta_origen_idTocuentaInputEnvelope
    connect?: TransferenciaWhereUniqueInput | TransferenciaWhereUniqueInput[]
  }

  export type TransferenciaUncheckedCreateNestedManyWithoutCuenta_Transferencia_cuenta_destino_idTocuentaInput = {
    create?: XOR<TransferenciaCreateWithoutCuenta_Transferencia_cuenta_destino_idTocuentaInput, TransferenciaUncheckedCreateWithoutCuenta_Transferencia_cuenta_destino_idTocuentaInput> | TransferenciaCreateWithoutCuenta_Transferencia_cuenta_destino_idTocuentaInput[] | TransferenciaUncheckedCreateWithoutCuenta_Transferencia_cuenta_destino_idTocuentaInput[]
    connectOrCreate?: TransferenciaCreateOrConnectWithoutCuenta_Transferencia_cuenta_destino_idTocuentaInput | TransferenciaCreateOrConnectWithoutCuenta_Transferencia_cuenta_destino_idTocuentaInput[]
    createMany?: TransferenciaCreateManyCuenta_Transferencia_cuenta_destino_idTocuentaInputEnvelope
    connect?: TransferenciaWhereUniqueInput | TransferenciaWhereUniqueInput[]
  }

  export type movimientoUncheckedCreateNestedManyWithoutCuentaInput = {
    create?: XOR<movimientoCreateWithoutCuentaInput, movimientoUncheckedCreateWithoutCuentaInput> | movimientoCreateWithoutCuentaInput[] | movimientoUncheckedCreateWithoutCuentaInput[]
    connectOrCreate?: movimientoCreateOrConnectWithoutCuentaInput | movimientoCreateOrConnectWithoutCuentaInput[]
    createMany?: movimientoCreateManyCuentaInputEnvelope
    connect?: movimientoWhereUniqueInput | movimientoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type TransferenciaUpdateManyWithoutCuenta_Transferencia_cuenta_origen_idTocuentaNestedInput = {
    create?: XOR<TransferenciaCreateWithoutCuenta_Transferencia_cuenta_origen_idTocuentaInput, TransferenciaUncheckedCreateWithoutCuenta_Transferencia_cuenta_origen_idTocuentaInput> | TransferenciaCreateWithoutCuenta_Transferencia_cuenta_origen_idTocuentaInput[] | TransferenciaUncheckedCreateWithoutCuenta_Transferencia_cuenta_origen_idTocuentaInput[]
    connectOrCreate?: TransferenciaCreateOrConnectWithoutCuenta_Transferencia_cuenta_origen_idTocuentaInput | TransferenciaCreateOrConnectWithoutCuenta_Transferencia_cuenta_origen_idTocuentaInput[]
    upsert?: TransferenciaUpsertWithWhereUniqueWithoutCuenta_Transferencia_cuenta_origen_idTocuentaInput | TransferenciaUpsertWithWhereUniqueWithoutCuenta_Transferencia_cuenta_origen_idTocuentaInput[]
    createMany?: TransferenciaCreateManyCuenta_Transferencia_cuenta_origen_idTocuentaInputEnvelope
    set?: TransferenciaWhereUniqueInput | TransferenciaWhereUniqueInput[]
    disconnect?: TransferenciaWhereUniqueInput | TransferenciaWhereUniqueInput[]
    delete?: TransferenciaWhereUniqueInput | TransferenciaWhereUniqueInput[]
    connect?: TransferenciaWhereUniqueInput | TransferenciaWhereUniqueInput[]
    update?: TransferenciaUpdateWithWhereUniqueWithoutCuenta_Transferencia_cuenta_origen_idTocuentaInput | TransferenciaUpdateWithWhereUniqueWithoutCuenta_Transferencia_cuenta_origen_idTocuentaInput[]
    updateMany?: TransferenciaUpdateManyWithWhereWithoutCuenta_Transferencia_cuenta_origen_idTocuentaInput | TransferenciaUpdateManyWithWhereWithoutCuenta_Transferencia_cuenta_origen_idTocuentaInput[]
    deleteMany?: TransferenciaScalarWhereInput | TransferenciaScalarWhereInput[]
  }

  export type TransferenciaUpdateManyWithoutCuenta_Transferencia_cuenta_destino_idTocuentaNestedInput = {
    create?: XOR<TransferenciaCreateWithoutCuenta_Transferencia_cuenta_destino_idTocuentaInput, TransferenciaUncheckedCreateWithoutCuenta_Transferencia_cuenta_destino_idTocuentaInput> | TransferenciaCreateWithoutCuenta_Transferencia_cuenta_destino_idTocuentaInput[] | TransferenciaUncheckedCreateWithoutCuenta_Transferencia_cuenta_destino_idTocuentaInput[]
    connectOrCreate?: TransferenciaCreateOrConnectWithoutCuenta_Transferencia_cuenta_destino_idTocuentaInput | TransferenciaCreateOrConnectWithoutCuenta_Transferencia_cuenta_destino_idTocuentaInput[]
    upsert?: TransferenciaUpsertWithWhereUniqueWithoutCuenta_Transferencia_cuenta_destino_idTocuentaInput | TransferenciaUpsertWithWhereUniqueWithoutCuenta_Transferencia_cuenta_destino_idTocuentaInput[]
    createMany?: TransferenciaCreateManyCuenta_Transferencia_cuenta_destino_idTocuentaInputEnvelope
    set?: TransferenciaWhereUniqueInput | TransferenciaWhereUniqueInput[]
    disconnect?: TransferenciaWhereUniqueInput | TransferenciaWhereUniqueInput[]
    delete?: TransferenciaWhereUniqueInput | TransferenciaWhereUniqueInput[]
    connect?: TransferenciaWhereUniqueInput | TransferenciaWhereUniqueInput[]
    update?: TransferenciaUpdateWithWhereUniqueWithoutCuenta_Transferencia_cuenta_destino_idTocuentaInput | TransferenciaUpdateWithWhereUniqueWithoutCuenta_Transferencia_cuenta_destino_idTocuentaInput[]
    updateMany?: TransferenciaUpdateManyWithWhereWithoutCuenta_Transferencia_cuenta_destino_idTocuentaInput | TransferenciaUpdateManyWithWhereWithoutCuenta_Transferencia_cuenta_destino_idTocuentaInput[]
    deleteMany?: TransferenciaScalarWhereInput | TransferenciaScalarWhereInput[]
  }

  export type usuarioUpdateOneRequiredWithoutCuentaNestedInput = {
    create?: XOR<usuarioCreateWithoutCuentaInput, usuarioUncheckedCreateWithoutCuentaInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutCuentaInput
    upsert?: usuarioUpsertWithoutCuentaInput
    connect?: usuarioWhereUniqueInput
    update?: XOR<XOR<usuarioUpdateToOneWithWhereWithoutCuentaInput, usuarioUpdateWithoutCuentaInput>, usuarioUncheckedUpdateWithoutCuentaInput>
  }

  export type tipo_cuentaUpdateOneRequiredWithoutCuentaNestedInput = {
    create?: XOR<tipo_cuentaCreateWithoutCuentaInput, tipo_cuentaUncheckedCreateWithoutCuentaInput>
    connectOrCreate?: tipo_cuentaCreateOrConnectWithoutCuentaInput
    upsert?: tipo_cuentaUpsertWithoutCuentaInput
    connect?: tipo_cuentaWhereUniqueInput
    update?: XOR<XOR<tipo_cuentaUpdateToOneWithWhereWithoutCuentaInput, tipo_cuentaUpdateWithoutCuentaInput>, tipo_cuentaUncheckedUpdateWithoutCuentaInput>
  }

  export type movimientoUpdateManyWithoutCuentaNestedInput = {
    create?: XOR<movimientoCreateWithoutCuentaInput, movimientoUncheckedCreateWithoutCuentaInput> | movimientoCreateWithoutCuentaInput[] | movimientoUncheckedCreateWithoutCuentaInput[]
    connectOrCreate?: movimientoCreateOrConnectWithoutCuentaInput | movimientoCreateOrConnectWithoutCuentaInput[]
    upsert?: movimientoUpsertWithWhereUniqueWithoutCuentaInput | movimientoUpsertWithWhereUniqueWithoutCuentaInput[]
    createMany?: movimientoCreateManyCuentaInputEnvelope
    set?: movimientoWhereUniqueInput | movimientoWhereUniqueInput[]
    disconnect?: movimientoWhereUniqueInput | movimientoWhereUniqueInput[]
    delete?: movimientoWhereUniqueInput | movimientoWhereUniqueInput[]
    connect?: movimientoWhereUniqueInput | movimientoWhereUniqueInput[]
    update?: movimientoUpdateWithWhereUniqueWithoutCuentaInput | movimientoUpdateWithWhereUniqueWithoutCuentaInput[]
    updateMany?: movimientoUpdateManyWithWhereWithoutCuentaInput | movimientoUpdateManyWithWhereWithoutCuentaInput[]
    deleteMany?: movimientoScalarWhereInput | movimientoScalarWhereInput[]
  }

  export type TransferenciaUncheckedUpdateManyWithoutCuenta_Transferencia_cuenta_origen_idTocuentaNestedInput = {
    create?: XOR<TransferenciaCreateWithoutCuenta_Transferencia_cuenta_origen_idTocuentaInput, TransferenciaUncheckedCreateWithoutCuenta_Transferencia_cuenta_origen_idTocuentaInput> | TransferenciaCreateWithoutCuenta_Transferencia_cuenta_origen_idTocuentaInput[] | TransferenciaUncheckedCreateWithoutCuenta_Transferencia_cuenta_origen_idTocuentaInput[]
    connectOrCreate?: TransferenciaCreateOrConnectWithoutCuenta_Transferencia_cuenta_origen_idTocuentaInput | TransferenciaCreateOrConnectWithoutCuenta_Transferencia_cuenta_origen_idTocuentaInput[]
    upsert?: TransferenciaUpsertWithWhereUniqueWithoutCuenta_Transferencia_cuenta_origen_idTocuentaInput | TransferenciaUpsertWithWhereUniqueWithoutCuenta_Transferencia_cuenta_origen_idTocuentaInput[]
    createMany?: TransferenciaCreateManyCuenta_Transferencia_cuenta_origen_idTocuentaInputEnvelope
    set?: TransferenciaWhereUniqueInput | TransferenciaWhereUniqueInput[]
    disconnect?: TransferenciaWhereUniqueInput | TransferenciaWhereUniqueInput[]
    delete?: TransferenciaWhereUniqueInput | TransferenciaWhereUniqueInput[]
    connect?: TransferenciaWhereUniqueInput | TransferenciaWhereUniqueInput[]
    update?: TransferenciaUpdateWithWhereUniqueWithoutCuenta_Transferencia_cuenta_origen_idTocuentaInput | TransferenciaUpdateWithWhereUniqueWithoutCuenta_Transferencia_cuenta_origen_idTocuentaInput[]
    updateMany?: TransferenciaUpdateManyWithWhereWithoutCuenta_Transferencia_cuenta_origen_idTocuentaInput | TransferenciaUpdateManyWithWhereWithoutCuenta_Transferencia_cuenta_origen_idTocuentaInput[]
    deleteMany?: TransferenciaScalarWhereInput | TransferenciaScalarWhereInput[]
  }

  export type TransferenciaUncheckedUpdateManyWithoutCuenta_Transferencia_cuenta_destino_idTocuentaNestedInput = {
    create?: XOR<TransferenciaCreateWithoutCuenta_Transferencia_cuenta_destino_idTocuentaInput, TransferenciaUncheckedCreateWithoutCuenta_Transferencia_cuenta_destino_idTocuentaInput> | TransferenciaCreateWithoutCuenta_Transferencia_cuenta_destino_idTocuentaInput[] | TransferenciaUncheckedCreateWithoutCuenta_Transferencia_cuenta_destino_idTocuentaInput[]
    connectOrCreate?: TransferenciaCreateOrConnectWithoutCuenta_Transferencia_cuenta_destino_idTocuentaInput | TransferenciaCreateOrConnectWithoutCuenta_Transferencia_cuenta_destino_idTocuentaInput[]
    upsert?: TransferenciaUpsertWithWhereUniqueWithoutCuenta_Transferencia_cuenta_destino_idTocuentaInput | TransferenciaUpsertWithWhereUniqueWithoutCuenta_Transferencia_cuenta_destino_idTocuentaInput[]
    createMany?: TransferenciaCreateManyCuenta_Transferencia_cuenta_destino_idTocuentaInputEnvelope
    set?: TransferenciaWhereUniqueInput | TransferenciaWhereUniqueInput[]
    disconnect?: TransferenciaWhereUniqueInput | TransferenciaWhereUniqueInput[]
    delete?: TransferenciaWhereUniqueInput | TransferenciaWhereUniqueInput[]
    connect?: TransferenciaWhereUniqueInput | TransferenciaWhereUniqueInput[]
    update?: TransferenciaUpdateWithWhereUniqueWithoutCuenta_Transferencia_cuenta_destino_idTocuentaInput | TransferenciaUpdateWithWhereUniqueWithoutCuenta_Transferencia_cuenta_destino_idTocuentaInput[]
    updateMany?: TransferenciaUpdateManyWithWhereWithoutCuenta_Transferencia_cuenta_destino_idTocuentaInput | TransferenciaUpdateManyWithWhereWithoutCuenta_Transferencia_cuenta_destino_idTocuentaInput[]
    deleteMany?: TransferenciaScalarWhereInput | TransferenciaScalarWhereInput[]
  }

  export type movimientoUncheckedUpdateManyWithoutCuentaNestedInput = {
    create?: XOR<movimientoCreateWithoutCuentaInput, movimientoUncheckedCreateWithoutCuentaInput> | movimientoCreateWithoutCuentaInput[] | movimientoUncheckedCreateWithoutCuentaInput[]
    connectOrCreate?: movimientoCreateOrConnectWithoutCuentaInput | movimientoCreateOrConnectWithoutCuentaInput[]
    upsert?: movimientoUpsertWithWhereUniqueWithoutCuentaInput | movimientoUpsertWithWhereUniqueWithoutCuentaInput[]
    createMany?: movimientoCreateManyCuentaInputEnvelope
    set?: movimientoWhereUniqueInput | movimientoWhereUniqueInput[]
    disconnect?: movimientoWhereUniqueInput | movimientoWhereUniqueInput[]
    delete?: movimientoWhereUniqueInput | movimientoWhereUniqueInput[]
    connect?: movimientoWhereUniqueInput | movimientoWhereUniqueInput[]
    update?: movimientoUpdateWithWhereUniqueWithoutCuentaInput | movimientoUpdateWithWhereUniqueWithoutCuentaInput[]
    updateMany?: movimientoUpdateManyWithWhereWithoutCuentaInput | movimientoUpdateManyWithWhereWithoutCuentaInput[]
    deleteMany?: movimientoScalarWhereInput | movimientoScalarWhereInput[]
  }

  export type TransferenciaCreateNestedManyWithoutEstado_transferenciaInput = {
    create?: XOR<TransferenciaCreateWithoutEstado_transferenciaInput, TransferenciaUncheckedCreateWithoutEstado_transferenciaInput> | TransferenciaCreateWithoutEstado_transferenciaInput[] | TransferenciaUncheckedCreateWithoutEstado_transferenciaInput[]
    connectOrCreate?: TransferenciaCreateOrConnectWithoutEstado_transferenciaInput | TransferenciaCreateOrConnectWithoutEstado_transferenciaInput[]
    createMany?: TransferenciaCreateManyEstado_transferenciaInputEnvelope
    connect?: TransferenciaWhereUniqueInput | TransferenciaWhereUniqueInput[]
  }

  export type TransferenciaUncheckedCreateNestedManyWithoutEstado_transferenciaInput = {
    create?: XOR<TransferenciaCreateWithoutEstado_transferenciaInput, TransferenciaUncheckedCreateWithoutEstado_transferenciaInput> | TransferenciaCreateWithoutEstado_transferenciaInput[] | TransferenciaUncheckedCreateWithoutEstado_transferenciaInput[]
    connectOrCreate?: TransferenciaCreateOrConnectWithoutEstado_transferenciaInput | TransferenciaCreateOrConnectWithoutEstado_transferenciaInput[]
    createMany?: TransferenciaCreateManyEstado_transferenciaInputEnvelope
    connect?: TransferenciaWhereUniqueInput | TransferenciaWhereUniqueInput[]
  }

  export type TransferenciaUpdateManyWithoutEstado_transferenciaNestedInput = {
    create?: XOR<TransferenciaCreateWithoutEstado_transferenciaInput, TransferenciaUncheckedCreateWithoutEstado_transferenciaInput> | TransferenciaCreateWithoutEstado_transferenciaInput[] | TransferenciaUncheckedCreateWithoutEstado_transferenciaInput[]
    connectOrCreate?: TransferenciaCreateOrConnectWithoutEstado_transferenciaInput | TransferenciaCreateOrConnectWithoutEstado_transferenciaInput[]
    upsert?: TransferenciaUpsertWithWhereUniqueWithoutEstado_transferenciaInput | TransferenciaUpsertWithWhereUniqueWithoutEstado_transferenciaInput[]
    createMany?: TransferenciaCreateManyEstado_transferenciaInputEnvelope
    set?: TransferenciaWhereUniqueInput | TransferenciaWhereUniqueInput[]
    disconnect?: TransferenciaWhereUniqueInput | TransferenciaWhereUniqueInput[]
    delete?: TransferenciaWhereUniqueInput | TransferenciaWhereUniqueInput[]
    connect?: TransferenciaWhereUniqueInput | TransferenciaWhereUniqueInput[]
    update?: TransferenciaUpdateWithWhereUniqueWithoutEstado_transferenciaInput | TransferenciaUpdateWithWhereUniqueWithoutEstado_transferenciaInput[]
    updateMany?: TransferenciaUpdateManyWithWhereWithoutEstado_transferenciaInput | TransferenciaUpdateManyWithWhereWithoutEstado_transferenciaInput[]
    deleteMany?: TransferenciaScalarWhereInput | TransferenciaScalarWhereInput[]
  }

  export type TransferenciaUncheckedUpdateManyWithoutEstado_transferenciaNestedInput = {
    create?: XOR<TransferenciaCreateWithoutEstado_transferenciaInput, TransferenciaUncheckedCreateWithoutEstado_transferenciaInput> | TransferenciaCreateWithoutEstado_transferenciaInput[] | TransferenciaUncheckedCreateWithoutEstado_transferenciaInput[]
    connectOrCreate?: TransferenciaCreateOrConnectWithoutEstado_transferenciaInput | TransferenciaCreateOrConnectWithoutEstado_transferenciaInput[]
    upsert?: TransferenciaUpsertWithWhereUniqueWithoutEstado_transferenciaInput | TransferenciaUpsertWithWhereUniqueWithoutEstado_transferenciaInput[]
    createMany?: TransferenciaCreateManyEstado_transferenciaInputEnvelope
    set?: TransferenciaWhereUniqueInput | TransferenciaWhereUniqueInput[]
    disconnect?: TransferenciaWhereUniqueInput | TransferenciaWhereUniqueInput[]
    delete?: TransferenciaWhereUniqueInput | TransferenciaWhereUniqueInput[]
    connect?: TransferenciaWhereUniqueInput | TransferenciaWhereUniqueInput[]
    update?: TransferenciaUpdateWithWhereUniqueWithoutEstado_transferenciaInput | TransferenciaUpdateWithWhereUniqueWithoutEstado_transferenciaInput[]
    updateMany?: TransferenciaUpdateManyWithWhereWithoutEstado_transferenciaInput | TransferenciaUpdateManyWithWhereWithoutEstado_transferenciaInput[]
    deleteMany?: TransferenciaScalarWhereInput | TransferenciaScalarWhereInput[]
  }

  export type cuentaCreateNestedOneWithoutMovimientoInput = {
    create?: XOR<cuentaCreateWithoutMovimientoInput, cuentaUncheckedCreateWithoutMovimientoInput>
    connectOrCreate?: cuentaCreateOrConnectWithoutMovimientoInput
    connect?: cuentaWhereUniqueInput
  }

  export type tipo_movimientoCreateNestedOneWithoutMovimientoInput = {
    create?: XOR<tipo_movimientoCreateWithoutMovimientoInput, tipo_movimientoUncheckedCreateWithoutMovimientoInput>
    connectOrCreate?: tipo_movimientoCreateOrConnectWithoutMovimientoInput
    connect?: tipo_movimientoWhereUniqueInput
  }

  export type TransferenciaCreateNestedOneWithoutMovimientoInput = {
    create?: XOR<TransferenciaCreateWithoutMovimientoInput, TransferenciaUncheckedCreateWithoutMovimientoInput>
    connectOrCreate?: TransferenciaCreateOrConnectWithoutMovimientoInput
    connect?: TransferenciaWhereUniqueInput
  }

  export type cuentaUpdateOneRequiredWithoutMovimientoNestedInput = {
    create?: XOR<cuentaCreateWithoutMovimientoInput, cuentaUncheckedCreateWithoutMovimientoInput>
    connectOrCreate?: cuentaCreateOrConnectWithoutMovimientoInput
    upsert?: cuentaUpsertWithoutMovimientoInput
    connect?: cuentaWhereUniqueInput
    update?: XOR<XOR<cuentaUpdateToOneWithWhereWithoutMovimientoInput, cuentaUpdateWithoutMovimientoInput>, cuentaUncheckedUpdateWithoutMovimientoInput>
  }

  export type tipo_movimientoUpdateOneRequiredWithoutMovimientoNestedInput = {
    create?: XOR<tipo_movimientoCreateWithoutMovimientoInput, tipo_movimientoUncheckedCreateWithoutMovimientoInput>
    connectOrCreate?: tipo_movimientoCreateOrConnectWithoutMovimientoInput
    upsert?: tipo_movimientoUpsertWithoutMovimientoInput
    connect?: tipo_movimientoWhereUniqueInput
    update?: XOR<XOR<tipo_movimientoUpdateToOneWithWhereWithoutMovimientoInput, tipo_movimientoUpdateWithoutMovimientoInput>, tipo_movimientoUncheckedUpdateWithoutMovimientoInput>
  }

  export type TransferenciaUpdateOneWithoutMovimientoNestedInput = {
    create?: XOR<TransferenciaCreateWithoutMovimientoInput, TransferenciaUncheckedCreateWithoutMovimientoInput>
    connectOrCreate?: TransferenciaCreateOrConnectWithoutMovimientoInput
    upsert?: TransferenciaUpsertWithoutMovimientoInput
    disconnect?: TransferenciaWhereInput | boolean
    delete?: TransferenciaWhereInput | boolean
    connect?: TransferenciaWhereUniqueInput
    update?: XOR<XOR<TransferenciaUpdateToOneWithWhereWithoutMovimientoInput, TransferenciaUpdateWithoutMovimientoInput>, TransferenciaUncheckedUpdateWithoutMovimientoInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type cuentaCreateNestedManyWithoutTipo_cuentaInput = {
    create?: XOR<cuentaCreateWithoutTipo_cuentaInput, cuentaUncheckedCreateWithoutTipo_cuentaInput> | cuentaCreateWithoutTipo_cuentaInput[] | cuentaUncheckedCreateWithoutTipo_cuentaInput[]
    connectOrCreate?: cuentaCreateOrConnectWithoutTipo_cuentaInput | cuentaCreateOrConnectWithoutTipo_cuentaInput[]
    createMany?: cuentaCreateManyTipo_cuentaInputEnvelope
    connect?: cuentaWhereUniqueInput | cuentaWhereUniqueInput[]
  }

  export type cuentaUncheckedCreateNestedManyWithoutTipo_cuentaInput = {
    create?: XOR<cuentaCreateWithoutTipo_cuentaInput, cuentaUncheckedCreateWithoutTipo_cuentaInput> | cuentaCreateWithoutTipo_cuentaInput[] | cuentaUncheckedCreateWithoutTipo_cuentaInput[]
    connectOrCreate?: cuentaCreateOrConnectWithoutTipo_cuentaInput | cuentaCreateOrConnectWithoutTipo_cuentaInput[]
    createMany?: cuentaCreateManyTipo_cuentaInputEnvelope
    connect?: cuentaWhereUniqueInput | cuentaWhereUniqueInput[]
  }

  export type cuentaUpdateManyWithoutTipo_cuentaNestedInput = {
    create?: XOR<cuentaCreateWithoutTipo_cuentaInput, cuentaUncheckedCreateWithoutTipo_cuentaInput> | cuentaCreateWithoutTipo_cuentaInput[] | cuentaUncheckedCreateWithoutTipo_cuentaInput[]
    connectOrCreate?: cuentaCreateOrConnectWithoutTipo_cuentaInput | cuentaCreateOrConnectWithoutTipo_cuentaInput[]
    upsert?: cuentaUpsertWithWhereUniqueWithoutTipo_cuentaInput | cuentaUpsertWithWhereUniqueWithoutTipo_cuentaInput[]
    createMany?: cuentaCreateManyTipo_cuentaInputEnvelope
    set?: cuentaWhereUniqueInput | cuentaWhereUniqueInput[]
    disconnect?: cuentaWhereUniqueInput | cuentaWhereUniqueInput[]
    delete?: cuentaWhereUniqueInput | cuentaWhereUniqueInput[]
    connect?: cuentaWhereUniqueInput | cuentaWhereUniqueInput[]
    update?: cuentaUpdateWithWhereUniqueWithoutTipo_cuentaInput | cuentaUpdateWithWhereUniqueWithoutTipo_cuentaInput[]
    updateMany?: cuentaUpdateManyWithWhereWithoutTipo_cuentaInput | cuentaUpdateManyWithWhereWithoutTipo_cuentaInput[]
    deleteMany?: cuentaScalarWhereInput | cuentaScalarWhereInput[]
  }

  export type cuentaUncheckedUpdateManyWithoutTipo_cuentaNestedInput = {
    create?: XOR<cuentaCreateWithoutTipo_cuentaInput, cuentaUncheckedCreateWithoutTipo_cuentaInput> | cuentaCreateWithoutTipo_cuentaInput[] | cuentaUncheckedCreateWithoutTipo_cuentaInput[]
    connectOrCreate?: cuentaCreateOrConnectWithoutTipo_cuentaInput | cuentaCreateOrConnectWithoutTipo_cuentaInput[]
    upsert?: cuentaUpsertWithWhereUniqueWithoutTipo_cuentaInput | cuentaUpsertWithWhereUniqueWithoutTipo_cuentaInput[]
    createMany?: cuentaCreateManyTipo_cuentaInputEnvelope
    set?: cuentaWhereUniqueInput | cuentaWhereUniqueInput[]
    disconnect?: cuentaWhereUniqueInput | cuentaWhereUniqueInput[]
    delete?: cuentaWhereUniqueInput | cuentaWhereUniqueInput[]
    connect?: cuentaWhereUniqueInput | cuentaWhereUniqueInput[]
    update?: cuentaUpdateWithWhereUniqueWithoutTipo_cuentaInput | cuentaUpdateWithWhereUniqueWithoutTipo_cuentaInput[]
    updateMany?: cuentaUpdateManyWithWhereWithoutTipo_cuentaInput | cuentaUpdateManyWithWhereWithoutTipo_cuentaInput[]
    deleteMany?: cuentaScalarWhereInput | cuentaScalarWhereInput[]
  }

  export type movimientoCreateNestedManyWithoutTipo_movimientoInput = {
    create?: XOR<movimientoCreateWithoutTipo_movimientoInput, movimientoUncheckedCreateWithoutTipo_movimientoInput> | movimientoCreateWithoutTipo_movimientoInput[] | movimientoUncheckedCreateWithoutTipo_movimientoInput[]
    connectOrCreate?: movimientoCreateOrConnectWithoutTipo_movimientoInput | movimientoCreateOrConnectWithoutTipo_movimientoInput[]
    createMany?: movimientoCreateManyTipo_movimientoInputEnvelope
    connect?: movimientoWhereUniqueInput | movimientoWhereUniqueInput[]
  }

  export type movimientoUncheckedCreateNestedManyWithoutTipo_movimientoInput = {
    create?: XOR<movimientoCreateWithoutTipo_movimientoInput, movimientoUncheckedCreateWithoutTipo_movimientoInput> | movimientoCreateWithoutTipo_movimientoInput[] | movimientoUncheckedCreateWithoutTipo_movimientoInput[]
    connectOrCreate?: movimientoCreateOrConnectWithoutTipo_movimientoInput | movimientoCreateOrConnectWithoutTipo_movimientoInput[]
    createMany?: movimientoCreateManyTipo_movimientoInputEnvelope
    connect?: movimientoWhereUniqueInput | movimientoWhereUniqueInput[]
  }

  export type movimientoUpdateManyWithoutTipo_movimientoNestedInput = {
    create?: XOR<movimientoCreateWithoutTipo_movimientoInput, movimientoUncheckedCreateWithoutTipo_movimientoInput> | movimientoCreateWithoutTipo_movimientoInput[] | movimientoUncheckedCreateWithoutTipo_movimientoInput[]
    connectOrCreate?: movimientoCreateOrConnectWithoutTipo_movimientoInput | movimientoCreateOrConnectWithoutTipo_movimientoInput[]
    upsert?: movimientoUpsertWithWhereUniqueWithoutTipo_movimientoInput | movimientoUpsertWithWhereUniqueWithoutTipo_movimientoInput[]
    createMany?: movimientoCreateManyTipo_movimientoInputEnvelope
    set?: movimientoWhereUniqueInput | movimientoWhereUniqueInput[]
    disconnect?: movimientoWhereUniqueInput | movimientoWhereUniqueInput[]
    delete?: movimientoWhereUniqueInput | movimientoWhereUniqueInput[]
    connect?: movimientoWhereUniqueInput | movimientoWhereUniqueInput[]
    update?: movimientoUpdateWithWhereUniqueWithoutTipo_movimientoInput | movimientoUpdateWithWhereUniqueWithoutTipo_movimientoInput[]
    updateMany?: movimientoUpdateManyWithWhereWithoutTipo_movimientoInput | movimientoUpdateManyWithWhereWithoutTipo_movimientoInput[]
    deleteMany?: movimientoScalarWhereInput | movimientoScalarWhereInput[]
  }

  export type movimientoUncheckedUpdateManyWithoutTipo_movimientoNestedInput = {
    create?: XOR<movimientoCreateWithoutTipo_movimientoInput, movimientoUncheckedCreateWithoutTipo_movimientoInput> | movimientoCreateWithoutTipo_movimientoInput[] | movimientoUncheckedCreateWithoutTipo_movimientoInput[]
    connectOrCreate?: movimientoCreateOrConnectWithoutTipo_movimientoInput | movimientoCreateOrConnectWithoutTipo_movimientoInput[]
    upsert?: movimientoUpsertWithWhereUniqueWithoutTipo_movimientoInput | movimientoUpsertWithWhereUniqueWithoutTipo_movimientoInput[]
    createMany?: movimientoCreateManyTipo_movimientoInputEnvelope
    set?: movimientoWhereUniqueInput | movimientoWhereUniqueInput[]
    disconnect?: movimientoWhereUniqueInput | movimientoWhereUniqueInput[]
    delete?: movimientoWhereUniqueInput | movimientoWhereUniqueInput[]
    connect?: movimientoWhereUniqueInput | movimientoWhereUniqueInput[]
    update?: movimientoUpdateWithWhereUniqueWithoutTipo_movimientoInput | movimientoUpdateWithWhereUniqueWithoutTipo_movimientoInput[]
    updateMany?: movimientoUpdateManyWithWhereWithoutTipo_movimientoInput | movimientoUpdateManyWithWhereWithoutTipo_movimientoInput[]
    deleteMany?: movimientoScalarWhereInput | movimientoScalarWhereInput[]
  }

  export type cuentaCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<cuentaCreateWithoutUsuarioInput, cuentaUncheckedCreateWithoutUsuarioInput> | cuentaCreateWithoutUsuarioInput[] | cuentaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: cuentaCreateOrConnectWithoutUsuarioInput | cuentaCreateOrConnectWithoutUsuarioInput[]
    createMany?: cuentaCreateManyUsuarioInputEnvelope
    connect?: cuentaWhereUniqueInput | cuentaWhereUniqueInput[]
  }

  export type tokenCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<tokenCreateWithoutUsuarioInput, tokenUncheckedCreateWithoutUsuarioInput> | tokenCreateWithoutUsuarioInput[] | tokenUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: tokenCreateOrConnectWithoutUsuarioInput | tokenCreateOrConnectWithoutUsuarioInput[]
    createMany?: tokenCreateManyUsuarioInputEnvelope
    connect?: tokenWhereUniqueInput | tokenWhereUniqueInput[]
  }

  export type cuentaUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<cuentaCreateWithoutUsuarioInput, cuentaUncheckedCreateWithoutUsuarioInput> | cuentaCreateWithoutUsuarioInput[] | cuentaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: cuentaCreateOrConnectWithoutUsuarioInput | cuentaCreateOrConnectWithoutUsuarioInput[]
    createMany?: cuentaCreateManyUsuarioInputEnvelope
    connect?: cuentaWhereUniqueInput | cuentaWhereUniqueInput[]
  }

  export type tokenUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<tokenCreateWithoutUsuarioInput, tokenUncheckedCreateWithoutUsuarioInput> | tokenCreateWithoutUsuarioInput[] | tokenUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: tokenCreateOrConnectWithoutUsuarioInput | tokenCreateOrConnectWithoutUsuarioInput[]
    createMany?: tokenCreateManyUsuarioInputEnvelope
    connect?: tokenWhereUniqueInput | tokenWhereUniqueInput[]
  }

  export type cuentaUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<cuentaCreateWithoutUsuarioInput, cuentaUncheckedCreateWithoutUsuarioInput> | cuentaCreateWithoutUsuarioInput[] | cuentaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: cuentaCreateOrConnectWithoutUsuarioInput | cuentaCreateOrConnectWithoutUsuarioInput[]
    upsert?: cuentaUpsertWithWhereUniqueWithoutUsuarioInput | cuentaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: cuentaCreateManyUsuarioInputEnvelope
    set?: cuentaWhereUniqueInput | cuentaWhereUniqueInput[]
    disconnect?: cuentaWhereUniqueInput | cuentaWhereUniqueInput[]
    delete?: cuentaWhereUniqueInput | cuentaWhereUniqueInput[]
    connect?: cuentaWhereUniqueInput | cuentaWhereUniqueInput[]
    update?: cuentaUpdateWithWhereUniqueWithoutUsuarioInput | cuentaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: cuentaUpdateManyWithWhereWithoutUsuarioInput | cuentaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: cuentaScalarWhereInput | cuentaScalarWhereInput[]
  }

  export type tokenUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<tokenCreateWithoutUsuarioInput, tokenUncheckedCreateWithoutUsuarioInput> | tokenCreateWithoutUsuarioInput[] | tokenUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: tokenCreateOrConnectWithoutUsuarioInput | tokenCreateOrConnectWithoutUsuarioInput[]
    upsert?: tokenUpsertWithWhereUniqueWithoutUsuarioInput | tokenUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: tokenCreateManyUsuarioInputEnvelope
    set?: tokenWhereUniqueInput | tokenWhereUniqueInput[]
    disconnect?: tokenWhereUniqueInput | tokenWhereUniqueInput[]
    delete?: tokenWhereUniqueInput | tokenWhereUniqueInput[]
    connect?: tokenWhereUniqueInput | tokenWhereUniqueInput[]
    update?: tokenUpdateWithWhereUniqueWithoutUsuarioInput | tokenUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: tokenUpdateManyWithWhereWithoutUsuarioInput | tokenUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: tokenScalarWhereInput | tokenScalarWhereInput[]
  }

  export type cuentaUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<cuentaCreateWithoutUsuarioInput, cuentaUncheckedCreateWithoutUsuarioInput> | cuentaCreateWithoutUsuarioInput[] | cuentaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: cuentaCreateOrConnectWithoutUsuarioInput | cuentaCreateOrConnectWithoutUsuarioInput[]
    upsert?: cuentaUpsertWithWhereUniqueWithoutUsuarioInput | cuentaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: cuentaCreateManyUsuarioInputEnvelope
    set?: cuentaWhereUniqueInput | cuentaWhereUniqueInput[]
    disconnect?: cuentaWhereUniqueInput | cuentaWhereUniqueInput[]
    delete?: cuentaWhereUniqueInput | cuentaWhereUniqueInput[]
    connect?: cuentaWhereUniqueInput | cuentaWhereUniqueInput[]
    update?: cuentaUpdateWithWhereUniqueWithoutUsuarioInput | cuentaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: cuentaUpdateManyWithWhereWithoutUsuarioInput | cuentaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: cuentaScalarWhereInput | cuentaScalarWhereInput[]
  }

  export type tokenUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<tokenCreateWithoutUsuarioInput, tokenUncheckedCreateWithoutUsuarioInput> | tokenCreateWithoutUsuarioInput[] | tokenUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: tokenCreateOrConnectWithoutUsuarioInput | tokenCreateOrConnectWithoutUsuarioInput[]
    upsert?: tokenUpsertWithWhereUniqueWithoutUsuarioInput | tokenUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: tokenCreateManyUsuarioInputEnvelope
    set?: tokenWhereUniqueInput | tokenWhereUniqueInput[]
    disconnect?: tokenWhereUniqueInput | tokenWhereUniqueInput[]
    delete?: tokenWhereUniqueInput | tokenWhereUniqueInput[]
    connect?: tokenWhereUniqueInput | tokenWhereUniqueInput[]
    update?: tokenUpdateWithWhereUniqueWithoutUsuarioInput | tokenUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: tokenUpdateManyWithWhereWithoutUsuarioInput | tokenUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: tokenScalarWhereInput | tokenScalarWhereInput[]
  }

  export type usuarioCreateNestedOneWithoutTokenInput = {
    create?: XOR<usuarioCreateWithoutTokenInput, usuarioUncheckedCreateWithoutTokenInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutTokenInput
    connect?: usuarioWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type usuarioUpdateOneRequiredWithoutTokenNestedInput = {
    create?: XOR<usuarioCreateWithoutTokenInput, usuarioUncheckedCreateWithoutTokenInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutTokenInput
    upsert?: usuarioUpsertWithoutTokenInput
    connect?: usuarioWhereUniqueInput
    update?: XOR<XOR<usuarioUpdateToOneWithWhereWithoutTokenInput, usuarioUpdateWithoutTokenInput>, usuarioUncheckedUpdateWithoutTokenInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type cuentaCreateWithoutTransferencia_Transferencia_cuenta_origen_idTocuentaInput = {
    numero_cuenta: string
    saldo?: Decimal | DecimalJsLike | number | string
    fecha_creacion?: Date | string | null
    fecha_modificacion?: Date | string | null
    Transferencia_Transferencia_cuenta_destino_idTocuenta?: TransferenciaCreateNestedManyWithoutCuenta_Transferencia_cuenta_destino_idTocuentaInput
    usuario: usuarioCreateNestedOneWithoutCuentaInput
    tipo_cuenta: tipo_cuentaCreateNestedOneWithoutCuentaInput
    movimiento?: movimientoCreateNestedManyWithoutCuentaInput
  }

  export type cuentaUncheckedCreateWithoutTransferencia_Transferencia_cuenta_origen_idTocuentaInput = {
    cuenta_id?: number
    numero_cuenta: string
    usuario_id: number
    tipo_cuenta_id: number
    saldo?: Decimal | DecimalJsLike | number | string
    fecha_creacion?: Date | string | null
    fecha_modificacion?: Date | string | null
    Transferencia_Transferencia_cuenta_destino_idTocuenta?: TransferenciaUncheckedCreateNestedManyWithoutCuenta_Transferencia_cuenta_destino_idTocuentaInput
    movimiento?: movimientoUncheckedCreateNestedManyWithoutCuentaInput
  }

  export type cuentaCreateOrConnectWithoutTransferencia_Transferencia_cuenta_origen_idTocuentaInput = {
    where: cuentaWhereUniqueInput
    create: XOR<cuentaCreateWithoutTransferencia_Transferencia_cuenta_origen_idTocuentaInput, cuentaUncheckedCreateWithoutTransferencia_Transferencia_cuenta_origen_idTocuentaInput>
  }

  export type cuentaCreateWithoutTransferencia_Transferencia_cuenta_destino_idTocuentaInput = {
    numero_cuenta: string
    saldo?: Decimal | DecimalJsLike | number | string
    fecha_creacion?: Date | string | null
    fecha_modificacion?: Date | string | null
    Transferencia_Transferencia_cuenta_origen_idTocuenta?: TransferenciaCreateNestedManyWithoutCuenta_Transferencia_cuenta_origen_idTocuentaInput
    usuario: usuarioCreateNestedOneWithoutCuentaInput
    tipo_cuenta: tipo_cuentaCreateNestedOneWithoutCuentaInput
    movimiento?: movimientoCreateNestedManyWithoutCuentaInput
  }

  export type cuentaUncheckedCreateWithoutTransferencia_Transferencia_cuenta_destino_idTocuentaInput = {
    cuenta_id?: number
    numero_cuenta: string
    usuario_id: number
    tipo_cuenta_id: number
    saldo?: Decimal | DecimalJsLike | number | string
    fecha_creacion?: Date | string | null
    fecha_modificacion?: Date | string | null
    Transferencia_Transferencia_cuenta_origen_idTocuenta?: TransferenciaUncheckedCreateNestedManyWithoutCuenta_Transferencia_cuenta_origen_idTocuentaInput
    movimiento?: movimientoUncheckedCreateNestedManyWithoutCuentaInput
  }

  export type cuentaCreateOrConnectWithoutTransferencia_Transferencia_cuenta_destino_idTocuentaInput = {
    where: cuentaWhereUniqueInput
    create: XOR<cuentaCreateWithoutTransferencia_Transferencia_cuenta_destino_idTocuentaInput, cuentaUncheckedCreateWithoutTransferencia_Transferencia_cuenta_destino_idTocuentaInput>
  }

  export type estado_transferenciaCreateWithoutTransferenciaInput = {
    nombre: string
    descripcion: string
    fecha_creacion?: Date | string | null
    fecha_modificacion?: Date | string | null
  }

  export type estado_transferenciaUncheckedCreateWithoutTransferenciaInput = {
    estado_transferencia_id?: number
    nombre: string
    descripcion: string
    fecha_creacion?: Date | string | null
    fecha_modificacion?: Date | string | null
  }

  export type estado_transferenciaCreateOrConnectWithoutTransferenciaInput = {
    where: estado_transferenciaWhereUniqueInput
    create: XOR<estado_transferenciaCreateWithoutTransferenciaInput, estado_transferenciaUncheckedCreateWithoutTransferenciaInput>
  }

  export type movimientoCreateWithoutTransferenciaInput = {
    monto: Decimal | DecimalJsLike | number | string
    saldo_anterior: Decimal | DecimalJsLike | number | string
    saldo_nuevo: Decimal | DecimalJsLike | number | string
    descripcion?: string | null
    fecha_creacion?: Date | string | null
    fecha_modificacion?: Date | string | null
    cuenta: cuentaCreateNestedOneWithoutMovimientoInput
    tipo_movimiento: tipo_movimientoCreateNestedOneWithoutMovimientoInput
  }

  export type movimientoUncheckedCreateWithoutTransferenciaInput = {
    movimiento_id?: number
    cuenta_id: number
    tipo_movimiento_id: number
    monto: Decimal | DecimalJsLike | number | string
    saldo_anterior: Decimal | DecimalJsLike | number | string
    saldo_nuevo: Decimal | DecimalJsLike | number | string
    descripcion?: string | null
    fecha_creacion?: Date | string | null
    fecha_modificacion?: Date | string | null
  }

  export type movimientoCreateOrConnectWithoutTransferenciaInput = {
    where: movimientoWhereUniqueInput
    create: XOR<movimientoCreateWithoutTransferenciaInput, movimientoUncheckedCreateWithoutTransferenciaInput>
  }

  export type movimientoCreateManyTransferenciaInputEnvelope = {
    data: movimientoCreateManyTransferenciaInput | movimientoCreateManyTransferenciaInput[]
    skipDuplicates?: boolean
  }

  export type cuentaUpsertWithoutTransferencia_Transferencia_cuenta_origen_idTocuentaInput = {
    update: XOR<cuentaUpdateWithoutTransferencia_Transferencia_cuenta_origen_idTocuentaInput, cuentaUncheckedUpdateWithoutTransferencia_Transferencia_cuenta_origen_idTocuentaInput>
    create: XOR<cuentaCreateWithoutTransferencia_Transferencia_cuenta_origen_idTocuentaInput, cuentaUncheckedCreateWithoutTransferencia_Transferencia_cuenta_origen_idTocuentaInput>
    where?: cuentaWhereInput
  }

  export type cuentaUpdateToOneWithWhereWithoutTransferencia_Transferencia_cuenta_origen_idTocuentaInput = {
    where?: cuentaWhereInput
    data: XOR<cuentaUpdateWithoutTransferencia_Transferencia_cuenta_origen_idTocuentaInput, cuentaUncheckedUpdateWithoutTransferencia_Transferencia_cuenta_origen_idTocuentaInput>
  }

  export type cuentaUpdateWithoutTransferencia_Transferencia_cuenta_origen_idTocuentaInput = {
    numero_cuenta?: StringFieldUpdateOperationsInput | string
    saldo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_modificacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Transferencia_Transferencia_cuenta_destino_idTocuenta?: TransferenciaUpdateManyWithoutCuenta_Transferencia_cuenta_destino_idTocuentaNestedInput
    usuario?: usuarioUpdateOneRequiredWithoutCuentaNestedInput
    tipo_cuenta?: tipo_cuentaUpdateOneRequiredWithoutCuentaNestedInput
    movimiento?: movimientoUpdateManyWithoutCuentaNestedInput
  }

  export type cuentaUncheckedUpdateWithoutTransferencia_Transferencia_cuenta_origen_idTocuentaInput = {
    cuenta_id?: IntFieldUpdateOperationsInput | number
    numero_cuenta?: StringFieldUpdateOperationsInput | string
    usuario_id?: IntFieldUpdateOperationsInput | number
    tipo_cuenta_id?: IntFieldUpdateOperationsInput | number
    saldo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_modificacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Transferencia_Transferencia_cuenta_destino_idTocuenta?: TransferenciaUncheckedUpdateManyWithoutCuenta_Transferencia_cuenta_destino_idTocuentaNestedInput
    movimiento?: movimientoUncheckedUpdateManyWithoutCuentaNestedInput
  }

  export type cuentaUpsertWithoutTransferencia_Transferencia_cuenta_destino_idTocuentaInput = {
    update: XOR<cuentaUpdateWithoutTransferencia_Transferencia_cuenta_destino_idTocuentaInput, cuentaUncheckedUpdateWithoutTransferencia_Transferencia_cuenta_destino_idTocuentaInput>
    create: XOR<cuentaCreateWithoutTransferencia_Transferencia_cuenta_destino_idTocuentaInput, cuentaUncheckedCreateWithoutTransferencia_Transferencia_cuenta_destino_idTocuentaInput>
    where?: cuentaWhereInput
  }

  export type cuentaUpdateToOneWithWhereWithoutTransferencia_Transferencia_cuenta_destino_idTocuentaInput = {
    where?: cuentaWhereInput
    data: XOR<cuentaUpdateWithoutTransferencia_Transferencia_cuenta_destino_idTocuentaInput, cuentaUncheckedUpdateWithoutTransferencia_Transferencia_cuenta_destino_idTocuentaInput>
  }

  export type cuentaUpdateWithoutTransferencia_Transferencia_cuenta_destino_idTocuentaInput = {
    numero_cuenta?: StringFieldUpdateOperationsInput | string
    saldo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_modificacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Transferencia_Transferencia_cuenta_origen_idTocuenta?: TransferenciaUpdateManyWithoutCuenta_Transferencia_cuenta_origen_idTocuentaNestedInput
    usuario?: usuarioUpdateOneRequiredWithoutCuentaNestedInput
    tipo_cuenta?: tipo_cuentaUpdateOneRequiredWithoutCuentaNestedInput
    movimiento?: movimientoUpdateManyWithoutCuentaNestedInput
  }

  export type cuentaUncheckedUpdateWithoutTransferencia_Transferencia_cuenta_destino_idTocuentaInput = {
    cuenta_id?: IntFieldUpdateOperationsInput | number
    numero_cuenta?: StringFieldUpdateOperationsInput | string
    usuario_id?: IntFieldUpdateOperationsInput | number
    tipo_cuenta_id?: IntFieldUpdateOperationsInput | number
    saldo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_modificacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Transferencia_Transferencia_cuenta_origen_idTocuenta?: TransferenciaUncheckedUpdateManyWithoutCuenta_Transferencia_cuenta_origen_idTocuentaNestedInput
    movimiento?: movimientoUncheckedUpdateManyWithoutCuentaNestedInput
  }

  export type estado_transferenciaUpsertWithoutTransferenciaInput = {
    update: XOR<estado_transferenciaUpdateWithoutTransferenciaInput, estado_transferenciaUncheckedUpdateWithoutTransferenciaInput>
    create: XOR<estado_transferenciaCreateWithoutTransferenciaInput, estado_transferenciaUncheckedCreateWithoutTransferenciaInput>
    where?: estado_transferenciaWhereInput
  }

  export type estado_transferenciaUpdateToOneWithWhereWithoutTransferenciaInput = {
    where?: estado_transferenciaWhereInput
    data: XOR<estado_transferenciaUpdateWithoutTransferenciaInput, estado_transferenciaUncheckedUpdateWithoutTransferenciaInput>
  }

  export type estado_transferenciaUpdateWithoutTransferenciaInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_modificacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type estado_transferenciaUncheckedUpdateWithoutTransferenciaInput = {
    estado_transferencia_id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_modificacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type movimientoUpsertWithWhereUniqueWithoutTransferenciaInput = {
    where: movimientoWhereUniqueInput
    update: XOR<movimientoUpdateWithoutTransferenciaInput, movimientoUncheckedUpdateWithoutTransferenciaInput>
    create: XOR<movimientoCreateWithoutTransferenciaInput, movimientoUncheckedCreateWithoutTransferenciaInput>
  }

  export type movimientoUpdateWithWhereUniqueWithoutTransferenciaInput = {
    where: movimientoWhereUniqueInput
    data: XOR<movimientoUpdateWithoutTransferenciaInput, movimientoUncheckedUpdateWithoutTransferenciaInput>
  }

  export type movimientoUpdateManyWithWhereWithoutTransferenciaInput = {
    where: movimientoScalarWhereInput
    data: XOR<movimientoUpdateManyMutationInput, movimientoUncheckedUpdateManyWithoutTransferenciaInput>
  }

  export type movimientoScalarWhereInput = {
    AND?: movimientoScalarWhereInput | movimientoScalarWhereInput[]
    OR?: movimientoScalarWhereInput[]
    NOT?: movimientoScalarWhereInput | movimientoScalarWhereInput[]
    movimiento_id?: IntFilter<"movimiento"> | number
    cuenta_id?: IntFilter<"movimiento"> | number
    tipo_movimiento_id?: IntFilter<"movimiento"> | number
    monto?: DecimalFilter<"movimiento"> | Decimal | DecimalJsLike | number | string
    transferencia_id?: IntNullableFilter<"movimiento"> | number | null
    saldo_anterior?: DecimalFilter<"movimiento"> | Decimal | DecimalJsLike | number | string
    saldo_nuevo?: DecimalFilter<"movimiento"> | Decimal | DecimalJsLike | number | string
    descripcion?: StringNullableFilter<"movimiento"> | string | null
    fecha_creacion?: DateTimeNullableFilter<"movimiento"> | Date | string | null
    fecha_modificacion?: DateTimeNullableFilter<"movimiento"> | Date | string | null
  }

  export type TransferenciaCreateWithoutCuenta_Transferencia_cuenta_origen_idTocuentaInput = {
    monto: Decimal | DecimalJsLike | number | string
    descripcion?: string | null
    fecha_creacion?: Date | string | null
    fecha_modificacion?: Date | string | null
    cuenta_Transferencia_cuenta_destino_idTocuenta: cuentaCreateNestedOneWithoutTransferencia_Transferencia_cuenta_destino_idTocuentaInput
    estado_transferencia: estado_transferenciaCreateNestedOneWithoutTransferenciaInput
    movimiento?: movimientoCreateNestedManyWithoutTransferenciaInput
  }

  export type TransferenciaUncheckedCreateWithoutCuenta_Transferencia_cuenta_origen_idTocuentaInput = {
    transferencia_id?: number
    cuenta_destino_id: number
    monto: Decimal | DecimalJsLike | number | string
    descripcion?: string | null
    estado_transferencia_id: number
    fecha_creacion?: Date | string | null
    fecha_modificacion?: Date | string | null
    movimiento?: movimientoUncheckedCreateNestedManyWithoutTransferenciaInput
  }

  export type TransferenciaCreateOrConnectWithoutCuenta_Transferencia_cuenta_origen_idTocuentaInput = {
    where: TransferenciaWhereUniqueInput
    create: XOR<TransferenciaCreateWithoutCuenta_Transferencia_cuenta_origen_idTocuentaInput, TransferenciaUncheckedCreateWithoutCuenta_Transferencia_cuenta_origen_idTocuentaInput>
  }

  export type TransferenciaCreateManyCuenta_Transferencia_cuenta_origen_idTocuentaInputEnvelope = {
    data: TransferenciaCreateManyCuenta_Transferencia_cuenta_origen_idTocuentaInput | TransferenciaCreateManyCuenta_Transferencia_cuenta_origen_idTocuentaInput[]
    skipDuplicates?: boolean
  }

  export type TransferenciaCreateWithoutCuenta_Transferencia_cuenta_destino_idTocuentaInput = {
    monto: Decimal | DecimalJsLike | number | string
    descripcion?: string | null
    fecha_creacion?: Date | string | null
    fecha_modificacion?: Date | string | null
    cuenta_Transferencia_cuenta_origen_idTocuenta: cuentaCreateNestedOneWithoutTransferencia_Transferencia_cuenta_origen_idTocuentaInput
    estado_transferencia: estado_transferenciaCreateNestedOneWithoutTransferenciaInput
    movimiento?: movimientoCreateNestedManyWithoutTransferenciaInput
  }

  export type TransferenciaUncheckedCreateWithoutCuenta_Transferencia_cuenta_destino_idTocuentaInput = {
    transferencia_id?: number
    cuenta_origen_id: number
    monto: Decimal | DecimalJsLike | number | string
    descripcion?: string | null
    estado_transferencia_id: number
    fecha_creacion?: Date | string | null
    fecha_modificacion?: Date | string | null
    movimiento?: movimientoUncheckedCreateNestedManyWithoutTransferenciaInput
  }

  export type TransferenciaCreateOrConnectWithoutCuenta_Transferencia_cuenta_destino_idTocuentaInput = {
    where: TransferenciaWhereUniqueInput
    create: XOR<TransferenciaCreateWithoutCuenta_Transferencia_cuenta_destino_idTocuentaInput, TransferenciaUncheckedCreateWithoutCuenta_Transferencia_cuenta_destino_idTocuentaInput>
  }

  export type TransferenciaCreateManyCuenta_Transferencia_cuenta_destino_idTocuentaInputEnvelope = {
    data: TransferenciaCreateManyCuenta_Transferencia_cuenta_destino_idTocuentaInput | TransferenciaCreateManyCuenta_Transferencia_cuenta_destino_idTocuentaInput[]
    skipDuplicates?: boolean
  }

  export type usuarioCreateWithoutCuentaInput = {
    nombre: string
    email: string
    contrasena: string
    fecha_creacion?: Date | string | null
    fecha_modificacion?: Date | string | null
    token?: tokenCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioUncheckedCreateWithoutCuentaInput = {
    usuario_id?: number
    nombre: string
    email: string
    contrasena: string
    fecha_creacion?: Date | string | null
    fecha_modificacion?: Date | string | null
    token?: tokenUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioCreateOrConnectWithoutCuentaInput = {
    where: usuarioWhereUniqueInput
    create: XOR<usuarioCreateWithoutCuentaInput, usuarioUncheckedCreateWithoutCuentaInput>
  }

  export type tipo_cuentaCreateWithoutCuentaInput = {
    nombre: string
    descripcion: string
    fecha_creacion?: Date | string | null
    fecha_modificacion?: Date | string | null
  }

  export type tipo_cuentaUncheckedCreateWithoutCuentaInput = {
    tipo_cuenta_id?: number
    nombre: string
    descripcion: string
    fecha_creacion?: Date | string | null
    fecha_modificacion?: Date | string | null
  }

  export type tipo_cuentaCreateOrConnectWithoutCuentaInput = {
    where: tipo_cuentaWhereUniqueInput
    create: XOR<tipo_cuentaCreateWithoutCuentaInput, tipo_cuentaUncheckedCreateWithoutCuentaInput>
  }

  export type movimientoCreateWithoutCuentaInput = {
    monto: Decimal | DecimalJsLike | number | string
    saldo_anterior: Decimal | DecimalJsLike | number | string
    saldo_nuevo: Decimal | DecimalJsLike | number | string
    descripcion?: string | null
    fecha_creacion?: Date | string | null
    fecha_modificacion?: Date | string | null
    tipo_movimiento: tipo_movimientoCreateNestedOneWithoutMovimientoInput
    Transferencia?: TransferenciaCreateNestedOneWithoutMovimientoInput
  }

  export type movimientoUncheckedCreateWithoutCuentaInput = {
    movimiento_id?: number
    tipo_movimiento_id: number
    monto: Decimal | DecimalJsLike | number | string
    transferencia_id?: number | null
    saldo_anterior: Decimal | DecimalJsLike | number | string
    saldo_nuevo: Decimal | DecimalJsLike | number | string
    descripcion?: string | null
    fecha_creacion?: Date | string | null
    fecha_modificacion?: Date | string | null
  }

  export type movimientoCreateOrConnectWithoutCuentaInput = {
    where: movimientoWhereUniqueInput
    create: XOR<movimientoCreateWithoutCuentaInput, movimientoUncheckedCreateWithoutCuentaInput>
  }

  export type movimientoCreateManyCuentaInputEnvelope = {
    data: movimientoCreateManyCuentaInput | movimientoCreateManyCuentaInput[]
    skipDuplicates?: boolean
  }

  export type TransferenciaUpsertWithWhereUniqueWithoutCuenta_Transferencia_cuenta_origen_idTocuentaInput = {
    where: TransferenciaWhereUniqueInput
    update: XOR<TransferenciaUpdateWithoutCuenta_Transferencia_cuenta_origen_idTocuentaInput, TransferenciaUncheckedUpdateWithoutCuenta_Transferencia_cuenta_origen_idTocuentaInput>
    create: XOR<TransferenciaCreateWithoutCuenta_Transferencia_cuenta_origen_idTocuentaInput, TransferenciaUncheckedCreateWithoutCuenta_Transferencia_cuenta_origen_idTocuentaInput>
  }

  export type TransferenciaUpdateWithWhereUniqueWithoutCuenta_Transferencia_cuenta_origen_idTocuentaInput = {
    where: TransferenciaWhereUniqueInput
    data: XOR<TransferenciaUpdateWithoutCuenta_Transferencia_cuenta_origen_idTocuentaInput, TransferenciaUncheckedUpdateWithoutCuenta_Transferencia_cuenta_origen_idTocuentaInput>
  }

  export type TransferenciaUpdateManyWithWhereWithoutCuenta_Transferencia_cuenta_origen_idTocuentaInput = {
    where: TransferenciaScalarWhereInput
    data: XOR<TransferenciaUpdateManyMutationInput, TransferenciaUncheckedUpdateManyWithoutCuenta_Transferencia_cuenta_origen_idTocuentaInput>
  }

  export type TransferenciaScalarWhereInput = {
    AND?: TransferenciaScalarWhereInput | TransferenciaScalarWhereInput[]
    OR?: TransferenciaScalarWhereInput[]
    NOT?: TransferenciaScalarWhereInput | TransferenciaScalarWhereInput[]
    transferencia_id?: IntFilter<"Transferencia"> | number
    cuenta_origen_id?: IntFilter<"Transferencia"> | number
    cuenta_destino_id?: IntFilter<"Transferencia"> | number
    monto?: DecimalFilter<"Transferencia"> | Decimal | DecimalJsLike | number | string
    descripcion?: StringNullableFilter<"Transferencia"> | string | null
    estado_transferencia_id?: IntFilter<"Transferencia"> | number
    fecha_creacion?: DateTimeNullableFilter<"Transferencia"> | Date | string | null
    fecha_modificacion?: DateTimeNullableFilter<"Transferencia"> | Date | string | null
  }

  export type TransferenciaUpsertWithWhereUniqueWithoutCuenta_Transferencia_cuenta_destino_idTocuentaInput = {
    where: TransferenciaWhereUniqueInput
    update: XOR<TransferenciaUpdateWithoutCuenta_Transferencia_cuenta_destino_idTocuentaInput, TransferenciaUncheckedUpdateWithoutCuenta_Transferencia_cuenta_destino_idTocuentaInput>
    create: XOR<TransferenciaCreateWithoutCuenta_Transferencia_cuenta_destino_idTocuentaInput, TransferenciaUncheckedCreateWithoutCuenta_Transferencia_cuenta_destino_idTocuentaInput>
  }

  export type TransferenciaUpdateWithWhereUniqueWithoutCuenta_Transferencia_cuenta_destino_idTocuentaInput = {
    where: TransferenciaWhereUniqueInput
    data: XOR<TransferenciaUpdateWithoutCuenta_Transferencia_cuenta_destino_idTocuentaInput, TransferenciaUncheckedUpdateWithoutCuenta_Transferencia_cuenta_destino_idTocuentaInput>
  }

  export type TransferenciaUpdateManyWithWhereWithoutCuenta_Transferencia_cuenta_destino_idTocuentaInput = {
    where: TransferenciaScalarWhereInput
    data: XOR<TransferenciaUpdateManyMutationInput, TransferenciaUncheckedUpdateManyWithoutCuenta_Transferencia_cuenta_destino_idTocuentaInput>
  }

  export type usuarioUpsertWithoutCuentaInput = {
    update: XOR<usuarioUpdateWithoutCuentaInput, usuarioUncheckedUpdateWithoutCuentaInput>
    create: XOR<usuarioCreateWithoutCuentaInput, usuarioUncheckedCreateWithoutCuentaInput>
    where?: usuarioWhereInput
  }

  export type usuarioUpdateToOneWithWhereWithoutCuentaInput = {
    where?: usuarioWhereInput
    data: XOR<usuarioUpdateWithoutCuentaInput, usuarioUncheckedUpdateWithoutCuentaInput>
  }

  export type usuarioUpdateWithoutCuentaInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_modificacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    token?: tokenUpdateManyWithoutUsuarioNestedInput
  }

  export type usuarioUncheckedUpdateWithoutCuentaInput = {
    usuario_id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_modificacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    token?: tokenUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type tipo_cuentaUpsertWithoutCuentaInput = {
    update: XOR<tipo_cuentaUpdateWithoutCuentaInput, tipo_cuentaUncheckedUpdateWithoutCuentaInput>
    create: XOR<tipo_cuentaCreateWithoutCuentaInput, tipo_cuentaUncheckedCreateWithoutCuentaInput>
    where?: tipo_cuentaWhereInput
  }

  export type tipo_cuentaUpdateToOneWithWhereWithoutCuentaInput = {
    where?: tipo_cuentaWhereInput
    data: XOR<tipo_cuentaUpdateWithoutCuentaInput, tipo_cuentaUncheckedUpdateWithoutCuentaInput>
  }

  export type tipo_cuentaUpdateWithoutCuentaInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_modificacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tipo_cuentaUncheckedUpdateWithoutCuentaInput = {
    tipo_cuenta_id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_modificacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type movimientoUpsertWithWhereUniqueWithoutCuentaInput = {
    where: movimientoWhereUniqueInput
    update: XOR<movimientoUpdateWithoutCuentaInput, movimientoUncheckedUpdateWithoutCuentaInput>
    create: XOR<movimientoCreateWithoutCuentaInput, movimientoUncheckedCreateWithoutCuentaInput>
  }

  export type movimientoUpdateWithWhereUniqueWithoutCuentaInput = {
    where: movimientoWhereUniqueInput
    data: XOR<movimientoUpdateWithoutCuentaInput, movimientoUncheckedUpdateWithoutCuentaInput>
  }

  export type movimientoUpdateManyWithWhereWithoutCuentaInput = {
    where: movimientoScalarWhereInput
    data: XOR<movimientoUpdateManyMutationInput, movimientoUncheckedUpdateManyWithoutCuentaInput>
  }

  export type TransferenciaCreateWithoutEstado_transferenciaInput = {
    monto: Decimal | DecimalJsLike | number | string
    descripcion?: string | null
    fecha_creacion?: Date | string | null
    fecha_modificacion?: Date | string | null
    cuenta_Transferencia_cuenta_origen_idTocuenta: cuentaCreateNestedOneWithoutTransferencia_Transferencia_cuenta_origen_idTocuentaInput
    cuenta_Transferencia_cuenta_destino_idTocuenta: cuentaCreateNestedOneWithoutTransferencia_Transferencia_cuenta_destino_idTocuentaInput
    movimiento?: movimientoCreateNestedManyWithoutTransferenciaInput
  }

  export type TransferenciaUncheckedCreateWithoutEstado_transferenciaInput = {
    transferencia_id?: number
    cuenta_origen_id: number
    cuenta_destino_id: number
    monto: Decimal | DecimalJsLike | number | string
    descripcion?: string | null
    fecha_creacion?: Date | string | null
    fecha_modificacion?: Date | string | null
    movimiento?: movimientoUncheckedCreateNestedManyWithoutTransferenciaInput
  }

  export type TransferenciaCreateOrConnectWithoutEstado_transferenciaInput = {
    where: TransferenciaWhereUniqueInput
    create: XOR<TransferenciaCreateWithoutEstado_transferenciaInput, TransferenciaUncheckedCreateWithoutEstado_transferenciaInput>
  }

  export type TransferenciaCreateManyEstado_transferenciaInputEnvelope = {
    data: TransferenciaCreateManyEstado_transferenciaInput | TransferenciaCreateManyEstado_transferenciaInput[]
    skipDuplicates?: boolean
  }

  export type TransferenciaUpsertWithWhereUniqueWithoutEstado_transferenciaInput = {
    where: TransferenciaWhereUniqueInput
    update: XOR<TransferenciaUpdateWithoutEstado_transferenciaInput, TransferenciaUncheckedUpdateWithoutEstado_transferenciaInput>
    create: XOR<TransferenciaCreateWithoutEstado_transferenciaInput, TransferenciaUncheckedCreateWithoutEstado_transferenciaInput>
  }

  export type TransferenciaUpdateWithWhereUniqueWithoutEstado_transferenciaInput = {
    where: TransferenciaWhereUniqueInput
    data: XOR<TransferenciaUpdateWithoutEstado_transferenciaInput, TransferenciaUncheckedUpdateWithoutEstado_transferenciaInput>
  }

  export type TransferenciaUpdateManyWithWhereWithoutEstado_transferenciaInput = {
    where: TransferenciaScalarWhereInput
    data: XOR<TransferenciaUpdateManyMutationInput, TransferenciaUncheckedUpdateManyWithoutEstado_transferenciaInput>
  }

  export type cuentaCreateWithoutMovimientoInput = {
    numero_cuenta: string
    saldo?: Decimal | DecimalJsLike | number | string
    fecha_creacion?: Date | string | null
    fecha_modificacion?: Date | string | null
    Transferencia_Transferencia_cuenta_origen_idTocuenta?: TransferenciaCreateNestedManyWithoutCuenta_Transferencia_cuenta_origen_idTocuentaInput
    Transferencia_Transferencia_cuenta_destino_idTocuenta?: TransferenciaCreateNestedManyWithoutCuenta_Transferencia_cuenta_destino_idTocuentaInput
    usuario: usuarioCreateNestedOneWithoutCuentaInput
    tipo_cuenta: tipo_cuentaCreateNestedOneWithoutCuentaInput
  }

  export type cuentaUncheckedCreateWithoutMovimientoInput = {
    cuenta_id?: number
    numero_cuenta: string
    usuario_id: number
    tipo_cuenta_id: number
    saldo?: Decimal | DecimalJsLike | number | string
    fecha_creacion?: Date | string | null
    fecha_modificacion?: Date | string | null
    Transferencia_Transferencia_cuenta_origen_idTocuenta?: TransferenciaUncheckedCreateNestedManyWithoutCuenta_Transferencia_cuenta_origen_idTocuentaInput
    Transferencia_Transferencia_cuenta_destino_idTocuenta?: TransferenciaUncheckedCreateNestedManyWithoutCuenta_Transferencia_cuenta_destino_idTocuentaInput
  }

  export type cuentaCreateOrConnectWithoutMovimientoInput = {
    where: cuentaWhereUniqueInput
    create: XOR<cuentaCreateWithoutMovimientoInput, cuentaUncheckedCreateWithoutMovimientoInput>
  }

  export type tipo_movimientoCreateWithoutMovimientoInput = {
    nombre: string
    descripcion: string
    fecha_creacion?: Date | string | null
    fecha_modificacion?: Date | string | null
  }

  export type tipo_movimientoUncheckedCreateWithoutMovimientoInput = {
    tipo_movimiento_id?: number
    nombre: string
    descripcion: string
    fecha_creacion?: Date | string | null
    fecha_modificacion?: Date | string | null
  }

  export type tipo_movimientoCreateOrConnectWithoutMovimientoInput = {
    where: tipo_movimientoWhereUniqueInput
    create: XOR<tipo_movimientoCreateWithoutMovimientoInput, tipo_movimientoUncheckedCreateWithoutMovimientoInput>
  }

  export type TransferenciaCreateWithoutMovimientoInput = {
    monto: Decimal | DecimalJsLike | number | string
    descripcion?: string | null
    fecha_creacion?: Date | string | null
    fecha_modificacion?: Date | string | null
    cuenta_Transferencia_cuenta_origen_idTocuenta: cuentaCreateNestedOneWithoutTransferencia_Transferencia_cuenta_origen_idTocuentaInput
    cuenta_Transferencia_cuenta_destino_idTocuenta: cuentaCreateNestedOneWithoutTransferencia_Transferencia_cuenta_destino_idTocuentaInput
    estado_transferencia: estado_transferenciaCreateNestedOneWithoutTransferenciaInput
  }

  export type TransferenciaUncheckedCreateWithoutMovimientoInput = {
    transferencia_id?: number
    cuenta_origen_id: number
    cuenta_destino_id: number
    monto: Decimal | DecimalJsLike | number | string
    descripcion?: string | null
    estado_transferencia_id: number
    fecha_creacion?: Date | string | null
    fecha_modificacion?: Date | string | null
  }

  export type TransferenciaCreateOrConnectWithoutMovimientoInput = {
    where: TransferenciaWhereUniqueInput
    create: XOR<TransferenciaCreateWithoutMovimientoInput, TransferenciaUncheckedCreateWithoutMovimientoInput>
  }

  export type cuentaUpsertWithoutMovimientoInput = {
    update: XOR<cuentaUpdateWithoutMovimientoInput, cuentaUncheckedUpdateWithoutMovimientoInput>
    create: XOR<cuentaCreateWithoutMovimientoInput, cuentaUncheckedCreateWithoutMovimientoInput>
    where?: cuentaWhereInput
  }

  export type cuentaUpdateToOneWithWhereWithoutMovimientoInput = {
    where?: cuentaWhereInput
    data: XOR<cuentaUpdateWithoutMovimientoInput, cuentaUncheckedUpdateWithoutMovimientoInput>
  }

  export type cuentaUpdateWithoutMovimientoInput = {
    numero_cuenta?: StringFieldUpdateOperationsInput | string
    saldo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_modificacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Transferencia_Transferencia_cuenta_origen_idTocuenta?: TransferenciaUpdateManyWithoutCuenta_Transferencia_cuenta_origen_idTocuentaNestedInput
    Transferencia_Transferencia_cuenta_destino_idTocuenta?: TransferenciaUpdateManyWithoutCuenta_Transferencia_cuenta_destino_idTocuentaNestedInput
    usuario?: usuarioUpdateOneRequiredWithoutCuentaNestedInput
    tipo_cuenta?: tipo_cuentaUpdateOneRequiredWithoutCuentaNestedInput
  }

  export type cuentaUncheckedUpdateWithoutMovimientoInput = {
    cuenta_id?: IntFieldUpdateOperationsInput | number
    numero_cuenta?: StringFieldUpdateOperationsInput | string
    usuario_id?: IntFieldUpdateOperationsInput | number
    tipo_cuenta_id?: IntFieldUpdateOperationsInput | number
    saldo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_modificacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Transferencia_Transferencia_cuenta_origen_idTocuenta?: TransferenciaUncheckedUpdateManyWithoutCuenta_Transferencia_cuenta_origen_idTocuentaNestedInput
    Transferencia_Transferencia_cuenta_destino_idTocuenta?: TransferenciaUncheckedUpdateManyWithoutCuenta_Transferencia_cuenta_destino_idTocuentaNestedInput
  }

  export type tipo_movimientoUpsertWithoutMovimientoInput = {
    update: XOR<tipo_movimientoUpdateWithoutMovimientoInput, tipo_movimientoUncheckedUpdateWithoutMovimientoInput>
    create: XOR<tipo_movimientoCreateWithoutMovimientoInput, tipo_movimientoUncheckedCreateWithoutMovimientoInput>
    where?: tipo_movimientoWhereInput
  }

  export type tipo_movimientoUpdateToOneWithWhereWithoutMovimientoInput = {
    where?: tipo_movimientoWhereInput
    data: XOR<tipo_movimientoUpdateWithoutMovimientoInput, tipo_movimientoUncheckedUpdateWithoutMovimientoInput>
  }

  export type tipo_movimientoUpdateWithoutMovimientoInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_modificacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tipo_movimientoUncheckedUpdateWithoutMovimientoInput = {
    tipo_movimiento_id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_modificacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TransferenciaUpsertWithoutMovimientoInput = {
    update: XOR<TransferenciaUpdateWithoutMovimientoInput, TransferenciaUncheckedUpdateWithoutMovimientoInput>
    create: XOR<TransferenciaCreateWithoutMovimientoInput, TransferenciaUncheckedCreateWithoutMovimientoInput>
    where?: TransferenciaWhereInput
  }

  export type TransferenciaUpdateToOneWithWhereWithoutMovimientoInput = {
    where?: TransferenciaWhereInput
    data: XOR<TransferenciaUpdateWithoutMovimientoInput, TransferenciaUncheckedUpdateWithoutMovimientoInput>
  }

  export type TransferenciaUpdateWithoutMovimientoInput = {
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_modificacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cuenta_Transferencia_cuenta_origen_idTocuenta?: cuentaUpdateOneRequiredWithoutTransferencia_Transferencia_cuenta_origen_idTocuentaNestedInput
    cuenta_Transferencia_cuenta_destino_idTocuenta?: cuentaUpdateOneRequiredWithoutTransferencia_Transferencia_cuenta_destino_idTocuentaNestedInput
    estado_transferencia?: estado_transferenciaUpdateOneRequiredWithoutTransferenciaNestedInput
  }

  export type TransferenciaUncheckedUpdateWithoutMovimientoInput = {
    transferencia_id?: IntFieldUpdateOperationsInput | number
    cuenta_origen_id?: IntFieldUpdateOperationsInput | number
    cuenta_destino_id?: IntFieldUpdateOperationsInput | number
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    estado_transferencia_id?: IntFieldUpdateOperationsInput | number
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_modificacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type cuentaCreateWithoutTipo_cuentaInput = {
    numero_cuenta: string
    saldo?: Decimal | DecimalJsLike | number | string
    fecha_creacion?: Date | string | null
    fecha_modificacion?: Date | string | null
    Transferencia_Transferencia_cuenta_origen_idTocuenta?: TransferenciaCreateNestedManyWithoutCuenta_Transferencia_cuenta_origen_idTocuentaInput
    Transferencia_Transferencia_cuenta_destino_idTocuenta?: TransferenciaCreateNestedManyWithoutCuenta_Transferencia_cuenta_destino_idTocuentaInput
    usuario: usuarioCreateNestedOneWithoutCuentaInput
    movimiento?: movimientoCreateNestedManyWithoutCuentaInput
  }

  export type cuentaUncheckedCreateWithoutTipo_cuentaInput = {
    cuenta_id?: number
    numero_cuenta: string
    usuario_id: number
    saldo?: Decimal | DecimalJsLike | number | string
    fecha_creacion?: Date | string | null
    fecha_modificacion?: Date | string | null
    Transferencia_Transferencia_cuenta_origen_idTocuenta?: TransferenciaUncheckedCreateNestedManyWithoutCuenta_Transferencia_cuenta_origen_idTocuentaInput
    Transferencia_Transferencia_cuenta_destino_idTocuenta?: TransferenciaUncheckedCreateNestedManyWithoutCuenta_Transferencia_cuenta_destino_idTocuentaInput
    movimiento?: movimientoUncheckedCreateNestedManyWithoutCuentaInput
  }

  export type cuentaCreateOrConnectWithoutTipo_cuentaInput = {
    where: cuentaWhereUniqueInput
    create: XOR<cuentaCreateWithoutTipo_cuentaInput, cuentaUncheckedCreateWithoutTipo_cuentaInput>
  }

  export type cuentaCreateManyTipo_cuentaInputEnvelope = {
    data: cuentaCreateManyTipo_cuentaInput | cuentaCreateManyTipo_cuentaInput[]
    skipDuplicates?: boolean
  }

  export type cuentaUpsertWithWhereUniqueWithoutTipo_cuentaInput = {
    where: cuentaWhereUniqueInput
    update: XOR<cuentaUpdateWithoutTipo_cuentaInput, cuentaUncheckedUpdateWithoutTipo_cuentaInput>
    create: XOR<cuentaCreateWithoutTipo_cuentaInput, cuentaUncheckedCreateWithoutTipo_cuentaInput>
  }

  export type cuentaUpdateWithWhereUniqueWithoutTipo_cuentaInput = {
    where: cuentaWhereUniqueInput
    data: XOR<cuentaUpdateWithoutTipo_cuentaInput, cuentaUncheckedUpdateWithoutTipo_cuentaInput>
  }

  export type cuentaUpdateManyWithWhereWithoutTipo_cuentaInput = {
    where: cuentaScalarWhereInput
    data: XOR<cuentaUpdateManyMutationInput, cuentaUncheckedUpdateManyWithoutTipo_cuentaInput>
  }

  export type cuentaScalarWhereInput = {
    AND?: cuentaScalarWhereInput | cuentaScalarWhereInput[]
    OR?: cuentaScalarWhereInput[]
    NOT?: cuentaScalarWhereInput | cuentaScalarWhereInput[]
    cuenta_id?: IntFilter<"cuenta"> | number
    numero_cuenta?: StringFilter<"cuenta"> | string
    usuario_id?: IntFilter<"cuenta"> | number
    tipo_cuenta_id?: IntFilter<"cuenta"> | number
    saldo?: DecimalFilter<"cuenta"> | Decimal | DecimalJsLike | number | string
    fecha_creacion?: DateTimeNullableFilter<"cuenta"> | Date | string | null
    fecha_modificacion?: DateTimeNullableFilter<"cuenta"> | Date | string | null
  }

  export type movimientoCreateWithoutTipo_movimientoInput = {
    monto: Decimal | DecimalJsLike | number | string
    saldo_anterior: Decimal | DecimalJsLike | number | string
    saldo_nuevo: Decimal | DecimalJsLike | number | string
    descripcion?: string | null
    fecha_creacion?: Date | string | null
    fecha_modificacion?: Date | string | null
    cuenta: cuentaCreateNestedOneWithoutMovimientoInput
    Transferencia?: TransferenciaCreateNestedOneWithoutMovimientoInput
  }

  export type movimientoUncheckedCreateWithoutTipo_movimientoInput = {
    movimiento_id?: number
    cuenta_id: number
    monto: Decimal | DecimalJsLike | number | string
    transferencia_id?: number | null
    saldo_anterior: Decimal | DecimalJsLike | number | string
    saldo_nuevo: Decimal | DecimalJsLike | number | string
    descripcion?: string | null
    fecha_creacion?: Date | string | null
    fecha_modificacion?: Date | string | null
  }

  export type movimientoCreateOrConnectWithoutTipo_movimientoInput = {
    where: movimientoWhereUniqueInput
    create: XOR<movimientoCreateWithoutTipo_movimientoInput, movimientoUncheckedCreateWithoutTipo_movimientoInput>
  }

  export type movimientoCreateManyTipo_movimientoInputEnvelope = {
    data: movimientoCreateManyTipo_movimientoInput | movimientoCreateManyTipo_movimientoInput[]
    skipDuplicates?: boolean
  }

  export type movimientoUpsertWithWhereUniqueWithoutTipo_movimientoInput = {
    where: movimientoWhereUniqueInput
    update: XOR<movimientoUpdateWithoutTipo_movimientoInput, movimientoUncheckedUpdateWithoutTipo_movimientoInput>
    create: XOR<movimientoCreateWithoutTipo_movimientoInput, movimientoUncheckedCreateWithoutTipo_movimientoInput>
  }

  export type movimientoUpdateWithWhereUniqueWithoutTipo_movimientoInput = {
    where: movimientoWhereUniqueInput
    data: XOR<movimientoUpdateWithoutTipo_movimientoInput, movimientoUncheckedUpdateWithoutTipo_movimientoInput>
  }

  export type movimientoUpdateManyWithWhereWithoutTipo_movimientoInput = {
    where: movimientoScalarWhereInput
    data: XOR<movimientoUpdateManyMutationInput, movimientoUncheckedUpdateManyWithoutTipo_movimientoInput>
  }

  export type cuentaCreateWithoutUsuarioInput = {
    numero_cuenta: string
    saldo?: Decimal | DecimalJsLike | number | string
    fecha_creacion?: Date | string | null
    fecha_modificacion?: Date | string | null
    Transferencia_Transferencia_cuenta_origen_idTocuenta?: TransferenciaCreateNestedManyWithoutCuenta_Transferencia_cuenta_origen_idTocuentaInput
    Transferencia_Transferencia_cuenta_destino_idTocuenta?: TransferenciaCreateNestedManyWithoutCuenta_Transferencia_cuenta_destino_idTocuentaInput
    tipo_cuenta: tipo_cuentaCreateNestedOneWithoutCuentaInput
    movimiento?: movimientoCreateNestedManyWithoutCuentaInput
  }

  export type cuentaUncheckedCreateWithoutUsuarioInput = {
    cuenta_id?: number
    numero_cuenta: string
    tipo_cuenta_id: number
    saldo?: Decimal | DecimalJsLike | number | string
    fecha_creacion?: Date | string | null
    fecha_modificacion?: Date | string | null
    Transferencia_Transferencia_cuenta_origen_idTocuenta?: TransferenciaUncheckedCreateNestedManyWithoutCuenta_Transferencia_cuenta_origen_idTocuentaInput
    Transferencia_Transferencia_cuenta_destino_idTocuenta?: TransferenciaUncheckedCreateNestedManyWithoutCuenta_Transferencia_cuenta_destino_idTocuentaInput
    movimiento?: movimientoUncheckedCreateNestedManyWithoutCuentaInput
  }

  export type cuentaCreateOrConnectWithoutUsuarioInput = {
    where: cuentaWhereUniqueInput
    create: XOR<cuentaCreateWithoutUsuarioInput, cuentaUncheckedCreateWithoutUsuarioInput>
  }

  export type cuentaCreateManyUsuarioInputEnvelope = {
    data: cuentaCreateManyUsuarioInput | cuentaCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type tokenCreateWithoutUsuarioInput = {
    token: string
    expira_en: Date | string
    revocado?: boolean
    fecha_creacion?: Date | string
  }

  export type tokenUncheckedCreateWithoutUsuarioInput = {
    token_id?: number
    token: string
    expira_en: Date | string
    revocado?: boolean
    fecha_creacion?: Date | string
  }

  export type tokenCreateOrConnectWithoutUsuarioInput = {
    where: tokenWhereUniqueInput
    create: XOR<tokenCreateWithoutUsuarioInput, tokenUncheckedCreateWithoutUsuarioInput>
  }

  export type tokenCreateManyUsuarioInputEnvelope = {
    data: tokenCreateManyUsuarioInput | tokenCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type cuentaUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: cuentaWhereUniqueInput
    update: XOR<cuentaUpdateWithoutUsuarioInput, cuentaUncheckedUpdateWithoutUsuarioInput>
    create: XOR<cuentaCreateWithoutUsuarioInput, cuentaUncheckedCreateWithoutUsuarioInput>
  }

  export type cuentaUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: cuentaWhereUniqueInput
    data: XOR<cuentaUpdateWithoutUsuarioInput, cuentaUncheckedUpdateWithoutUsuarioInput>
  }

  export type cuentaUpdateManyWithWhereWithoutUsuarioInput = {
    where: cuentaScalarWhereInput
    data: XOR<cuentaUpdateManyMutationInput, cuentaUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type tokenUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: tokenWhereUniqueInput
    update: XOR<tokenUpdateWithoutUsuarioInput, tokenUncheckedUpdateWithoutUsuarioInput>
    create: XOR<tokenCreateWithoutUsuarioInput, tokenUncheckedCreateWithoutUsuarioInput>
  }

  export type tokenUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: tokenWhereUniqueInput
    data: XOR<tokenUpdateWithoutUsuarioInput, tokenUncheckedUpdateWithoutUsuarioInput>
  }

  export type tokenUpdateManyWithWhereWithoutUsuarioInput = {
    where: tokenScalarWhereInput
    data: XOR<tokenUpdateManyMutationInput, tokenUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type tokenScalarWhereInput = {
    AND?: tokenScalarWhereInput | tokenScalarWhereInput[]
    OR?: tokenScalarWhereInput[]
    NOT?: tokenScalarWhereInput | tokenScalarWhereInput[]
    token_id?: IntFilter<"token"> | number
    usuario_id?: IntFilter<"token"> | number
    token?: StringFilter<"token"> | string
    expira_en?: DateTimeFilter<"token"> | Date | string
    revocado?: BoolFilter<"token"> | boolean
    fecha_creacion?: DateTimeFilter<"token"> | Date | string
  }

  export type usuarioCreateWithoutTokenInput = {
    nombre: string
    email: string
    contrasena: string
    fecha_creacion?: Date | string | null
    fecha_modificacion?: Date | string | null
    cuenta?: cuentaCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioUncheckedCreateWithoutTokenInput = {
    usuario_id?: number
    nombre: string
    email: string
    contrasena: string
    fecha_creacion?: Date | string | null
    fecha_modificacion?: Date | string | null
    cuenta?: cuentaUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioCreateOrConnectWithoutTokenInput = {
    where: usuarioWhereUniqueInput
    create: XOR<usuarioCreateWithoutTokenInput, usuarioUncheckedCreateWithoutTokenInput>
  }

  export type usuarioUpsertWithoutTokenInput = {
    update: XOR<usuarioUpdateWithoutTokenInput, usuarioUncheckedUpdateWithoutTokenInput>
    create: XOR<usuarioCreateWithoutTokenInput, usuarioUncheckedCreateWithoutTokenInput>
    where?: usuarioWhereInput
  }

  export type usuarioUpdateToOneWithWhereWithoutTokenInput = {
    where?: usuarioWhereInput
    data: XOR<usuarioUpdateWithoutTokenInput, usuarioUncheckedUpdateWithoutTokenInput>
  }

  export type usuarioUpdateWithoutTokenInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_modificacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cuenta?: cuentaUpdateManyWithoutUsuarioNestedInput
  }

  export type usuarioUncheckedUpdateWithoutTokenInput = {
    usuario_id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_modificacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cuenta?: cuentaUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type movimientoCreateManyTransferenciaInput = {
    movimiento_id?: number
    cuenta_id: number
    tipo_movimiento_id: number
    monto: Decimal | DecimalJsLike | number | string
    saldo_anterior: Decimal | DecimalJsLike | number | string
    saldo_nuevo: Decimal | DecimalJsLike | number | string
    descripcion?: string | null
    fecha_creacion?: Date | string | null
    fecha_modificacion?: Date | string | null
  }

  export type movimientoUpdateWithoutTransferenciaInput = {
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    saldo_anterior?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    saldo_nuevo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_modificacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cuenta?: cuentaUpdateOneRequiredWithoutMovimientoNestedInput
    tipo_movimiento?: tipo_movimientoUpdateOneRequiredWithoutMovimientoNestedInput
  }

  export type movimientoUncheckedUpdateWithoutTransferenciaInput = {
    movimiento_id?: IntFieldUpdateOperationsInput | number
    cuenta_id?: IntFieldUpdateOperationsInput | number
    tipo_movimiento_id?: IntFieldUpdateOperationsInput | number
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    saldo_anterior?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    saldo_nuevo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_modificacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type movimientoUncheckedUpdateManyWithoutTransferenciaInput = {
    movimiento_id?: IntFieldUpdateOperationsInput | number
    cuenta_id?: IntFieldUpdateOperationsInput | number
    tipo_movimiento_id?: IntFieldUpdateOperationsInput | number
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    saldo_anterior?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    saldo_nuevo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_modificacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TransferenciaCreateManyCuenta_Transferencia_cuenta_origen_idTocuentaInput = {
    transferencia_id?: number
    cuenta_destino_id: number
    monto: Decimal | DecimalJsLike | number | string
    descripcion?: string | null
    estado_transferencia_id: number
    fecha_creacion?: Date | string | null
    fecha_modificacion?: Date | string | null
  }

  export type TransferenciaCreateManyCuenta_Transferencia_cuenta_destino_idTocuentaInput = {
    transferencia_id?: number
    cuenta_origen_id: number
    monto: Decimal | DecimalJsLike | number | string
    descripcion?: string | null
    estado_transferencia_id: number
    fecha_creacion?: Date | string | null
    fecha_modificacion?: Date | string | null
  }

  export type movimientoCreateManyCuentaInput = {
    movimiento_id?: number
    tipo_movimiento_id: number
    monto: Decimal | DecimalJsLike | number | string
    transferencia_id?: number | null
    saldo_anterior: Decimal | DecimalJsLike | number | string
    saldo_nuevo: Decimal | DecimalJsLike | number | string
    descripcion?: string | null
    fecha_creacion?: Date | string | null
    fecha_modificacion?: Date | string | null
  }

  export type TransferenciaUpdateWithoutCuenta_Transferencia_cuenta_origen_idTocuentaInput = {
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_modificacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cuenta_Transferencia_cuenta_destino_idTocuenta?: cuentaUpdateOneRequiredWithoutTransferencia_Transferencia_cuenta_destino_idTocuentaNestedInput
    estado_transferencia?: estado_transferenciaUpdateOneRequiredWithoutTransferenciaNestedInput
    movimiento?: movimientoUpdateManyWithoutTransferenciaNestedInput
  }

  export type TransferenciaUncheckedUpdateWithoutCuenta_Transferencia_cuenta_origen_idTocuentaInput = {
    transferencia_id?: IntFieldUpdateOperationsInput | number
    cuenta_destino_id?: IntFieldUpdateOperationsInput | number
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    estado_transferencia_id?: IntFieldUpdateOperationsInput | number
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_modificacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    movimiento?: movimientoUncheckedUpdateManyWithoutTransferenciaNestedInput
  }

  export type TransferenciaUncheckedUpdateManyWithoutCuenta_Transferencia_cuenta_origen_idTocuentaInput = {
    transferencia_id?: IntFieldUpdateOperationsInput | number
    cuenta_destino_id?: IntFieldUpdateOperationsInput | number
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    estado_transferencia_id?: IntFieldUpdateOperationsInput | number
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_modificacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TransferenciaUpdateWithoutCuenta_Transferencia_cuenta_destino_idTocuentaInput = {
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_modificacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cuenta_Transferencia_cuenta_origen_idTocuenta?: cuentaUpdateOneRequiredWithoutTransferencia_Transferencia_cuenta_origen_idTocuentaNestedInput
    estado_transferencia?: estado_transferenciaUpdateOneRequiredWithoutTransferenciaNestedInput
    movimiento?: movimientoUpdateManyWithoutTransferenciaNestedInput
  }

  export type TransferenciaUncheckedUpdateWithoutCuenta_Transferencia_cuenta_destino_idTocuentaInput = {
    transferencia_id?: IntFieldUpdateOperationsInput | number
    cuenta_origen_id?: IntFieldUpdateOperationsInput | number
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    estado_transferencia_id?: IntFieldUpdateOperationsInput | number
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_modificacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    movimiento?: movimientoUncheckedUpdateManyWithoutTransferenciaNestedInput
  }

  export type TransferenciaUncheckedUpdateManyWithoutCuenta_Transferencia_cuenta_destino_idTocuentaInput = {
    transferencia_id?: IntFieldUpdateOperationsInput | number
    cuenta_origen_id?: IntFieldUpdateOperationsInput | number
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    estado_transferencia_id?: IntFieldUpdateOperationsInput | number
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_modificacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type movimientoUpdateWithoutCuentaInput = {
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    saldo_anterior?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    saldo_nuevo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_modificacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipo_movimiento?: tipo_movimientoUpdateOneRequiredWithoutMovimientoNestedInput
    Transferencia?: TransferenciaUpdateOneWithoutMovimientoNestedInput
  }

  export type movimientoUncheckedUpdateWithoutCuentaInput = {
    movimiento_id?: IntFieldUpdateOperationsInput | number
    tipo_movimiento_id?: IntFieldUpdateOperationsInput | number
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    transferencia_id?: NullableIntFieldUpdateOperationsInput | number | null
    saldo_anterior?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    saldo_nuevo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_modificacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type movimientoUncheckedUpdateManyWithoutCuentaInput = {
    movimiento_id?: IntFieldUpdateOperationsInput | number
    tipo_movimiento_id?: IntFieldUpdateOperationsInput | number
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    transferencia_id?: NullableIntFieldUpdateOperationsInput | number | null
    saldo_anterior?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    saldo_nuevo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_modificacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TransferenciaCreateManyEstado_transferenciaInput = {
    transferencia_id?: number
    cuenta_origen_id: number
    cuenta_destino_id: number
    monto: Decimal | DecimalJsLike | number | string
    descripcion?: string | null
    fecha_creacion?: Date | string | null
    fecha_modificacion?: Date | string | null
  }

  export type TransferenciaUpdateWithoutEstado_transferenciaInput = {
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_modificacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cuenta_Transferencia_cuenta_origen_idTocuenta?: cuentaUpdateOneRequiredWithoutTransferencia_Transferencia_cuenta_origen_idTocuentaNestedInput
    cuenta_Transferencia_cuenta_destino_idTocuenta?: cuentaUpdateOneRequiredWithoutTransferencia_Transferencia_cuenta_destino_idTocuentaNestedInput
    movimiento?: movimientoUpdateManyWithoutTransferenciaNestedInput
  }

  export type TransferenciaUncheckedUpdateWithoutEstado_transferenciaInput = {
    transferencia_id?: IntFieldUpdateOperationsInput | number
    cuenta_origen_id?: IntFieldUpdateOperationsInput | number
    cuenta_destino_id?: IntFieldUpdateOperationsInput | number
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_modificacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    movimiento?: movimientoUncheckedUpdateManyWithoutTransferenciaNestedInput
  }

  export type TransferenciaUncheckedUpdateManyWithoutEstado_transferenciaInput = {
    transferencia_id?: IntFieldUpdateOperationsInput | number
    cuenta_origen_id?: IntFieldUpdateOperationsInput | number
    cuenta_destino_id?: IntFieldUpdateOperationsInput | number
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_modificacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type cuentaCreateManyTipo_cuentaInput = {
    cuenta_id?: number
    numero_cuenta: string
    usuario_id: number
    saldo?: Decimal | DecimalJsLike | number | string
    fecha_creacion?: Date | string | null
    fecha_modificacion?: Date | string | null
  }

  export type cuentaUpdateWithoutTipo_cuentaInput = {
    numero_cuenta?: StringFieldUpdateOperationsInput | string
    saldo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_modificacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Transferencia_Transferencia_cuenta_origen_idTocuenta?: TransferenciaUpdateManyWithoutCuenta_Transferencia_cuenta_origen_idTocuentaNestedInput
    Transferencia_Transferencia_cuenta_destino_idTocuenta?: TransferenciaUpdateManyWithoutCuenta_Transferencia_cuenta_destino_idTocuentaNestedInput
    usuario?: usuarioUpdateOneRequiredWithoutCuentaNestedInput
    movimiento?: movimientoUpdateManyWithoutCuentaNestedInput
  }

  export type cuentaUncheckedUpdateWithoutTipo_cuentaInput = {
    cuenta_id?: IntFieldUpdateOperationsInput | number
    numero_cuenta?: StringFieldUpdateOperationsInput | string
    usuario_id?: IntFieldUpdateOperationsInput | number
    saldo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_modificacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Transferencia_Transferencia_cuenta_origen_idTocuenta?: TransferenciaUncheckedUpdateManyWithoutCuenta_Transferencia_cuenta_origen_idTocuentaNestedInput
    Transferencia_Transferencia_cuenta_destino_idTocuenta?: TransferenciaUncheckedUpdateManyWithoutCuenta_Transferencia_cuenta_destino_idTocuentaNestedInput
    movimiento?: movimientoUncheckedUpdateManyWithoutCuentaNestedInput
  }

  export type cuentaUncheckedUpdateManyWithoutTipo_cuentaInput = {
    cuenta_id?: IntFieldUpdateOperationsInput | number
    numero_cuenta?: StringFieldUpdateOperationsInput | string
    usuario_id?: IntFieldUpdateOperationsInput | number
    saldo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_modificacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type movimientoCreateManyTipo_movimientoInput = {
    movimiento_id?: number
    cuenta_id: number
    monto: Decimal | DecimalJsLike | number | string
    transferencia_id?: number | null
    saldo_anterior: Decimal | DecimalJsLike | number | string
    saldo_nuevo: Decimal | DecimalJsLike | number | string
    descripcion?: string | null
    fecha_creacion?: Date | string | null
    fecha_modificacion?: Date | string | null
  }

  export type movimientoUpdateWithoutTipo_movimientoInput = {
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    saldo_anterior?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    saldo_nuevo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_modificacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cuenta?: cuentaUpdateOneRequiredWithoutMovimientoNestedInput
    Transferencia?: TransferenciaUpdateOneWithoutMovimientoNestedInput
  }

  export type movimientoUncheckedUpdateWithoutTipo_movimientoInput = {
    movimiento_id?: IntFieldUpdateOperationsInput | number
    cuenta_id?: IntFieldUpdateOperationsInput | number
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    transferencia_id?: NullableIntFieldUpdateOperationsInput | number | null
    saldo_anterior?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    saldo_nuevo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_modificacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type movimientoUncheckedUpdateManyWithoutTipo_movimientoInput = {
    movimiento_id?: IntFieldUpdateOperationsInput | number
    cuenta_id?: IntFieldUpdateOperationsInput | number
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    transferencia_id?: NullableIntFieldUpdateOperationsInput | number | null
    saldo_anterior?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    saldo_nuevo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_modificacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type cuentaCreateManyUsuarioInput = {
    cuenta_id?: number
    numero_cuenta: string
    tipo_cuenta_id: number
    saldo?: Decimal | DecimalJsLike | number | string
    fecha_creacion?: Date | string | null
    fecha_modificacion?: Date | string | null
  }

  export type tokenCreateManyUsuarioInput = {
    token_id?: number
    token: string
    expira_en: Date | string
    revocado?: boolean
    fecha_creacion?: Date | string
  }

  export type cuentaUpdateWithoutUsuarioInput = {
    numero_cuenta?: StringFieldUpdateOperationsInput | string
    saldo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_modificacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Transferencia_Transferencia_cuenta_origen_idTocuenta?: TransferenciaUpdateManyWithoutCuenta_Transferencia_cuenta_origen_idTocuentaNestedInput
    Transferencia_Transferencia_cuenta_destino_idTocuenta?: TransferenciaUpdateManyWithoutCuenta_Transferencia_cuenta_destino_idTocuentaNestedInput
    tipo_cuenta?: tipo_cuentaUpdateOneRequiredWithoutCuentaNestedInput
    movimiento?: movimientoUpdateManyWithoutCuentaNestedInput
  }

  export type cuentaUncheckedUpdateWithoutUsuarioInput = {
    cuenta_id?: IntFieldUpdateOperationsInput | number
    numero_cuenta?: StringFieldUpdateOperationsInput | string
    tipo_cuenta_id?: IntFieldUpdateOperationsInput | number
    saldo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_modificacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Transferencia_Transferencia_cuenta_origen_idTocuenta?: TransferenciaUncheckedUpdateManyWithoutCuenta_Transferencia_cuenta_origen_idTocuentaNestedInput
    Transferencia_Transferencia_cuenta_destino_idTocuenta?: TransferenciaUncheckedUpdateManyWithoutCuenta_Transferencia_cuenta_destino_idTocuentaNestedInput
    movimiento?: movimientoUncheckedUpdateManyWithoutCuentaNestedInput
  }

  export type cuentaUncheckedUpdateManyWithoutUsuarioInput = {
    cuenta_id?: IntFieldUpdateOperationsInput | number
    numero_cuenta?: StringFieldUpdateOperationsInput | string
    tipo_cuenta_id?: IntFieldUpdateOperationsInput | number
    saldo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_modificacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tokenUpdateWithoutUsuarioInput = {
    token?: StringFieldUpdateOperationsInput | string
    expira_en?: DateTimeFieldUpdateOperationsInput | Date | string
    revocado?: BoolFieldUpdateOperationsInput | boolean
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tokenUncheckedUpdateWithoutUsuarioInput = {
    token_id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    expira_en?: DateTimeFieldUpdateOperationsInput | Date | string
    revocado?: BoolFieldUpdateOperationsInput | boolean
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tokenUncheckedUpdateManyWithoutUsuarioInput = {
    token_id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    expira_en?: DateTimeFieldUpdateOperationsInput | Date | string
    revocado?: BoolFieldUpdateOperationsInput | boolean
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use TransferenciaCountOutputTypeDefaultArgs instead
     */
    export type TransferenciaCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TransferenciaCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CuentaCountOutputTypeDefaultArgs instead
     */
    export type CuentaCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CuentaCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Estado_transferenciaCountOutputTypeDefaultArgs instead
     */
    export type Estado_transferenciaCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Estado_transferenciaCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Tipo_cuentaCountOutputTypeDefaultArgs instead
     */
    export type Tipo_cuentaCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Tipo_cuentaCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Tipo_movimientoCountOutputTypeDefaultArgs instead
     */
    export type Tipo_movimientoCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Tipo_movimientoCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UsuarioCountOutputTypeDefaultArgs instead
     */
    export type UsuarioCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsuarioCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TransferenciaDefaultArgs instead
     */
    export type TransferenciaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TransferenciaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use cuentaDefaultArgs instead
     */
    export type cuentaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = cuentaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use estado_transferenciaDefaultArgs instead
     */
    export type estado_transferenciaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = estado_transferenciaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use movimientoDefaultArgs instead
     */
    export type movimientoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = movimientoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use tipo_cuentaDefaultArgs instead
     */
    export type tipo_cuentaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = tipo_cuentaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use tipo_movimientoDefaultArgs instead
     */
    export type tipo_movimientoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = tipo_movimientoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use usuarioDefaultArgs instead
     */
    export type usuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = usuarioDefaultArgs<ExtArgs>
    /**
     * @deprecated Use tokenDefaultArgs instead
     */
    export type tokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = tokenDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}