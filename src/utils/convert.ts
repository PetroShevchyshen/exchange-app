import type { MoneyValue } from "../const/moneyOptions";
import { roundToTwoDecimals } from "./round";

export const uahConvert = (rate: number | undefined) => {
  if (!rate) return;
  const result = 1 / rate;
  return roundToTwoDecimals(result);
};
export const convert = (
  amount: number,
  from: MoneyValue,
  to: MoneyValue,
  rates: Record<MoneyValue, number>,
) => {
  return amount * (rates[to] / rates[from]);
};
