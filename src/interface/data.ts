interface Uah {
  eur: number;
  usd: number;
}

interface Eur {
  uah: number;
  usd: number;
}

interface Usd {
  uah: number;
  eur: number;
}

type CurrencyMap = {
  uah: Uah;
  eur: Eur;
  usd: Usd;
};

export type Root<T extends keyof CurrencyMap> = {
  date: string;
} & {
  [K in T]: CurrencyMap[K];
};

export type UahResponse = Root<"uah">;
export type EurResponse = Root<"eur">;
export type UsdResponse = Root<"usd">;
