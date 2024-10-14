type ExcludeValue<T, V> = { [K in keyof T]: T[K] extends V ? never : K }[keyof T];
type IncludeValue<T, V> = { [K in keyof T]: T[K] extends V ? K : never }[keyof T];

export type OverridableUnion<T extends string | number | symbol, U = {}> =
  | ExcludeValue<U, false>
  | Exclude<T, IncludeValue<U, false>>;
/**
 * The new type will be overridable by the provided `Overrides`
 * ```ts
 *  declare module "@teatak/styles" {
 *    interface ColorOverrides {
 *      primary: false      //remove key
 *      customerA: true     //override key with DefaultValue
 *      customerB: string   //override key use string
 *    }
 *  }
 * ```
 * @template DefaultRecord, Overrides, Value
 * @param {DefaultRecord} defaultInterface - The default structure
 * @param {Overrides} overrideInterface - The interface that users will interact with to extend or remove keys
 * @param {DefaultValue} value - The value of the extended keys
 */
export type OverridableRecord<
  DefaultRecord extends Record<string, any>,
  Overrides = {},
  DefaultValue = any,
> = {
    [k in OverridableUnion<keyof DefaultRecord, Overrides>]: k extends keyof Overrides
    ? Overrides[k] extends true ? DefaultValue : Overrides[k]
    : k extends keyof DefaultRecord ? DefaultRecord[k] : never
    //DefaultValue;
  };
