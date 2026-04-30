import { useState, type FC } from "react";
import { MoneyInput } from "../MoneyInput";
import { useExchangeStore } from "../../store/exchange-store";
import { convert } from "../../utils/convert";
import { roundToTwoDecimals } from "../../utils/round";
import type { MoneyValue } from "../../const/moneyOptions";

export const ExchangeForm: FC = () => {
  const uahData = useExchangeStore((state) => state.item);

  const [fromAmount, setFromAmount] = useState(0);
  const [toAmount, setToAmount] = useState(0);

  const [fromAmountType, setFromAmountType] = useState<MoneyValue>("uah");
  const [toAmountType, setToAmountType] = useState<MoneyValue>("usd");

  const rates: Record<MoneyValue, number> = {
    uah: 1,
    ...uahData.uah,
  };

  const changeFromAmountHandler = (value: number) => {
    setFromAmount(value);

    if (!uahData) return;

    const convertedValue = convert(value, fromAmountType, toAmountType, rates);

    setToAmount(roundToTwoDecimals(convertedValue));
  };

  const changeToAmountHandler = (value: number) => {
    setToAmount(value);

    if (!uahData) return;

    const convertedValue = convert(value, toAmountType, fromAmountType, rates);

    setFromAmount(roundToTwoDecimals(convertedValue));
  };

  return (
    <div className="flex flex-col gap-5">
      <MoneyInput
        defaultValue={fromAmountType}
        value={fromAmount}
        onChange={changeFromAmountHandler}
        onAmountTypeChange={setFromAmountType}
      />
      <MoneyInput
        defaultValue={toAmountType}
        value={toAmount}
        onChange={changeToAmountHandler}
        onAmountTypeChange={setToAmountType}
      />
    </div>
  );
};
