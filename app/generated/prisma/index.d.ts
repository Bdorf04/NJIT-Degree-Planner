
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Major
 * 
 */
export type Major = $Result.DefaultSelection<Prisma.$MajorPayload>
/**
 * Model Course
 * 
 */
export type Course = $Result.DefaultSelection<Prisma.$CoursePayload>
/**
 * Model MajorCourse
 * 
 */
export type MajorCourse = $Result.DefaultSelection<Prisma.$MajorCoursePayload>
/**
 * Model Prerequisite
 * 
 */
export type Prerequisite = $Result.DefaultSelection<Prisma.$PrerequisitePayload>
/**
 * Model Corequisite
 * 
 */
export type Corequisite = $Result.DefaultSelection<Prisma.$CorequisitePayload>
/**
 * Model Plan
 * 
 */
export type Plan = $Result.DefaultSelection<Prisma.$PlanPayload>
/**
 * Model PlannedCourse
 * 
 */
export type PlannedCourse = $Result.DefaultSelection<Prisma.$PlannedCoursePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.major`: Exposes CRUD operations for the **Major** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Majors
    * const majors = await prisma.major.findMany()
    * ```
    */
  get major(): Prisma.MajorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.course`: Exposes CRUD operations for the **Course** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Courses
    * const courses = await prisma.course.findMany()
    * ```
    */
  get course(): Prisma.CourseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.majorCourse`: Exposes CRUD operations for the **MajorCourse** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MajorCourses
    * const majorCourses = await prisma.majorCourse.findMany()
    * ```
    */
  get majorCourse(): Prisma.MajorCourseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.prerequisite`: Exposes CRUD operations for the **Prerequisite** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Prerequisites
    * const prerequisites = await prisma.prerequisite.findMany()
    * ```
    */
  get prerequisite(): Prisma.PrerequisiteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.corequisite`: Exposes CRUD operations for the **Corequisite** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Corequisites
    * const corequisites = await prisma.corequisite.findMany()
    * ```
    */
  get corequisite(): Prisma.CorequisiteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.plan`: Exposes CRUD operations for the **Plan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Plans
    * const plans = await prisma.plan.findMany()
    * ```
    */
  get plan(): Prisma.PlanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.plannedCourse`: Exposes CRUD operations for the **PlannedCourse** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlannedCourses
    * const plannedCourses = await prisma.plannedCourse.findMany()
    * ```
    */
  get plannedCourse(): Prisma.PlannedCourseDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    User: 'User',
    Major: 'Major',
    Course: 'Course',
    MajorCourse: 'MajorCourse',
    Prerequisite: 'Prerequisite',
    Corequisite: 'Corequisite',
    Plan: 'Plan',
    PlannedCourse: 'PlannedCourse'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "major" | "course" | "majorCourse" | "prerequisite" | "corequisite" | "plan" | "plannedCourse"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Major: {
        payload: Prisma.$MajorPayload<ExtArgs>
        fields: Prisma.MajorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MajorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MajorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorPayload>
          }
          findFirst: {
            args: Prisma.MajorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MajorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorPayload>
          }
          findMany: {
            args: Prisma.MajorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorPayload>[]
          }
          create: {
            args: Prisma.MajorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorPayload>
          }
          createMany: {
            args: Prisma.MajorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MajorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorPayload>[]
          }
          delete: {
            args: Prisma.MajorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorPayload>
          }
          update: {
            args: Prisma.MajorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorPayload>
          }
          deleteMany: {
            args: Prisma.MajorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MajorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MajorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorPayload>[]
          }
          upsert: {
            args: Prisma.MajorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorPayload>
          }
          aggregate: {
            args: Prisma.MajorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMajor>
          }
          groupBy: {
            args: Prisma.MajorGroupByArgs<ExtArgs>
            result: $Utils.Optional<MajorGroupByOutputType>[]
          }
          count: {
            args: Prisma.MajorCountArgs<ExtArgs>
            result: $Utils.Optional<MajorCountAggregateOutputType> | number
          }
        }
      }
      Course: {
        payload: Prisma.$CoursePayload<ExtArgs>
        fields: Prisma.CourseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findFirst: {
            args: Prisma.CourseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findMany: {
            args: Prisma.CourseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          create: {
            args: Prisma.CourseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          createMany: {
            args: Prisma.CourseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CourseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          delete: {
            args: Prisma.CourseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          update: {
            args: Prisma.CourseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          deleteMany: {
            args: Prisma.CourseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CourseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          upsert: {
            args: Prisma.CourseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          aggregate: {
            args: Prisma.CourseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourse>
          }
          groupBy: {
            args: Prisma.CourseGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseCountArgs<ExtArgs>
            result: $Utils.Optional<CourseCountAggregateOutputType> | number
          }
        }
      }
      MajorCourse: {
        payload: Prisma.$MajorCoursePayload<ExtArgs>
        fields: Prisma.MajorCourseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MajorCourseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorCoursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MajorCourseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorCoursePayload>
          }
          findFirst: {
            args: Prisma.MajorCourseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorCoursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MajorCourseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorCoursePayload>
          }
          findMany: {
            args: Prisma.MajorCourseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorCoursePayload>[]
          }
          create: {
            args: Prisma.MajorCourseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorCoursePayload>
          }
          createMany: {
            args: Prisma.MajorCourseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MajorCourseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorCoursePayload>[]
          }
          delete: {
            args: Prisma.MajorCourseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorCoursePayload>
          }
          update: {
            args: Prisma.MajorCourseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorCoursePayload>
          }
          deleteMany: {
            args: Prisma.MajorCourseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MajorCourseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MajorCourseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorCoursePayload>[]
          }
          upsert: {
            args: Prisma.MajorCourseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorCoursePayload>
          }
          aggregate: {
            args: Prisma.MajorCourseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMajorCourse>
          }
          groupBy: {
            args: Prisma.MajorCourseGroupByArgs<ExtArgs>
            result: $Utils.Optional<MajorCourseGroupByOutputType>[]
          }
          count: {
            args: Prisma.MajorCourseCountArgs<ExtArgs>
            result: $Utils.Optional<MajorCourseCountAggregateOutputType> | number
          }
        }
      }
      Prerequisite: {
        payload: Prisma.$PrerequisitePayload<ExtArgs>
        fields: Prisma.PrerequisiteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PrerequisiteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrerequisitePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PrerequisiteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrerequisitePayload>
          }
          findFirst: {
            args: Prisma.PrerequisiteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrerequisitePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PrerequisiteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrerequisitePayload>
          }
          findMany: {
            args: Prisma.PrerequisiteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrerequisitePayload>[]
          }
          create: {
            args: Prisma.PrerequisiteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrerequisitePayload>
          }
          createMany: {
            args: Prisma.PrerequisiteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PrerequisiteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrerequisitePayload>[]
          }
          delete: {
            args: Prisma.PrerequisiteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrerequisitePayload>
          }
          update: {
            args: Prisma.PrerequisiteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrerequisitePayload>
          }
          deleteMany: {
            args: Prisma.PrerequisiteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PrerequisiteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PrerequisiteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrerequisitePayload>[]
          }
          upsert: {
            args: Prisma.PrerequisiteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrerequisitePayload>
          }
          aggregate: {
            args: Prisma.PrerequisiteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrerequisite>
          }
          groupBy: {
            args: Prisma.PrerequisiteGroupByArgs<ExtArgs>
            result: $Utils.Optional<PrerequisiteGroupByOutputType>[]
          }
          count: {
            args: Prisma.PrerequisiteCountArgs<ExtArgs>
            result: $Utils.Optional<PrerequisiteCountAggregateOutputType> | number
          }
        }
      }
      Corequisite: {
        payload: Prisma.$CorequisitePayload<ExtArgs>
        fields: Prisma.CorequisiteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CorequisiteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CorequisitePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CorequisiteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CorequisitePayload>
          }
          findFirst: {
            args: Prisma.CorequisiteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CorequisitePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CorequisiteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CorequisitePayload>
          }
          findMany: {
            args: Prisma.CorequisiteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CorequisitePayload>[]
          }
          create: {
            args: Prisma.CorequisiteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CorequisitePayload>
          }
          createMany: {
            args: Prisma.CorequisiteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CorequisiteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CorequisitePayload>[]
          }
          delete: {
            args: Prisma.CorequisiteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CorequisitePayload>
          }
          update: {
            args: Prisma.CorequisiteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CorequisitePayload>
          }
          deleteMany: {
            args: Prisma.CorequisiteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CorequisiteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CorequisiteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CorequisitePayload>[]
          }
          upsert: {
            args: Prisma.CorequisiteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CorequisitePayload>
          }
          aggregate: {
            args: Prisma.CorequisiteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCorequisite>
          }
          groupBy: {
            args: Prisma.CorequisiteGroupByArgs<ExtArgs>
            result: $Utils.Optional<CorequisiteGroupByOutputType>[]
          }
          count: {
            args: Prisma.CorequisiteCountArgs<ExtArgs>
            result: $Utils.Optional<CorequisiteCountAggregateOutputType> | number
          }
        }
      }
      Plan: {
        payload: Prisma.$PlanPayload<ExtArgs>
        fields: Prisma.PlanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          findFirst: {
            args: Prisma.PlanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          findMany: {
            args: Prisma.PlanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>[]
          }
          create: {
            args: Prisma.PlanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          createMany: {
            args: Prisma.PlanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>[]
          }
          delete: {
            args: Prisma.PlanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          update: {
            args: Prisma.PlanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          deleteMany: {
            args: Prisma.PlanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>[]
          }
          upsert: {
            args: Prisma.PlanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          aggregate: {
            args: Prisma.PlanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlan>
          }
          groupBy: {
            args: Prisma.PlanGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlanGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlanCountArgs<ExtArgs>
            result: $Utils.Optional<PlanCountAggregateOutputType> | number
          }
        }
      }
      PlannedCourse: {
        payload: Prisma.$PlannedCoursePayload<ExtArgs>
        fields: Prisma.PlannedCourseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlannedCourseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlannedCoursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlannedCourseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlannedCoursePayload>
          }
          findFirst: {
            args: Prisma.PlannedCourseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlannedCoursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlannedCourseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlannedCoursePayload>
          }
          findMany: {
            args: Prisma.PlannedCourseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlannedCoursePayload>[]
          }
          create: {
            args: Prisma.PlannedCourseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlannedCoursePayload>
          }
          createMany: {
            args: Prisma.PlannedCourseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlannedCourseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlannedCoursePayload>[]
          }
          delete: {
            args: Prisma.PlannedCourseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlannedCoursePayload>
          }
          update: {
            args: Prisma.PlannedCourseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlannedCoursePayload>
          }
          deleteMany: {
            args: Prisma.PlannedCourseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlannedCourseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlannedCourseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlannedCoursePayload>[]
          }
          upsert: {
            args: Prisma.PlannedCourseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlannedCoursePayload>
          }
          aggregate: {
            args: Prisma.PlannedCourseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlannedCourse>
          }
          groupBy: {
            args: Prisma.PlannedCourseGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlannedCourseGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlannedCourseCountArgs<ExtArgs>
            result: $Utils.Optional<PlannedCourseCountAggregateOutputType> | number
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
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    major?: MajorOmit
    course?: CourseOmit
    majorCourse?: MajorCourseOmit
    prerequisite?: PrerequisiteOmit
    corequisite?: CorequisiteOmit
    plan?: PlanOmit
    plannedCourse?: PlannedCourseOmit
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
    | 'updateManyAndReturn'
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    plans: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plans?: boolean | UserCountOutputTypeCountPlansArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlanWhereInput
  }


  /**
   * Count Type MajorCountOutputType
   */

  export type MajorCountOutputType = {
    courses: number
    users: number
  }

  export type MajorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courses?: boolean | MajorCountOutputTypeCountCoursesArgs
    users?: boolean | MajorCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * MajorCountOutputType without action
   */
  export type MajorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MajorCountOutputType
     */
    select?: MajorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MajorCountOutputType without action
   */
  export type MajorCountOutputTypeCountCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MajorCourseWhereInput
  }

  /**
   * MajorCountOutputType without action
   */
  export type MajorCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type CourseCountOutputType
   */

  export type CourseCountOutputType = {
    majors: number
    plannedCourses: number
    prerequisites: number
    isPrereqFor: number
    corequisites: number
    isCoreqFor: number
  }

  export type CourseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    majors?: boolean | CourseCountOutputTypeCountMajorsArgs
    plannedCourses?: boolean | CourseCountOutputTypeCountPlannedCoursesArgs
    prerequisites?: boolean | CourseCountOutputTypeCountPrerequisitesArgs
    isPrereqFor?: boolean | CourseCountOutputTypeCountIsPrereqForArgs
    corequisites?: boolean | CourseCountOutputTypeCountCorequisitesArgs
    isCoreqFor?: boolean | CourseCountOutputTypeCountIsCoreqForArgs
  }

  // Custom InputTypes
  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCountOutputType
     */
    select?: CourseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountMajorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MajorCourseWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountPlannedCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlannedCourseWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountPrerequisitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrerequisiteWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountIsPrereqForArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrerequisiteWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountCorequisitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CorequisiteWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountIsCoreqForArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CorequisiteWhereInput
  }


  /**
   * Count Type PlanCountOutputType
   */

  export type PlanCountOutputType = {
    plannedCourses: number
  }

  export type PlanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plannedCourses?: boolean | PlanCountOutputTypeCountPlannedCoursesArgs
  }

  // Custom InputTypes
  /**
   * PlanCountOutputType without action
   */
  export type PlanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanCountOutputType
     */
    select?: PlanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlanCountOutputType without action
   */
  export type PlanCountOutputTypeCountPlannedCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlannedCourseWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    hashedPassword: string | null
    fullName: string | null
    studentYear: string | null
    createdAt: Date | null
    updatedAt: Date | null
    majorId: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    hashedPassword: string | null
    fullName: string | null
    studentYear: string | null
    createdAt: Date | null
    updatedAt: Date | null
    majorId: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    hashedPassword: number
    fullName: number
    studentYear: number
    createdAt: number
    updatedAt: number
    majorId: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    hashedPassword?: true
    fullName?: true
    studentYear?: true
    createdAt?: true
    updatedAt?: true
    majorId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    hashedPassword?: true
    fullName?: true
    studentYear?: true
    createdAt?: true
    updatedAt?: true
    majorId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    hashedPassword?: true
    fullName?: true
    studentYear?: true
    createdAt?: true
    updatedAt?: true
    majorId?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    hashedPassword: string
    fullName: string
    studentYear: string | null
    createdAt: Date
    updatedAt: Date
    majorId: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    hashedPassword?: boolean
    fullName?: boolean
    studentYear?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    majorId?: boolean
    plans?: boolean | User$plansArgs<ExtArgs>
    major?: boolean | User$majorArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    hashedPassword?: boolean
    fullName?: boolean
    studentYear?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    majorId?: boolean
    major?: boolean | User$majorArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    hashedPassword?: boolean
    fullName?: boolean
    studentYear?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    majorId?: boolean
    major?: boolean | User$majorArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    hashedPassword?: boolean
    fullName?: boolean
    studentYear?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    majorId?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "hashedPassword" | "fullName" | "studentYear" | "createdAt" | "updatedAt" | "majorId", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plans?: boolean | User$plansArgs<ExtArgs>
    major?: boolean | User$majorArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    major?: boolean | User$majorArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    major?: boolean | User$majorArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      plans: Prisma.$PlanPayload<ExtArgs>[]
      major: Prisma.$MajorPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      hashedPassword: string
      fullName: string
      studentYear: string | null
      createdAt: Date
      updatedAt: Date
      majorId: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    plans<T extends User$plansArgs<ExtArgs> = {}>(args?: Subset<T, User$plansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    major<T extends User$majorArgs<ExtArgs> = {}>(args?: Subset<T, User$majorArgs<ExtArgs>>): Prisma__MajorClient<$Result.GetResult<Prisma.$MajorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly hashedPassword: FieldRef<"User", 'String'>
    readonly fullName: FieldRef<"User", 'String'>
    readonly studentYear: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly majorId: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.plans
   */
  export type User$plansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    where?: PlanWhereInput
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    cursor?: PlanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlanScalarFieldEnum | PlanScalarFieldEnum[]
  }

  /**
   * User.major
   */
  export type User$majorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Major
     */
    select?: MajorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Major
     */
    omit?: MajorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MajorInclude<ExtArgs> | null
    where?: MajorWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Major
   */

  export type AggregateMajor = {
    _count: MajorCountAggregateOutputType | null
    _min: MajorMinAggregateOutputType | null
    _max: MajorMaxAggregateOutputType | null
  }

  export type MajorMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
  }

  export type MajorMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
  }

  export type MajorCountAggregateOutputType = {
    id: number
    name: number
    description: number
    _all: number
  }


  export type MajorMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type MajorMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type MajorCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    _all?: true
  }

  export type MajorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Major to aggregate.
     */
    where?: MajorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Majors to fetch.
     */
    orderBy?: MajorOrderByWithRelationInput | MajorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MajorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Majors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Majors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Majors
    **/
    _count?: true | MajorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MajorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MajorMaxAggregateInputType
  }

  export type GetMajorAggregateType<T extends MajorAggregateArgs> = {
        [P in keyof T & keyof AggregateMajor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMajor[P]>
      : GetScalarType<T[P], AggregateMajor[P]>
  }




  export type MajorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MajorWhereInput
    orderBy?: MajorOrderByWithAggregationInput | MajorOrderByWithAggregationInput[]
    by: MajorScalarFieldEnum[] | MajorScalarFieldEnum
    having?: MajorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MajorCountAggregateInputType | true
    _min?: MajorMinAggregateInputType
    _max?: MajorMaxAggregateInputType
  }

  export type MajorGroupByOutputType = {
    id: string
    name: string
    description: string | null
    _count: MajorCountAggregateOutputType | null
    _min: MajorMinAggregateOutputType | null
    _max: MajorMaxAggregateOutputType | null
  }

  type GetMajorGroupByPayload<T extends MajorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MajorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MajorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MajorGroupByOutputType[P]>
            : GetScalarType<T[P], MajorGroupByOutputType[P]>
        }
      >
    >


  export type MajorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    courses?: boolean | Major$coursesArgs<ExtArgs>
    users?: boolean | Major$usersArgs<ExtArgs>
    _count?: boolean | MajorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["major"]>

  export type MajorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
  }, ExtArgs["result"]["major"]>

  export type MajorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
  }, ExtArgs["result"]["major"]>

  export type MajorSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
  }

  export type MajorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description", ExtArgs["result"]["major"]>
  export type MajorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courses?: boolean | Major$coursesArgs<ExtArgs>
    users?: boolean | Major$usersArgs<ExtArgs>
    _count?: boolean | MajorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MajorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MajorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MajorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Major"
    objects: {
      courses: Prisma.$MajorCoursePayload<ExtArgs>[]
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
    }, ExtArgs["result"]["major"]>
    composites: {}
  }

  type MajorGetPayload<S extends boolean | null | undefined | MajorDefaultArgs> = $Result.GetResult<Prisma.$MajorPayload, S>

  type MajorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MajorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MajorCountAggregateInputType | true
    }

  export interface MajorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Major'], meta: { name: 'Major' } }
    /**
     * Find zero or one Major that matches the filter.
     * @param {MajorFindUniqueArgs} args - Arguments to find a Major
     * @example
     * // Get one Major
     * const major = await prisma.major.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MajorFindUniqueArgs>(args: SelectSubset<T, MajorFindUniqueArgs<ExtArgs>>): Prisma__MajorClient<$Result.GetResult<Prisma.$MajorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Major that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MajorFindUniqueOrThrowArgs} args - Arguments to find a Major
     * @example
     * // Get one Major
     * const major = await prisma.major.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MajorFindUniqueOrThrowArgs>(args: SelectSubset<T, MajorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MajorClient<$Result.GetResult<Prisma.$MajorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Major that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MajorFindFirstArgs} args - Arguments to find a Major
     * @example
     * // Get one Major
     * const major = await prisma.major.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MajorFindFirstArgs>(args?: SelectSubset<T, MajorFindFirstArgs<ExtArgs>>): Prisma__MajorClient<$Result.GetResult<Prisma.$MajorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Major that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MajorFindFirstOrThrowArgs} args - Arguments to find a Major
     * @example
     * // Get one Major
     * const major = await prisma.major.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MajorFindFirstOrThrowArgs>(args?: SelectSubset<T, MajorFindFirstOrThrowArgs<ExtArgs>>): Prisma__MajorClient<$Result.GetResult<Prisma.$MajorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Majors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MajorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Majors
     * const majors = await prisma.major.findMany()
     * 
     * // Get first 10 Majors
     * const majors = await prisma.major.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const majorWithIdOnly = await prisma.major.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MajorFindManyArgs>(args?: SelectSubset<T, MajorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MajorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Major.
     * @param {MajorCreateArgs} args - Arguments to create a Major.
     * @example
     * // Create one Major
     * const Major = await prisma.major.create({
     *   data: {
     *     // ... data to create a Major
     *   }
     * })
     * 
     */
    create<T extends MajorCreateArgs>(args: SelectSubset<T, MajorCreateArgs<ExtArgs>>): Prisma__MajorClient<$Result.GetResult<Prisma.$MajorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Majors.
     * @param {MajorCreateManyArgs} args - Arguments to create many Majors.
     * @example
     * // Create many Majors
     * const major = await prisma.major.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MajorCreateManyArgs>(args?: SelectSubset<T, MajorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Majors and returns the data saved in the database.
     * @param {MajorCreateManyAndReturnArgs} args - Arguments to create many Majors.
     * @example
     * // Create many Majors
     * const major = await prisma.major.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Majors and only return the `id`
     * const majorWithIdOnly = await prisma.major.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MajorCreateManyAndReturnArgs>(args?: SelectSubset<T, MajorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MajorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Major.
     * @param {MajorDeleteArgs} args - Arguments to delete one Major.
     * @example
     * // Delete one Major
     * const Major = await prisma.major.delete({
     *   where: {
     *     // ... filter to delete one Major
     *   }
     * })
     * 
     */
    delete<T extends MajorDeleteArgs>(args: SelectSubset<T, MajorDeleteArgs<ExtArgs>>): Prisma__MajorClient<$Result.GetResult<Prisma.$MajorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Major.
     * @param {MajorUpdateArgs} args - Arguments to update one Major.
     * @example
     * // Update one Major
     * const major = await prisma.major.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MajorUpdateArgs>(args: SelectSubset<T, MajorUpdateArgs<ExtArgs>>): Prisma__MajorClient<$Result.GetResult<Prisma.$MajorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Majors.
     * @param {MajorDeleteManyArgs} args - Arguments to filter Majors to delete.
     * @example
     * // Delete a few Majors
     * const { count } = await prisma.major.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MajorDeleteManyArgs>(args?: SelectSubset<T, MajorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Majors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MajorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Majors
     * const major = await prisma.major.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MajorUpdateManyArgs>(args: SelectSubset<T, MajorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Majors and returns the data updated in the database.
     * @param {MajorUpdateManyAndReturnArgs} args - Arguments to update many Majors.
     * @example
     * // Update many Majors
     * const major = await prisma.major.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Majors and only return the `id`
     * const majorWithIdOnly = await prisma.major.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MajorUpdateManyAndReturnArgs>(args: SelectSubset<T, MajorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MajorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Major.
     * @param {MajorUpsertArgs} args - Arguments to update or create a Major.
     * @example
     * // Update or create a Major
     * const major = await prisma.major.upsert({
     *   create: {
     *     // ... data to create a Major
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Major we want to update
     *   }
     * })
     */
    upsert<T extends MajorUpsertArgs>(args: SelectSubset<T, MajorUpsertArgs<ExtArgs>>): Prisma__MajorClient<$Result.GetResult<Prisma.$MajorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Majors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MajorCountArgs} args - Arguments to filter Majors to count.
     * @example
     * // Count the number of Majors
     * const count = await prisma.major.count({
     *   where: {
     *     // ... the filter for the Majors we want to count
     *   }
     * })
    **/
    count<T extends MajorCountArgs>(
      args?: Subset<T, MajorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MajorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Major.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MajorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MajorAggregateArgs>(args: Subset<T, MajorAggregateArgs>): Prisma.PrismaPromise<GetMajorAggregateType<T>>

    /**
     * Group by Major.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MajorGroupByArgs} args - Group by arguments.
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
      T extends MajorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MajorGroupByArgs['orderBy'] }
        : { orderBy?: MajorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MajorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMajorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Major model
   */
  readonly fields: MajorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Major.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MajorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    courses<T extends Major$coursesArgs<ExtArgs> = {}>(args?: Subset<T, Major$coursesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MajorCoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends Major$usersArgs<ExtArgs> = {}>(args?: Subset<T, Major$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Major model
   */
  interface MajorFieldRefs {
    readonly id: FieldRef<"Major", 'String'>
    readonly name: FieldRef<"Major", 'String'>
    readonly description: FieldRef<"Major", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Major findUnique
   */
  export type MajorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Major
     */
    select?: MajorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Major
     */
    omit?: MajorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MajorInclude<ExtArgs> | null
    /**
     * Filter, which Major to fetch.
     */
    where: MajorWhereUniqueInput
  }

  /**
   * Major findUniqueOrThrow
   */
  export type MajorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Major
     */
    select?: MajorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Major
     */
    omit?: MajorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MajorInclude<ExtArgs> | null
    /**
     * Filter, which Major to fetch.
     */
    where: MajorWhereUniqueInput
  }

  /**
   * Major findFirst
   */
  export type MajorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Major
     */
    select?: MajorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Major
     */
    omit?: MajorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MajorInclude<ExtArgs> | null
    /**
     * Filter, which Major to fetch.
     */
    where?: MajorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Majors to fetch.
     */
    orderBy?: MajorOrderByWithRelationInput | MajorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Majors.
     */
    cursor?: MajorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Majors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Majors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Majors.
     */
    distinct?: MajorScalarFieldEnum | MajorScalarFieldEnum[]
  }

  /**
   * Major findFirstOrThrow
   */
  export type MajorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Major
     */
    select?: MajorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Major
     */
    omit?: MajorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MajorInclude<ExtArgs> | null
    /**
     * Filter, which Major to fetch.
     */
    where?: MajorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Majors to fetch.
     */
    orderBy?: MajorOrderByWithRelationInput | MajorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Majors.
     */
    cursor?: MajorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Majors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Majors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Majors.
     */
    distinct?: MajorScalarFieldEnum | MajorScalarFieldEnum[]
  }

  /**
   * Major findMany
   */
  export type MajorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Major
     */
    select?: MajorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Major
     */
    omit?: MajorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MajorInclude<ExtArgs> | null
    /**
     * Filter, which Majors to fetch.
     */
    where?: MajorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Majors to fetch.
     */
    orderBy?: MajorOrderByWithRelationInput | MajorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Majors.
     */
    cursor?: MajorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Majors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Majors.
     */
    skip?: number
    distinct?: MajorScalarFieldEnum | MajorScalarFieldEnum[]
  }

  /**
   * Major create
   */
  export type MajorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Major
     */
    select?: MajorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Major
     */
    omit?: MajorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MajorInclude<ExtArgs> | null
    /**
     * The data needed to create a Major.
     */
    data: XOR<MajorCreateInput, MajorUncheckedCreateInput>
  }

  /**
   * Major createMany
   */
  export type MajorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Majors.
     */
    data: MajorCreateManyInput | MajorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Major createManyAndReturn
   */
  export type MajorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Major
     */
    select?: MajorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Major
     */
    omit?: MajorOmit<ExtArgs> | null
    /**
     * The data used to create many Majors.
     */
    data: MajorCreateManyInput | MajorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Major update
   */
  export type MajorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Major
     */
    select?: MajorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Major
     */
    omit?: MajorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MajorInclude<ExtArgs> | null
    /**
     * The data needed to update a Major.
     */
    data: XOR<MajorUpdateInput, MajorUncheckedUpdateInput>
    /**
     * Choose, which Major to update.
     */
    where: MajorWhereUniqueInput
  }

  /**
   * Major updateMany
   */
  export type MajorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Majors.
     */
    data: XOR<MajorUpdateManyMutationInput, MajorUncheckedUpdateManyInput>
    /**
     * Filter which Majors to update
     */
    where?: MajorWhereInput
    /**
     * Limit how many Majors to update.
     */
    limit?: number
  }

  /**
   * Major updateManyAndReturn
   */
  export type MajorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Major
     */
    select?: MajorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Major
     */
    omit?: MajorOmit<ExtArgs> | null
    /**
     * The data used to update Majors.
     */
    data: XOR<MajorUpdateManyMutationInput, MajorUncheckedUpdateManyInput>
    /**
     * Filter which Majors to update
     */
    where?: MajorWhereInput
    /**
     * Limit how many Majors to update.
     */
    limit?: number
  }

  /**
   * Major upsert
   */
  export type MajorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Major
     */
    select?: MajorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Major
     */
    omit?: MajorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MajorInclude<ExtArgs> | null
    /**
     * The filter to search for the Major to update in case it exists.
     */
    where: MajorWhereUniqueInput
    /**
     * In case the Major found by the `where` argument doesn't exist, create a new Major with this data.
     */
    create: XOR<MajorCreateInput, MajorUncheckedCreateInput>
    /**
     * In case the Major was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MajorUpdateInput, MajorUncheckedUpdateInput>
  }

  /**
   * Major delete
   */
  export type MajorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Major
     */
    select?: MajorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Major
     */
    omit?: MajorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MajorInclude<ExtArgs> | null
    /**
     * Filter which Major to delete.
     */
    where: MajorWhereUniqueInput
  }

  /**
   * Major deleteMany
   */
  export type MajorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Majors to delete
     */
    where?: MajorWhereInput
    /**
     * Limit how many Majors to delete.
     */
    limit?: number
  }

  /**
   * Major.courses
   */
  export type Major$coursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MajorCourse
     */
    select?: MajorCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MajorCourse
     */
    omit?: MajorCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MajorCourseInclude<ExtArgs> | null
    where?: MajorCourseWhereInput
    orderBy?: MajorCourseOrderByWithRelationInput | MajorCourseOrderByWithRelationInput[]
    cursor?: MajorCourseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MajorCourseScalarFieldEnum | MajorCourseScalarFieldEnum[]
  }

  /**
   * Major.users
   */
  export type Major$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Major without action
   */
  export type MajorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Major
     */
    select?: MajorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Major
     */
    omit?: MajorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MajorInclude<ExtArgs> | null
  }


  /**
   * Model Course
   */

  export type AggregateCourse = {
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  export type CourseAvgAggregateOutputType = {
    credits: number | null
    recommendedSemester: number | null
  }

  export type CourseSumAggregateOutputType = {
    credits: number | null
    recommendedSemester: number | null
  }

  export type CourseMinAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    credits: number | null
    description: string | null
    recommendedSemester: number | null
  }

  export type CourseMaxAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    credits: number | null
    description: string | null
    recommendedSemester: number | null
  }

  export type CourseCountAggregateOutputType = {
    id: number
    code: number
    name: number
    credits: number
    description: number
    recommendedSemester: number
    _all: number
  }


  export type CourseAvgAggregateInputType = {
    credits?: true
    recommendedSemester?: true
  }

  export type CourseSumAggregateInputType = {
    credits?: true
    recommendedSemester?: true
  }

  export type CourseMinAggregateInputType = {
    id?: true
    code?: true
    name?: true
    credits?: true
    description?: true
    recommendedSemester?: true
  }

  export type CourseMaxAggregateInputType = {
    id?: true
    code?: true
    name?: true
    credits?: true
    description?: true
    recommendedSemester?: true
  }

  export type CourseCountAggregateInputType = {
    id?: true
    code?: true
    name?: true
    credits?: true
    description?: true
    recommendedSemester?: true
    _all?: true
  }

  export type CourseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Course to aggregate.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Courses
    **/
    _count?: true | CourseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CourseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CourseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseMaxAggregateInputType
  }

  export type GetCourseAggregateType<T extends CourseAggregateArgs> = {
        [P in keyof T & keyof AggregateCourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourse[P]>
      : GetScalarType<T[P], AggregateCourse[P]>
  }




  export type CourseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithAggregationInput | CourseOrderByWithAggregationInput[]
    by: CourseScalarFieldEnum[] | CourseScalarFieldEnum
    having?: CourseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseCountAggregateInputType | true
    _avg?: CourseAvgAggregateInputType
    _sum?: CourseSumAggregateInputType
    _min?: CourseMinAggregateInputType
    _max?: CourseMaxAggregateInputType
  }

  export type CourseGroupByOutputType = {
    id: string
    code: string
    name: string
    credits: number
    description: string | null
    recommendedSemester: number | null
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  type GetCourseGroupByPayload<T extends CourseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseGroupByOutputType[P]>
            : GetScalarType<T[P], CourseGroupByOutputType[P]>
        }
      >
    >


  export type CourseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    credits?: boolean
    description?: boolean
    recommendedSemester?: boolean
    majors?: boolean | Course$majorsArgs<ExtArgs>
    plannedCourses?: boolean | Course$plannedCoursesArgs<ExtArgs>
    prerequisites?: boolean | Course$prerequisitesArgs<ExtArgs>
    isPrereqFor?: boolean | Course$isPrereqForArgs<ExtArgs>
    corequisites?: boolean | Course$corequisitesArgs<ExtArgs>
    isCoreqFor?: boolean | Course$isCoreqForArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    credits?: boolean
    description?: boolean
    recommendedSemester?: boolean
  }, ExtArgs["result"]["course"]>

  export type CourseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    credits?: boolean
    description?: boolean
    recommendedSemester?: boolean
  }, ExtArgs["result"]["course"]>

  export type CourseSelectScalar = {
    id?: boolean
    code?: boolean
    name?: boolean
    credits?: boolean
    description?: boolean
    recommendedSemester?: boolean
  }

  export type CourseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "name" | "credits" | "description" | "recommendedSemester", ExtArgs["result"]["course"]>
  export type CourseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    majors?: boolean | Course$majorsArgs<ExtArgs>
    plannedCourses?: boolean | Course$plannedCoursesArgs<ExtArgs>
    prerequisites?: boolean | Course$prerequisitesArgs<ExtArgs>
    isPrereqFor?: boolean | Course$isPrereqForArgs<ExtArgs>
    corequisites?: boolean | Course$corequisitesArgs<ExtArgs>
    isCoreqFor?: boolean | Course$isCoreqForArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CourseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CourseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CoursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Course"
    objects: {
      majors: Prisma.$MajorCoursePayload<ExtArgs>[]
      plannedCourses: Prisma.$PlannedCoursePayload<ExtArgs>[]
      prerequisites: Prisma.$PrerequisitePayload<ExtArgs>[]
      isPrereqFor: Prisma.$PrerequisitePayload<ExtArgs>[]
      corequisites: Prisma.$CorequisitePayload<ExtArgs>[]
      isCoreqFor: Prisma.$CorequisitePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      name: string
      credits: number
      description: string | null
      recommendedSemester: number | null
    }, ExtArgs["result"]["course"]>
    composites: {}
  }

  type CourseGetPayload<S extends boolean | null | undefined | CourseDefaultArgs> = $Result.GetResult<Prisma.$CoursePayload, S>

  type CourseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CourseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourseCountAggregateInputType | true
    }

  export interface CourseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Course'], meta: { name: 'Course' } }
    /**
     * Find zero or one Course that matches the filter.
     * @param {CourseFindUniqueArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourseFindUniqueArgs>(args: SelectSubset<T, CourseFindUniqueArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Course that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CourseFindUniqueOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourseFindUniqueOrThrowArgs>(args: SelectSubset<T, CourseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourseFindFirstArgs>(args?: SelectSubset<T, CourseFindFirstArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourseFindFirstOrThrowArgs>(args?: SelectSubset<T, CourseFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courses
     * const courses = await prisma.course.findMany()
     * 
     * // Get first 10 Courses
     * const courses = await prisma.course.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseWithIdOnly = await prisma.course.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CourseFindManyArgs>(args?: SelectSubset<T, CourseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Course.
     * @param {CourseCreateArgs} args - Arguments to create a Course.
     * @example
     * // Create one Course
     * const Course = await prisma.course.create({
     *   data: {
     *     // ... data to create a Course
     *   }
     * })
     * 
     */
    create<T extends CourseCreateArgs>(args: SelectSubset<T, CourseCreateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Courses.
     * @param {CourseCreateManyArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourseCreateManyArgs>(args?: SelectSubset<T, CourseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Courses and returns the data saved in the database.
     * @param {CourseCreateManyAndReturnArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CourseCreateManyAndReturnArgs>(args?: SelectSubset<T, CourseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Course.
     * @param {CourseDeleteArgs} args - Arguments to delete one Course.
     * @example
     * // Delete one Course
     * const Course = await prisma.course.delete({
     *   where: {
     *     // ... filter to delete one Course
     *   }
     * })
     * 
     */
    delete<T extends CourseDeleteArgs>(args: SelectSubset<T, CourseDeleteArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Course.
     * @param {CourseUpdateArgs} args - Arguments to update one Course.
     * @example
     * // Update one Course
     * const course = await prisma.course.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CourseUpdateArgs>(args: SelectSubset<T, CourseUpdateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Courses.
     * @param {CourseDeleteManyArgs} args - Arguments to filter Courses to delete.
     * @example
     * // Delete a few Courses
     * const { count } = await prisma.course.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourseDeleteManyArgs>(args?: SelectSubset<T, CourseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CourseUpdateManyArgs>(args: SelectSubset<T, CourseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses and returns the data updated in the database.
     * @param {CourseUpdateManyAndReturnArgs} args - Arguments to update many Courses.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CourseUpdateManyAndReturnArgs>(args: SelectSubset<T, CourseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Course.
     * @param {CourseUpsertArgs} args - Arguments to update or create a Course.
     * @example
     * // Update or create a Course
     * const course = await prisma.course.upsert({
     *   create: {
     *     // ... data to create a Course
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Course we want to update
     *   }
     * })
     */
    upsert<T extends CourseUpsertArgs>(args: SelectSubset<T, CourseUpsertArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseCountArgs} args - Arguments to filter Courses to count.
     * @example
     * // Count the number of Courses
     * const count = await prisma.course.count({
     *   where: {
     *     // ... the filter for the Courses we want to count
     *   }
     * })
    **/
    count<T extends CourseCountArgs>(
      args?: Subset<T, CourseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CourseAggregateArgs>(args: Subset<T, CourseAggregateArgs>): Prisma.PrismaPromise<GetCourseAggregateType<T>>

    /**
     * Group by Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseGroupByArgs} args - Group by arguments.
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
      T extends CourseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseGroupByArgs['orderBy'] }
        : { orderBy?: CourseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CourseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Course model
   */
  readonly fields: CourseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Course.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    majors<T extends Course$majorsArgs<ExtArgs> = {}>(args?: Subset<T, Course$majorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MajorCoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    plannedCourses<T extends Course$plannedCoursesArgs<ExtArgs> = {}>(args?: Subset<T, Course$plannedCoursesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlannedCoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    prerequisites<T extends Course$prerequisitesArgs<ExtArgs> = {}>(args?: Subset<T, Course$prerequisitesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrerequisitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    isPrereqFor<T extends Course$isPrereqForArgs<ExtArgs> = {}>(args?: Subset<T, Course$isPrereqForArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrerequisitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    corequisites<T extends Course$corequisitesArgs<ExtArgs> = {}>(args?: Subset<T, Course$corequisitesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CorequisitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    isCoreqFor<T extends Course$isCoreqForArgs<ExtArgs> = {}>(args?: Subset<T, Course$isCoreqForArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CorequisitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Course model
   */
  interface CourseFieldRefs {
    readonly id: FieldRef<"Course", 'String'>
    readonly code: FieldRef<"Course", 'String'>
    readonly name: FieldRef<"Course", 'String'>
    readonly credits: FieldRef<"Course", 'Int'>
    readonly description: FieldRef<"Course", 'String'>
    readonly recommendedSemester: FieldRef<"Course", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Course findUnique
   */
  export type CourseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findUniqueOrThrow
   */
  export type CourseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findFirst
   */
  export type CourseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findFirstOrThrow
   */
  export type CourseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findMany
   */
  export type CourseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Courses to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course create
   */
  export type CourseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to create a Course.
     */
    data: XOR<CourseCreateInput, CourseUncheckedCreateInput>
  }

  /**
   * Course createMany
   */
  export type CourseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Course createManyAndReturn
   */
  export type CourseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Course update
   */
  export type CourseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to update a Course.
     */
    data: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
    /**
     * Choose, which Course to update.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course updateMany
   */
  export type CourseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
  }

  /**
   * Course updateManyAndReturn
   */
  export type CourseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
  }

  /**
   * Course upsert
   */
  export type CourseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The filter to search for the Course to update in case it exists.
     */
    where: CourseWhereUniqueInput
    /**
     * In case the Course found by the `where` argument doesn't exist, create a new Course with this data.
     */
    create: XOR<CourseCreateInput, CourseUncheckedCreateInput>
    /**
     * In case the Course was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
  }

  /**
   * Course delete
   */
  export type CourseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter which Course to delete.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course deleteMany
   */
  export type CourseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Courses to delete
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to delete.
     */
    limit?: number
  }

  /**
   * Course.majors
   */
  export type Course$majorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MajorCourse
     */
    select?: MajorCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MajorCourse
     */
    omit?: MajorCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MajorCourseInclude<ExtArgs> | null
    where?: MajorCourseWhereInput
    orderBy?: MajorCourseOrderByWithRelationInput | MajorCourseOrderByWithRelationInput[]
    cursor?: MajorCourseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MajorCourseScalarFieldEnum | MajorCourseScalarFieldEnum[]
  }

  /**
   * Course.plannedCourses
   */
  export type Course$plannedCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlannedCourse
     */
    select?: PlannedCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlannedCourse
     */
    omit?: PlannedCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlannedCourseInclude<ExtArgs> | null
    where?: PlannedCourseWhereInput
    orderBy?: PlannedCourseOrderByWithRelationInput | PlannedCourseOrderByWithRelationInput[]
    cursor?: PlannedCourseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlannedCourseScalarFieldEnum | PlannedCourseScalarFieldEnum[]
  }

  /**
   * Course.prerequisites
   */
  export type Course$prerequisitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prerequisite
     */
    select?: PrerequisiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prerequisite
     */
    omit?: PrerequisiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrerequisiteInclude<ExtArgs> | null
    where?: PrerequisiteWhereInput
    orderBy?: PrerequisiteOrderByWithRelationInput | PrerequisiteOrderByWithRelationInput[]
    cursor?: PrerequisiteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrerequisiteScalarFieldEnum | PrerequisiteScalarFieldEnum[]
  }

  /**
   * Course.isPrereqFor
   */
  export type Course$isPrereqForArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prerequisite
     */
    select?: PrerequisiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prerequisite
     */
    omit?: PrerequisiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrerequisiteInclude<ExtArgs> | null
    where?: PrerequisiteWhereInput
    orderBy?: PrerequisiteOrderByWithRelationInput | PrerequisiteOrderByWithRelationInput[]
    cursor?: PrerequisiteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrerequisiteScalarFieldEnum | PrerequisiteScalarFieldEnum[]
  }

  /**
   * Course.corequisites
   */
  export type Course$corequisitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Corequisite
     */
    select?: CorequisiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Corequisite
     */
    omit?: CorequisiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CorequisiteInclude<ExtArgs> | null
    where?: CorequisiteWhereInput
    orderBy?: CorequisiteOrderByWithRelationInput | CorequisiteOrderByWithRelationInput[]
    cursor?: CorequisiteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CorequisiteScalarFieldEnum | CorequisiteScalarFieldEnum[]
  }

  /**
   * Course.isCoreqFor
   */
  export type Course$isCoreqForArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Corequisite
     */
    select?: CorequisiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Corequisite
     */
    omit?: CorequisiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CorequisiteInclude<ExtArgs> | null
    where?: CorequisiteWhereInput
    orderBy?: CorequisiteOrderByWithRelationInput | CorequisiteOrderByWithRelationInput[]
    cursor?: CorequisiteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CorequisiteScalarFieldEnum | CorequisiteScalarFieldEnum[]
  }

  /**
   * Course without action
   */
  export type CourseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
  }


  /**
   * Model MajorCourse
   */

  export type AggregateMajorCourse = {
    _count: MajorCourseCountAggregateOutputType | null
    _min: MajorCourseMinAggregateOutputType | null
    _max: MajorCourseMaxAggregateOutputType | null
  }

  export type MajorCourseMinAggregateOutputType = {
    id: string | null
    majorId: string | null
    courseId: string | null
  }

  export type MajorCourseMaxAggregateOutputType = {
    id: string | null
    majorId: string | null
    courseId: string | null
  }

  export type MajorCourseCountAggregateOutputType = {
    id: number
    majorId: number
    courseId: number
    _all: number
  }


  export type MajorCourseMinAggregateInputType = {
    id?: true
    majorId?: true
    courseId?: true
  }

  export type MajorCourseMaxAggregateInputType = {
    id?: true
    majorId?: true
    courseId?: true
  }

  export type MajorCourseCountAggregateInputType = {
    id?: true
    majorId?: true
    courseId?: true
    _all?: true
  }

  export type MajorCourseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MajorCourse to aggregate.
     */
    where?: MajorCourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MajorCourses to fetch.
     */
    orderBy?: MajorCourseOrderByWithRelationInput | MajorCourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MajorCourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MajorCourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MajorCourses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MajorCourses
    **/
    _count?: true | MajorCourseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MajorCourseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MajorCourseMaxAggregateInputType
  }

  export type GetMajorCourseAggregateType<T extends MajorCourseAggregateArgs> = {
        [P in keyof T & keyof AggregateMajorCourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMajorCourse[P]>
      : GetScalarType<T[P], AggregateMajorCourse[P]>
  }




  export type MajorCourseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MajorCourseWhereInput
    orderBy?: MajorCourseOrderByWithAggregationInput | MajorCourseOrderByWithAggregationInput[]
    by: MajorCourseScalarFieldEnum[] | MajorCourseScalarFieldEnum
    having?: MajorCourseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MajorCourseCountAggregateInputType | true
    _min?: MajorCourseMinAggregateInputType
    _max?: MajorCourseMaxAggregateInputType
  }

  export type MajorCourseGroupByOutputType = {
    id: string
    majorId: string
    courseId: string
    _count: MajorCourseCountAggregateOutputType | null
    _min: MajorCourseMinAggregateOutputType | null
    _max: MajorCourseMaxAggregateOutputType | null
  }

  type GetMajorCourseGroupByPayload<T extends MajorCourseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MajorCourseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MajorCourseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MajorCourseGroupByOutputType[P]>
            : GetScalarType<T[P], MajorCourseGroupByOutputType[P]>
        }
      >
    >


  export type MajorCourseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    majorId?: boolean
    courseId?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    major?: boolean | MajorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["majorCourse"]>

  export type MajorCourseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    majorId?: boolean
    courseId?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    major?: boolean | MajorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["majorCourse"]>

  export type MajorCourseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    majorId?: boolean
    courseId?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    major?: boolean | MajorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["majorCourse"]>

  export type MajorCourseSelectScalar = {
    id?: boolean
    majorId?: boolean
    courseId?: boolean
  }

  export type MajorCourseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "majorId" | "courseId", ExtArgs["result"]["majorCourse"]>
  export type MajorCourseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    major?: boolean | MajorDefaultArgs<ExtArgs>
  }
  export type MajorCourseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    major?: boolean | MajorDefaultArgs<ExtArgs>
  }
  export type MajorCourseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    major?: boolean | MajorDefaultArgs<ExtArgs>
  }

  export type $MajorCoursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MajorCourse"
    objects: {
      course: Prisma.$CoursePayload<ExtArgs>
      major: Prisma.$MajorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      majorId: string
      courseId: string
    }, ExtArgs["result"]["majorCourse"]>
    composites: {}
  }

  type MajorCourseGetPayload<S extends boolean | null | undefined | MajorCourseDefaultArgs> = $Result.GetResult<Prisma.$MajorCoursePayload, S>

  type MajorCourseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MajorCourseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MajorCourseCountAggregateInputType | true
    }

  export interface MajorCourseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MajorCourse'], meta: { name: 'MajorCourse' } }
    /**
     * Find zero or one MajorCourse that matches the filter.
     * @param {MajorCourseFindUniqueArgs} args - Arguments to find a MajorCourse
     * @example
     * // Get one MajorCourse
     * const majorCourse = await prisma.majorCourse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MajorCourseFindUniqueArgs>(args: SelectSubset<T, MajorCourseFindUniqueArgs<ExtArgs>>): Prisma__MajorCourseClient<$Result.GetResult<Prisma.$MajorCoursePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MajorCourse that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MajorCourseFindUniqueOrThrowArgs} args - Arguments to find a MajorCourse
     * @example
     * // Get one MajorCourse
     * const majorCourse = await prisma.majorCourse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MajorCourseFindUniqueOrThrowArgs>(args: SelectSubset<T, MajorCourseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MajorCourseClient<$Result.GetResult<Prisma.$MajorCoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MajorCourse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MajorCourseFindFirstArgs} args - Arguments to find a MajorCourse
     * @example
     * // Get one MajorCourse
     * const majorCourse = await prisma.majorCourse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MajorCourseFindFirstArgs>(args?: SelectSubset<T, MajorCourseFindFirstArgs<ExtArgs>>): Prisma__MajorCourseClient<$Result.GetResult<Prisma.$MajorCoursePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MajorCourse that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MajorCourseFindFirstOrThrowArgs} args - Arguments to find a MajorCourse
     * @example
     * // Get one MajorCourse
     * const majorCourse = await prisma.majorCourse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MajorCourseFindFirstOrThrowArgs>(args?: SelectSubset<T, MajorCourseFindFirstOrThrowArgs<ExtArgs>>): Prisma__MajorCourseClient<$Result.GetResult<Prisma.$MajorCoursePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MajorCourses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MajorCourseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MajorCourses
     * const majorCourses = await prisma.majorCourse.findMany()
     * 
     * // Get first 10 MajorCourses
     * const majorCourses = await prisma.majorCourse.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const majorCourseWithIdOnly = await prisma.majorCourse.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MajorCourseFindManyArgs>(args?: SelectSubset<T, MajorCourseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MajorCoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MajorCourse.
     * @param {MajorCourseCreateArgs} args - Arguments to create a MajorCourse.
     * @example
     * // Create one MajorCourse
     * const MajorCourse = await prisma.majorCourse.create({
     *   data: {
     *     // ... data to create a MajorCourse
     *   }
     * })
     * 
     */
    create<T extends MajorCourseCreateArgs>(args: SelectSubset<T, MajorCourseCreateArgs<ExtArgs>>): Prisma__MajorCourseClient<$Result.GetResult<Prisma.$MajorCoursePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MajorCourses.
     * @param {MajorCourseCreateManyArgs} args - Arguments to create many MajorCourses.
     * @example
     * // Create many MajorCourses
     * const majorCourse = await prisma.majorCourse.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MajorCourseCreateManyArgs>(args?: SelectSubset<T, MajorCourseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MajorCourses and returns the data saved in the database.
     * @param {MajorCourseCreateManyAndReturnArgs} args - Arguments to create many MajorCourses.
     * @example
     * // Create many MajorCourses
     * const majorCourse = await prisma.majorCourse.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MajorCourses and only return the `id`
     * const majorCourseWithIdOnly = await prisma.majorCourse.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MajorCourseCreateManyAndReturnArgs>(args?: SelectSubset<T, MajorCourseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MajorCoursePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MajorCourse.
     * @param {MajorCourseDeleteArgs} args - Arguments to delete one MajorCourse.
     * @example
     * // Delete one MajorCourse
     * const MajorCourse = await prisma.majorCourse.delete({
     *   where: {
     *     // ... filter to delete one MajorCourse
     *   }
     * })
     * 
     */
    delete<T extends MajorCourseDeleteArgs>(args: SelectSubset<T, MajorCourseDeleteArgs<ExtArgs>>): Prisma__MajorCourseClient<$Result.GetResult<Prisma.$MajorCoursePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MajorCourse.
     * @param {MajorCourseUpdateArgs} args - Arguments to update one MajorCourse.
     * @example
     * // Update one MajorCourse
     * const majorCourse = await prisma.majorCourse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MajorCourseUpdateArgs>(args: SelectSubset<T, MajorCourseUpdateArgs<ExtArgs>>): Prisma__MajorCourseClient<$Result.GetResult<Prisma.$MajorCoursePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MajorCourses.
     * @param {MajorCourseDeleteManyArgs} args - Arguments to filter MajorCourses to delete.
     * @example
     * // Delete a few MajorCourses
     * const { count } = await prisma.majorCourse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MajorCourseDeleteManyArgs>(args?: SelectSubset<T, MajorCourseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MajorCourses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MajorCourseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MajorCourses
     * const majorCourse = await prisma.majorCourse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MajorCourseUpdateManyArgs>(args: SelectSubset<T, MajorCourseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MajorCourses and returns the data updated in the database.
     * @param {MajorCourseUpdateManyAndReturnArgs} args - Arguments to update many MajorCourses.
     * @example
     * // Update many MajorCourses
     * const majorCourse = await prisma.majorCourse.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MajorCourses and only return the `id`
     * const majorCourseWithIdOnly = await prisma.majorCourse.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MajorCourseUpdateManyAndReturnArgs>(args: SelectSubset<T, MajorCourseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MajorCoursePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MajorCourse.
     * @param {MajorCourseUpsertArgs} args - Arguments to update or create a MajorCourse.
     * @example
     * // Update or create a MajorCourse
     * const majorCourse = await prisma.majorCourse.upsert({
     *   create: {
     *     // ... data to create a MajorCourse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MajorCourse we want to update
     *   }
     * })
     */
    upsert<T extends MajorCourseUpsertArgs>(args: SelectSubset<T, MajorCourseUpsertArgs<ExtArgs>>): Prisma__MajorCourseClient<$Result.GetResult<Prisma.$MajorCoursePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MajorCourses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MajorCourseCountArgs} args - Arguments to filter MajorCourses to count.
     * @example
     * // Count the number of MajorCourses
     * const count = await prisma.majorCourse.count({
     *   where: {
     *     // ... the filter for the MajorCourses we want to count
     *   }
     * })
    **/
    count<T extends MajorCourseCountArgs>(
      args?: Subset<T, MajorCourseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MajorCourseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MajorCourse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MajorCourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MajorCourseAggregateArgs>(args: Subset<T, MajorCourseAggregateArgs>): Prisma.PrismaPromise<GetMajorCourseAggregateType<T>>

    /**
     * Group by MajorCourse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MajorCourseGroupByArgs} args - Group by arguments.
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
      T extends MajorCourseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MajorCourseGroupByArgs['orderBy'] }
        : { orderBy?: MajorCourseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MajorCourseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMajorCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MajorCourse model
   */
  readonly fields: MajorCourseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MajorCourse.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MajorCourseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    major<T extends MajorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MajorDefaultArgs<ExtArgs>>): Prisma__MajorClient<$Result.GetResult<Prisma.$MajorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MajorCourse model
   */
  interface MajorCourseFieldRefs {
    readonly id: FieldRef<"MajorCourse", 'String'>
    readonly majorId: FieldRef<"MajorCourse", 'String'>
    readonly courseId: FieldRef<"MajorCourse", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MajorCourse findUnique
   */
  export type MajorCourseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MajorCourse
     */
    select?: MajorCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MajorCourse
     */
    omit?: MajorCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MajorCourseInclude<ExtArgs> | null
    /**
     * Filter, which MajorCourse to fetch.
     */
    where: MajorCourseWhereUniqueInput
  }

  /**
   * MajorCourse findUniqueOrThrow
   */
  export type MajorCourseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MajorCourse
     */
    select?: MajorCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MajorCourse
     */
    omit?: MajorCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MajorCourseInclude<ExtArgs> | null
    /**
     * Filter, which MajorCourse to fetch.
     */
    where: MajorCourseWhereUniqueInput
  }

  /**
   * MajorCourse findFirst
   */
  export type MajorCourseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MajorCourse
     */
    select?: MajorCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MajorCourse
     */
    omit?: MajorCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MajorCourseInclude<ExtArgs> | null
    /**
     * Filter, which MajorCourse to fetch.
     */
    where?: MajorCourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MajorCourses to fetch.
     */
    orderBy?: MajorCourseOrderByWithRelationInput | MajorCourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MajorCourses.
     */
    cursor?: MajorCourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MajorCourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MajorCourses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MajorCourses.
     */
    distinct?: MajorCourseScalarFieldEnum | MajorCourseScalarFieldEnum[]
  }

  /**
   * MajorCourse findFirstOrThrow
   */
  export type MajorCourseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MajorCourse
     */
    select?: MajorCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MajorCourse
     */
    omit?: MajorCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MajorCourseInclude<ExtArgs> | null
    /**
     * Filter, which MajorCourse to fetch.
     */
    where?: MajorCourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MajorCourses to fetch.
     */
    orderBy?: MajorCourseOrderByWithRelationInput | MajorCourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MajorCourses.
     */
    cursor?: MajorCourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MajorCourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MajorCourses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MajorCourses.
     */
    distinct?: MajorCourseScalarFieldEnum | MajorCourseScalarFieldEnum[]
  }

  /**
   * MajorCourse findMany
   */
  export type MajorCourseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MajorCourse
     */
    select?: MajorCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MajorCourse
     */
    omit?: MajorCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MajorCourseInclude<ExtArgs> | null
    /**
     * Filter, which MajorCourses to fetch.
     */
    where?: MajorCourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MajorCourses to fetch.
     */
    orderBy?: MajorCourseOrderByWithRelationInput | MajorCourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MajorCourses.
     */
    cursor?: MajorCourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MajorCourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MajorCourses.
     */
    skip?: number
    distinct?: MajorCourseScalarFieldEnum | MajorCourseScalarFieldEnum[]
  }

  /**
   * MajorCourse create
   */
  export type MajorCourseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MajorCourse
     */
    select?: MajorCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MajorCourse
     */
    omit?: MajorCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MajorCourseInclude<ExtArgs> | null
    /**
     * The data needed to create a MajorCourse.
     */
    data: XOR<MajorCourseCreateInput, MajorCourseUncheckedCreateInput>
  }

  /**
   * MajorCourse createMany
   */
  export type MajorCourseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MajorCourses.
     */
    data: MajorCourseCreateManyInput | MajorCourseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MajorCourse createManyAndReturn
   */
  export type MajorCourseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MajorCourse
     */
    select?: MajorCourseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MajorCourse
     */
    omit?: MajorCourseOmit<ExtArgs> | null
    /**
     * The data used to create many MajorCourses.
     */
    data: MajorCourseCreateManyInput | MajorCourseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MajorCourseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MajorCourse update
   */
  export type MajorCourseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MajorCourse
     */
    select?: MajorCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MajorCourse
     */
    omit?: MajorCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MajorCourseInclude<ExtArgs> | null
    /**
     * The data needed to update a MajorCourse.
     */
    data: XOR<MajorCourseUpdateInput, MajorCourseUncheckedUpdateInput>
    /**
     * Choose, which MajorCourse to update.
     */
    where: MajorCourseWhereUniqueInput
  }

  /**
   * MajorCourse updateMany
   */
  export type MajorCourseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MajorCourses.
     */
    data: XOR<MajorCourseUpdateManyMutationInput, MajorCourseUncheckedUpdateManyInput>
    /**
     * Filter which MajorCourses to update
     */
    where?: MajorCourseWhereInput
    /**
     * Limit how many MajorCourses to update.
     */
    limit?: number
  }

  /**
   * MajorCourse updateManyAndReturn
   */
  export type MajorCourseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MajorCourse
     */
    select?: MajorCourseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MajorCourse
     */
    omit?: MajorCourseOmit<ExtArgs> | null
    /**
     * The data used to update MajorCourses.
     */
    data: XOR<MajorCourseUpdateManyMutationInput, MajorCourseUncheckedUpdateManyInput>
    /**
     * Filter which MajorCourses to update
     */
    where?: MajorCourseWhereInput
    /**
     * Limit how many MajorCourses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MajorCourseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MajorCourse upsert
   */
  export type MajorCourseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MajorCourse
     */
    select?: MajorCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MajorCourse
     */
    omit?: MajorCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MajorCourseInclude<ExtArgs> | null
    /**
     * The filter to search for the MajorCourse to update in case it exists.
     */
    where: MajorCourseWhereUniqueInput
    /**
     * In case the MajorCourse found by the `where` argument doesn't exist, create a new MajorCourse with this data.
     */
    create: XOR<MajorCourseCreateInput, MajorCourseUncheckedCreateInput>
    /**
     * In case the MajorCourse was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MajorCourseUpdateInput, MajorCourseUncheckedUpdateInput>
  }

  /**
   * MajorCourse delete
   */
  export type MajorCourseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MajorCourse
     */
    select?: MajorCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MajorCourse
     */
    omit?: MajorCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MajorCourseInclude<ExtArgs> | null
    /**
     * Filter which MajorCourse to delete.
     */
    where: MajorCourseWhereUniqueInput
  }

  /**
   * MajorCourse deleteMany
   */
  export type MajorCourseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MajorCourses to delete
     */
    where?: MajorCourseWhereInput
    /**
     * Limit how many MajorCourses to delete.
     */
    limit?: number
  }

  /**
   * MajorCourse without action
   */
  export type MajorCourseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MajorCourse
     */
    select?: MajorCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MajorCourse
     */
    omit?: MajorCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MajorCourseInclude<ExtArgs> | null
  }


  /**
   * Model Prerequisite
   */

  export type AggregatePrerequisite = {
    _count: PrerequisiteCountAggregateOutputType | null
    _avg: PrerequisiteAvgAggregateOutputType | null
    _sum: PrerequisiteSumAggregateOutputType | null
    _min: PrerequisiteMinAggregateOutputType | null
    _max: PrerequisiteMaxAggregateOutputType | null
  }

  export type PrerequisiteAvgAggregateOutputType = {
    groupId: number | null
  }

  export type PrerequisiteSumAggregateOutputType = {
    groupId: number | null
  }

  export type PrerequisiteMinAggregateOutputType = {
    id: string | null
    courseId: string | null
    prerequisiteId: string | null
    groupId: number | null
  }

  export type PrerequisiteMaxAggregateOutputType = {
    id: string | null
    courseId: string | null
    prerequisiteId: string | null
    groupId: number | null
  }

  export type PrerequisiteCountAggregateOutputType = {
    id: number
    courseId: number
    prerequisiteId: number
    groupId: number
    _all: number
  }


  export type PrerequisiteAvgAggregateInputType = {
    groupId?: true
  }

  export type PrerequisiteSumAggregateInputType = {
    groupId?: true
  }

  export type PrerequisiteMinAggregateInputType = {
    id?: true
    courseId?: true
    prerequisiteId?: true
    groupId?: true
  }

  export type PrerequisiteMaxAggregateInputType = {
    id?: true
    courseId?: true
    prerequisiteId?: true
    groupId?: true
  }

  export type PrerequisiteCountAggregateInputType = {
    id?: true
    courseId?: true
    prerequisiteId?: true
    groupId?: true
    _all?: true
  }

  export type PrerequisiteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prerequisite to aggregate.
     */
    where?: PrerequisiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prerequisites to fetch.
     */
    orderBy?: PrerequisiteOrderByWithRelationInput | PrerequisiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PrerequisiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prerequisites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prerequisites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Prerequisites
    **/
    _count?: true | PrerequisiteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PrerequisiteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PrerequisiteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PrerequisiteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PrerequisiteMaxAggregateInputType
  }

  export type GetPrerequisiteAggregateType<T extends PrerequisiteAggregateArgs> = {
        [P in keyof T & keyof AggregatePrerequisite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrerequisite[P]>
      : GetScalarType<T[P], AggregatePrerequisite[P]>
  }




  export type PrerequisiteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrerequisiteWhereInput
    orderBy?: PrerequisiteOrderByWithAggregationInput | PrerequisiteOrderByWithAggregationInput[]
    by: PrerequisiteScalarFieldEnum[] | PrerequisiteScalarFieldEnum
    having?: PrerequisiteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PrerequisiteCountAggregateInputType | true
    _avg?: PrerequisiteAvgAggregateInputType
    _sum?: PrerequisiteSumAggregateInputType
    _min?: PrerequisiteMinAggregateInputType
    _max?: PrerequisiteMaxAggregateInputType
  }

  export type PrerequisiteGroupByOutputType = {
    id: string
    courseId: string
    prerequisiteId: string
    groupId: number
    _count: PrerequisiteCountAggregateOutputType | null
    _avg: PrerequisiteAvgAggregateOutputType | null
    _sum: PrerequisiteSumAggregateOutputType | null
    _min: PrerequisiteMinAggregateOutputType | null
    _max: PrerequisiteMaxAggregateOutputType | null
  }

  type GetPrerequisiteGroupByPayload<T extends PrerequisiteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PrerequisiteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PrerequisiteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PrerequisiteGroupByOutputType[P]>
            : GetScalarType<T[P], PrerequisiteGroupByOutputType[P]>
        }
      >
    >


  export type PrerequisiteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    prerequisiteId?: boolean
    groupId?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    prerequisite?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prerequisite"]>

  export type PrerequisiteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    prerequisiteId?: boolean
    groupId?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    prerequisite?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prerequisite"]>

  export type PrerequisiteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    prerequisiteId?: boolean
    groupId?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    prerequisite?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prerequisite"]>

  export type PrerequisiteSelectScalar = {
    id?: boolean
    courseId?: boolean
    prerequisiteId?: boolean
    groupId?: boolean
  }

  export type PrerequisiteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "courseId" | "prerequisiteId" | "groupId", ExtArgs["result"]["prerequisite"]>
  export type PrerequisiteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    prerequisite?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type PrerequisiteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    prerequisite?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type PrerequisiteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    prerequisite?: boolean | CourseDefaultArgs<ExtArgs>
  }

  export type $PrerequisitePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Prerequisite"
    objects: {
      course: Prisma.$CoursePayload<ExtArgs>
      prerequisite: Prisma.$CoursePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      courseId: string
      prerequisiteId: string
      groupId: number
    }, ExtArgs["result"]["prerequisite"]>
    composites: {}
  }

  type PrerequisiteGetPayload<S extends boolean | null | undefined | PrerequisiteDefaultArgs> = $Result.GetResult<Prisma.$PrerequisitePayload, S>

  type PrerequisiteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PrerequisiteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PrerequisiteCountAggregateInputType | true
    }

  export interface PrerequisiteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Prerequisite'], meta: { name: 'Prerequisite' } }
    /**
     * Find zero or one Prerequisite that matches the filter.
     * @param {PrerequisiteFindUniqueArgs} args - Arguments to find a Prerequisite
     * @example
     * // Get one Prerequisite
     * const prerequisite = await prisma.prerequisite.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PrerequisiteFindUniqueArgs>(args: SelectSubset<T, PrerequisiteFindUniqueArgs<ExtArgs>>): Prisma__PrerequisiteClient<$Result.GetResult<Prisma.$PrerequisitePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Prerequisite that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PrerequisiteFindUniqueOrThrowArgs} args - Arguments to find a Prerequisite
     * @example
     * // Get one Prerequisite
     * const prerequisite = await prisma.prerequisite.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PrerequisiteFindUniqueOrThrowArgs>(args: SelectSubset<T, PrerequisiteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PrerequisiteClient<$Result.GetResult<Prisma.$PrerequisitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prerequisite that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrerequisiteFindFirstArgs} args - Arguments to find a Prerequisite
     * @example
     * // Get one Prerequisite
     * const prerequisite = await prisma.prerequisite.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PrerequisiteFindFirstArgs>(args?: SelectSubset<T, PrerequisiteFindFirstArgs<ExtArgs>>): Prisma__PrerequisiteClient<$Result.GetResult<Prisma.$PrerequisitePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prerequisite that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrerequisiteFindFirstOrThrowArgs} args - Arguments to find a Prerequisite
     * @example
     * // Get one Prerequisite
     * const prerequisite = await prisma.prerequisite.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PrerequisiteFindFirstOrThrowArgs>(args?: SelectSubset<T, PrerequisiteFindFirstOrThrowArgs<ExtArgs>>): Prisma__PrerequisiteClient<$Result.GetResult<Prisma.$PrerequisitePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Prerequisites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrerequisiteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Prerequisites
     * const prerequisites = await prisma.prerequisite.findMany()
     * 
     * // Get first 10 Prerequisites
     * const prerequisites = await prisma.prerequisite.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const prerequisiteWithIdOnly = await prisma.prerequisite.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PrerequisiteFindManyArgs>(args?: SelectSubset<T, PrerequisiteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrerequisitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Prerequisite.
     * @param {PrerequisiteCreateArgs} args - Arguments to create a Prerequisite.
     * @example
     * // Create one Prerequisite
     * const Prerequisite = await prisma.prerequisite.create({
     *   data: {
     *     // ... data to create a Prerequisite
     *   }
     * })
     * 
     */
    create<T extends PrerequisiteCreateArgs>(args: SelectSubset<T, PrerequisiteCreateArgs<ExtArgs>>): Prisma__PrerequisiteClient<$Result.GetResult<Prisma.$PrerequisitePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Prerequisites.
     * @param {PrerequisiteCreateManyArgs} args - Arguments to create many Prerequisites.
     * @example
     * // Create many Prerequisites
     * const prerequisite = await prisma.prerequisite.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PrerequisiteCreateManyArgs>(args?: SelectSubset<T, PrerequisiteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Prerequisites and returns the data saved in the database.
     * @param {PrerequisiteCreateManyAndReturnArgs} args - Arguments to create many Prerequisites.
     * @example
     * // Create many Prerequisites
     * const prerequisite = await prisma.prerequisite.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Prerequisites and only return the `id`
     * const prerequisiteWithIdOnly = await prisma.prerequisite.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PrerequisiteCreateManyAndReturnArgs>(args?: SelectSubset<T, PrerequisiteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrerequisitePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Prerequisite.
     * @param {PrerequisiteDeleteArgs} args - Arguments to delete one Prerequisite.
     * @example
     * // Delete one Prerequisite
     * const Prerequisite = await prisma.prerequisite.delete({
     *   where: {
     *     // ... filter to delete one Prerequisite
     *   }
     * })
     * 
     */
    delete<T extends PrerequisiteDeleteArgs>(args: SelectSubset<T, PrerequisiteDeleteArgs<ExtArgs>>): Prisma__PrerequisiteClient<$Result.GetResult<Prisma.$PrerequisitePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Prerequisite.
     * @param {PrerequisiteUpdateArgs} args - Arguments to update one Prerequisite.
     * @example
     * // Update one Prerequisite
     * const prerequisite = await prisma.prerequisite.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PrerequisiteUpdateArgs>(args: SelectSubset<T, PrerequisiteUpdateArgs<ExtArgs>>): Prisma__PrerequisiteClient<$Result.GetResult<Prisma.$PrerequisitePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Prerequisites.
     * @param {PrerequisiteDeleteManyArgs} args - Arguments to filter Prerequisites to delete.
     * @example
     * // Delete a few Prerequisites
     * const { count } = await prisma.prerequisite.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PrerequisiteDeleteManyArgs>(args?: SelectSubset<T, PrerequisiteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prerequisites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrerequisiteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Prerequisites
     * const prerequisite = await prisma.prerequisite.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PrerequisiteUpdateManyArgs>(args: SelectSubset<T, PrerequisiteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prerequisites and returns the data updated in the database.
     * @param {PrerequisiteUpdateManyAndReturnArgs} args - Arguments to update many Prerequisites.
     * @example
     * // Update many Prerequisites
     * const prerequisite = await prisma.prerequisite.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Prerequisites and only return the `id`
     * const prerequisiteWithIdOnly = await prisma.prerequisite.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PrerequisiteUpdateManyAndReturnArgs>(args: SelectSubset<T, PrerequisiteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrerequisitePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Prerequisite.
     * @param {PrerequisiteUpsertArgs} args - Arguments to update or create a Prerequisite.
     * @example
     * // Update or create a Prerequisite
     * const prerequisite = await prisma.prerequisite.upsert({
     *   create: {
     *     // ... data to create a Prerequisite
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Prerequisite we want to update
     *   }
     * })
     */
    upsert<T extends PrerequisiteUpsertArgs>(args: SelectSubset<T, PrerequisiteUpsertArgs<ExtArgs>>): Prisma__PrerequisiteClient<$Result.GetResult<Prisma.$PrerequisitePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Prerequisites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrerequisiteCountArgs} args - Arguments to filter Prerequisites to count.
     * @example
     * // Count the number of Prerequisites
     * const count = await prisma.prerequisite.count({
     *   where: {
     *     // ... the filter for the Prerequisites we want to count
     *   }
     * })
    **/
    count<T extends PrerequisiteCountArgs>(
      args?: Subset<T, PrerequisiteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PrerequisiteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Prerequisite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrerequisiteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PrerequisiteAggregateArgs>(args: Subset<T, PrerequisiteAggregateArgs>): Prisma.PrismaPromise<GetPrerequisiteAggregateType<T>>

    /**
     * Group by Prerequisite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrerequisiteGroupByArgs} args - Group by arguments.
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
      T extends PrerequisiteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PrerequisiteGroupByArgs['orderBy'] }
        : { orderBy?: PrerequisiteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PrerequisiteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrerequisiteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Prerequisite model
   */
  readonly fields: PrerequisiteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Prerequisite.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PrerequisiteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    prerequisite<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Prerequisite model
   */
  interface PrerequisiteFieldRefs {
    readonly id: FieldRef<"Prerequisite", 'String'>
    readonly courseId: FieldRef<"Prerequisite", 'String'>
    readonly prerequisiteId: FieldRef<"Prerequisite", 'String'>
    readonly groupId: FieldRef<"Prerequisite", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Prerequisite findUnique
   */
  export type PrerequisiteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prerequisite
     */
    select?: PrerequisiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prerequisite
     */
    omit?: PrerequisiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrerequisiteInclude<ExtArgs> | null
    /**
     * Filter, which Prerequisite to fetch.
     */
    where: PrerequisiteWhereUniqueInput
  }

  /**
   * Prerequisite findUniqueOrThrow
   */
  export type PrerequisiteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prerequisite
     */
    select?: PrerequisiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prerequisite
     */
    omit?: PrerequisiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrerequisiteInclude<ExtArgs> | null
    /**
     * Filter, which Prerequisite to fetch.
     */
    where: PrerequisiteWhereUniqueInput
  }

  /**
   * Prerequisite findFirst
   */
  export type PrerequisiteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prerequisite
     */
    select?: PrerequisiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prerequisite
     */
    omit?: PrerequisiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrerequisiteInclude<ExtArgs> | null
    /**
     * Filter, which Prerequisite to fetch.
     */
    where?: PrerequisiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prerequisites to fetch.
     */
    orderBy?: PrerequisiteOrderByWithRelationInput | PrerequisiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prerequisites.
     */
    cursor?: PrerequisiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prerequisites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prerequisites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prerequisites.
     */
    distinct?: PrerequisiteScalarFieldEnum | PrerequisiteScalarFieldEnum[]
  }

  /**
   * Prerequisite findFirstOrThrow
   */
  export type PrerequisiteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prerequisite
     */
    select?: PrerequisiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prerequisite
     */
    omit?: PrerequisiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrerequisiteInclude<ExtArgs> | null
    /**
     * Filter, which Prerequisite to fetch.
     */
    where?: PrerequisiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prerequisites to fetch.
     */
    orderBy?: PrerequisiteOrderByWithRelationInput | PrerequisiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prerequisites.
     */
    cursor?: PrerequisiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prerequisites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prerequisites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prerequisites.
     */
    distinct?: PrerequisiteScalarFieldEnum | PrerequisiteScalarFieldEnum[]
  }

  /**
   * Prerequisite findMany
   */
  export type PrerequisiteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prerequisite
     */
    select?: PrerequisiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prerequisite
     */
    omit?: PrerequisiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrerequisiteInclude<ExtArgs> | null
    /**
     * Filter, which Prerequisites to fetch.
     */
    where?: PrerequisiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prerequisites to fetch.
     */
    orderBy?: PrerequisiteOrderByWithRelationInput | PrerequisiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Prerequisites.
     */
    cursor?: PrerequisiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prerequisites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prerequisites.
     */
    skip?: number
    distinct?: PrerequisiteScalarFieldEnum | PrerequisiteScalarFieldEnum[]
  }

  /**
   * Prerequisite create
   */
  export type PrerequisiteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prerequisite
     */
    select?: PrerequisiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prerequisite
     */
    omit?: PrerequisiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrerequisiteInclude<ExtArgs> | null
    /**
     * The data needed to create a Prerequisite.
     */
    data: XOR<PrerequisiteCreateInput, PrerequisiteUncheckedCreateInput>
  }

  /**
   * Prerequisite createMany
   */
  export type PrerequisiteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Prerequisites.
     */
    data: PrerequisiteCreateManyInput | PrerequisiteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Prerequisite createManyAndReturn
   */
  export type PrerequisiteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prerequisite
     */
    select?: PrerequisiteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Prerequisite
     */
    omit?: PrerequisiteOmit<ExtArgs> | null
    /**
     * The data used to create many Prerequisites.
     */
    data: PrerequisiteCreateManyInput | PrerequisiteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrerequisiteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Prerequisite update
   */
  export type PrerequisiteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prerequisite
     */
    select?: PrerequisiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prerequisite
     */
    omit?: PrerequisiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrerequisiteInclude<ExtArgs> | null
    /**
     * The data needed to update a Prerequisite.
     */
    data: XOR<PrerequisiteUpdateInput, PrerequisiteUncheckedUpdateInput>
    /**
     * Choose, which Prerequisite to update.
     */
    where: PrerequisiteWhereUniqueInput
  }

  /**
   * Prerequisite updateMany
   */
  export type PrerequisiteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Prerequisites.
     */
    data: XOR<PrerequisiteUpdateManyMutationInput, PrerequisiteUncheckedUpdateManyInput>
    /**
     * Filter which Prerequisites to update
     */
    where?: PrerequisiteWhereInput
    /**
     * Limit how many Prerequisites to update.
     */
    limit?: number
  }

  /**
   * Prerequisite updateManyAndReturn
   */
  export type PrerequisiteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prerequisite
     */
    select?: PrerequisiteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Prerequisite
     */
    omit?: PrerequisiteOmit<ExtArgs> | null
    /**
     * The data used to update Prerequisites.
     */
    data: XOR<PrerequisiteUpdateManyMutationInput, PrerequisiteUncheckedUpdateManyInput>
    /**
     * Filter which Prerequisites to update
     */
    where?: PrerequisiteWhereInput
    /**
     * Limit how many Prerequisites to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrerequisiteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Prerequisite upsert
   */
  export type PrerequisiteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prerequisite
     */
    select?: PrerequisiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prerequisite
     */
    omit?: PrerequisiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrerequisiteInclude<ExtArgs> | null
    /**
     * The filter to search for the Prerequisite to update in case it exists.
     */
    where: PrerequisiteWhereUniqueInput
    /**
     * In case the Prerequisite found by the `where` argument doesn't exist, create a new Prerequisite with this data.
     */
    create: XOR<PrerequisiteCreateInput, PrerequisiteUncheckedCreateInput>
    /**
     * In case the Prerequisite was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PrerequisiteUpdateInput, PrerequisiteUncheckedUpdateInput>
  }

  /**
   * Prerequisite delete
   */
  export type PrerequisiteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prerequisite
     */
    select?: PrerequisiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prerequisite
     */
    omit?: PrerequisiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrerequisiteInclude<ExtArgs> | null
    /**
     * Filter which Prerequisite to delete.
     */
    where: PrerequisiteWhereUniqueInput
  }

  /**
   * Prerequisite deleteMany
   */
  export type PrerequisiteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prerequisites to delete
     */
    where?: PrerequisiteWhereInput
    /**
     * Limit how many Prerequisites to delete.
     */
    limit?: number
  }

  /**
   * Prerequisite without action
   */
  export type PrerequisiteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prerequisite
     */
    select?: PrerequisiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prerequisite
     */
    omit?: PrerequisiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrerequisiteInclude<ExtArgs> | null
  }


  /**
   * Model Corequisite
   */

  export type AggregateCorequisite = {
    _count: CorequisiteCountAggregateOutputType | null
    _min: CorequisiteMinAggregateOutputType | null
    _max: CorequisiteMaxAggregateOutputType | null
  }

  export type CorequisiteMinAggregateOutputType = {
    id: string | null
    courseId: string | null
    corequisiteId: string | null
  }

  export type CorequisiteMaxAggregateOutputType = {
    id: string | null
    courseId: string | null
    corequisiteId: string | null
  }

  export type CorequisiteCountAggregateOutputType = {
    id: number
    courseId: number
    corequisiteId: number
    _all: number
  }


  export type CorequisiteMinAggregateInputType = {
    id?: true
    courseId?: true
    corequisiteId?: true
  }

  export type CorequisiteMaxAggregateInputType = {
    id?: true
    courseId?: true
    corequisiteId?: true
  }

  export type CorequisiteCountAggregateInputType = {
    id?: true
    courseId?: true
    corequisiteId?: true
    _all?: true
  }

  export type CorequisiteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Corequisite to aggregate.
     */
    where?: CorequisiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Corequisites to fetch.
     */
    orderBy?: CorequisiteOrderByWithRelationInput | CorequisiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CorequisiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Corequisites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Corequisites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Corequisites
    **/
    _count?: true | CorequisiteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CorequisiteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CorequisiteMaxAggregateInputType
  }

  export type GetCorequisiteAggregateType<T extends CorequisiteAggregateArgs> = {
        [P in keyof T & keyof AggregateCorequisite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCorequisite[P]>
      : GetScalarType<T[P], AggregateCorequisite[P]>
  }




  export type CorequisiteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CorequisiteWhereInput
    orderBy?: CorequisiteOrderByWithAggregationInput | CorequisiteOrderByWithAggregationInput[]
    by: CorequisiteScalarFieldEnum[] | CorequisiteScalarFieldEnum
    having?: CorequisiteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CorequisiteCountAggregateInputType | true
    _min?: CorequisiteMinAggregateInputType
    _max?: CorequisiteMaxAggregateInputType
  }

  export type CorequisiteGroupByOutputType = {
    id: string
    courseId: string
    corequisiteId: string
    _count: CorequisiteCountAggregateOutputType | null
    _min: CorequisiteMinAggregateOutputType | null
    _max: CorequisiteMaxAggregateOutputType | null
  }

  type GetCorequisiteGroupByPayload<T extends CorequisiteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CorequisiteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CorequisiteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CorequisiteGroupByOutputType[P]>
            : GetScalarType<T[P], CorequisiteGroupByOutputType[P]>
        }
      >
    >


  export type CorequisiteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    corequisiteId?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    corequisite?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["corequisite"]>

  export type CorequisiteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    corequisiteId?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    corequisite?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["corequisite"]>

  export type CorequisiteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    corequisiteId?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    corequisite?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["corequisite"]>

  export type CorequisiteSelectScalar = {
    id?: boolean
    courseId?: boolean
    corequisiteId?: boolean
  }

  export type CorequisiteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "courseId" | "corequisiteId", ExtArgs["result"]["corequisite"]>
  export type CorequisiteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    corequisite?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type CorequisiteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    corequisite?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type CorequisiteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    corequisite?: boolean | CourseDefaultArgs<ExtArgs>
  }

  export type $CorequisitePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Corequisite"
    objects: {
      course: Prisma.$CoursePayload<ExtArgs>
      corequisite: Prisma.$CoursePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      courseId: string
      corequisiteId: string
    }, ExtArgs["result"]["corequisite"]>
    composites: {}
  }

  type CorequisiteGetPayload<S extends boolean | null | undefined | CorequisiteDefaultArgs> = $Result.GetResult<Prisma.$CorequisitePayload, S>

  type CorequisiteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CorequisiteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CorequisiteCountAggregateInputType | true
    }

  export interface CorequisiteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Corequisite'], meta: { name: 'Corequisite' } }
    /**
     * Find zero or one Corequisite that matches the filter.
     * @param {CorequisiteFindUniqueArgs} args - Arguments to find a Corequisite
     * @example
     * // Get one Corequisite
     * const corequisite = await prisma.corequisite.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CorequisiteFindUniqueArgs>(args: SelectSubset<T, CorequisiteFindUniqueArgs<ExtArgs>>): Prisma__CorequisiteClient<$Result.GetResult<Prisma.$CorequisitePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Corequisite that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CorequisiteFindUniqueOrThrowArgs} args - Arguments to find a Corequisite
     * @example
     * // Get one Corequisite
     * const corequisite = await prisma.corequisite.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CorequisiteFindUniqueOrThrowArgs>(args: SelectSubset<T, CorequisiteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CorequisiteClient<$Result.GetResult<Prisma.$CorequisitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Corequisite that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CorequisiteFindFirstArgs} args - Arguments to find a Corequisite
     * @example
     * // Get one Corequisite
     * const corequisite = await prisma.corequisite.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CorequisiteFindFirstArgs>(args?: SelectSubset<T, CorequisiteFindFirstArgs<ExtArgs>>): Prisma__CorequisiteClient<$Result.GetResult<Prisma.$CorequisitePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Corequisite that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CorequisiteFindFirstOrThrowArgs} args - Arguments to find a Corequisite
     * @example
     * // Get one Corequisite
     * const corequisite = await prisma.corequisite.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CorequisiteFindFirstOrThrowArgs>(args?: SelectSubset<T, CorequisiteFindFirstOrThrowArgs<ExtArgs>>): Prisma__CorequisiteClient<$Result.GetResult<Prisma.$CorequisitePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Corequisites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CorequisiteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Corequisites
     * const corequisites = await prisma.corequisite.findMany()
     * 
     * // Get first 10 Corequisites
     * const corequisites = await prisma.corequisite.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const corequisiteWithIdOnly = await prisma.corequisite.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CorequisiteFindManyArgs>(args?: SelectSubset<T, CorequisiteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CorequisitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Corequisite.
     * @param {CorequisiteCreateArgs} args - Arguments to create a Corequisite.
     * @example
     * // Create one Corequisite
     * const Corequisite = await prisma.corequisite.create({
     *   data: {
     *     // ... data to create a Corequisite
     *   }
     * })
     * 
     */
    create<T extends CorequisiteCreateArgs>(args: SelectSubset<T, CorequisiteCreateArgs<ExtArgs>>): Prisma__CorequisiteClient<$Result.GetResult<Prisma.$CorequisitePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Corequisites.
     * @param {CorequisiteCreateManyArgs} args - Arguments to create many Corequisites.
     * @example
     * // Create many Corequisites
     * const corequisite = await prisma.corequisite.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CorequisiteCreateManyArgs>(args?: SelectSubset<T, CorequisiteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Corequisites and returns the data saved in the database.
     * @param {CorequisiteCreateManyAndReturnArgs} args - Arguments to create many Corequisites.
     * @example
     * // Create many Corequisites
     * const corequisite = await prisma.corequisite.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Corequisites and only return the `id`
     * const corequisiteWithIdOnly = await prisma.corequisite.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CorequisiteCreateManyAndReturnArgs>(args?: SelectSubset<T, CorequisiteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CorequisitePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Corequisite.
     * @param {CorequisiteDeleteArgs} args - Arguments to delete one Corequisite.
     * @example
     * // Delete one Corequisite
     * const Corequisite = await prisma.corequisite.delete({
     *   where: {
     *     // ... filter to delete one Corequisite
     *   }
     * })
     * 
     */
    delete<T extends CorequisiteDeleteArgs>(args: SelectSubset<T, CorequisiteDeleteArgs<ExtArgs>>): Prisma__CorequisiteClient<$Result.GetResult<Prisma.$CorequisitePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Corequisite.
     * @param {CorequisiteUpdateArgs} args - Arguments to update one Corequisite.
     * @example
     * // Update one Corequisite
     * const corequisite = await prisma.corequisite.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CorequisiteUpdateArgs>(args: SelectSubset<T, CorequisiteUpdateArgs<ExtArgs>>): Prisma__CorequisiteClient<$Result.GetResult<Prisma.$CorequisitePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Corequisites.
     * @param {CorequisiteDeleteManyArgs} args - Arguments to filter Corequisites to delete.
     * @example
     * // Delete a few Corequisites
     * const { count } = await prisma.corequisite.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CorequisiteDeleteManyArgs>(args?: SelectSubset<T, CorequisiteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Corequisites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CorequisiteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Corequisites
     * const corequisite = await prisma.corequisite.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CorequisiteUpdateManyArgs>(args: SelectSubset<T, CorequisiteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Corequisites and returns the data updated in the database.
     * @param {CorequisiteUpdateManyAndReturnArgs} args - Arguments to update many Corequisites.
     * @example
     * // Update many Corequisites
     * const corequisite = await prisma.corequisite.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Corequisites and only return the `id`
     * const corequisiteWithIdOnly = await prisma.corequisite.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CorequisiteUpdateManyAndReturnArgs>(args: SelectSubset<T, CorequisiteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CorequisitePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Corequisite.
     * @param {CorequisiteUpsertArgs} args - Arguments to update or create a Corequisite.
     * @example
     * // Update or create a Corequisite
     * const corequisite = await prisma.corequisite.upsert({
     *   create: {
     *     // ... data to create a Corequisite
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Corequisite we want to update
     *   }
     * })
     */
    upsert<T extends CorequisiteUpsertArgs>(args: SelectSubset<T, CorequisiteUpsertArgs<ExtArgs>>): Prisma__CorequisiteClient<$Result.GetResult<Prisma.$CorequisitePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Corequisites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CorequisiteCountArgs} args - Arguments to filter Corequisites to count.
     * @example
     * // Count the number of Corequisites
     * const count = await prisma.corequisite.count({
     *   where: {
     *     // ... the filter for the Corequisites we want to count
     *   }
     * })
    **/
    count<T extends CorequisiteCountArgs>(
      args?: Subset<T, CorequisiteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CorequisiteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Corequisite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CorequisiteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CorequisiteAggregateArgs>(args: Subset<T, CorequisiteAggregateArgs>): Prisma.PrismaPromise<GetCorequisiteAggregateType<T>>

    /**
     * Group by Corequisite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CorequisiteGroupByArgs} args - Group by arguments.
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
      T extends CorequisiteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CorequisiteGroupByArgs['orderBy'] }
        : { orderBy?: CorequisiteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CorequisiteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCorequisiteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Corequisite model
   */
  readonly fields: CorequisiteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Corequisite.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CorequisiteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    corequisite<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Corequisite model
   */
  interface CorequisiteFieldRefs {
    readonly id: FieldRef<"Corequisite", 'String'>
    readonly courseId: FieldRef<"Corequisite", 'String'>
    readonly corequisiteId: FieldRef<"Corequisite", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Corequisite findUnique
   */
  export type CorequisiteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Corequisite
     */
    select?: CorequisiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Corequisite
     */
    omit?: CorequisiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CorequisiteInclude<ExtArgs> | null
    /**
     * Filter, which Corequisite to fetch.
     */
    where: CorequisiteWhereUniqueInput
  }

  /**
   * Corequisite findUniqueOrThrow
   */
  export type CorequisiteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Corequisite
     */
    select?: CorequisiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Corequisite
     */
    omit?: CorequisiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CorequisiteInclude<ExtArgs> | null
    /**
     * Filter, which Corequisite to fetch.
     */
    where: CorequisiteWhereUniqueInput
  }

  /**
   * Corequisite findFirst
   */
  export type CorequisiteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Corequisite
     */
    select?: CorequisiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Corequisite
     */
    omit?: CorequisiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CorequisiteInclude<ExtArgs> | null
    /**
     * Filter, which Corequisite to fetch.
     */
    where?: CorequisiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Corequisites to fetch.
     */
    orderBy?: CorequisiteOrderByWithRelationInput | CorequisiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Corequisites.
     */
    cursor?: CorequisiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Corequisites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Corequisites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Corequisites.
     */
    distinct?: CorequisiteScalarFieldEnum | CorequisiteScalarFieldEnum[]
  }

  /**
   * Corequisite findFirstOrThrow
   */
  export type CorequisiteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Corequisite
     */
    select?: CorequisiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Corequisite
     */
    omit?: CorequisiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CorequisiteInclude<ExtArgs> | null
    /**
     * Filter, which Corequisite to fetch.
     */
    where?: CorequisiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Corequisites to fetch.
     */
    orderBy?: CorequisiteOrderByWithRelationInput | CorequisiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Corequisites.
     */
    cursor?: CorequisiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Corequisites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Corequisites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Corequisites.
     */
    distinct?: CorequisiteScalarFieldEnum | CorequisiteScalarFieldEnum[]
  }

  /**
   * Corequisite findMany
   */
  export type CorequisiteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Corequisite
     */
    select?: CorequisiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Corequisite
     */
    omit?: CorequisiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CorequisiteInclude<ExtArgs> | null
    /**
     * Filter, which Corequisites to fetch.
     */
    where?: CorequisiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Corequisites to fetch.
     */
    orderBy?: CorequisiteOrderByWithRelationInput | CorequisiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Corequisites.
     */
    cursor?: CorequisiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Corequisites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Corequisites.
     */
    skip?: number
    distinct?: CorequisiteScalarFieldEnum | CorequisiteScalarFieldEnum[]
  }

  /**
   * Corequisite create
   */
  export type CorequisiteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Corequisite
     */
    select?: CorequisiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Corequisite
     */
    omit?: CorequisiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CorequisiteInclude<ExtArgs> | null
    /**
     * The data needed to create a Corequisite.
     */
    data: XOR<CorequisiteCreateInput, CorequisiteUncheckedCreateInput>
  }

  /**
   * Corequisite createMany
   */
  export type CorequisiteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Corequisites.
     */
    data: CorequisiteCreateManyInput | CorequisiteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Corequisite createManyAndReturn
   */
  export type CorequisiteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Corequisite
     */
    select?: CorequisiteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Corequisite
     */
    omit?: CorequisiteOmit<ExtArgs> | null
    /**
     * The data used to create many Corequisites.
     */
    data: CorequisiteCreateManyInput | CorequisiteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CorequisiteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Corequisite update
   */
  export type CorequisiteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Corequisite
     */
    select?: CorequisiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Corequisite
     */
    omit?: CorequisiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CorequisiteInclude<ExtArgs> | null
    /**
     * The data needed to update a Corequisite.
     */
    data: XOR<CorequisiteUpdateInput, CorequisiteUncheckedUpdateInput>
    /**
     * Choose, which Corequisite to update.
     */
    where: CorequisiteWhereUniqueInput
  }

  /**
   * Corequisite updateMany
   */
  export type CorequisiteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Corequisites.
     */
    data: XOR<CorequisiteUpdateManyMutationInput, CorequisiteUncheckedUpdateManyInput>
    /**
     * Filter which Corequisites to update
     */
    where?: CorequisiteWhereInput
    /**
     * Limit how many Corequisites to update.
     */
    limit?: number
  }

  /**
   * Corequisite updateManyAndReturn
   */
  export type CorequisiteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Corequisite
     */
    select?: CorequisiteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Corequisite
     */
    omit?: CorequisiteOmit<ExtArgs> | null
    /**
     * The data used to update Corequisites.
     */
    data: XOR<CorequisiteUpdateManyMutationInput, CorequisiteUncheckedUpdateManyInput>
    /**
     * Filter which Corequisites to update
     */
    where?: CorequisiteWhereInput
    /**
     * Limit how many Corequisites to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CorequisiteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Corequisite upsert
   */
  export type CorequisiteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Corequisite
     */
    select?: CorequisiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Corequisite
     */
    omit?: CorequisiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CorequisiteInclude<ExtArgs> | null
    /**
     * The filter to search for the Corequisite to update in case it exists.
     */
    where: CorequisiteWhereUniqueInput
    /**
     * In case the Corequisite found by the `where` argument doesn't exist, create a new Corequisite with this data.
     */
    create: XOR<CorequisiteCreateInput, CorequisiteUncheckedCreateInput>
    /**
     * In case the Corequisite was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CorequisiteUpdateInput, CorequisiteUncheckedUpdateInput>
  }

  /**
   * Corequisite delete
   */
  export type CorequisiteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Corequisite
     */
    select?: CorequisiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Corequisite
     */
    omit?: CorequisiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CorequisiteInclude<ExtArgs> | null
    /**
     * Filter which Corequisite to delete.
     */
    where: CorequisiteWhereUniqueInput
  }

  /**
   * Corequisite deleteMany
   */
  export type CorequisiteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Corequisites to delete
     */
    where?: CorequisiteWhereInput
    /**
     * Limit how many Corequisites to delete.
     */
    limit?: number
  }

  /**
   * Corequisite without action
   */
  export type CorequisiteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Corequisite
     */
    select?: CorequisiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Corequisite
     */
    omit?: CorequisiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CorequisiteInclude<ExtArgs> | null
  }


  /**
   * Model Plan
   */

  export type AggregatePlan = {
    _count: PlanCountAggregateOutputType | null
    _min: PlanMinAggregateOutputType | null
    _max: PlanMaxAggregateOutputType | null
  }

  export type PlanMinAggregateOutputType = {
    id: string | null
    name: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlanMaxAggregateOutputType = {
    id: string | null
    name: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlanCountAggregateOutputType = {
    id: number
    name: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PlanMinAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlanMaxAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlanCountAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PlanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Plan to aggregate.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Plans
    **/
    _count?: true | PlanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlanMaxAggregateInputType
  }

  export type GetPlanAggregateType<T extends PlanAggregateArgs> = {
        [P in keyof T & keyof AggregatePlan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlan[P]>
      : GetScalarType<T[P], AggregatePlan[P]>
  }




  export type PlanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlanWhereInput
    orderBy?: PlanOrderByWithAggregationInput | PlanOrderByWithAggregationInput[]
    by: PlanScalarFieldEnum[] | PlanScalarFieldEnum
    having?: PlanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlanCountAggregateInputType | true
    _min?: PlanMinAggregateInputType
    _max?: PlanMaxAggregateInputType
  }

  export type PlanGroupByOutputType = {
    id: string
    name: string
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: PlanCountAggregateOutputType | null
    _min: PlanMinAggregateOutputType | null
    _max: PlanMaxAggregateOutputType | null
  }

  type GetPlanGroupByPayload<T extends PlanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlanGroupByOutputType[P]>
            : GetScalarType<T[P], PlanGroupByOutputType[P]>
        }
      >
    >


  export type PlanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    plannedCourses?: boolean | Plan$plannedCoursesArgs<ExtArgs>
    _count?: boolean | PlanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plan"]>

  export type PlanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plan"]>

  export type PlanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plan"]>

  export type PlanSelectScalar = {
    id?: boolean
    name?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PlanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["plan"]>
  export type PlanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    plannedCourses?: boolean | Plan$plannedCoursesArgs<ExtArgs>
    _count?: boolean | PlanCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PlanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PlanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PlanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Plan"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      plannedCourses: Prisma.$PlannedCoursePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["plan"]>
    composites: {}
  }

  type PlanGetPayload<S extends boolean | null | undefined | PlanDefaultArgs> = $Result.GetResult<Prisma.$PlanPayload, S>

  type PlanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlanCountAggregateInputType | true
    }

  export interface PlanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Plan'], meta: { name: 'Plan' } }
    /**
     * Find zero or one Plan that matches the filter.
     * @param {PlanFindUniqueArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlanFindUniqueArgs>(args: SelectSubset<T, PlanFindUniqueArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Plan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlanFindUniqueOrThrowArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlanFindUniqueOrThrowArgs>(args: SelectSubset<T, PlanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Plan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanFindFirstArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlanFindFirstArgs>(args?: SelectSubset<T, PlanFindFirstArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Plan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanFindFirstOrThrowArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlanFindFirstOrThrowArgs>(args?: SelectSubset<T, PlanFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Plans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Plans
     * const plans = await prisma.plan.findMany()
     * 
     * // Get first 10 Plans
     * const plans = await prisma.plan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const planWithIdOnly = await prisma.plan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlanFindManyArgs>(args?: SelectSubset<T, PlanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Plan.
     * @param {PlanCreateArgs} args - Arguments to create a Plan.
     * @example
     * // Create one Plan
     * const Plan = await prisma.plan.create({
     *   data: {
     *     // ... data to create a Plan
     *   }
     * })
     * 
     */
    create<T extends PlanCreateArgs>(args: SelectSubset<T, PlanCreateArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Plans.
     * @param {PlanCreateManyArgs} args - Arguments to create many Plans.
     * @example
     * // Create many Plans
     * const plan = await prisma.plan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlanCreateManyArgs>(args?: SelectSubset<T, PlanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Plans and returns the data saved in the database.
     * @param {PlanCreateManyAndReturnArgs} args - Arguments to create many Plans.
     * @example
     * // Create many Plans
     * const plan = await prisma.plan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Plans and only return the `id`
     * const planWithIdOnly = await prisma.plan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlanCreateManyAndReturnArgs>(args?: SelectSubset<T, PlanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Plan.
     * @param {PlanDeleteArgs} args - Arguments to delete one Plan.
     * @example
     * // Delete one Plan
     * const Plan = await prisma.plan.delete({
     *   where: {
     *     // ... filter to delete one Plan
     *   }
     * })
     * 
     */
    delete<T extends PlanDeleteArgs>(args: SelectSubset<T, PlanDeleteArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Plan.
     * @param {PlanUpdateArgs} args - Arguments to update one Plan.
     * @example
     * // Update one Plan
     * const plan = await prisma.plan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlanUpdateArgs>(args: SelectSubset<T, PlanUpdateArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Plans.
     * @param {PlanDeleteManyArgs} args - Arguments to filter Plans to delete.
     * @example
     * // Delete a few Plans
     * const { count } = await prisma.plan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlanDeleteManyArgs>(args?: SelectSubset<T, PlanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Plans
     * const plan = await prisma.plan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlanUpdateManyArgs>(args: SelectSubset<T, PlanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Plans and returns the data updated in the database.
     * @param {PlanUpdateManyAndReturnArgs} args - Arguments to update many Plans.
     * @example
     * // Update many Plans
     * const plan = await prisma.plan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Plans and only return the `id`
     * const planWithIdOnly = await prisma.plan.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PlanUpdateManyAndReturnArgs>(args: SelectSubset<T, PlanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Plan.
     * @param {PlanUpsertArgs} args - Arguments to update or create a Plan.
     * @example
     * // Update or create a Plan
     * const plan = await prisma.plan.upsert({
     *   create: {
     *     // ... data to create a Plan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Plan we want to update
     *   }
     * })
     */
    upsert<T extends PlanUpsertArgs>(args: SelectSubset<T, PlanUpsertArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanCountArgs} args - Arguments to filter Plans to count.
     * @example
     * // Count the number of Plans
     * const count = await prisma.plan.count({
     *   where: {
     *     // ... the filter for the Plans we want to count
     *   }
     * })
    **/
    count<T extends PlanCountArgs>(
      args?: Subset<T, PlanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Plan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlanAggregateArgs>(args: Subset<T, PlanAggregateArgs>): Prisma.PrismaPromise<GetPlanAggregateType<T>>

    /**
     * Group by Plan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanGroupByArgs} args - Group by arguments.
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
      T extends PlanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlanGroupByArgs['orderBy'] }
        : { orderBy?: PlanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PlanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Plan model
   */
  readonly fields: PlanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Plan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    plannedCourses<T extends Plan$plannedCoursesArgs<ExtArgs> = {}>(args?: Subset<T, Plan$plannedCoursesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlannedCoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Plan model
   */
  interface PlanFieldRefs {
    readonly id: FieldRef<"Plan", 'String'>
    readonly name: FieldRef<"Plan", 'String'>
    readonly userId: FieldRef<"Plan", 'String'>
    readonly createdAt: FieldRef<"Plan", 'DateTime'>
    readonly updatedAt: FieldRef<"Plan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Plan findUnique
   */
  export type PlanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where: PlanWhereUniqueInput
  }

  /**
   * Plan findUniqueOrThrow
   */
  export type PlanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where: PlanWhereUniqueInput
  }

  /**
   * Plan findFirst
   */
  export type PlanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Plans.
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plans.
     */
    distinct?: PlanScalarFieldEnum | PlanScalarFieldEnum[]
  }

  /**
   * Plan findFirstOrThrow
   */
  export type PlanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Plans.
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plans.
     */
    distinct?: PlanScalarFieldEnum | PlanScalarFieldEnum[]
  }

  /**
   * Plan findMany
   */
  export type PlanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plans to fetch.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Plans.
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    distinct?: PlanScalarFieldEnum | PlanScalarFieldEnum[]
  }

  /**
   * Plan create
   */
  export type PlanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * The data needed to create a Plan.
     */
    data: XOR<PlanCreateInput, PlanUncheckedCreateInput>
  }

  /**
   * Plan createMany
   */
  export type PlanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Plans.
     */
    data: PlanCreateManyInput | PlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Plan createManyAndReturn
   */
  export type PlanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * The data used to create many Plans.
     */
    data: PlanCreateManyInput | PlanCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Plan update
   */
  export type PlanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * The data needed to update a Plan.
     */
    data: XOR<PlanUpdateInput, PlanUncheckedUpdateInput>
    /**
     * Choose, which Plan to update.
     */
    where: PlanWhereUniqueInput
  }

  /**
   * Plan updateMany
   */
  export type PlanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Plans.
     */
    data: XOR<PlanUpdateManyMutationInput, PlanUncheckedUpdateManyInput>
    /**
     * Filter which Plans to update
     */
    where?: PlanWhereInput
    /**
     * Limit how many Plans to update.
     */
    limit?: number
  }

  /**
   * Plan updateManyAndReturn
   */
  export type PlanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * The data used to update Plans.
     */
    data: XOR<PlanUpdateManyMutationInput, PlanUncheckedUpdateManyInput>
    /**
     * Filter which Plans to update
     */
    where?: PlanWhereInput
    /**
     * Limit how many Plans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Plan upsert
   */
  export type PlanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * The filter to search for the Plan to update in case it exists.
     */
    where: PlanWhereUniqueInput
    /**
     * In case the Plan found by the `where` argument doesn't exist, create a new Plan with this data.
     */
    create: XOR<PlanCreateInput, PlanUncheckedCreateInput>
    /**
     * In case the Plan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlanUpdateInput, PlanUncheckedUpdateInput>
  }

  /**
   * Plan delete
   */
  export type PlanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter which Plan to delete.
     */
    where: PlanWhereUniqueInput
  }

  /**
   * Plan deleteMany
   */
  export type PlanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Plans to delete
     */
    where?: PlanWhereInput
    /**
     * Limit how many Plans to delete.
     */
    limit?: number
  }

  /**
   * Plan.plannedCourses
   */
  export type Plan$plannedCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlannedCourse
     */
    select?: PlannedCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlannedCourse
     */
    omit?: PlannedCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlannedCourseInclude<ExtArgs> | null
    where?: PlannedCourseWhereInput
    orderBy?: PlannedCourseOrderByWithRelationInput | PlannedCourseOrderByWithRelationInput[]
    cursor?: PlannedCourseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlannedCourseScalarFieldEnum | PlannedCourseScalarFieldEnum[]
  }

  /**
   * Plan without action
   */
  export type PlanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
  }


  /**
   * Model PlannedCourse
   */

  export type AggregatePlannedCourse = {
    _count: PlannedCourseCountAggregateOutputType | null
    _avg: PlannedCourseAvgAggregateOutputType | null
    _sum: PlannedCourseSumAggregateOutputType | null
    _min: PlannedCourseMinAggregateOutputType | null
    _max: PlannedCourseMaxAggregateOutputType | null
  }

  export type PlannedCourseAvgAggregateOutputType = {
    semester: number | null
    year: number | null
  }

  export type PlannedCourseSumAggregateOutputType = {
    semester: number | null
    year: number | null
  }

  export type PlannedCourseMinAggregateOutputType = {
    id: string | null
    planId: string | null
    courseId: string | null
    semester: number | null
    year: number | null
    createdAt: Date | null
  }

  export type PlannedCourseMaxAggregateOutputType = {
    id: string | null
    planId: string | null
    courseId: string | null
    semester: number | null
    year: number | null
    createdAt: Date | null
  }

  export type PlannedCourseCountAggregateOutputType = {
    id: number
    planId: number
    courseId: number
    semester: number
    year: number
    createdAt: number
    _all: number
  }


  export type PlannedCourseAvgAggregateInputType = {
    semester?: true
    year?: true
  }

  export type PlannedCourseSumAggregateInputType = {
    semester?: true
    year?: true
  }

  export type PlannedCourseMinAggregateInputType = {
    id?: true
    planId?: true
    courseId?: true
    semester?: true
    year?: true
    createdAt?: true
  }

  export type PlannedCourseMaxAggregateInputType = {
    id?: true
    planId?: true
    courseId?: true
    semester?: true
    year?: true
    createdAt?: true
  }

  export type PlannedCourseCountAggregateInputType = {
    id?: true
    planId?: true
    courseId?: true
    semester?: true
    year?: true
    createdAt?: true
    _all?: true
  }

  export type PlannedCourseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlannedCourse to aggregate.
     */
    where?: PlannedCourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlannedCourses to fetch.
     */
    orderBy?: PlannedCourseOrderByWithRelationInput | PlannedCourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlannedCourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlannedCourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlannedCourses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlannedCourses
    **/
    _count?: true | PlannedCourseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlannedCourseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlannedCourseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlannedCourseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlannedCourseMaxAggregateInputType
  }

  export type GetPlannedCourseAggregateType<T extends PlannedCourseAggregateArgs> = {
        [P in keyof T & keyof AggregatePlannedCourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlannedCourse[P]>
      : GetScalarType<T[P], AggregatePlannedCourse[P]>
  }




  export type PlannedCourseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlannedCourseWhereInput
    orderBy?: PlannedCourseOrderByWithAggregationInput | PlannedCourseOrderByWithAggregationInput[]
    by: PlannedCourseScalarFieldEnum[] | PlannedCourseScalarFieldEnum
    having?: PlannedCourseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlannedCourseCountAggregateInputType | true
    _avg?: PlannedCourseAvgAggregateInputType
    _sum?: PlannedCourseSumAggregateInputType
    _min?: PlannedCourseMinAggregateInputType
    _max?: PlannedCourseMaxAggregateInputType
  }

  export type PlannedCourseGroupByOutputType = {
    id: string
    planId: string
    courseId: string
    semester: number
    year: number
    createdAt: Date
    _count: PlannedCourseCountAggregateOutputType | null
    _avg: PlannedCourseAvgAggregateOutputType | null
    _sum: PlannedCourseSumAggregateOutputType | null
    _min: PlannedCourseMinAggregateOutputType | null
    _max: PlannedCourseMaxAggregateOutputType | null
  }

  type GetPlannedCourseGroupByPayload<T extends PlannedCourseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlannedCourseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlannedCourseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlannedCourseGroupByOutputType[P]>
            : GetScalarType<T[P], PlannedCourseGroupByOutputType[P]>
        }
      >
    >


  export type PlannedCourseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    planId?: boolean
    courseId?: boolean
    semester?: boolean
    year?: boolean
    createdAt?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    plan?: boolean | PlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plannedCourse"]>

  export type PlannedCourseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    planId?: boolean
    courseId?: boolean
    semester?: boolean
    year?: boolean
    createdAt?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    plan?: boolean | PlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plannedCourse"]>

  export type PlannedCourseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    planId?: boolean
    courseId?: boolean
    semester?: boolean
    year?: boolean
    createdAt?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    plan?: boolean | PlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plannedCourse"]>

  export type PlannedCourseSelectScalar = {
    id?: boolean
    planId?: boolean
    courseId?: boolean
    semester?: boolean
    year?: boolean
    createdAt?: boolean
  }

  export type PlannedCourseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "planId" | "courseId" | "semester" | "year" | "createdAt", ExtArgs["result"]["plannedCourse"]>
  export type PlannedCourseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    plan?: boolean | PlanDefaultArgs<ExtArgs>
  }
  export type PlannedCourseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    plan?: boolean | PlanDefaultArgs<ExtArgs>
  }
  export type PlannedCourseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    plan?: boolean | PlanDefaultArgs<ExtArgs>
  }

  export type $PlannedCoursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PlannedCourse"
    objects: {
      course: Prisma.$CoursePayload<ExtArgs>
      plan: Prisma.$PlanPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      planId: string
      courseId: string
      semester: number
      year: number
      createdAt: Date
    }, ExtArgs["result"]["plannedCourse"]>
    composites: {}
  }

  type PlannedCourseGetPayload<S extends boolean | null | undefined | PlannedCourseDefaultArgs> = $Result.GetResult<Prisma.$PlannedCoursePayload, S>

  type PlannedCourseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlannedCourseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlannedCourseCountAggregateInputType | true
    }

  export interface PlannedCourseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlannedCourse'], meta: { name: 'PlannedCourse' } }
    /**
     * Find zero or one PlannedCourse that matches the filter.
     * @param {PlannedCourseFindUniqueArgs} args - Arguments to find a PlannedCourse
     * @example
     * // Get one PlannedCourse
     * const plannedCourse = await prisma.plannedCourse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlannedCourseFindUniqueArgs>(args: SelectSubset<T, PlannedCourseFindUniqueArgs<ExtArgs>>): Prisma__PlannedCourseClient<$Result.GetResult<Prisma.$PlannedCoursePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PlannedCourse that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlannedCourseFindUniqueOrThrowArgs} args - Arguments to find a PlannedCourse
     * @example
     * // Get one PlannedCourse
     * const plannedCourse = await prisma.plannedCourse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlannedCourseFindUniqueOrThrowArgs>(args: SelectSubset<T, PlannedCourseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlannedCourseClient<$Result.GetResult<Prisma.$PlannedCoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlannedCourse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlannedCourseFindFirstArgs} args - Arguments to find a PlannedCourse
     * @example
     * // Get one PlannedCourse
     * const plannedCourse = await prisma.plannedCourse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlannedCourseFindFirstArgs>(args?: SelectSubset<T, PlannedCourseFindFirstArgs<ExtArgs>>): Prisma__PlannedCourseClient<$Result.GetResult<Prisma.$PlannedCoursePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlannedCourse that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlannedCourseFindFirstOrThrowArgs} args - Arguments to find a PlannedCourse
     * @example
     * // Get one PlannedCourse
     * const plannedCourse = await prisma.plannedCourse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlannedCourseFindFirstOrThrowArgs>(args?: SelectSubset<T, PlannedCourseFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlannedCourseClient<$Result.GetResult<Prisma.$PlannedCoursePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PlannedCourses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlannedCourseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlannedCourses
     * const plannedCourses = await prisma.plannedCourse.findMany()
     * 
     * // Get first 10 PlannedCourses
     * const plannedCourses = await prisma.plannedCourse.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const plannedCourseWithIdOnly = await prisma.plannedCourse.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlannedCourseFindManyArgs>(args?: SelectSubset<T, PlannedCourseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlannedCoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PlannedCourse.
     * @param {PlannedCourseCreateArgs} args - Arguments to create a PlannedCourse.
     * @example
     * // Create one PlannedCourse
     * const PlannedCourse = await prisma.plannedCourse.create({
     *   data: {
     *     // ... data to create a PlannedCourse
     *   }
     * })
     * 
     */
    create<T extends PlannedCourseCreateArgs>(args: SelectSubset<T, PlannedCourseCreateArgs<ExtArgs>>): Prisma__PlannedCourseClient<$Result.GetResult<Prisma.$PlannedCoursePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PlannedCourses.
     * @param {PlannedCourseCreateManyArgs} args - Arguments to create many PlannedCourses.
     * @example
     * // Create many PlannedCourses
     * const plannedCourse = await prisma.plannedCourse.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlannedCourseCreateManyArgs>(args?: SelectSubset<T, PlannedCourseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PlannedCourses and returns the data saved in the database.
     * @param {PlannedCourseCreateManyAndReturnArgs} args - Arguments to create many PlannedCourses.
     * @example
     * // Create many PlannedCourses
     * const plannedCourse = await prisma.plannedCourse.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PlannedCourses and only return the `id`
     * const plannedCourseWithIdOnly = await prisma.plannedCourse.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlannedCourseCreateManyAndReturnArgs>(args?: SelectSubset<T, PlannedCourseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlannedCoursePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PlannedCourse.
     * @param {PlannedCourseDeleteArgs} args - Arguments to delete one PlannedCourse.
     * @example
     * // Delete one PlannedCourse
     * const PlannedCourse = await prisma.plannedCourse.delete({
     *   where: {
     *     // ... filter to delete one PlannedCourse
     *   }
     * })
     * 
     */
    delete<T extends PlannedCourseDeleteArgs>(args: SelectSubset<T, PlannedCourseDeleteArgs<ExtArgs>>): Prisma__PlannedCourseClient<$Result.GetResult<Prisma.$PlannedCoursePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PlannedCourse.
     * @param {PlannedCourseUpdateArgs} args - Arguments to update one PlannedCourse.
     * @example
     * // Update one PlannedCourse
     * const plannedCourse = await prisma.plannedCourse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlannedCourseUpdateArgs>(args: SelectSubset<T, PlannedCourseUpdateArgs<ExtArgs>>): Prisma__PlannedCourseClient<$Result.GetResult<Prisma.$PlannedCoursePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PlannedCourses.
     * @param {PlannedCourseDeleteManyArgs} args - Arguments to filter PlannedCourses to delete.
     * @example
     * // Delete a few PlannedCourses
     * const { count } = await prisma.plannedCourse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlannedCourseDeleteManyArgs>(args?: SelectSubset<T, PlannedCourseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlannedCourses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlannedCourseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlannedCourses
     * const plannedCourse = await prisma.plannedCourse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlannedCourseUpdateManyArgs>(args: SelectSubset<T, PlannedCourseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlannedCourses and returns the data updated in the database.
     * @param {PlannedCourseUpdateManyAndReturnArgs} args - Arguments to update many PlannedCourses.
     * @example
     * // Update many PlannedCourses
     * const plannedCourse = await prisma.plannedCourse.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PlannedCourses and only return the `id`
     * const plannedCourseWithIdOnly = await prisma.plannedCourse.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PlannedCourseUpdateManyAndReturnArgs>(args: SelectSubset<T, PlannedCourseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlannedCoursePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PlannedCourse.
     * @param {PlannedCourseUpsertArgs} args - Arguments to update or create a PlannedCourse.
     * @example
     * // Update or create a PlannedCourse
     * const plannedCourse = await prisma.plannedCourse.upsert({
     *   create: {
     *     // ... data to create a PlannedCourse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlannedCourse we want to update
     *   }
     * })
     */
    upsert<T extends PlannedCourseUpsertArgs>(args: SelectSubset<T, PlannedCourseUpsertArgs<ExtArgs>>): Prisma__PlannedCourseClient<$Result.GetResult<Prisma.$PlannedCoursePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PlannedCourses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlannedCourseCountArgs} args - Arguments to filter PlannedCourses to count.
     * @example
     * // Count the number of PlannedCourses
     * const count = await prisma.plannedCourse.count({
     *   where: {
     *     // ... the filter for the PlannedCourses we want to count
     *   }
     * })
    **/
    count<T extends PlannedCourseCountArgs>(
      args?: Subset<T, PlannedCourseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlannedCourseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlannedCourse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlannedCourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlannedCourseAggregateArgs>(args: Subset<T, PlannedCourseAggregateArgs>): Prisma.PrismaPromise<GetPlannedCourseAggregateType<T>>

    /**
     * Group by PlannedCourse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlannedCourseGroupByArgs} args - Group by arguments.
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
      T extends PlannedCourseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlannedCourseGroupByArgs['orderBy'] }
        : { orderBy?: PlannedCourseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PlannedCourseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlannedCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PlannedCourse model
   */
  readonly fields: PlannedCourseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlannedCourse.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlannedCourseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    plan<T extends PlanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlanDefaultArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PlannedCourse model
   */
  interface PlannedCourseFieldRefs {
    readonly id: FieldRef<"PlannedCourse", 'String'>
    readonly planId: FieldRef<"PlannedCourse", 'String'>
    readonly courseId: FieldRef<"PlannedCourse", 'String'>
    readonly semester: FieldRef<"PlannedCourse", 'Int'>
    readonly year: FieldRef<"PlannedCourse", 'Int'>
    readonly createdAt: FieldRef<"PlannedCourse", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PlannedCourse findUnique
   */
  export type PlannedCourseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlannedCourse
     */
    select?: PlannedCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlannedCourse
     */
    omit?: PlannedCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlannedCourseInclude<ExtArgs> | null
    /**
     * Filter, which PlannedCourse to fetch.
     */
    where: PlannedCourseWhereUniqueInput
  }

  /**
   * PlannedCourse findUniqueOrThrow
   */
  export type PlannedCourseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlannedCourse
     */
    select?: PlannedCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlannedCourse
     */
    omit?: PlannedCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlannedCourseInclude<ExtArgs> | null
    /**
     * Filter, which PlannedCourse to fetch.
     */
    where: PlannedCourseWhereUniqueInput
  }

  /**
   * PlannedCourse findFirst
   */
  export type PlannedCourseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlannedCourse
     */
    select?: PlannedCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlannedCourse
     */
    omit?: PlannedCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlannedCourseInclude<ExtArgs> | null
    /**
     * Filter, which PlannedCourse to fetch.
     */
    where?: PlannedCourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlannedCourses to fetch.
     */
    orderBy?: PlannedCourseOrderByWithRelationInput | PlannedCourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlannedCourses.
     */
    cursor?: PlannedCourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlannedCourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlannedCourses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlannedCourses.
     */
    distinct?: PlannedCourseScalarFieldEnum | PlannedCourseScalarFieldEnum[]
  }

  /**
   * PlannedCourse findFirstOrThrow
   */
  export type PlannedCourseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlannedCourse
     */
    select?: PlannedCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlannedCourse
     */
    omit?: PlannedCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlannedCourseInclude<ExtArgs> | null
    /**
     * Filter, which PlannedCourse to fetch.
     */
    where?: PlannedCourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlannedCourses to fetch.
     */
    orderBy?: PlannedCourseOrderByWithRelationInput | PlannedCourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlannedCourses.
     */
    cursor?: PlannedCourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlannedCourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlannedCourses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlannedCourses.
     */
    distinct?: PlannedCourseScalarFieldEnum | PlannedCourseScalarFieldEnum[]
  }

  /**
   * PlannedCourse findMany
   */
  export type PlannedCourseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlannedCourse
     */
    select?: PlannedCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlannedCourse
     */
    omit?: PlannedCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlannedCourseInclude<ExtArgs> | null
    /**
     * Filter, which PlannedCourses to fetch.
     */
    where?: PlannedCourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlannedCourses to fetch.
     */
    orderBy?: PlannedCourseOrderByWithRelationInput | PlannedCourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlannedCourses.
     */
    cursor?: PlannedCourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlannedCourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlannedCourses.
     */
    skip?: number
    distinct?: PlannedCourseScalarFieldEnum | PlannedCourseScalarFieldEnum[]
  }

  /**
   * PlannedCourse create
   */
  export type PlannedCourseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlannedCourse
     */
    select?: PlannedCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlannedCourse
     */
    omit?: PlannedCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlannedCourseInclude<ExtArgs> | null
    /**
     * The data needed to create a PlannedCourse.
     */
    data: XOR<PlannedCourseCreateInput, PlannedCourseUncheckedCreateInput>
  }

  /**
   * PlannedCourse createMany
   */
  export type PlannedCourseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlannedCourses.
     */
    data: PlannedCourseCreateManyInput | PlannedCourseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlannedCourse createManyAndReturn
   */
  export type PlannedCourseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlannedCourse
     */
    select?: PlannedCourseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlannedCourse
     */
    omit?: PlannedCourseOmit<ExtArgs> | null
    /**
     * The data used to create many PlannedCourses.
     */
    data: PlannedCourseCreateManyInput | PlannedCourseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlannedCourseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlannedCourse update
   */
  export type PlannedCourseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlannedCourse
     */
    select?: PlannedCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlannedCourse
     */
    omit?: PlannedCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlannedCourseInclude<ExtArgs> | null
    /**
     * The data needed to update a PlannedCourse.
     */
    data: XOR<PlannedCourseUpdateInput, PlannedCourseUncheckedUpdateInput>
    /**
     * Choose, which PlannedCourse to update.
     */
    where: PlannedCourseWhereUniqueInput
  }

  /**
   * PlannedCourse updateMany
   */
  export type PlannedCourseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlannedCourses.
     */
    data: XOR<PlannedCourseUpdateManyMutationInput, PlannedCourseUncheckedUpdateManyInput>
    /**
     * Filter which PlannedCourses to update
     */
    where?: PlannedCourseWhereInput
    /**
     * Limit how many PlannedCourses to update.
     */
    limit?: number
  }

  /**
   * PlannedCourse updateManyAndReturn
   */
  export type PlannedCourseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlannedCourse
     */
    select?: PlannedCourseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlannedCourse
     */
    omit?: PlannedCourseOmit<ExtArgs> | null
    /**
     * The data used to update PlannedCourses.
     */
    data: XOR<PlannedCourseUpdateManyMutationInput, PlannedCourseUncheckedUpdateManyInput>
    /**
     * Filter which PlannedCourses to update
     */
    where?: PlannedCourseWhereInput
    /**
     * Limit how many PlannedCourses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlannedCourseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlannedCourse upsert
   */
  export type PlannedCourseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlannedCourse
     */
    select?: PlannedCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlannedCourse
     */
    omit?: PlannedCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlannedCourseInclude<ExtArgs> | null
    /**
     * The filter to search for the PlannedCourse to update in case it exists.
     */
    where: PlannedCourseWhereUniqueInput
    /**
     * In case the PlannedCourse found by the `where` argument doesn't exist, create a new PlannedCourse with this data.
     */
    create: XOR<PlannedCourseCreateInput, PlannedCourseUncheckedCreateInput>
    /**
     * In case the PlannedCourse was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlannedCourseUpdateInput, PlannedCourseUncheckedUpdateInput>
  }

  /**
   * PlannedCourse delete
   */
  export type PlannedCourseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlannedCourse
     */
    select?: PlannedCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlannedCourse
     */
    omit?: PlannedCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlannedCourseInclude<ExtArgs> | null
    /**
     * Filter which PlannedCourse to delete.
     */
    where: PlannedCourseWhereUniqueInput
  }

  /**
   * PlannedCourse deleteMany
   */
  export type PlannedCourseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlannedCourses to delete
     */
    where?: PlannedCourseWhereInput
    /**
     * Limit how many PlannedCourses to delete.
     */
    limit?: number
  }

  /**
   * PlannedCourse without action
   */
  export type PlannedCourseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlannedCourse
     */
    select?: PlannedCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlannedCourse
     */
    omit?: PlannedCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlannedCourseInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    hashedPassword: 'hashedPassword',
    fullName: 'fullName',
    studentYear: 'studentYear',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    majorId: 'majorId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const MajorScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description'
  };

  export type MajorScalarFieldEnum = (typeof MajorScalarFieldEnum)[keyof typeof MajorScalarFieldEnum]


  export const CourseScalarFieldEnum: {
    id: 'id',
    code: 'code',
    name: 'name',
    credits: 'credits',
    description: 'description',
    recommendedSemester: 'recommendedSemester'
  };

  export type CourseScalarFieldEnum = (typeof CourseScalarFieldEnum)[keyof typeof CourseScalarFieldEnum]


  export const MajorCourseScalarFieldEnum: {
    id: 'id',
    majorId: 'majorId',
    courseId: 'courseId'
  };

  export type MajorCourseScalarFieldEnum = (typeof MajorCourseScalarFieldEnum)[keyof typeof MajorCourseScalarFieldEnum]


  export const PrerequisiteScalarFieldEnum: {
    id: 'id',
    courseId: 'courseId',
    prerequisiteId: 'prerequisiteId',
    groupId: 'groupId'
  };

  export type PrerequisiteScalarFieldEnum = (typeof PrerequisiteScalarFieldEnum)[keyof typeof PrerequisiteScalarFieldEnum]


  export const CorequisiteScalarFieldEnum: {
    id: 'id',
    courseId: 'courseId',
    corequisiteId: 'corequisiteId'
  };

  export type CorequisiteScalarFieldEnum = (typeof CorequisiteScalarFieldEnum)[keyof typeof CorequisiteScalarFieldEnum]


  export const PlanScalarFieldEnum: {
    id: 'id',
    name: 'name',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PlanScalarFieldEnum = (typeof PlanScalarFieldEnum)[keyof typeof PlanScalarFieldEnum]


  export const PlannedCourseScalarFieldEnum: {
    id: 'id',
    planId: 'planId',
    courseId: 'courseId',
    semester: 'semester',
    year: 'year',
    createdAt: 'createdAt'
  };

  export type PlannedCourseScalarFieldEnum = (typeof PlannedCourseScalarFieldEnum)[keyof typeof PlannedCourseScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    hashedPassword?: StringFilter<"User"> | string
    fullName?: StringFilter<"User"> | string
    studentYear?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    majorId?: StringNullableFilter<"User"> | string | null
    plans?: PlanListRelationFilter
    major?: XOR<MajorNullableScalarRelationFilter, MajorWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    hashedPassword?: SortOrder
    fullName?: SortOrder
    studentYear?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    majorId?: SortOrderInput | SortOrder
    plans?: PlanOrderByRelationAggregateInput
    major?: MajorOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    hashedPassword?: StringFilter<"User"> | string
    fullName?: StringFilter<"User"> | string
    studentYear?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    majorId?: StringNullableFilter<"User"> | string | null
    plans?: PlanListRelationFilter
    major?: XOR<MajorNullableScalarRelationFilter, MajorWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    hashedPassword?: SortOrder
    fullName?: SortOrder
    studentYear?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    majorId?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    hashedPassword?: StringWithAggregatesFilter<"User"> | string
    fullName?: StringWithAggregatesFilter<"User"> | string
    studentYear?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    majorId?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type MajorWhereInput = {
    AND?: MajorWhereInput | MajorWhereInput[]
    OR?: MajorWhereInput[]
    NOT?: MajorWhereInput | MajorWhereInput[]
    id?: StringFilter<"Major"> | string
    name?: StringFilter<"Major"> | string
    description?: StringNullableFilter<"Major"> | string | null
    courses?: MajorCourseListRelationFilter
    users?: UserListRelationFilter
  }

  export type MajorOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    courses?: MajorCourseOrderByRelationAggregateInput
    users?: UserOrderByRelationAggregateInput
  }

  export type MajorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: MajorWhereInput | MajorWhereInput[]
    OR?: MajorWhereInput[]
    NOT?: MajorWhereInput | MajorWhereInput[]
    description?: StringNullableFilter<"Major"> | string | null
    courses?: MajorCourseListRelationFilter
    users?: UserListRelationFilter
  }, "id" | "name">

  export type MajorOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: MajorCountOrderByAggregateInput
    _max?: MajorMaxOrderByAggregateInput
    _min?: MajorMinOrderByAggregateInput
  }

  export type MajorScalarWhereWithAggregatesInput = {
    AND?: MajorScalarWhereWithAggregatesInput | MajorScalarWhereWithAggregatesInput[]
    OR?: MajorScalarWhereWithAggregatesInput[]
    NOT?: MajorScalarWhereWithAggregatesInput | MajorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Major"> | string
    name?: StringWithAggregatesFilter<"Major"> | string
    description?: StringNullableWithAggregatesFilter<"Major"> | string | null
  }

  export type CourseWhereInput = {
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    id?: StringFilter<"Course"> | string
    code?: StringFilter<"Course"> | string
    name?: StringFilter<"Course"> | string
    credits?: IntFilter<"Course"> | number
    description?: StringNullableFilter<"Course"> | string | null
    recommendedSemester?: IntNullableFilter<"Course"> | number | null
    majors?: MajorCourseListRelationFilter
    plannedCourses?: PlannedCourseListRelationFilter
    prerequisites?: PrerequisiteListRelationFilter
    isPrereqFor?: PrerequisiteListRelationFilter
    corequisites?: CorequisiteListRelationFilter
    isCoreqFor?: CorequisiteListRelationFilter
  }

  export type CourseOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    credits?: SortOrder
    description?: SortOrderInput | SortOrder
    recommendedSemester?: SortOrderInput | SortOrder
    majors?: MajorCourseOrderByRelationAggregateInput
    plannedCourses?: PlannedCourseOrderByRelationAggregateInput
    prerequisites?: PrerequisiteOrderByRelationAggregateInput
    isPrereqFor?: PrerequisiteOrderByRelationAggregateInput
    corequisites?: CorequisiteOrderByRelationAggregateInput
    isCoreqFor?: CorequisiteOrderByRelationAggregateInput
  }

  export type CourseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    name?: StringFilter<"Course"> | string
    credits?: IntFilter<"Course"> | number
    description?: StringNullableFilter<"Course"> | string | null
    recommendedSemester?: IntNullableFilter<"Course"> | number | null
    majors?: MajorCourseListRelationFilter
    plannedCourses?: PlannedCourseListRelationFilter
    prerequisites?: PrerequisiteListRelationFilter
    isPrereqFor?: PrerequisiteListRelationFilter
    corequisites?: CorequisiteListRelationFilter
    isCoreqFor?: CorequisiteListRelationFilter
  }, "id" | "code">

  export type CourseOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    credits?: SortOrder
    description?: SortOrderInput | SortOrder
    recommendedSemester?: SortOrderInput | SortOrder
    _count?: CourseCountOrderByAggregateInput
    _avg?: CourseAvgOrderByAggregateInput
    _max?: CourseMaxOrderByAggregateInput
    _min?: CourseMinOrderByAggregateInput
    _sum?: CourseSumOrderByAggregateInput
  }

  export type CourseScalarWhereWithAggregatesInput = {
    AND?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    OR?: CourseScalarWhereWithAggregatesInput[]
    NOT?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Course"> | string
    code?: StringWithAggregatesFilter<"Course"> | string
    name?: StringWithAggregatesFilter<"Course"> | string
    credits?: IntWithAggregatesFilter<"Course"> | number
    description?: StringNullableWithAggregatesFilter<"Course"> | string | null
    recommendedSemester?: IntNullableWithAggregatesFilter<"Course"> | number | null
  }

  export type MajorCourseWhereInput = {
    AND?: MajorCourseWhereInput | MajorCourseWhereInput[]
    OR?: MajorCourseWhereInput[]
    NOT?: MajorCourseWhereInput | MajorCourseWhereInput[]
    id?: StringFilter<"MajorCourse"> | string
    majorId?: StringFilter<"MajorCourse"> | string
    courseId?: StringFilter<"MajorCourse"> | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    major?: XOR<MajorScalarRelationFilter, MajorWhereInput>
  }

  export type MajorCourseOrderByWithRelationInput = {
    id?: SortOrder
    majorId?: SortOrder
    courseId?: SortOrder
    course?: CourseOrderByWithRelationInput
    major?: MajorOrderByWithRelationInput
  }

  export type MajorCourseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    majorId_courseId?: MajorCourseMajorIdCourseIdCompoundUniqueInput
    AND?: MajorCourseWhereInput | MajorCourseWhereInput[]
    OR?: MajorCourseWhereInput[]
    NOT?: MajorCourseWhereInput | MajorCourseWhereInput[]
    majorId?: StringFilter<"MajorCourse"> | string
    courseId?: StringFilter<"MajorCourse"> | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    major?: XOR<MajorScalarRelationFilter, MajorWhereInput>
  }, "id" | "majorId_courseId">

  export type MajorCourseOrderByWithAggregationInput = {
    id?: SortOrder
    majorId?: SortOrder
    courseId?: SortOrder
    _count?: MajorCourseCountOrderByAggregateInput
    _max?: MajorCourseMaxOrderByAggregateInput
    _min?: MajorCourseMinOrderByAggregateInput
  }

  export type MajorCourseScalarWhereWithAggregatesInput = {
    AND?: MajorCourseScalarWhereWithAggregatesInput | MajorCourseScalarWhereWithAggregatesInput[]
    OR?: MajorCourseScalarWhereWithAggregatesInput[]
    NOT?: MajorCourseScalarWhereWithAggregatesInput | MajorCourseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MajorCourse"> | string
    majorId?: StringWithAggregatesFilter<"MajorCourse"> | string
    courseId?: StringWithAggregatesFilter<"MajorCourse"> | string
  }

  export type PrerequisiteWhereInput = {
    AND?: PrerequisiteWhereInput | PrerequisiteWhereInput[]
    OR?: PrerequisiteWhereInput[]
    NOT?: PrerequisiteWhereInput | PrerequisiteWhereInput[]
    id?: StringFilter<"Prerequisite"> | string
    courseId?: StringFilter<"Prerequisite"> | string
    prerequisiteId?: StringFilter<"Prerequisite"> | string
    groupId?: IntFilter<"Prerequisite"> | number
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    prerequisite?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }

  export type PrerequisiteOrderByWithRelationInput = {
    id?: SortOrder
    courseId?: SortOrder
    prerequisiteId?: SortOrder
    groupId?: SortOrder
    course?: CourseOrderByWithRelationInput
    prerequisite?: CourseOrderByWithRelationInput
  }

  export type PrerequisiteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    courseId_prerequisiteId?: PrerequisiteCourseIdPrerequisiteIdCompoundUniqueInput
    AND?: PrerequisiteWhereInput | PrerequisiteWhereInput[]
    OR?: PrerequisiteWhereInput[]
    NOT?: PrerequisiteWhereInput | PrerequisiteWhereInput[]
    courseId?: StringFilter<"Prerequisite"> | string
    prerequisiteId?: StringFilter<"Prerequisite"> | string
    groupId?: IntFilter<"Prerequisite"> | number
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    prerequisite?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }, "id" | "courseId_prerequisiteId">

  export type PrerequisiteOrderByWithAggregationInput = {
    id?: SortOrder
    courseId?: SortOrder
    prerequisiteId?: SortOrder
    groupId?: SortOrder
    _count?: PrerequisiteCountOrderByAggregateInput
    _avg?: PrerequisiteAvgOrderByAggregateInput
    _max?: PrerequisiteMaxOrderByAggregateInput
    _min?: PrerequisiteMinOrderByAggregateInput
    _sum?: PrerequisiteSumOrderByAggregateInput
  }

  export type PrerequisiteScalarWhereWithAggregatesInput = {
    AND?: PrerequisiteScalarWhereWithAggregatesInput | PrerequisiteScalarWhereWithAggregatesInput[]
    OR?: PrerequisiteScalarWhereWithAggregatesInput[]
    NOT?: PrerequisiteScalarWhereWithAggregatesInput | PrerequisiteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Prerequisite"> | string
    courseId?: StringWithAggregatesFilter<"Prerequisite"> | string
    prerequisiteId?: StringWithAggregatesFilter<"Prerequisite"> | string
    groupId?: IntWithAggregatesFilter<"Prerequisite"> | number
  }

  export type CorequisiteWhereInput = {
    AND?: CorequisiteWhereInput | CorequisiteWhereInput[]
    OR?: CorequisiteWhereInput[]
    NOT?: CorequisiteWhereInput | CorequisiteWhereInput[]
    id?: StringFilter<"Corequisite"> | string
    courseId?: StringFilter<"Corequisite"> | string
    corequisiteId?: StringFilter<"Corequisite"> | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    corequisite?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }

  export type CorequisiteOrderByWithRelationInput = {
    id?: SortOrder
    courseId?: SortOrder
    corequisiteId?: SortOrder
    course?: CourseOrderByWithRelationInput
    corequisite?: CourseOrderByWithRelationInput
  }

  export type CorequisiteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    courseId_corequisiteId?: CorequisiteCourseIdCorequisiteIdCompoundUniqueInput
    AND?: CorequisiteWhereInput | CorequisiteWhereInput[]
    OR?: CorequisiteWhereInput[]
    NOT?: CorequisiteWhereInput | CorequisiteWhereInput[]
    courseId?: StringFilter<"Corequisite"> | string
    corequisiteId?: StringFilter<"Corequisite"> | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    corequisite?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }, "id" | "courseId_corequisiteId">

  export type CorequisiteOrderByWithAggregationInput = {
    id?: SortOrder
    courseId?: SortOrder
    corequisiteId?: SortOrder
    _count?: CorequisiteCountOrderByAggregateInput
    _max?: CorequisiteMaxOrderByAggregateInput
    _min?: CorequisiteMinOrderByAggregateInput
  }

  export type CorequisiteScalarWhereWithAggregatesInput = {
    AND?: CorequisiteScalarWhereWithAggregatesInput | CorequisiteScalarWhereWithAggregatesInput[]
    OR?: CorequisiteScalarWhereWithAggregatesInput[]
    NOT?: CorequisiteScalarWhereWithAggregatesInput | CorequisiteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Corequisite"> | string
    courseId?: StringWithAggregatesFilter<"Corequisite"> | string
    corequisiteId?: StringWithAggregatesFilter<"Corequisite"> | string
  }

  export type PlanWhereInput = {
    AND?: PlanWhereInput | PlanWhereInput[]
    OR?: PlanWhereInput[]
    NOT?: PlanWhereInput | PlanWhereInput[]
    id?: StringFilter<"Plan"> | string
    name?: StringFilter<"Plan"> | string
    userId?: StringFilter<"Plan"> | string
    createdAt?: DateTimeFilter<"Plan"> | Date | string
    updatedAt?: DateTimeFilter<"Plan"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    plannedCourses?: PlannedCourseListRelationFilter
  }

  export type PlanOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    plannedCourses?: PlannedCourseOrderByRelationAggregateInput
  }

  export type PlanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PlanWhereInput | PlanWhereInput[]
    OR?: PlanWhereInput[]
    NOT?: PlanWhereInput | PlanWhereInput[]
    name?: StringFilter<"Plan"> | string
    userId?: StringFilter<"Plan"> | string
    createdAt?: DateTimeFilter<"Plan"> | Date | string
    updatedAt?: DateTimeFilter<"Plan"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    plannedCourses?: PlannedCourseListRelationFilter
  }, "id">

  export type PlanOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PlanCountOrderByAggregateInput
    _max?: PlanMaxOrderByAggregateInput
    _min?: PlanMinOrderByAggregateInput
  }

  export type PlanScalarWhereWithAggregatesInput = {
    AND?: PlanScalarWhereWithAggregatesInput | PlanScalarWhereWithAggregatesInput[]
    OR?: PlanScalarWhereWithAggregatesInput[]
    NOT?: PlanScalarWhereWithAggregatesInput | PlanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Plan"> | string
    name?: StringWithAggregatesFilter<"Plan"> | string
    userId?: StringWithAggregatesFilter<"Plan"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Plan"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Plan"> | Date | string
  }

  export type PlannedCourseWhereInput = {
    AND?: PlannedCourseWhereInput | PlannedCourseWhereInput[]
    OR?: PlannedCourseWhereInput[]
    NOT?: PlannedCourseWhereInput | PlannedCourseWhereInput[]
    id?: StringFilter<"PlannedCourse"> | string
    planId?: StringFilter<"PlannedCourse"> | string
    courseId?: StringFilter<"PlannedCourse"> | string
    semester?: IntFilter<"PlannedCourse"> | number
    year?: IntFilter<"PlannedCourse"> | number
    createdAt?: DateTimeFilter<"PlannedCourse"> | Date | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    plan?: XOR<PlanScalarRelationFilter, PlanWhereInput>
  }

  export type PlannedCourseOrderByWithRelationInput = {
    id?: SortOrder
    planId?: SortOrder
    courseId?: SortOrder
    semester?: SortOrder
    year?: SortOrder
    createdAt?: SortOrder
    course?: CourseOrderByWithRelationInput
    plan?: PlanOrderByWithRelationInput
  }

  export type PlannedCourseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    planId_courseId?: PlannedCoursePlanIdCourseIdCompoundUniqueInput
    AND?: PlannedCourseWhereInput | PlannedCourseWhereInput[]
    OR?: PlannedCourseWhereInput[]
    NOT?: PlannedCourseWhereInput | PlannedCourseWhereInput[]
    planId?: StringFilter<"PlannedCourse"> | string
    courseId?: StringFilter<"PlannedCourse"> | string
    semester?: IntFilter<"PlannedCourse"> | number
    year?: IntFilter<"PlannedCourse"> | number
    createdAt?: DateTimeFilter<"PlannedCourse"> | Date | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    plan?: XOR<PlanScalarRelationFilter, PlanWhereInput>
  }, "id" | "planId_courseId">

  export type PlannedCourseOrderByWithAggregationInput = {
    id?: SortOrder
    planId?: SortOrder
    courseId?: SortOrder
    semester?: SortOrder
    year?: SortOrder
    createdAt?: SortOrder
    _count?: PlannedCourseCountOrderByAggregateInput
    _avg?: PlannedCourseAvgOrderByAggregateInput
    _max?: PlannedCourseMaxOrderByAggregateInput
    _min?: PlannedCourseMinOrderByAggregateInput
    _sum?: PlannedCourseSumOrderByAggregateInput
  }

  export type PlannedCourseScalarWhereWithAggregatesInput = {
    AND?: PlannedCourseScalarWhereWithAggregatesInput | PlannedCourseScalarWhereWithAggregatesInput[]
    OR?: PlannedCourseScalarWhereWithAggregatesInput[]
    NOT?: PlannedCourseScalarWhereWithAggregatesInput | PlannedCourseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PlannedCourse"> | string
    planId?: StringWithAggregatesFilter<"PlannedCourse"> | string
    courseId?: StringWithAggregatesFilter<"PlannedCourse"> | string
    semester?: IntWithAggregatesFilter<"PlannedCourse"> | number
    year?: IntWithAggregatesFilter<"PlannedCourse"> | number
    createdAt?: DateTimeWithAggregatesFilter<"PlannedCourse"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    hashedPassword: string
    fullName: string
    studentYear?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    plans?: PlanCreateNestedManyWithoutUserInput
    major?: MajorCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    hashedPassword: string
    fullName: string
    studentYear?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    majorId?: string | null
    plans?: PlanUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    studentYear?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plans?: PlanUpdateManyWithoutUserNestedInput
    major?: MajorUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    studentYear?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    majorId?: NullableStringFieldUpdateOperationsInput | string | null
    plans?: PlanUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    hashedPassword: string
    fullName: string
    studentYear?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    majorId?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    studentYear?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    studentYear?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    majorId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MajorCreateInput = {
    id?: string
    name: string
    description?: string | null
    courses?: MajorCourseCreateNestedManyWithoutMajorInput
    users?: UserCreateNestedManyWithoutMajorInput
  }

  export type MajorUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    courses?: MajorCourseUncheckedCreateNestedManyWithoutMajorInput
    users?: UserUncheckedCreateNestedManyWithoutMajorInput
  }

  export type MajorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    courses?: MajorCourseUpdateManyWithoutMajorNestedInput
    users?: UserUpdateManyWithoutMajorNestedInput
  }

  export type MajorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    courses?: MajorCourseUncheckedUpdateManyWithoutMajorNestedInput
    users?: UserUncheckedUpdateManyWithoutMajorNestedInput
  }

  export type MajorCreateManyInput = {
    id?: string
    name: string
    description?: string | null
  }

  export type MajorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MajorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CourseCreateInput = {
    id?: string
    code: string
    name: string
    credits: number
    description?: string | null
    recommendedSemester?: number | null
    majors?: MajorCourseCreateNestedManyWithoutCourseInput
    plannedCourses?: PlannedCourseCreateNestedManyWithoutCourseInput
    prerequisites?: PrerequisiteCreateNestedManyWithoutCourseInput
    isPrereqFor?: PrerequisiteCreateNestedManyWithoutPrerequisiteInput
    corequisites?: CorequisiteCreateNestedManyWithoutCourseInput
    isCoreqFor?: CorequisiteCreateNestedManyWithoutCorequisiteInput
  }

  export type CourseUncheckedCreateInput = {
    id?: string
    code: string
    name: string
    credits: number
    description?: string | null
    recommendedSemester?: number | null
    majors?: MajorCourseUncheckedCreateNestedManyWithoutCourseInput
    plannedCourses?: PlannedCourseUncheckedCreateNestedManyWithoutCourseInput
    prerequisites?: PrerequisiteUncheckedCreateNestedManyWithoutCourseInput
    isPrereqFor?: PrerequisiteUncheckedCreateNestedManyWithoutPrerequisiteInput
    corequisites?: CorequisiteUncheckedCreateNestedManyWithoutCourseInput
    isCoreqFor?: CorequisiteUncheckedCreateNestedManyWithoutCorequisiteInput
  }

  export type CourseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    recommendedSemester?: NullableIntFieldUpdateOperationsInput | number | null
    majors?: MajorCourseUpdateManyWithoutCourseNestedInput
    plannedCourses?: PlannedCourseUpdateManyWithoutCourseNestedInput
    prerequisites?: PrerequisiteUpdateManyWithoutCourseNestedInput
    isPrereqFor?: PrerequisiteUpdateManyWithoutPrerequisiteNestedInput
    corequisites?: CorequisiteUpdateManyWithoutCourseNestedInput
    isCoreqFor?: CorequisiteUpdateManyWithoutCorequisiteNestedInput
  }

  export type CourseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    recommendedSemester?: NullableIntFieldUpdateOperationsInput | number | null
    majors?: MajorCourseUncheckedUpdateManyWithoutCourseNestedInput
    plannedCourses?: PlannedCourseUncheckedUpdateManyWithoutCourseNestedInput
    prerequisites?: PrerequisiteUncheckedUpdateManyWithoutCourseNestedInput
    isPrereqFor?: PrerequisiteUncheckedUpdateManyWithoutPrerequisiteNestedInput
    corequisites?: CorequisiteUncheckedUpdateManyWithoutCourseNestedInput
    isCoreqFor?: CorequisiteUncheckedUpdateManyWithoutCorequisiteNestedInput
  }

  export type CourseCreateManyInput = {
    id?: string
    code: string
    name: string
    credits: number
    description?: string | null
    recommendedSemester?: number | null
  }

  export type CourseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    recommendedSemester?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CourseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    recommendedSemester?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MajorCourseCreateInput = {
    id?: string
    course: CourseCreateNestedOneWithoutMajorsInput
    major: MajorCreateNestedOneWithoutCoursesInput
  }

  export type MajorCourseUncheckedCreateInput = {
    id?: string
    majorId: string
    courseId: string
  }

  export type MajorCourseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    course?: CourseUpdateOneRequiredWithoutMajorsNestedInput
    major?: MajorUpdateOneRequiredWithoutCoursesNestedInput
  }

  export type MajorCourseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    majorId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
  }

  export type MajorCourseCreateManyInput = {
    id?: string
    majorId: string
    courseId: string
  }

  export type MajorCourseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type MajorCourseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    majorId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
  }

  export type PrerequisiteCreateInput = {
    id?: string
    groupId: number
    course: CourseCreateNestedOneWithoutPrerequisitesInput
    prerequisite: CourseCreateNestedOneWithoutIsPrereqForInput
  }

  export type PrerequisiteUncheckedCreateInput = {
    id?: string
    courseId: string
    prerequisiteId: string
    groupId: number
  }

  export type PrerequisiteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: IntFieldUpdateOperationsInput | number
    course?: CourseUpdateOneRequiredWithoutPrerequisitesNestedInput
    prerequisite?: CourseUpdateOneRequiredWithoutIsPrereqForNestedInput
  }

  export type PrerequisiteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    prerequisiteId?: StringFieldUpdateOperationsInput | string
    groupId?: IntFieldUpdateOperationsInput | number
  }

  export type PrerequisiteCreateManyInput = {
    id?: string
    courseId: string
    prerequisiteId: string
    groupId: number
  }

  export type PrerequisiteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: IntFieldUpdateOperationsInput | number
  }

  export type PrerequisiteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    prerequisiteId?: StringFieldUpdateOperationsInput | string
    groupId?: IntFieldUpdateOperationsInput | number
  }

  export type CorequisiteCreateInput = {
    id?: string
    course: CourseCreateNestedOneWithoutCorequisitesInput
    corequisite: CourseCreateNestedOneWithoutIsCoreqForInput
  }

  export type CorequisiteUncheckedCreateInput = {
    id?: string
    courseId: string
    corequisiteId: string
  }

  export type CorequisiteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    course?: CourseUpdateOneRequiredWithoutCorequisitesNestedInput
    corequisite?: CourseUpdateOneRequiredWithoutIsCoreqForNestedInput
  }

  export type CorequisiteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    corequisiteId?: StringFieldUpdateOperationsInput | string
  }

  export type CorequisiteCreateManyInput = {
    id?: string
    courseId: string
    corequisiteId: string
  }

  export type CorequisiteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type CorequisiteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    corequisiteId?: StringFieldUpdateOperationsInput | string
  }

  export type PlanCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPlansInput
    plannedCourses?: PlannedCourseCreateNestedManyWithoutPlanInput
  }

  export type PlanUncheckedCreateInput = {
    id?: string
    name: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    plannedCourses?: PlannedCourseUncheckedCreateNestedManyWithoutPlanInput
  }

  export type PlanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPlansNestedInput
    plannedCourses?: PlannedCourseUpdateManyWithoutPlanNestedInput
  }

  export type PlanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plannedCourses?: PlannedCourseUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type PlanCreateManyInput = {
    id?: string
    name: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlannedCourseCreateInput = {
    id?: string
    semester: number
    year: number
    createdAt?: Date | string
    course: CourseCreateNestedOneWithoutPlannedCoursesInput
    plan: PlanCreateNestedOneWithoutPlannedCoursesInput
  }

  export type PlannedCourseUncheckedCreateInput = {
    id?: string
    planId: string
    courseId: string
    semester: number
    year: number
    createdAt?: Date | string
  }

  export type PlannedCourseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutPlannedCoursesNestedInput
    plan?: PlanUpdateOneRequiredWithoutPlannedCoursesNestedInput
  }

  export type PlannedCourseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlannedCourseCreateManyInput = {
    id?: string
    planId: string
    courseId: string
    semester: number
    year: number
    createdAt?: Date | string
  }

  export type PlannedCourseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlannedCourseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PlanListRelationFilter = {
    every?: PlanWhereInput
    some?: PlanWhereInput
    none?: PlanWhereInput
  }

  export type MajorNullableScalarRelationFilter = {
    is?: MajorWhereInput | null
    isNot?: MajorWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PlanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    hashedPassword?: SortOrder
    fullName?: SortOrder
    studentYear?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    majorId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    hashedPassword?: SortOrder
    fullName?: SortOrder
    studentYear?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    majorId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    hashedPassword?: SortOrder
    fullName?: SortOrder
    studentYear?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    majorId?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type MajorCourseListRelationFilter = {
    every?: MajorCourseWhereInput
    some?: MajorCourseWhereInput
    none?: MajorCourseWhereInput
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type MajorCourseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MajorCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type MajorMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type MajorMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type PlannedCourseListRelationFilter = {
    every?: PlannedCourseWhereInput
    some?: PlannedCourseWhereInput
    none?: PlannedCourseWhereInput
  }

  export type PrerequisiteListRelationFilter = {
    every?: PrerequisiteWhereInput
    some?: PrerequisiteWhereInput
    none?: PrerequisiteWhereInput
  }

  export type CorequisiteListRelationFilter = {
    every?: CorequisiteWhereInput
    some?: CorequisiteWhereInput
    none?: CorequisiteWhereInput
  }

  export type PlannedCourseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PrerequisiteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CorequisiteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CourseCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    credits?: SortOrder
    description?: SortOrder
    recommendedSemester?: SortOrder
  }

  export type CourseAvgOrderByAggregateInput = {
    credits?: SortOrder
    recommendedSemester?: SortOrder
  }

  export type CourseMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    credits?: SortOrder
    description?: SortOrder
    recommendedSemester?: SortOrder
  }

  export type CourseMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    credits?: SortOrder
    description?: SortOrder
    recommendedSemester?: SortOrder
  }

  export type CourseSumOrderByAggregateInput = {
    credits?: SortOrder
    recommendedSemester?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type CourseScalarRelationFilter = {
    is?: CourseWhereInput
    isNot?: CourseWhereInput
  }

  export type MajorScalarRelationFilter = {
    is?: MajorWhereInput
    isNot?: MajorWhereInput
  }

  export type MajorCourseMajorIdCourseIdCompoundUniqueInput = {
    majorId: string
    courseId: string
  }

  export type MajorCourseCountOrderByAggregateInput = {
    id?: SortOrder
    majorId?: SortOrder
    courseId?: SortOrder
  }

  export type MajorCourseMaxOrderByAggregateInput = {
    id?: SortOrder
    majorId?: SortOrder
    courseId?: SortOrder
  }

  export type MajorCourseMinOrderByAggregateInput = {
    id?: SortOrder
    majorId?: SortOrder
    courseId?: SortOrder
  }

  export type PrerequisiteCourseIdPrerequisiteIdCompoundUniqueInput = {
    courseId: string
    prerequisiteId: string
  }

  export type PrerequisiteCountOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    prerequisiteId?: SortOrder
    groupId?: SortOrder
  }

  export type PrerequisiteAvgOrderByAggregateInput = {
    groupId?: SortOrder
  }

  export type PrerequisiteMaxOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    prerequisiteId?: SortOrder
    groupId?: SortOrder
  }

  export type PrerequisiteMinOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    prerequisiteId?: SortOrder
    groupId?: SortOrder
  }

  export type PrerequisiteSumOrderByAggregateInput = {
    groupId?: SortOrder
  }

  export type CorequisiteCourseIdCorequisiteIdCompoundUniqueInput = {
    courseId: string
    corequisiteId: string
  }

  export type CorequisiteCountOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    corequisiteId?: SortOrder
  }

  export type CorequisiteMaxOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    corequisiteId?: SortOrder
  }

  export type CorequisiteMinOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    corequisiteId?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PlanCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlanMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlanMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlanScalarRelationFilter = {
    is?: PlanWhereInput
    isNot?: PlanWhereInput
  }

  export type PlannedCoursePlanIdCourseIdCompoundUniqueInput = {
    planId: string
    courseId: string
  }

  export type PlannedCourseCountOrderByAggregateInput = {
    id?: SortOrder
    planId?: SortOrder
    courseId?: SortOrder
    semester?: SortOrder
    year?: SortOrder
    createdAt?: SortOrder
  }

  export type PlannedCourseAvgOrderByAggregateInput = {
    semester?: SortOrder
    year?: SortOrder
  }

  export type PlannedCourseMaxOrderByAggregateInput = {
    id?: SortOrder
    planId?: SortOrder
    courseId?: SortOrder
    semester?: SortOrder
    year?: SortOrder
    createdAt?: SortOrder
  }

  export type PlannedCourseMinOrderByAggregateInput = {
    id?: SortOrder
    planId?: SortOrder
    courseId?: SortOrder
    semester?: SortOrder
    year?: SortOrder
    createdAt?: SortOrder
  }

  export type PlannedCourseSumOrderByAggregateInput = {
    semester?: SortOrder
    year?: SortOrder
  }

  export type PlanCreateNestedManyWithoutUserInput = {
    create?: XOR<PlanCreateWithoutUserInput, PlanUncheckedCreateWithoutUserInput> | PlanCreateWithoutUserInput[] | PlanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlanCreateOrConnectWithoutUserInput | PlanCreateOrConnectWithoutUserInput[]
    createMany?: PlanCreateManyUserInputEnvelope
    connect?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
  }

  export type MajorCreateNestedOneWithoutUsersInput = {
    create?: XOR<MajorCreateWithoutUsersInput, MajorUncheckedCreateWithoutUsersInput>
    connectOrCreate?: MajorCreateOrConnectWithoutUsersInput
    connect?: MajorWhereUniqueInput
  }

  export type PlanUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PlanCreateWithoutUserInput, PlanUncheckedCreateWithoutUserInput> | PlanCreateWithoutUserInput[] | PlanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlanCreateOrConnectWithoutUserInput | PlanCreateOrConnectWithoutUserInput[]
    createMany?: PlanCreateManyUserInputEnvelope
    connect?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PlanUpdateManyWithoutUserNestedInput = {
    create?: XOR<PlanCreateWithoutUserInput, PlanUncheckedCreateWithoutUserInput> | PlanCreateWithoutUserInput[] | PlanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlanCreateOrConnectWithoutUserInput | PlanCreateOrConnectWithoutUserInput[]
    upsert?: PlanUpsertWithWhereUniqueWithoutUserInput | PlanUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PlanCreateManyUserInputEnvelope
    set?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
    disconnect?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
    delete?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
    connect?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
    update?: PlanUpdateWithWhereUniqueWithoutUserInput | PlanUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PlanUpdateManyWithWhereWithoutUserInput | PlanUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PlanScalarWhereInput | PlanScalarWhereInput[]
  }

  export type MajorUpdateOneWithoutUsersNestedInput = {
    create?: XOR<MajorCreateWithoutUsersInput, MajorUncheckedCreateWithoutUsersInput>
    connectOrCreate?: MajorCreateOrConnectWithoutUsersInput
    upsert?: MajorUpsertWithoutUsersInput
    disconnect?: MajorWhereInput | boolean
    delete?: MajorWhereInput | boolean
    connect?: MajorWhereUniqueInput
    update?: XOR<XOR<MajorUpdateToOneWithWhereWithoutUsersInput, MajorUpdateWithoutUsersInput>, MajorUncheckedUpdateWithoutUsersInput>
  }

  export type PlanUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PlanCreateWithoutUserInput, PlanUncheckedCreateWithoutUserInput> | PlanCreateWithoutUserInput[] | PlanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlanCreateOrConnectWithoutUserInput | PlanCreateOrConnectWithoutUserInput[]
    upsert?: PlanUpsertWithWhereUniqueWithoutUserInput | PlanUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PlanCreateManyUserInputEnvelope
    set?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
    disconnect?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
    delete?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
    connect?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
    update?: PlanUpdateWithWhereUniqueWithoutUserInput | PlanUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PlanUpdateManyWithWhereWithoutUserInput | PlanUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PlanScalarWhereInput | PlanScalarWhereInput[]
  }

  export type MajorCourseCreateNestedManyWithoutMajorInput = {
    create?: XOR<MajorCourseCreateWithoutMajorInput, MajorCourseUncheckedCreateWithoutMajorInput> | MajorCourseCreateWithoutMajorInput[] | MajorCourseUncheckedCreateWithoutMajorInput[]
    connectOrCreate?: MajorCourseCreateOrConnectWithoutMajorInput | MajorCourseCreateOrConnectWithoutMajorInput[]
    createMany?: MajorCourseCreateManyMajorInputEnvelope
    connect?: MajorCourseWhereUniqueInput | MajorCourseWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutMajorInput = {
    create?: XOR<UserCreateWithoutMajorInput, UserUncheckedCreateWithoutMajorInput> | UserCreateWithoutMajorInput[] | UserUncheckedCreateWithoutMajorInput[]
    connectOrCreate?: UserCreateOrConnectWithoutMajorInput | UserCreateOrConnectWithoutMajorInput[]
    createMany?: UserCreateManyMajorInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type MajorCourseUncheckedCreateNestedManyWithoutMajorInput = {
    create?: XOR<MajorCourseCreateWithoutMajorInput, MajorCourseUncheckedCreateWithoutMajorInput> | MajorCourseCreateWithoutMajorInput[] | MajorCourseUncheckedCreateWithoutMajorInput[]
    connectOrCreate?: MajorCourseCreateOrConnectWithoutMajorInput | MajorCourseCreateOrConnectWithoutMajorInput[]
    createMany?: MajorCourseCreateManyMajorInputEnvelope
    connect?: MajorCourseWhereUniqueInput | MajorCourseWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutMajorInput = {
    create?: XOR<UserCreateWithoutMajorInput, UserUncheckedCreateWithoutMajorInput> | UserCreateWithoutMajorInput[] | UserUncheckedCreateWithoutMajorInput[]
    connectOrCreate?: UserCreateOrConnectWithoutMajorInput | UserCreateOrConnectWithoutMajorInput[]
    createMany?: UserCreateManyMajorInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type MajorCourseUpdateManyWithoutMajorNestedInput = {
    create?: XOR<MajorCourseCreateWithoutMajorInput, MajorCourseUncheckedCreateWithoutMajorInput> | MajorCourseCreateWithoutMajorInput[] | MajorCourseUncheckedCreateWithoutMajorInput[]
    connectOrCreate?: MajorCourseCreateOrConnectWithoutMajorInput | MajorCourseCreateOrConnectWithoutMajorInput[]
    upsert?: MajorCourseUpsertWithWhereUniqueWithoutMajorInput | MajorCourseUpsertWithWhereUniqueWithoutMajorInput[]
    createMany?: MajorCourseCreateManyMajorInputEnvelope
    set?: MajorCourseWhereUniqueInput | MajorCourseWhereUniqueInput[]
    disconnect?: MajorCourseWhereUniqueInput | MajorCourseWhereUniqueInput[]
    delete?: MajorCourseWhereUniqueInput | MajorCourseWhereUniqueInput[]
    connect?: MajorCourseWhereUniqueInput | MajorCourseWhereUniqueInput[]
    update?: MajorCourseUpdateWithWhereUniqueWithoutMajorInput | MajorCourseUpdateWithWhereUniqueWithoutMajorInput[]
    updateMany?: MajorCourseUpdateManyWithWhereWithoutMajorInput | MajorCourseUpdateManyWithWhereWithoutMajorInput[]
    deleteMany?: MajorCourseScalarWhereInput | MajorCourseScalarWhereInput[]
  }

  export type UserUpdateManyWithoutMajorNestedInput = {
    create?: XOR<UserCreateWithoutMajorInput, UserUncheckedCreateWithoutMajorInput> | UserCreateWithoutMajorInput[] | UserUncheckedCreateWithoutMajorInput[]
    connectOrCreate?: UserCreateOrConnectWithoutMajorInput | UserCreateOrConnectWithoutMajorInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutMajorInput | UserUpsertWithWhereUniqueWithoutMajorInput[]
    createMany?: UserCreateManyMajorInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutMajorInput | UserUpdateWithWhereUniqueWithoutMajorInput[]
    updateMany?: UserUpdateManyWithWhereWithoutMajorInput | UserUpdateManyWithWhereWithoutMajorInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type MajorCourseUncheckedUpdateManyWithoutMajorNestedInput = {
    create?: XOR<MajorCourseCreateWithoutMajorInput, MajorCourseUncheckedCreateWithoutMajorInput> | MajorCourseCreateWithoutMajorInput[] | MajorCourseUncheckedCreateWithoutMajorInput[]
    connectOrCreate?: MajorCourseCreateOrConnectWithoutMajorInput | MajorCourseCreateOrConnectWithoutMajorInput[]
    upsert?: MajorCourseUpsertWithWhereUniqueWithoutMajorInput | MajorCourseUpsertWithWhereUniqueWithoutMajorInput[]
    createMany?: MajorCourseCreateManyMajorInputEnvelope
    set?: MajorCourseWhereUniqueInput | MajorCourseWhereUniqueInput[]
    disconnect?: MajorCourseWhereUniqueInput | MajorCourseWhereUniqueInput[]
    delete?: MajorCourseWhereUniqueInput | MajorCourseWhereUniqueInput[]
    connect?: MajorCourseWhereUniqueInput | MajorCourseWhereUniqueInput[]
    update?: MajorCourseUpdateWithWhereUniqueWithoutMajorInput | MajorCourseUpdateWithWhereUniqueWithoutMajorInput[]
    updateMany?: MajorCourseUpdateManyWithWhereWithoutMajorInput | MajorCourseUpdateManyWithWhereWithoutMajorInput[]
    deleteMany?: MajorCourseScalarWhereInput | MajorCourseScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutMajorNestedInput = {
    create?: XOR<UserCreateWithoutMajorInput, UserUncheckedCreateWithoutMajorInput> | UserCreateWithoutMajorInput[] | UserUncheckedCreateWithoutMajorInput[]
    connectOrCreate?: UserCreateOrConnectWithoutMajorInput | UserCreateOrConnectWithoutMajorInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutMajorInput | UserUpsertWithWhereUniqueWithoutMajorInput[]
    createMany?: UserCreateManyMajorInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutMajorInput | UserUpdateWithWhereUniqueWithoutMajorInput[]
    updateMany?: UserUpdateManyWithWhereWithoutMajorInput | UserUpdateManyWithWhereWithoutMajorInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type MajorCourseCreateNestedManyWithoutCourseInput = {
    create?: XOR<MajorCourseCreateWithoutCourseInput, MajorCourseUncheckedCreateWithoutCourseInput> | MajorCourseCreateWithoutCourseInput[] | MajorCourseUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: MajorCourseCreateOrConnectWithoutCourseInput | MajorCourseCreateOrConnectWithoutCourseInput[]
    createMany?: MajorCourseCreateManyCourseInputEnvelope
    connect?: MajorCourseWhereUniqueInput | MajorCourseWhereUniqueInput[]
  }

  export type PlannedCourseCreateNestedManyWithoutCourseInput = {
    create?: XOR<PlannedCourseCreateWithoutCourseInput, PlannedCourseUncheckedCreateWithoutCourseInput> | PlannedCourseCreateWithoutCourseInput[] | PlannedCourseUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: PlannedCourseCreateOrConnectWithoutCourseInput | PlannedCourseCreateOrConnectWithoutCourseInput[]
    createMany?: PlannedCourseCreateManyCourseInputEnvelope
    connect?: PlannedCourseWhereUniqueInput | PlannedCourseWhereUniqueInput[]
  }

  export type PrerequisiteCreateNestedManyWithoutCourseInput = {
    create?: XOR<PrerequisiteCreateWithoutCourseInput, PrerequisiteUncheckedCreateWithoutCourseInput> | PrerequisiteCreateWithoutCourseInput[] | PrerequisiteUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: PrerequisiteCreateOrConnectWithoutCourseInput | PrerequisiteCreateOrConnectWithoutCourseInput[]
    createMany?: PrerequisiteCreateManyCourseInputEnvelope
    connect?: PrerequisiteWhereUniqueInput | PrerequisiteWhereUniqueInput[]
  }

  export type PrerequisiteCreateNestedManyWithoutPrerequisiteInput = {
    create?: XOR<PrerequisiteCreateWithoutPrerequisiteInput, PrerequisiteUncheckedCreateWithoutPrerequisiteInput> | PrerequisiteCreateWithoutPrerequisiteInput[] | PrerequisiteUncheckedCreateWithoutPrerequisiteInput[]
    connectOrCreate?: PrerequisiteCreateOrConnectWithoutPrerequisiteInput | PrerequisiteCreateOrConnectWithoutPrerequisiteInput[]
    createMany?: PrerequisiteCreateManyPrerequisiteInputEnvelope
    connect?: PrerequisiteWhereUniqueInput | PrerequisiteWhereUniqueInput[]
  }

  export type CorequisiteCreateNestedManyWithoutCourseInput = {
    create?: XOR<CorequisiteCreateWithoutCourseInput, CorequisiteUncheckedCreateWithoutCourseInput> | CorequisiteCreateWithoutCourseInput[] | CorequisiteUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CorequisiteCreateOrConnectWithoutCourseInput | CorequisiteCreateOrConnectWithoutCourseInput[]
    createMany?: CorequisiteCreateManyCourseInputEnvelope
    connect?: CorequisiteWhereUniqueInput | CorequisiteWhereUniqueInput[]
  }

  export type CorequisiteCreateNestedManyWithoutCorequisiteInput = {
    create?: XOR<CorequisiteCreateWithoutCorequisiteInput, CorequisiteUncheckedCreateWithoutCorequisiteInput> | CorequisiteCreateWithoutCorequisiteInput[] | CorequisiteUncheckedCreateWithoutCorequisiteInput[]
    connectOrCreate?: CorequisiteCreateOrConnectWithoutCorequisiteInput | CorequisiteCreateOrConnectWithoutCorequisiteInput[]
    createMany?: CorequisiteCreateManyCorequisiteInputEnvelope
    connect?: CorequisiteWhereUniqueInput | CorequisiteWhereUniqueInput[]
  }

  export type MajorCourseUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<MajorCourseCreateWithoutCourseInput, MajorCourseUncheckedCreateWithoutCourseInput> | MajorCourseCreateWithoutCourseInput[] | MajorCourseUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: MajorCourseCreateOrConnectWithoutCourseInput | MajorCourseCreateOrConnectWithoutCourseInput[]
    createMany?: MajorCourseCreateManyCourseInputEnvelope
    connect?: MajorCourseWhereUniqueInput | MajorCourseWhereUniqueInput[]
  }

  export type PlannedCourseUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<PlannedCourseCreateWithoutCourseInput, PlannedCourseUncheckedCreateWithoutCourseInput> | PlannedCourseCreateWithoutCourseInput[] | PlannedCourseUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: PlannedCourseCreateOrConnectWithoutCourseInput | PlannedCourseCreateOrConnectWithoutCourseInput[]
    createMany?: PlannedCourseCreateManyCourseInputEnvelope
    connect?: PlannedCourseWhereUniqueInput | PlannedCourseWhereUniqueInput[]
  }

  export type PrerequisiteUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<PrerequisiteCreateWithoutCourseInput, PrerequisiteUncheckedCreateWithoutCourseInput> | PrerequisiteCreateWithoutCourseInput[] | PrerequisiteUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: PrerequisiteCreateOrConnectWithoutCourseInput | PrerequisiteCreateOrConnectWithoutCourseInput[]
    createMany?: PrerequisiteCreateManyCourseInputEnvelope
    connect?: PrerequisiteWhereUniqueInput | PrerequisiteWhereUniqueInput[]
  }

  export type PrerequisiteUncheckedCreateNestedManyWithoutPrerequisiteInput = {
    create?: XOR<PrerequisiteCreateWithoutPrerequisiteInput, PrerequisiteUncheckedCreateWithoutPrerequisiteInput> | PrerequisiteCreateWithoutPrerequisiteInput[] | PrerequisiteUncheckedCreateWithoutPrerequisiteInput[]
    connectOrCreate?: PrerequisiteCreateOrConnectWithoutPrerequisiteInput | PrerequisiteCreateOrConnectWithoutPrerequisiteInput[]
    createMany?: PrerequisiteCreateManyPrerequisiteInputEnvelope
    connect?: PrerequisiteWhereUniqueInput | PrerequisiteWhereUniqueInput[]
  }

  export type CorequisiteUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<CorequisiteCreateWithoutCourseInput, CorequisiteUncheckedCreateWithoutCourseInput> | CorequisiteCreateWithoutCourseInput[] | CorequisiteUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CorequisiteCreateOrConnectWithoutCourseInput | CorequisiteCreateOrConnectWithoutCourseInput[]
    createMany?: CorequisiteCreateManyCourseInputEnvelope
    connect?: CorequisiteWhereUniqueInput | CorequisiteWhereUniqueInput[]
  }

  export type CorequisiteUncheckedCreateNestedManyWithoutCorequisiteInput = {
    create?: XOR<CorequisiteCreateWithoutCorequisiteInput, CorequisiteUncheckedCreateWithoutCorequisiteInput> | CorequisiteCreateWithoutCorequisiteInput[] | CorequisiteUncheckedCreateWithoutCorequisiteInput[]
    connectOrCreate?: CorequisiteCreateOrConnectWithoutCorequisiteInput | CorequisiteCreateOrConnectWithoutCorequisiteInput[]
    createMany?: CorequisiteCreateManyCorequisiteInputEnvelope
    connect?: CorequisiteWhereUniqueInput | CorequisiteWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MajorCourseUpdateManyWithoutCourseNestedInput = {
    create?: XOR<MajorCourseCreateWithoutCourseInput, MajorCourseUncheckedCreateWithoutCourseInput> | MajorCourseCreateWithoutCourseInput[] | MajorCourseUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: MajorCourseCreateOrConnectWithoutCourseInput | MajorCourseCreateOrConnectWithoutCourseInput[]
    upsert?: MajorCourseUpsertWithWhereUniqueWithoutCourseInput | MajorCourseUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: MajorCourseCreateManyCourseInputEnvelope
    set?: MajorCourseWhereUniqueInput | MajorCourseWhereUniqueInput[]
    disconnect?: MajorCourseWhereUniqueInput | MajorCourseWhereUniqueInput[]
    delete?: MajorCourseWhereUniqueInput | MajorCourseWhereUniqueInput[]
    connect?: MajorCourseWhereUniqueInput | MajorCourseWhereUniqueInput[]
    update?: MajorCourseUpdateWithWhereUniqueWithoutCourseInput | MajorCourseUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: MajorCourseUpdateManyWithWhereWithoutCourseInput | MajorCourseUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: MajorCourseScalarWhereInput | MajorCourseScalarWhereInput[]
  }

  export type PlannedCourseUpdateManyWithoutCourseNestedInput = {
    create?: XOR<PlannedCourseCreateWithoutCourseInput, PlannedCourseUncheckedCreateWithoutCourseInput> | PlannedCourseCreateWithoutCourseInput[] | PlannedCourseUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: PlannedCourseCreateOrConnectWithoutCourseInput | PlannedCourseCreateOrConnectWithoutCourseInput[]
    upsert?: PlannedCourseUpsertWithWhereUniqueWithoutCourseInput | PlannedCourseUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: PlannedCourseCreateManyCourseInputEnvelope
    set?: PlannedCourseWhereUniqueInput | PlannedCourseWhereUniqueInput[]
    disconnect?: PlannedCourseWhereUniqueInput | PlannedCourseWhereUniqueInput[]
    delete?: PlannedCourseWhereUniqueInput | PlannedCourseWhereUniqueInput[]
    connect?: PlannedCourseWhereUniqueInput | PlannedCourseWhereUniqueInput[]
    update?: PlannedCourseUpdateWithWhereUniqueWithoutCourseInput | PlannedCourseUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: PlannedCourseUpdateManyWithWhereWithoutCourseInput | PlannedCourseUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: PlannedCourseScalarWhereInput | PlannedCourseScalarWhereInput[]
  }

  export type PrerequisiteUpdateManyWithoutCourseNestedInput = {
    create?: XOR<PrerequisiteCreateWithoutCourseInput, PrerequisiteUncheckedCreateWithoutCourseInput> | PrerequisiteCreateWithoutCourseInput[] | PrerequisiteUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: PrerequisiteCreateOrConnectWithoutCourseInput | PrerequisiteCreateOrConnectWithoutCourseInput[]
    upsert?: PrerequisiteUpsertWithWhereUniqueWithoutCourseInput | PrerequisiteUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: PrerequisiteCreateManyCourseInputEnvelope
    set?: PrerequisiteWhereUniqueInput | PrerequisiteWhereUniqueInput[]
    disconnect?: PrerequisiteWhereUniqueInput | PrerequisiteWhereUniqueInput[]
    delete?: PrerequisiteWhereUniqueInput | PrerequisiteWhereUniqueInput[]
    connect?: PrerequisiteWhereUniqueInput | PrerequisiteWhereUniqueInput[]
    update?: PrerequisiteUpdateWithWhereUniqueWithoutCourseInput | PrerequisiteUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: PrerequisiteUpdateManyWithWhereWithoutCourseInput | PrerequisiteUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: PrerequisiteScalarWhereInput | PrerequisiteScalarWhereInput[]
  }

  export type PrerequisiteUpdateManyWithoutPrerequisiteNestedInput = {
    create?: XOR<PrerequisiteCreateWithoutPrerequisiteInput, PrerequisiteUncheckedCreateWithoutPrerequisiteInput> | PrerequisiteCreateWithoutPrerequisiteInput[] | PrerequisiteUncheckedCreateWithoutPrerequisiteInput[]
    connectOrCreate?: PrerequisiteCreateOrConnectWithoutPrerequisiteInput | PrerequisiteCreateOrConnectWithoutPrerequisiteInput[]
    upsert?: PrerequisiteUpsertWithWhereUniqueWithoutPrerequisiteInput | PrerequisiteUpsertWithWhereUniqueWithoutPrerequisiteInput[]
    createMany?: PrerequisiteCreateManyPrerequisiteInputEnvelope
    set?: PrerequisiteWhereUniqueInput | PrerequisiteWhereUniqueInput[]
    disconnect?: PrerequisiteWhereUniqueInput | PrerequisiteWhereUniqueInput[]
    delete?: PrerequisiteWhereUniqueInput | PrerequisiteWhereUniqueInput[]
    connect?: PrerequisiteWhereUniqueInput | PrerequisiteWhereUniqueInput[]
    update?: PrerequisiteUpdateWithWhereUniqueWithoutPrerequisiteInput | PrerequisiteUpdateWithWhereUniqueWithoutPrerequisiteInput[]
    updateMany?: PrerequisiteUpdateManyWithWhereWithoutPrerequisiteInput | PrerequisiteUpdateManyWithWhereWithoutPrerequisiteInput[]
    deleteMany?: PrerequisiteScalarWhereInput | PrerequisiteScalarWhereInput[]
  }

  export type CorequisiteUpdateManyWithoutCourseNestedInput = {
    create?: XOR<CorequisiteCreateWithoutCourseInput, CorequisiteUncheckedCreateWithoutCourseInput> | CorequisiteCreateWithoutCourseInput[] | CorequisiteUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CorequisiteCreateOrConnectWithoutCourseInput | CorequisiteCreateOrConnectWithoutCourseInput[]
    upsert?: CorequisiteUpsertWithWhereUniqueWithoutCourseInput | CorequisiteUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: CorequisiteCreateManyCourseInputEnvelope
    set?: CorequisiteWhereUniqueInput | CorequisiteWhereUniqueInput[]
    disconnect?: CorequisiteWhereUniqueInput | CorequisiteWhereUniqueInput[]
    delete?: CorequisiteWhereUniqueInput | CorequisiteWhereUniqueInput[]
    connect?: CorequisiteWhereUniqueInput | CorequisiteWhereUniqueInput[]
    update?: CorequisiteUpdateWithWhereUniqueWithoutCourseInput | CorequisiteUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: CorequisiteUpdateManyWithWhereWithoutCourseInput | CorequisiteUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: CorequisiteScalarWhereInput | CorequisiteScalarWhereInput[]
  }

  export type CorequisiteUpdateManyWithoutCorequisiteNestedInput = {
    create?: XOR<CorequisiteCreateWithoutCorequisiteInput, CorequisiteUncheckedCreateWithoutCorequisiteInput> | CorequisiteCreateWithoutCorequisiteInput[] | CorequisiteUncheckedCreateWithoutCorequisiteInput[]
    connectOrCreate?: CorequisiteCreateOrConnectWithoutCorequisiteInput | CorequisiteCreateOrConnectWithoutCorequisiteInput[]
    upsert?: CorequisiteUpsertWithWhereUniqueWithoutCorequisiteInput | CorequisiteUpsertWithWhereUniqueWithoutCorequisiteInput[]
    createMany?: CorequisiteCreateManyCorequisiteInputEnvelope
    set?: CorequisiteWhereUniqueInput | CorequisiteWhereUniqueInput[]
    disconnect?: CorequisiteWhereUniqueInput | CorequisiteWhereUniqueInput[]
    delete?: CorequisiteWhereUniqueInput | CorequisiteWhereUniqueInput[]
    connect?: CorequisiteWhereUniqueInput | CorequisiteWhereUniqueInput[]
    update?: CorequisiteUpdateWithWhereUniqueWithoutCorequisiteInput | CorequisiteUpdateWithWhereUniqueWithoutCorequisiteInput[]
    updateMany?: CorequisiteUpdateManyWithWhereWithoutCorequisiteInput | CorequisiteUpdateManyWithWhereWithoutCorequisiteInput[]
    deleteMany?: CorequisiteScalarWhereInput | CorequisiteScalarWhereInput[]
  }

  export type MajorCourseUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<MajorCourseCreateWithoutCourseInput, MajorCourseUncheckedCreateWithoutCourseInput> | MajorCourseCreateWithoutCourseInput[] | MajorCourseUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: MajorCourseCreateOrConnectWithoutCourseInput | MajorCourseCreateOrConnectWithoutCourseInput[]
    upsert?: MajorCourseUpsertWithWhereUniqueWithoutCourseInput | MajorCourseUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: MajorCourseCreateManyCourseInputEnvelope
    set?: MajorCourseWhereUniqueInput | MajorCourseWhereUniqueInput[]
    disconnect?: MajorCourseWhereUniqueInput | MajorCourseWhereUniqueInput[]
    delete?: MajorCourseWhereUniqueInput | MajorCourseWhereUniqueInput[]
    connect?: MajorCourseWhereUniqueInput | MajorCourseWhereUniqueInput[]
    update?: MajorCourseUpdateWithWhereUniqueWithoutCourseInput | MajorCourseUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: MajorCourseUpdateManyWithWhereWithoutCourseInput | MajorCourseUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: MajorCourseScalarWhereInput | MajorCourseScalarWhereInput[]
  }

  export type PlannedCourseUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<PlannedCourseCreateWithoutCourseInput, PlannedCourseUncheckedCreateWithoutCourseInput> | PlannedCourseCreateWithoutCourseInput[] | PlannedCourseUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: PlannedCourseCreateOrConnectWithoutCourseInput | PlannedCourseCreateOrConnectWithoutCourseInput[]
    upsert?: PlannedCourseUpsertWithWhereUniqueWithoutCourseInput | PlannedCourseUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: PlannedCourseCreateManyCourseInputEnvelope
    set?: PlannedCourseWhereUniqueInput | PlannedCourseWhereUniqueInput[]
    disconnect?: PlannedCourseWhereUniqueInput | PlannedCourseWhereUniqueInput[]
    delete?: PlannedCourseWhereUniqueInput | PlannedCourseWhereUniqueInput[]
    connect?: PlannedCourseWhereUniqueInput | PlannedCourseWhereUniqueInput[]
    update?: PlannedCourseUpdateWithWhereUniqueWithoutCourseInput | PlannedCourseUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: PlannedCourseUpdateManyWithWhereWithoutCourseInput | PlannedCourseUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: PlannedCourseScalarWhereInput | PlannedCourseScalarWhereInput[]
  }

  export type PrerequisiteUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<PrerequisiteCreateWithoutCourseInput, PrerequisiteUncheckedCreateWithoutCourseInput> | PrerequisiteCreateWithoutCourseInput[] | PrerequisiteUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: PrerequisiteCreateOrConnectWithoutCourseInput | PrerequisiteCreateOrConnectWithoutCourseInput[]
    upsert?: PrerequisiteUpsertWithWhereUniqueWithoutCourseInput | PrerequisiteUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: PrerequisiteCreateManyCourseInputEnvelope
    set?: PrerequisiteWhereUniqueInput | PrerequisiteWhereUniqueInput[]
    disconnect?: PrerequisiteWhereUniqueInput | PrerequisiteWhereUniqueInput[]
    delete?: PrerequisiteWhereUniqueInput | PrerequisiteWhereUniqueInput[]
    connect?: PrerequisiteWhereUniqueInput | PrerequisiteWhereUniqueInput[]
    update?: PrerequisiteUpdateWithWhereUniqueWithoutCourseInput | PrerequisiteUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: PrerequisiteUpdateManyWithWhereWithoutCourseInput | PrerequisiteUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: PrerequisiteScalarWhereInput | PrerequisiteScalarWhereInput[]
  }

  export type PrerequisiteUncheckedUpdateManyWithoutPrerequisiteNestedInput = {
    create?: XOR<PrerequisiteCreateWithoutPrerequisiteInput, PrerequisiteUncheckedCreateWithoutPrerequisiteInput> | PrerequisiteCreateWithoutPrerequisiteInput[] | PrerequisiteUncheckedCreateWithoutPrerequisiteInput[]
    connectOrCreate?: PrerequisiteCreateOrConnectWithoutPrerequisiteInput | PrerequisiteCreateOrConnectWithoutPrerequisiteInput[]
    upsert?: PrerequisiteUpsertWithWhereUniqueWithoutPrerequisiteInput | PrerequisiteUpsertWithWhereUniqueWithoutPrerequisiteInput[]
    createMany?: PrerequisiteCreateManyPrerequisiteInputEnvelope
    set?: PrerequisiteWhereUniqueInput | PrerequisiteWhereUniqueInput[]
    disconnect?: PrerequisiteWhereUniqueInput | PrerequisiteWhereUniqueInput[]
    delete?: PrerequisiteWhereUniqueInput | PrerequisiteWhereUniqueInput[]
    connect?: PrerequisiteWhereUniqueInput | PrerequisiteWhereUniqueInput[]
    update?: PrerequisiteUpdateWithWhereUniqueWithoutPrerequisiteInput | PrerequisiteUpdateWithWhereUniqueWithoutPrerequisiteInput[]
    updateMany?: PrerequisiteUpdateManyWithWhereWithoutPrerequisiteInput | PrerequisiteUpdateManyWithWhereWithoutPrerequisiteInput[]
    deleteMany?: PrerequisiteScalarWhereInput | PrerequisiteScalarWhereInput[]
  }

  export type CorequisiteUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<CorequisiteCreateWithoutCourseInput, CorequisiteUncheckedCreateWithoutCourseInput> | CorequisiteCreateWithoutCourseInput[] | CorequisiteUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CorequisiteCreateOrConnectWithoutCourseInput | CorequisiteCreateOrConnectWithoutCourseInput[]
    upsert?: CorequisiteUpsertWithWhereUniqueWithoutCourseInput | CorequisiteUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: CorequisiteCreateManyCourseInputEnvelope
    set?: CorequisiteWhereUniqueInput | CorequisiteWhereUniqueInput[]
    disconnect?: CorequisiteWhereUniqueInput | CorequisiteWhereUniqueInput[]
    delete?: CorequisiteWhereUniqueInput | CorequisiteWhereUniqueInput[]
    connect?: CorequisiteWhereUniqueInput | CorequisiteWhereUniqueInput[]
    update?: CorequisiteUpdateWithWhereUniqueWithoutCourseInput | CorequisiteUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: CorequisiteUpdateManyWithWhereWithoutCourseInput | CorequisiteUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: CorequisiteScalarWhereInput | CorequisiteScalarWhereInput[]
  }

  export type CorequisiteUncheckedUpdateManyWithoutCorequisiteNestedInput = {
    create?: XOR<CorequisiteCreateWithoutCorequisiteInput, CorequisiteUncheckedCreateWithoutCorequisiteInput> | CorequisiteCreateWithoutCorequisiteInput[] | CorequisiteUncheckedCreateWithoutCorequisiteInput[]
    connectOrCreate?: CorequisiteCreateOrConnectWithoutCorequisiteInput | CorequisiteCreateOrConnectWithoutCorequisiteInput[]
    upsert?: CorequisiteUpsertWithWhereUniqueWithoutCorequisiteInput | CorequisiteUpsertWithWhereUniqueWithoutCorequisiteInput[]
    createMany?: CorequisiteCreateManyCorequisiteInputEnvelope
    set?: CorequisiteWhereUniqueInput | CorequisiteWhereUniqueInput[]
    disconnect?: CorequisiteWhereUniqueInput | CorequisiteWhereUniqueInput[]
    delete?: CorequisiteWhereUniqueInput | CorequisiteWhereUniqueInput[]
    connect?: CorequisiteWhereUniqueInput | CorequisiteWhereUniqueInput[]
    update?: CorequisiteUpdateWithWhereUniqueWithoutCorequisiteInput | CorequisiteUpdateWithWhereUniqueWithoutCorequisiteInput[]
    updateMany?: CorequisiteUpdateManyWithWhereWithoutCorequisiteInput | CorequisiteUpdateManyWithWhereWithoutCorequisiteInput[]
    deleteMany?: CorequisiteScalarWhereInput | CorequisiteScalarWhereInput[]
  }

  export type CourseCreateNestedOneWithoutMajorsInput = {
    create?: XOR<CourseCreateWithoutMajorsInput, CourseUncheckedCreateWithoutMajorsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutMajorsInput
    connect?: CourseWhereUniqueInput
  }

  export type MajorCreateNestedOneWithoutCoursesInput = {
    create?: XOR<MajorCreateWithoutCoursesInput, MajorUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: MajorCreateOrConnectWithoutCoursesInput
    connect?: MajorWhereUniqueInput
  }

  export type CourseUpdateOneRequiredWithoutMajorsNestedInput = {
    create?: XOR<CourseCreateWithoutMajorsInput, CourseUncheckedCreateWithoutMajorsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutMajorsInput
    upsert?: CourseUpsertWithoutMajorsInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutMajorsInput, CourseUpdateWithoutMajorsInput>, CourseUncheckedUpdateWithoutMajorsInput>
  }

  export type MajorUpdateOneRequiredWithoutCoursesNestedInput = {
    create?: XOR<MajorCreateWithoutCoursesInput, MajorUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: MajorCreateOrConnectWithoutCoursesInput
    upsert?: MajorUpsertWithoutCoursesInput
    connect?: MajorWhereUniqueInput
    update?: XOR<XOR<MajorUpdateToOneWithWhereWithoutCoursesInput, MajorUpdateWithoutCoursesInput>, MajorUncheckedUpdateWithoutCoursesInput>
  }

  export type CourseCreateNestedOneWithoutPrerequisitesInput = {
    create?: XOR<CourseCreateWithoutPrerequisitesInput, CourseUncheckedCreateWithoutPrerequisitesInput>
    connectOrCreate?: CourseCreateOrConnectWithoutPrerequisitesInput
    connect?: CourseWhereUniqueInput
  }

  export type CourseCreateNestedOneWithoutIsPrereqForInput = {
    create?: XOR<CourseCreateWithoutIsPrereqForInput, CourseUncheckedCreateWithoutIsPrereqForInput>
    connectOrCreate?: CourseCreateOrConnectWithoutIsPrereqForInput
    connect?: CourseWhereUniqueInput
  }

  export type CourseUpdateOneRequiredWithoutPrerequisitesNestedInput = {
    create?: XOR<CourseCreateWithoutPrerequisitesInput, CourseUncheckedCreateWithoutPrerequisitesInput>
    connectOrCreate?: CourseCreateOrConnectWithoutPrerequisitesInput
    upsert?: CourseUpsertWithoutPrerequisitesInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutPrerequisitesInput, CourseUpdateWithoutPrerequisitesInput>, CourseUncheckedUpdateWithoutPrerequisitesInput>
  }

  export type CourseUpdateOneRequiredWithoutIsPrereqForNestedInput = {
    create?: XOR<CourseCreateWithoutIsPrereqForInput, CourseUncheckedCreateWithoutIsPrereqForInput>
    connectOrCreate?: CourseCreateOrConnectWithoutIsPrereqForInput
    upsert?: CourseUpsertWithoutIsPrereqForInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutIsPrereqForInput, CourseUpdateWithoutIsPrereqForInput>, CourseUncheckedUpdateWithoutIsPrereqForInput>
  }

  export type CourseCreateNestedOneWithoutCorequisitesInput = {
    create?: XOR<CourseCreateWithoutCorequisitesInput, CourseUncheckedCreateWithoutCorequisitesInput>
    connectOrCreate?: CourseCreateOrConnectWithoutCorequisitesInput
    connect?: CourseWhereUniqueInput
  }

  export type CourseCreateNestedOneWithoutIsCoreqForInput = {
    create?: XOR<CourseCreateWithoutIsCoreqForInput, CourseUncheckedCreateWithoutIsCoreqForInput>
    connectOrCreate?: CourseCreateOrConnectWithoutIsCoreqForInput
    connect?: CourseWhereUniqueInput
  }

  export type CourseUpdateOneRequiredWithoutCorequisitesNestedInput = {
    create?: XOR<CourseCreateWithoutCorequisitesInput, CourseUncheckedCreateWithoutCorequisitesInput>
    connectOrCreate?: CourseCreateOrConnectWithoutCorequisitesInput
    upsert?: CourseUpsertWithoutCorequisitesInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutCorequisitesInput, CourseUpdateWithoutCorequisitesInput>, CourseUncheckedUpdateWithoutCorequisitesInput>
  }

  export type CourseUpdateOneRequiredWithoutIsCoreqForNestedInput = {
    create?: XOR<CourseCreateWithoutIsCoreqForInput, CourseUncheckedCreateWithoutIsCoreqForInput>
    connectOrCreate?: CourseCreateOrConnectWithoutIsCoreqForInput
    upsert?: CourseUpsertWithoutIsCoreqForInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutIsCoreqForInput, CourseUpdateWithoutIsCoreqForInput>, CourseUncheckedUpdateWithoutIsCoreqForInput>
  }

  export type UserCreateNestedOneWithoutPlansInput = {
    create?: XOR<UserCreateWithoutPlansInput, UserUncheckedCreateWithoutPlansInput>
    connectOrCreate?: UserCreateOrConnectWithoutPlansInput
    connect?: UserWhereUniqueInput
  }

  export type PlannedCourseCreateNestedManyWithoutPlanInput = {
    create?: XOR<PlannedCourseCreateWithoutPlanInput, PlannedCourseUncheckedCreateWithoutPlanInput> | PlannedCourseCreateWithoutPlanInput[] | PlannedCourseUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: PlannedCourseCreateOrConnectWithoutPlanInput | PlannedCourseCreateOrConnectWithoutPlanInput[]
    createMany?: PlannedCourseCreateManyPlanInputEnvelope
    connect?: PlannedCourseWhereUniqueInput | PlannedCourseWhereUniqueInput[]
  }

  export type PlannedCourseUncheckedCreateNestedManyWithoutPlanInput = {
    create?: XOR<PlannedCourseCreateWithoutPlanInput, PlannedCourseUncheckedCreateWithoutPlanInput> | PlannedCourseCreateWithoutPlanInput[] | PlannedCourseUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: PlannedCourseCreateOrConnectWithoutPlanInput | PlannedCourseCreateOrConnectWithoutPlanInput[]
    createMany?: PlannedCourseCreateManyPlanInputEnvelope
    connect?: PlannedCourseWhereUniqueInput | PlannedCourseWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutPlansNestedInput = {
    create?: XOR<UserCreateWithoutPlansInput, UserUncheckedCreateWithoutPlansInput>
    connectOrCreate?: UserCreateOrConnectWithoutPlansInput
    upsert?: UserUpsertWithoutPlansInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPlansInput, UserUpdateWithoutPlansInput>, UserUncheckedUpdateWithoutPlansInput>
  }

  export type PlannedCourseUpdateManyWithoutPlanNestedInput = {
    create?: XOR<PlannedCourseCreateWithoutPlanInput, PlannedCourseUncheckedCreateWithoutPlanInput> | PlannedCourseCreateWithoutPlanInput[] | PlannedCourseUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: PlannedCourseCreateOrConnectWithoutPlanInput | PlannedCourseCreateOrConnectWithoutPlanInput[]
    upsert?: PlannedCourseUpsertWithWhereUniqueWithoutPlanInput | PlannedCourseUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: PlannedCourseCreateManyPlanInputEnvelope
    set?: PlannedCourseWhereUniqueInput | PlannedCourseWhereUniqueInput[]
    disconnect?: PlannedCourseWhereUniqueInput | PlannedCourseWhereUniqueInput[]
    delete?: PlannedCourseWhereUniqueInput | PlannedCourseWhereUniqueInput[]
    connect?: PlannedCourseWhereUniqueInput | PlannedCourseWhereUniqueInput[]
    update?: PlannedCourseUpdateWithWhereUniqueWithoutPlanInput | PlannedCourseUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: PlannedCourseUpdateManyWithWhereWithoutPlanInput | PlannedCourseUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: PlannedCourseScalarWhereInput | PlannedCourseScalarWhereInput[]
  }

  export type PlannedCourseUncheckedUpdateManyWithoutPlanNestedInput = {
    create?: XOR<PlannedCourseCreateWithoutPlanInput, PlannedCourseUncheckedCreateWithoutPlanInput> | PlannedCourseCreateWithoutPlanInput[] | PlannedCourseUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: PlannedCourseCreateOrConnectWithoutPlanInput | PlannedCourseCreateOrConnectWithoutPlanInput[]
    upsert?: PlannedCourseUpsertWithWhereUniqueWithoutPlanInput | PlannedCourseUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: PlannedCourseCreateManyPlanInputEnvelope
    set?: PlannedCourseWhereUniqueInput | PlannedCourseWhereUniqueInput[]
    disconnect?: PlannedCourseWhereUniqueInput | PlannedCourseWhereUniqueInput[]
    delete?: PlannedCourseWhereUniqueInput | PlannedCourseWhereUniqueInput[]
    connect?: PlannedCourseWhereUniqueInput | PlannedCourseWhereUniqueInput[]
    update?: PlannedCourseUpdateWithWhereUniqueWithoutPlanInput | PlannedCourseUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: PlannedCourseUpdateManyWithWhereWithoutPlanInput | PlannedCourseUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: PlannedCourseScalarWhereInput | PlannedCourseScalarWhereInput[]
  }

  export type CourseCreateNestedOneWithoutPlannedCoursesInput = {
    create?: XOR<CourseCreateWithoutPlannedCoursesInput, CourseUncheckedCreateWithoutPlannedCoursesInput>
    connectOrCreate?: CourseCreateOrConnectWithoutPlannedCoursesInput
    connect?: CourseWhereUniqueInput
  }

  export type PlanCreateNestedOneWithoutPlannedCoursesInput = {
    create?: XOR<PlanCreateWithoutPlannedCoursesInput, PlanUncheckedCreateWithoutPlannedCoursesInput>
    connectOrCreate?: PlanCreateOrConnectWithoutPlannedCoursesInput
    connect?: PlanWhereUniqueInput
  }

  export type CourseUpdateOneRequiredWithoutPlannedCoursesNestedInput = {
    create?: XOR<CourseCreateWithoutPlannedCoursesInput, CourseUncheckedCreateWithoutPlannedCoursesInput>
    connectOrCreate?: CourseCreateOrConnectWithoutPlannedCoursesInput
    upsert?: CourseUpsertWithoutPlannedCoursesInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutPlannedCoursesInput, CourseUpdateWithoutPlannedCoursesInput>, CourseUncheckedUpdateWithoutPlannedCoursesInput>
  }

  export type PlanUpdateOneRequiredWithoutPlannedCoursesNestedInput = {
    create?: XOR<PlanCreateWithoutPlannedCoursesInput, PlanUncheckedCreateWithoutPlannedCoursesInput>
    connectOrCreate?: PlanCreateOrConnectWithoutPlannedCoursesInput
    upsert?: PlanUpsertWithoutPlannedCoursesInput
    connect?: PlanWhereUniqueInput
    update?: XOR<XOR<PlanUpdateToOneWithWhereWithoutPlannedCoursesInput, PlanUpdateWithoutPlannedCoursesInput>, PlanUncheckedUpdateWithoutPlannedCoursesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type PlanCreateWithoutUserInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    plannedCourses?: PlannedCourseCreateNestedManyWithoutPlanInput
  }

  export type PlanUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    plannedCourses?: PlannedCourseUncheckedCreateNestedManyWithoutPlanInput
  }

  export type PlanCreateOrConnectWithoutUserInput = {
    where: PlanWhereUniqueInput
    create: XOR<PlanCreateWithoutUserInput, PlanUncheckedCreateWithoutUserInput>
  }

  export type PlanCreateManyUserInputEnvelope = {
    data: PlanCreateManyUserInput | PlanCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MajorCreateWithoutUsersInput = {
    id?: string
    name: string
    description?: string | null
    courses?: MajorCourseCreateNestedManyWithoutMajorInput
  }

  export type MajorUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    description?: string | null
    courses?: MajorCourseUncheckedCreateNestedManyWithoutMajorInput
  }

  export type MajorCreateOrConnectWithoutUsersInput = {
    where: MajorWhereUniqueInput
    create: XOR<MajorCreateWithoutUsersInput, MajorUncheckedCreateWithoutUsersInput>
  }

  export type PlanUpsertWithWhereUniqueWithoutUserInput = {
    where: PlanWhereUniqueInput
    update: XOR<PlanUpdateWithoutUserInput, PlanUncheckedUpdateWithoutUserInput>
    create: XOR<PlanCreateWithoutUserInput, PlanUncheckedCreateWithoutUserInput>
  }

  export type PlanUpdateWithWhereUniqueWithoutUserInput = {
    where: PlanWhereUniqueInput
    data: XOR<PlanUpdateWithoutUserInput, PlanUncheckedUpdateWithoutUserInput>
  }

  export type PlanUpdateManyWithWhereWithoutUserInput = {
    where: PlanScalarWhereInput
    data: XOR<PlanUpdateManyMutationInput, PlanUncheckedUpdateManyWithoutUserInput>
  }

  export type PlanScalarWhereInput = {
    AND?: PlanScalarWhereInput | PlanScalarWhereInput[]
    OR?: PlanScalarWhereInput[]
    NOT?: PlanScalarWhereInput | PlanScalarWhereInput[]
    id?: StringFilter<"Plan"> | string
    name?: StringFilter<"Plan"> | string
    userId?: StringFilter<"Plan"> | string
    createdAt?: DateTimeFilter<"Plan"> | Date | string
    updatedAt?: DateTimeFilter<"Plan"> | Date | string
  }

  export type MajorUpsertWithoutUsersInput = {
    update: XOR<MajorUpdateWithoutUsersInput, MajorUncheckedUpdateWithoutUsersInput>
    create: XOR<MajorCreateWithoutUsersInput, MajorUncheckedCreateWithoutUsersInput>
    where?: MajorWhereInput
  }

  export type MajorUpdateToOneWithWhereWithoutUsersInput = {
    where?: MajorWhereInput
    data: XOR<MajorUpdateWithoutUsersInput, MajorUncheckedUpdateWithoutUsersInput>
  }

  export type MajorUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    courses?: MajorCourseUpdateManyWithoutMajorNestedInput
  }

  export type MajorUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    courses?: MajorCourseUncheckedUpdateManyWithoutMajorNestedInput
  }

  export type MajorCourseCreateWithoutMajorInput = {
    id?: string
    course: CourseCreateNestedOneWithoutMajorsInput
  }

  export type MajorCourseUncheckedCreateWithoutMajorInput = {
    id?: string
    courseId: string
  }

  export type MajorCourseCreateOrConnectWithoutMajorInput = {
    where: MajorCourseWhereUniqueInput
    create: XOR<MajorCourseCreateWithoutMajorInput, MajorCourseUncheckedCreateWithoutMajorInput>
  }

  export type MajorCourseCreateManyMajorInputEnvelope = {
    data: MajorCourseCreateManyMajorInput | MajorCourseCreateManyMajorInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutMajorInput = {
    id?: string
    email: string
    hashedPassword: string
    fullName: string
    studentYear?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    plans?: PlanCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMajorInput = {
    id?: string
    email: string
    hashedPassword: string
    fullName: string
    studentYear?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    plans?: PlanUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMajorInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMajorInput, UserUncheckedCreateWithoutMajorInput>
  }

  export type UserCreateManyMajorInputEnvelope = {
    data: UserCreateManyMajorInput | UserCreateManyMajorInput[]
    skipDuplicates?: boolean
  }

  export type MajorCourseUpsertWithWhereUniqueWithoutMajorInput = {
    where: MajorCourseWhereUniqueInput
    update: XOR<MajorCourseUpdateWithoutMajorInput, MajorCourseUncheckedUpdateWithoutMajorInput>
    create: XOR<MajorCourseCreateWithoutMajorInput, MajorCourseUncheckedCreateWithoutMajorInput>
  }

  export type MajorCourseUpdateWithWhereUniqueWithoutMajorInput = {
    where: MajorCourseWhereUniqueInput
    data: XOR<MajorCourseUpdateWithoutMajorInput, MajorCourseUncheckedUpdateWithoutMajorInput>
  }

  export type MajorCourseUpdateManyWithWhereWithoutMajorInput = {
    where: MajorCourseScalarWhereInput
    data: XOR<MajorCourseUpdateManyMutationInput, MajorCourseUncheckedUpdateManyWithoutMajorInput>
  }

  export type MajorCourseScalarWhereInput = {
    AND?: MajorCourseScalarWhereInput | MajorCourseScalarWhereInput[]
    OR?: MajorCourseScalarWhereInput[]
    NOT?: MajorCourseScalarWhereInput | MajorCourseScalarWhereInput[]
    id?: StringFilter<"MajorCourse"> | string
    majorId?: StringFilter<"MajorCourse"> | string
    courseId?: StringFilter<"MajorCourse"> | string
  }

  export type UserUpsertWithWhereUniqueWithoutMajorInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutMajorInput, UserUncheckedUpdateWithoutMajorInput>
    create: XOR<UserCreateWithoutMajorInput, UserUncheckedCreateWithoutMajorInput>
  }

  export type UserUpdateWithWhereUniqueWithoutMajorInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutMajorInput, UserUncheckedUpdateWithoutMajorInput>
  }

  export type UserUpdateManyWithWhereWithoutMajorInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutMajorInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    hashedPassword?: StringFilter<"User"> | string
    fullName?: StringFilter<"User"> | string
    studentYear?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    majorId?: StringNullableFilter<"User"> | string | null
  }

  export type MajorCourseCreateWithoutCourseInput = {
    id?: string
    major: MajorCreateNestedOneWithoutCoursesInput
  }

  export type MajorCourseUncheckedCreateWithoutCourseInput = {
    id?: string
    majorId: string
  }

  export type MajorCourseCreateOrConnectWithoutCourseInput = {
    where: MajorCourseWhereUniqueInput
    create: XOR<MajorCourseCreateWithoutCourseInput, MajorCourseUncheckedCreateWithoutCourseInput>
  }

  export type MajorCourseCreateManyCourseInputEnvelope = {
    data: MajorCourseCreateManyCourseInput | MajorCourseCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type PlannedCourseCreateWithoutCourseInput = {
    id?: string
    semester: number
    year: number
    createdAt?: Date | string
    plan: PlanCreateNestedOneWithoutPlannedCoursesInput
  }

  export type PlannedCourseUncheckedCreateWithoutCourseInput = {
    id?: string
    planId: string
    semester: number
    year: number
    createdAt?: Date | string
  }

  export type PlannedCourseCreateOrConnectWithoutCourseInput = {
    where: PlannedCourseWhereUniqueInput
    create: XOR<PlannedCourseCreateWithoutCourseInput, PlannedCourseUncheckedCreateWithoutCourseInput>
  }

  export type PlannedCourseCreateManyCourseInputEnvelope = {
    data: PlannedCourseCreateManyCourseInput | PlannedCourseCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type PrerequisiteCreateWithoutCourseInput = {
    id?: string
    groupId: number
    prerequisite: CourseCreateNestedOneWithoutIsPrereqForInput
  }

  export type PrerequisiteUncheckedCreateWithoutCourseInput = {
    id?: string
    prerequisiteId: string
    groupId: number
  }

  export type PrerequisiteCreateOrConnectWithoutCourseInput = {
    where: PrerequisiteWhereUniqueInput
    create: XOR<PrerequisiteCreateWithoutCourseInput, PrerequisiteUncheckedCreateWithoutCourseInput>
  }

  export type PrerequisiteCreateManyCourseInputEnvelope = {
    data: PrerequisiteCreateManyCourseInput | PrerequisiteCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type PrerequisiteCreateWithoutPrerequisiteInput = {
    id?: string
    groupId: number
    course: CourseCreateNestedOneWithoutPrerequisitesInput
  }

  export type PrerequisiteUncheckedCreateWithoutPrerequisiteInput = {
    id?: string
    courseId: string
    groupId: number
  }

  export type PrerequisiteCreateOrConnectWithoutPrerequisiteInput = {
    where: PrerequisiteWhereUniqueInput
    create: XOR<PrerequisiteCreateWithoutPrerequisiteInput, PrerequisiteUncheckedCreateWithoutPrerequisiteInput>
  }

  export type PrerequisiteCreateManyPrerequisiteInputEnvelope = {
    data: PrerequisiteCreateManyPrerequisiteInput | PrerequisiteCreateManyPrerequisiteInput[]
    skipDuplicates?: boolean
  }

  export type CorequisiteCreateWithoutCourseInput = {
    id?: string
    corequisite: CourseCreateNestedOneWithoutIsCoreqForInput
  }

  export type CorequisiteUncheckedCreateWithoutCourseInput = {
    id?: string
    corequisiteId: string
  }

  export type CorequisiteCreateOrConnectWithoutCourseInput = {
    where: CorequisiteWhereUniqueInput
    create: XOR<CorequisiteCreateWithoutCourseInput, CorequisiteUncheckedCreateWithoutCourseInput>
  }

  export type CorequisiteCreateManyCourseInputEnvelope = {
    data: CorequisiteCreateManyCourseInput | CorequisiteCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type CorequisiteCreateWithoutCorequisiteInput = {
    id?: string
    course: CourseCreateNestedOneWithoutCorequisitesInput
  }

  export type CorequisiteUncheckedCreateWithoutCorequisiteInput = {
    id?: string
    courseId: string
  }

  export type CorequisiteCreateOrConnectWithoutCorequisiteInput = {
    where: CorequisiteWhereUniqueInput
    create: XOR<CorequisiteCreateWithoutCorequisiteInput, CorequisiteUncheckedCreateWithoutCorequisiteInput>
  }

  export type CorequisiteCreateManyCorequisiteInputEnvelope = {
    data: CorequisiteCreateManyCorequisiteInput | CorequisiteCreateManyCorequisiteInput[]
    skipDuplicates?: boolean
  }

  export type MajorCourseUpsertWithWhereUniqueWithoutCourseInput = {
    where: MajorCourseWhereUniqueInput
    update: XOR<MajorCourseUpdateWithoutCourseInput, MajorCourseUncheckedUpdateWithoutCourseInput>
    create: XOR<MajorCourseCreateWithoutCourseInput, MajorCourseUncheckedCreateWithoutCourseInput>
  }

  export type MajorCourseUpdateWithWhereUniqueWithoutCourseInput = {
    where: MajorCourseWhereUniqueInput
    data: XOR<MajorCourseUpdateWithoutCourseInput, MajorCourseUncheckedUpdateWithoutCourseInput>
  }

  export type MajorCourseUpdateManyWithWhereWithoutCourseInput = {
    where: MajorCourseScalarWhereInput
    data: XOR<MajorCourseUpdateManyMutationInput, MajorCourseUncheckedUpdateManyWithoutCourseInput>
  }

  export type PlannedCourseUpsertWithWhereUniqueWithoutCourseInput = {
    where: PlannedCourseWhereUniqueInput
    update: XOR<PlannedCourseUpdateWithoutCourseInput, PlannedCourseUncheckedUpdateWithoutCourseInput>
    create: XOR<PlannedCourseCreateWithoutCourseInput, PlannedCourseUncheckedCreateWithoutCourseInput>
  }

  export type PlannedCourseUpdateWithWhereUniqueWithoutCourseInput = {
    where: PlannedCourseWhereUniqueInput
    data: XOR<PlannedCourseUpdateWithoutCourseInput, PlannedCourseUncheckedUpdateWithoutCourseInput>
  }

  export type PlannedCourseUpdateManyWithWhereWithoutCourseInput = {
    where: PlannedCourseScalarWhereInput
    data: XOR<PlannedCourseUpdateManyMutationInput, PlannedCourseUncheckedUpdateManyWithoutCourseInput>
  }

  export type PlannedCourseScalarWhereInput = {
    AND?: PlannedCourseScalarWhereInput | PlannedCourseScalarWhereInput[]
    OR?: PlannedCourseScalarWhereInput[]
    NOT?: PlannedCourseScalarWhereInput | PlannedCourseScalarWhereInput[]
    id?: StringFilter<"PlannedCourse"> | string
    planId?: StringFilter<"PlannedCourse"> | string
    courseId?: StringFilter<"PlannedCourse"> | string
    semester?: IntFilter<"PlannedCourse"> | number
    year?: IntFilter<"PlannedCourse"> | number
    createdAt?: DateTimeFilter<"PlannedCourse"> | Date | string
  }

  export type PrerequisiteUpsertWithWhereUniqueWithoutCourseInput = {
    where: PrerequisiteWhereUniqueInput
    update: XOR<PrerequisiteUpdateWithoutCourseInput, PrerequisiteUncheckedUpdateWithoutCourseInput>
    create: XOR<PrerequisiteCreateWithoutCourseInput, PrerequisiteUncheckedCreateWithoutCourseInput>
  }

  export type PrerequisiteUpdateWithWhereUniqueWithoutCourseInput = {
    where: PrerequisiteWhereUniqueInput
    data: XOR<PrerequisiteUpdateWithoutCourseInput, PrerequisiteUncheckedUpdateWithoutCourseInput>
  }

  export type PrerequisiteUpdateManyWithWhereWithoutCourseInput = {
    where: PrerequisiteScalarWhereInput
    data: XOR<PrerequisiteUpdateManyMutationInput, PrerequisiteUncheckedUpdateManyWithoutCourseInput>
  }

  export type PrerequisiteScalarWhereInput = {
    AND?: PrerequisiteScalarWhereInput | PrerequisiteScalarWhereInput[]
    OR?: PrerequisiteScalarWhereInput[]
    NOT?: PrerequisiteScalarWhereInput | PrerequisiteScalarWhereInput[]
    id?: StringFilter<"Prerequisite"> | string
    courseId?: StringFilter<"Prerequisite"> | string
    prerequisiteId?: StringFilter<"Prerequisite"> | string
    groupId?: IntFilter<"Prerequisite"> | number
  }

  export type PrerequisiteUpsertWithWhereUniqueWithoutPrerequisiteInput = {
    where: PrerequisiteWhereUniqueInput
    update: XOR<PrerequisiteUpdateWithoutPrerequisiteInput, PrerequisiteUncheckedUpdateWithoutPrerequisiteInput>
    create: XOR<PrerequisiteCreateWithoutPrerequisiteInput, PrerequisiteUncheckedCreateWithoutPrerequisiteInput>
  }

  export type PrerequisiteUpdateWithWhereUniqueWithoutPrerequisiteInput = {
    where: PrerequisiteWhereUniqueInput
    data: XOR<PrerequisiteUpdateWithoutPrerequisiteInput, PrerequisiteUncheckedUpdateWithoutPrerequisiteInput>
  }

  export type PrerequisiteUpdateManyWithWhereWithoutPrerequisiteInput = {
    where: PrerequisiteScalarWhereInput
    data: XOR<PrerequisiteUpdateManyMutationInput, PrerequisiteUncheckedUpdateManyWithoutPrerequisiteInput>
  }

  export type CorequisiteUpsertWithWhereUniqueWithoutCourseInput = {
    where: CorequisiteWhereUniqueInput
    update: XOR<CorequisiteUpdateWithoutCourseInput, CorequisiteUncheckedUpdateWithoutCourseInput>
    create: XOR<CorequisiteCreateWithoutCourseInput, CorequisiteUncheckedCreateWithoutCourseInput>
  }

  export type CorequisiteUpdateWithWhereUniqueWithoutCourseInput = {
    where: CorequisiteWhereUniqueInput
    data: XOR<CorequisiteUpdateWithoutCourseInput, CorequisiteUncheckedUpdateWithoutCourseInput>
  }

  export type CorequisiteUpdateManyWithWhereWithoutCourseInput = {
    where: CorequisiteScalarWhereInput
    data: XOR<CorequisiteUpdateManyMutationInput, CorequisiteUncheckedUpdateManyWithoutCourseInput>
  }

  export type CorequisiteScalarWhereInput = {
    AND?: CorequisiteScalarWhereInput | CorequisiteScalarWhereInput[]
    OR?: CorequisiteScalarWhereInput[]
    NOT?: CorequisiteScalarWhereInput | CorequisiteScalarWhereInput[]
    id?: StringFilter<"Corequisite"> | string
    courseId?: StringFilter<"Corequisite"> | string
    corequisiteId?: StringFilter<"Corequisite"> | string
  }

  export type CorequisiteUpsertWithWhereUniqueWithoutCorequisiteInput = {
    where: CorequisiteWhereUniqueInput
    update: XOR<CorequisiteUpdateWithoutCorequisiteInput, CorequisiteUncheckedUpdateWithoutCorequisiteInput>
    create: XOR<CorequisiteCreateWithoutCorequisiteInput, CorequisiteUncheckedCreateWithoutCorequisiteInput>
  }

  export type CorequisiteUpdateWithWhereUniqueWithoutCorequisiteInput = {
    where: CorequisiteWhereUniqueInput
    data: XOR<CorequisiteUpdateWithoutCorequisiteInput, CorequisiteUncheckedUpdateWithoutCorequisiteInput>
  }

  export type CorequisiteUpdateManyWithWhereWithoutCorequisiteInput = {
    where: CorequisiteScalarWhereInput
    data: XOR<CorequisiteUpdateManyMutationInput, CorequisiteUncheckedUpdateManyWithoutCorequisiteInput>
  }

  export type CourseCreateWithoutMajorsInput = {
    id?: string
    code: string
    name: string
    credits: number
    description?: string | null
    recommendedSemester?: number | null
    plannedCourses?: PlannedCourseCreateNestedManyWithoutCourseInput
    prerequisites?: PrerequisiteCreateNestedManyWithoutCourseInput
    isPrereqFor?: PrerequisiteCreateNestedManyWithoutPrerequisiteInput
    corequisites?: CorequisiteCreateNestedManyWithoutCourseInput
    isCoreqFor?: CorequisiteCreateNestedManyWithoutCorequisiteInput
  }

  export type CourseUncheckedCreateWithoutMajorsInput = {
    id?: string
    code: string
    name: string
    credits: number
    description?: string | null
    recommendedSemester?: number | null
    plannedCourses?: PlannedCourseUncheckedCreateNestedManyWithoutCourseInput
    prerequisites?: PrerequisiteUncheckedCreateNestedManyWithoutCourseInput
    isPrereqFor?: PrerequisiteUncheckedCreateNestedManyWithoutPrerequisiteInput
    corequisites?: CorequisiteUncheckedCreateNestedManyWithoutCourseInput
    isCoreqFor?: CorequisiteUncheckedCreateNestedManyWithoutCorequisiteInput
  }

  export type CourseCreateOrConnectWithoutMajorsInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutMajorsInput, CourseUncheckedCreateWithoutMajorsInput>
  }

  export type MajorCreateWithoutCoursesInput = {
    id?: string
    name: string
    description?: string | null
    users?: UserCreateNestedManyWithoutMajorInput
  }

  export type MajorUncheckedCreateWithoutCoursesInput = {
    id?: string
    name: string
    description?: string | null
    users?: UserUncheckedCreateNestedManyWithoutMajorInput
  }

  export type MajorCreateOrConnectWithoutCoursesInput = {
    where: MajorWhereUniqueInput
    create: XOR<MajorCreateWithoutCoursesInput, MajorUncheckedCreateWithoutCoursesInput>
  }

  export type CourseUpsertWithoutMajorsInput = {
    update: XOR<CourseUpdateWithoutMajorsInput, CourseUncheckedUpdateWithoutMajorsInput>
    create: XOR<CourseCreateWithoutMajorsInput, CourseUncheckedCreateWithoutMajorsInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutMajorsInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutMajorsInput, CourseUncheckedUpdateWithoutMajorsInput>
  }

  export type CourseUpdateWithoutMajorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    recommendedSemester?: NullableIntFieldUpdateOperationsInput | number | null
    plannedCourses?: PlannedCourseUpdateManyWithoutCourseNestedInput
    prerequisites?: PrerequisiteUpdateManyWithoutCourseNestedInput
    isPrereqFor?: PrerequisiteUpdateManyWithoutPrerequisiteNestedInput
    corequisites?: CorequisiteUpdateManyWithoutCourseNestedInput
    isCoreqFor?: CorequisiteUpdateManyWithoutCorequisiteNestedInput
  }

  export type CourseUncheckedUpdateWithoutMajorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    recommendedSemester?: NullableIntFieldUpdateOperationsInput | number | null
    plannedCourses?: PlannedCourseUncheckedUpdateManyWithoutCourseNestedInput
    prerequisites?: PrerequisiteUncheckedUpdateManyWithoutCourseNestedInput
    isPrereqFor?: PrerequisiteUncheckedUpdateManyWithoutPrerequisiteNestedInput
    corequisites?: CorequisiteUncheckedUpdateManyWithoutCourseNestedInput
    isCoreqFor?: CorequisiteUncheckedUpdateManyWithoutCorequisiteNestedInput
  }

  export type MajorUpsertWithoutCoursesInput = {
    update: XOR<MajorUpdateWithoutCoursesInput, MajorUncheckedUpdateWithoutCoursesInput>
    create: XOR<MajorCreateWithoutCoursesInput, MajorUncheckedCreateWithoutCoursesInput>
    where?: MajorWhereInput
  }

  export type MajorUpdateToOneWithWhereWithoutCoursesInput = {
    where?: MajorWhereInput
    data: XOR<MajorUpdateWithoutCoursesInput, MajorUncheckedUpdateWithoutCoursesInput>
  }

  export type MajorUpdateWithoutCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserUpdateManyWithoutMajorNestedInput
  }

  export type MajorUncheckedUpdateWithoutCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserUncheckedUpdateManyWithoutMajorNestedInput
  }

  export type CourseCreateWithoutPrerequisitesInput = {
    id?: string
    code: string
    name: string
    credits: number
    description?: string | null
    recommendedSemester?: number | null
    majors?: MajorCourseCreateNestedManyWithoutCourseInput
    plannedCourses?: PlannedCourseCreateNestedManyWithoutCourseInput
    isPrereqFor?: PrerequisiteCreateNestedManyWithoutPrerequisiteInput
    corequisites?: CorequisiteCreateNestedManyWithoutCourseInput
    isCoreqFor?: CorequisiteCreateNestedManyWithoutCorequisiteInput
  }

  export type CourseUncheckedCreateWithoutPrerequisitesInput = {
    id?: string
    code: string
    name: string
    credits: number
    description?: string | null
    recommendedSemester?: number | null
    majors?: MajorCourseUncheckedCreateNestedManyWithoutCourseInput
    plannedCourses?: PlannedCourseUncheckedCreateNestedManyWithoutCourseInput
    isPrereqFor?: PrerequisiteUncheckedCreateNestedManyWithoutPrerequisiteInput
    corequisites?: CorequisiteUncheckedCreateNestedManyWithoutCourseInput
    isCoreqFor?: CorequisiteUncheckedCreateNestedManyWithoutCorequisiteInput
  }

  export type CourseCreateOrConnectWithoutPrerequisitesInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutPrerequisitesInput, CourseUncheckedCreateWithoutPrerequisitesInput>
  }

  export type CourseCreateWithoutIsPrereqForInput = {
    id?: string
    code: string
    name: string
    credits: number
    description?: string | null
    recommendedSemester?: number | null
    majors?: MajorCourseCreateNestedManyWithoutCourseInput
    plannedCourses?: PlannedCourseCreateNestedManyWithoutCourseInput
    prerequisites?: PrerequisiteCreateNestedManyWithoutCourseInput
    corequisites?: CorequisiteCreateNestedManyWithoutCourseInput
    isCoreqFor?: CorequisiteCreateNestedManyWithoutCorequisiteInput
  }

  export type CourseUncheckedCreateWithoutIsPrereqForInput = {
    id?: string
    code: string
    name: string
    credits: number
    description?: string | null
    recommendedSemester?: number | null
    majors?: MajorCourseUncheckedCreateNestedManyWithoutCourseInput
    plannedCourses?: PlannedCourseUncheckedCreateNestedManyWithoutCourseInput
    prerequisites?: PrerequisiteUncheckedCreateNestedManyWithoutCourseInput
    corequisites?: CorequisiteUncheckedCreateNestedManyWithoutCourseInput
    isCoreqFor?: CorequisiteUncheckedCreateNestedManyWithoutCorequisiteInput
  }

  export type CourseCreateOrConnectWithoutIsPrereqForInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutIsPrereqForInput, CourseUncheckedCreateWithoutIsPrereqForInput>
  }

  export type CourseUpsertWithoutPrerequisitesInput = {
    update: XOR<CourseUpdateWithoutPrerequisitesInput, CourseUncheckedUpdateWithoutPrerequisitesInput>
    create: XOR<CourseCreateWithoutPrerequisitesInput, CourseUncheckedCreateWithoutPrerequisitesInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutPrerequisitesInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutPrerequisitesInput, CourseUncheckedUpdateWithoutPrerequisitesInput>
  }

  export type CourseUpdateWithoutPrerequisitesInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    recommendedSemester?: NullableIntFieldUpdateOperationsInput | number | null
    majors?: MajorCourseUpdateManyWithoutCourseNestedInput
    plannedCourses?: PlannedCourseUpdateManyWithoutCourseNestedInput
    isPrereqFor?: PrerequisiteUpdateManyWithoutPrerequisiteNestedInput
    corequisites?: CorequisiteUpdateManyWithoutCourseNestedInput
    isCoreqFor?: CorequisiteUpdateManyWithoutCorequisiteNestedInput
  }

  export type CourseUncheckedUpdateWithoutPrerequisitesInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    recommendedSemester?: NullableIntFieldUpdateOperationsInput | number | null
    majors?: MajorCourseUncheckedUpdateManyWithoutCourseNestedInput
    plannedCourses?: PlannedCourseUncheckedUpdateManyWithoutCourseNestedInput
    isPrereqFor?: PrerequisiteUncheckedUpdateManyWithoutPrerequisiteNestedInput
    corequisites?: CorequisiteUncheckedUpdateManyWithoutCourseNestedInput
    isCoreqFor?: CorequisiteUncheckedUpdateManyWithoutCorequisiteNestedInput
  }

  export type CourseUpsertWithoutIsPrereqForInput = {
    update: XOR<CourseUpdateWithoutIsPrereqForInput, CourseUncheckedUpdateWithoutIsPrereqForInput>
    create: XOR<CourseCreateWithoutIsPrereqForInput, CourseUncheckedCreateWithoutIsPrereqForInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutIsPrereqForInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutIsPrereqForInput, CourseUncheckedUpdateWithoutIsPrereqForInput>
  }

  export type CourseUpdateWithoutIsPrereqForInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    recommendedSemester?: NullableIntFieldUpdateOperationsInput | number | null
    majors?: MajorCourseUpdateManyWithoutCourseNestedInput
    plannedCourses?: PlannedCourseUpdateManyWithoutCourseNestedInput
    prerequisites?: PrerequisiteUpdateManyWithoutCourseNestedInput
    corequisites?: CorequisiteUpdateManyWithoutCourseNestedInput
    isCoreqFor?: CorequisiteUpdateManyWithoutCorequisiteNestedInput
  }

  export type CourseUncheckedUpdateWithoutIsPrereqForInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    recommendedSemester?: NullableIntFieldUpdateOperationsInput | number | null
    majors?: MajorCourseUncheckedUpdateManyWithoutCourseNestedInput
    plannedCourses?: PlannedCourseUncheckedUpdateManyWithoutCourseNestedInput
    prerequisites?: PrerequisiteUncheckedUpdateManyWithoutCourseNestedInput
    corequisites?: CorequisiteUncheckedUpdateManyWithoutCourseNestedInput
    isCoreqFor?: CorequisiteUncheckedUpdateManyWithoutCorequisiteNestedInput
  }

  export type CourseCreateWithoutCorequisitesInput = {
    id?: string
    code: string
    name: string
    credits: number
    description?: string | null
    recommendedSemester?: number | null
    majors?: MajorCourseCreateNestedManyWithoutCourseInput
    plannedCourses?: PlannedCourseCreateNestedManyWithoutCourseInput
    prerequisites?: PrerequisiteCreateNestedManyWithoutCourseInput
    isPrereqFor?: PrerequisiteCreateNestedManyWithoutPrerequisiteInput
    isCoreqFor?: CorequisiteCreateNestedManyWithoutCorequisiteInput
  }

  export type CourseUncheckedCreateWithoutCorequisitesInput = {
    id?: string
    code: string
    name: string
    credits: number
    description?: string | null
    recommendedSemester?: number | null
    majors?: MajorCourseUncheckedCreateNestedManyWithoutCourseInput
    plannedCourses?: PlannedCourseUncheckedCreateNestedManyWithoutCourseInput
    prerequisites?: PrerequisiteUncheckedCreateNestedManyWithoutCourseInput
    isPrereqFor?: PrerequisiteUncheckedCreateNestedManyWithoutPrerequisiteInput
    isCoreqFor?: CorequisiteUncheckedCreateNestedManyWithoutCorequisiteInput
  }

  export type CourseCreateOrConnectWithoutCorequisitesInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutCorequisitesInput, CourseUncheckedCreateWithoutCorequisitesInput>
  }

  export type CourseCreateWithoutIsCoreqForInput = {
    id?: string
    code: string
    name: string
    credits: number
    description?: string | null
    recommendedSemester?: number | null
    majors?: MajorCourseCreateNestedManyWithoutCourseInput
    plannedCourses?: PlannedCourseCreateNestedManyWithoutCourseInput
    prerequisites?: PrerequisiteCreateNestedManyWithoutCourseInput
    isPrereqFor?: PrerequisiteCreateNestedManyWithoutPrerequisiteInput
    corequisites?: CorequisiteCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutIsCoreqForInput = {
    id?: string
    code: string
    name: string
    credits: number
    description?: string | null
    recommendedSemester?: number | null
    majors?: MajorCourseUncheckedCreateNestedManyWithoutCourseInput
    plannedCourses?: PlannedCourseUncheckedCreateNestedManyWithoutCourseInput
    prerequisites?: PrerequisiteUncheckedCreateNestedManyWithoutCourseInput
    isPrereqFor?: PrerequisiteUncheckedCreateNestedManyWithoutPrerequisiteInput
    corequisites?: CorequisiteUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutIsCoreqForInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutIsCoreqForInput, CourseUncheckedCreateWithoutIsCoreqForInput>
  }

  export type CourseUpsertWithoutCorequisitesInput = {
    update: XOR<CourseUpdateWithoutCorequisitesInput, CourseUncheckedUpdateWithoutCorequisitesInput>
    create: XOR<CourseCreateWithoutCorequisitesInput, CourseUncheckedCreateWithoutCorequisitesInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutCorequisitesInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutCorequisitesInput, CourseUncheckedUpdateWithoutCorequisitesInput>
  }

  export type CourseUpdateWithoutCorequisitesInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    recommendedSemester?: NullableIntFieldUpdateOperationsInput | number | null
    majors?: MajorCourseUpdateManyWithoutCourseNestedInput
    plannedCourses?: PlannedCourseUpdateManyWithoutCourseNestedInput
    prerequisites?: PrerequisiteUpdateManyWithoutCourseNestedInput
    isPrereqFor?: PrerequisiteUpdateManyWithoutPrerequisiteNestedInput
    isCoreqFor?: CorequisiteUpdateManyWithoutCorequisiteNestedInput
  }

  export type CourseUncheckedUpdateWithoutCorequisitesInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    recommendedSemester?: NullableIntFieldUpdateOperationsInput | number | null
    majors?: MajorCourseUncheckedUpdateManyWithoutCourseNestedInput
    plannedCourses?: PlannedCourseUncheckedUpdateManyWithoutCourseNestedInput
    prerequisites?: PrerequisiteUncheckedUpdateManyWithoutCourseNestedInput
    isPrereqFor?: PrerequisiteUncheckedUpdateManyWithoutPrerequisiteNestedInput
    isCoreqFor?: CorequisiteUncheckedUpdateManyWithoutCorequisiteNestedInput
  }

  export type CourseUpsertWithoutIsCoreqForInput = {
    update: XOR<CourseUpdateWithoutIsCoreqForInput, CourseUncheckedUpdateWithoutIsCoreqForInput>
    create: XOR<CourseCreateWithoutIsCoreqForInput, CourseUncheckedCreateWithoutIsCoreqForInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutIsCoreqForInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutIsCoreqForInput, CourseUncheckedUpdateWithoutIsCoreqForInput>
  }

  export type CourseUpdateWithoutIsCoreqForInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    recommendedSemester?: NullableIntFieldUpdateOperationsInput | number | null
    majors?: MajorCourseUpdateManyWithoutCourseNestedInput
    plannedCourses?: PlannedCourseUpdateManyWithoutCourseNestedInput
    prerequisites?: PrerequisiteUpdateManyWithoutCourseNestedInput
    isPrereqFor?: PrerequisiteUpdateManyWithoutPrerequisiteNestedInput
    corequisites?: CorequisiteUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutIsCoreqForInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    recommendedSemester?: NullableIntFieldUpdateOperationsInput | number | null
    majors?: MajorCourseUncheckedUpdateManyWithoutCourseNestedInput
    plannedCourses?: PlannedCourseUncheckedUpdateManyWithoutCourseNestedInput
    prerequisites?: PrerequisiteUncheckedUpdateManyWithoutCourseNestedInput
    isPrereqFor?: PrerequisiteUncheckedUpdateManyWithoutPrerequisiteNestedInput
    corequisites?: CorequisiteUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type UserCreateWithoutPlansInput = {
    id?: string
    email: string
    hashedPassword: string
    fullName: string
    studentYear?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    major?: MajorCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutPlansInput = {
    id?: string
    email: string
    hashedPassword: string
    fullName: string
    studentYear?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    majorId?: string | null
  }

  export type UserCreateOrConnectWithoutPlansInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPlansInput, UserUncheckedCreateWithoutPlansInput>
  }

  export type PlannedCourseCreateWithoutPlanInput = {
    id?: string
    semester: number
    year: number
    createdAt?: Date | string
    course: CourseCreateNestedOneWithoutPlannedCoursesInput
  }

  export type PlannedCourseUncheckedCreateWithoutPlanInput = {
    id?: string
    courseId: string
    semester: number
    year: number
    createdAt?: Date | string
  }

  export type PlannedCourseCreateOrConnectWithoutPlanInput = {
    where: PlannedCourseWhereUniqueInput
    create: XOR<PlannedCourseCreateWithoutPlanInput, PlannedCourseUncheckedCreateWithoutPlanInput>
  }

  export type PlannedCourseCreateManyPlanInputEnvelope = {
    data: PlannedCourseCreateManyPlanInput | PlannedCourseCreateManyPlanInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPlansInput = {
    update: XOR<UserUpdateWithoutPlansInput, UserUncheckedUpdateWithoutPlansInput>
    create: XOR<UserCreateWithoutPlansInput, UserUncheckedCreateWithoutPlansInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPlansInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPlansInput, UserUncheckedUpdateWithoutPlansInput>
  }

  export type UserUpdateWithoutPlansInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    studentYear?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    major?: MajorUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutPlansInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    studentYear?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    majorId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlannedCourseUpsertWithWhereUniqueWithoutPlanInput = {
    where: PlannedCourseWhereUniqueInput
    update: XOR<PlannedCourseUpdateWithoutPlanInput, PlannedCourseUncheckedUpdateWithoutPlanInput>
    create: XOR<PlannedCourseCreateWithoutPlanInput, PlannedCourseUncheckedCreateWithoutPlanInput>
  }

  export type PlannedCourseUpdateWithWhereUniqueWithoutPlanInput = {
    where: PlannedCourseWhereUniqueInput
    data: XOR<PlannedCourseUpdateWithoutPlanInput, PlannedCourseUncheckedUpdateWithoutPlanInput>
  }

  export type PlannedCourseUpdateManyWithWhereWithoutPlanInput = {
    where: PlannedCourseScalarWhereInput
    data: XOR<PlannedCourseUpdateManyMutationInput, PlannedCourseUncheckedUpdateManyWithoutPlanInput>
  }

  export type CourseCreateWithoutPlannedCoursesInput = {
    id?: string
    code: string
    name: string
    credits: number
    description?: string | null
    recommendedSemester?: number | null
    majors?: MajorCourseCreateNestedManyWithoutCourseInput
    prerequisites?: PrerequisiteCreateNestedManyWithoutCourseInput
    isPrereqFor?: PrerequisiteCreateNestedManyWithoutPrerequisiteInput
    corequisites?: CorequisiteCreateNestedManyWithoutCourseInput
    isCoreqFor?: CorequisiteCreateNestedManyWithoutCorequisiteInput
  }

  export type CourseUncheckedCreateWithoutPlannedCoursesInput = {
    id?: string
    code: string
    name: string
    credits: number
    description?: string | null
    recommendedSemester?: number | null
    majors?: MajorCourseUncheckedCreateNestedManyWithoutCourseInput
    prerequisites?: PrerequisiteUncheckedCreateNestedManyWithoutCourseInput
    isPrereqFor?: PrerequisiteUncheckedCreateNestedManyWithoutPrerequisiteInput
    corequisites?: CorequisiteUncheckedCreateNestedManyWithoutCourseInput
    isCoreqFor?: CorequisiteUncheckedCreateNestedManyWithoutCorequisiteInput
  }

  export type CourseCreateOrConnectWithoutPlannedCoursesInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutPlannedCoursesInput, CourseUncheckedCreateWithoutPlannedCoursesInput>
  }

  export type PlanCreateWithoutPlannedCoursesInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPlansInput
  }

  export type PlanUncheckedCreateWithoutPlannedCoursesInput = {
    id?: string
    name: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlanCreateOrConnectWithoutPlannedCoursesInput = {
    where: PlanWhereUniqueInput
    create: XOR<PlanCreateWithoutPlannedCoursesInput, PlanUncheckedCreateWithoutPlannedCoursesInput>
  }

  export type CourseUpsertWithoutPlannedCoursesInput = {
    update: XOR<CourseUpdateWithoutPlannedCoursesInput, CourseUncheckedUpdateWithoutPlannedCoursesInput>
    create: XOR<CourseCreateWithoutPlannedCoursesInput, CourseUncheckedCreateWithoutPlannedCoursesInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutPlannedCoursesInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutPlannedCoursesInput, CourseUncheckedUpdateWithoutPlannedCoursesInput>
  }

  export type CourseUpdateWithoutPlannedCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    recommendedSemester?: NullableIntFieldUpdateOperationsInput | number | null
    majors?: MajorCourseUpdateManyWithoutCourseNestedInput
    prerequisites?: PrerequisiteUpdateManyWithoutCourseNestedInput
    isPrereqFor?: PrerequisiteUpdateManyWithoutPrerequisiteNestedInput
    corequisites?: CorequisiteUpdateManyWithoutCourseNestedInput
    isCoreqFor?: CorequisiteUpdateManyWithoutCorequisiteNestedInput
  }

  export type CourseUncheckedUpdateWithoutPlannedCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    recommendedSemester?: NullableIntFieldUpdateOperationsInput | number | null
    majors?: MajorCourseUncheckedUpdateManyWithoutCourseNestedInput
    prerequisites?: PrerequisiteUncheckedUpdateManyWithoutCourseNestedInput
    isPrereqFor?: PrerequisiteUncheckedUpdateManyWithoutPrerequisiteNestedInput
    corequisites?: CorequisiteUncheckedUpdateManyWithoutCourseNestedInput
    isCoreqFor?: CorequisiteUncheckedUpdateManyWithoutCorequisiteNestedInput
  }

  export type PlanUpsertWithoutPlannedCoursesInput = {
    update: XOR<PlanUpdateWithoutPlannedCoursesInput, PlanUncheckedUpdateWithoutPlannedCoursesInput>
    create: XOR<PlanCreateWithoutPlannedCoursesInput, PlanUncheckedCreateWithoutPlannedCoursesInput>
    where?: PlanWhereInput
  }

  export type PlanUpdateToOneWithWhereWithoutPlannedCoursesInput = {
    where?: PlanWhereInput
    data: XOR<PlanUpdateWithoutPlannedCoursesInput, PlanUncheckedUpdateWithoutPlannedCoursesInput>
  }

  export type PlanUpdateWithoutPlannedCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPlansNestedInput
  }

  export type PlanUncheckedUpdateWithoutPlannedCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlanCreateManyUserInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlanUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plannedCourses?: PlannedCourseUpdateManyWithoutPlanNestedInput
  }

  export type PlanUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plannedCourses?: PlannedCourseUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type PlanUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MajorCourseCreateManyMajorInput = {
    id?: string
    courseId: string
  }

  export type UserCreateManyMajorInput = {
    id?: string
    email: string
    hashedPassword: string
    fullName: string
    studentYear?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MajorCourseUpdateWithoutMajorInput = {
    id?: StringFieldUpdateOperationsInput | string
    course?: CourseUpdateOneRequiredWithoutMajorsNestedInput
  }

  export type MajorCourseUncheckedUpdateWithoutMajorInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
  }

  export type MajorCourseUncheckedUpdateManyWithoutMajorInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpdateWithoutMajorInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    studentYear?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plans?: PlanUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMajorInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    studentYear?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plans?: PlanUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutMajorInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    studentYear?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MajorCourseCreateManyCourseInput = {
    id?: string
    majorId: string
  }

  export type PlannedCourseCreateManyCourseInput = {
    id?: string
    planId: string
    semester: number
    year: number
    createdAt?: Date | string
  }

  export type PrerequisiteCreateManyCourseInput = {
    id?: string
    prerequisiteId: string
    groupId: number
  }

  export type PrerequisiteCreateManyPrerequisiteInput = {
    id?: string
    courseId: string
    groupId: number
  }

  export type CorequisiteCreateManyCourseInput = {
    id?: string
    corequisiteId: string
  }

  export type CorequisiteCreateManyCorequisiteInput = {
    id?: string
    courseId: string
  }

  export type MajorCourseUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    major?: MajorUpdateOneRequiredWithoutCoursesNestedInput
  }

  export type MajorCourseUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    majorId?: StringFieldUpdateOperationsInput | string
  }

  export type MajorCourseUncheckedUpdateManyWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    majorId?: StringFieldUpdateOperationsInput | string
  }

  export type PlannedCourseUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: PlanUpdateOneRequiredWithoutPlannedCoursesNestedInput
  }

  export type PlannedCourseUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlannedCourseUncheckedUpdateManyWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrerequisiteUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: IntFieldUpdateOperationsInput | number
    prerequisite?: CourseUpdateOneRequiredWithoutIsPrereqForNestedInput
  }

  export type PrerequisiteUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    prerequisiteId?: StringFieldUpdateOperationsInput | string
    groupId?: IntFieldUpdateOperationsInput | number
  }

  export type PrerequisiteUncheckedUpdateManyWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    prerequisiteId?: StringFieldUpdateOperationsInput | string
    groupId?: IntFieldUpdateOperationsInput | number
  }

  export type PrerequisiteUpdateWithoutPrerequisiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: IntFieldUpdateOperationsInput | number
    course?: CourseUpdateOneRequiredWithoutPrerequisitesNestedInput
  }

  export type PrerequisiteUncheckedUpdateWithoutPrerequisiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    groupId?: IntFieldUpdateOperationsInput | number
  }

  export type PrerequisiteUncheckedUpdateManyWithoutPrerequisiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    groupId?: IntFieldUpdateOperationsInput | number
  }

  export type CorequisiteUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    corequisite?: CourseUpdateOneRequiredWithoutIsCoreqForNestedInput
  }

  export type CorequisiteUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    corequisiteId?: StringFieldUpdateOperationsInput | string
  }

  export type CorequisiteUncheckedUpdateManyWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    corequisiteId?: StringFieldUpdateOperationsInput | string
  }

  export type CorequisiteUpdateWithoutCorequisiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    course?: CourseUpdateOneRequiredWithoutCorequisitesNestedInput
  }

  export type CorequisiteUncheckedUpdateWithoutCorequisiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
  }

  export type CorequisiteUncheckedUpdateManyWithoutCorequisiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
  }

  export type PlannedCourseCreateManyPlanInput = {
    id?: string
    courseId: string
    semester: number
    year: number
    createdAt?: Date | string
  }

  export type PlannedCourseUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutPlannedCoursesNestedInput
  }

  export type PlannedCourseUncheckedUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlannedCourseUncheckedUpdateManyWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



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