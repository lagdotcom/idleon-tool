// https://spin.atomicobject.com/typescript-flexible-nominal-typing/
interface Flavouring<FlavourT> {
  _type?: FlavourT;
}
type Flavour<T, FlavourT> = T & Flavouring<FlavourT>;

export type Chance = Flavour<number, "Chance">;
export type Quantity = Flavour<number, "Quantity">;

export type GItemName = Flavour<string, "GItemName">;
export type URLString = Flavour<string, "URLString">;
