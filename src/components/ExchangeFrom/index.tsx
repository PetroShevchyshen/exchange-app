import { useState, type FC } from "react";
import { MoneyInput } from "../MoneyInput";
import { useExchangeStore } from "../../store/exchange-store";
import { convert } from "../../utils/convert";
import { roundToTwoDecimals } from "../../utils/round";
import type { MoneyValue } from "../../const/moneyOptions";

export const ExchangeForm: FC = () => {
  const uahData = useExchangeStore((state) => state.item);

  const [fromAmountType, setFromAmountType] = useState<MoneyValue>("uah");
  const [toAmountType, setToAmountType] = useState<MoneyValue>("usd");

  const [amount, setAmount] = useState(0);
  const [activeField, setActiveField] = useState<"from" | "to">("from");

  const rates: Record<MoneyValue, number> = {
    uah: 1,
    ...uahData.uah,
  };

  const fromValue =
    activeField === "from"
      ? amount
      : roundToTwoDecimals(
          convert(amount, toAmountType, fromAmountType, rates),
        );

  const toValue =
    activeField === "to"
      ? amount
      : roundToTwoDecimals(
          convert(amount, fromAmountType, toAmountType, rates),
        );

  const changeFromAmountHandler = (value: number) => {
    setActiveField("from");
    setAmount(value);
  };

  const changeToAmountHandler = (value: number) => {
    setActiveField("to");
    setAmount(value);
  };

  return (
    <div className="flex flex-col w-64 gap-5">
      <MoneyInput
        defaultValue={fromAmountType}
        value={fromValue}
        onChange={changeFromAmountHandler}
        onAmountTypeChange={setFromAmountType}
      />
      <MoneyInput
        defaultValue={toAmountType}
        value={toValue}
        onChange={changeToAmountHandler}
        onAmountTypeChange={setToAmountType}
      />
    </div>
  );
};
