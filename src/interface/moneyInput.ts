import type { MoneyValue } from "../const/moneyOptions";

export interface MoneyInputProps {
  defaultValue: MoneyValue;
  value: number;
  lable: string;
  onChange: (value: number) => void;
  onAmountTypeChange: (value: MoneyValue) => void;
}
