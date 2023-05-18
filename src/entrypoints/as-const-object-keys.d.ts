/// <reference path="utils.d.ts" />

type IfEquals<X, Y, A=X, B=never> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? A : B;


type ReadonlyKeys<T> = {
  [P in keyof T]-?: IfEquals<{ [Q in P]: T[P] }, { -readonly [Q in P]: T[P] }, never, P>
}[keyof T];


interface ObjectConstructor {
    keys<T>(obj: T): keyof T extends ReadonlyKeys<T> ? Array<keyof T> : Array<string>;
}