import { useEffect, useState, type FC } from "react";
import { MoneyInput } from "../MoneyInput";
import { useExchangeStore } from "../../store/exchange-store";
import { convert } from "../../utils/convert";
import { roundToTwoDecimals } from "../../utils/round";
import type { MoneyValue } from "../../const/moneyOptions";
import { Button } from "antd";
import type { ExchangeFormProps } from "../../interface/exchangeForm";

export const ExchangeForm: FC<ExchangeFormProps> = ({ openModal }) => {
  const uahData = useExchangeStore((state) => state.item);
  const setAmountValue = useExchangeStore((state) => state.setAmount);
  const setAmountType = useExchangeStore((state) => state.setAmountType);

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

  useEffect(() => {
    setAmountValue(toValue);
    setAmountType(toAmountType);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toAmountType, toValue]);

  return (
    <div className="flex flex-col items-center gap-8 border-2 border-amber-100 rounded-lg p-10">
      <p className="text-amber-100">Exchange Form</p>
      <div className="flex flex-col w-64 gap-3">
        <MoneyInput
          defaultValue={fromAmountType}
          value={fromValue}
          onChange={changeFromAmountHandler}
          onAmountTypeChange={setFromAmountType}
          lable="You change"
        />
        <MoneyInput
          defaultValue={toAmountType}
          value={toValue}
          onChange={changeToAmountHandler}
          onAmountTypeChange={setToAmountType}
          lable="You receive"
        />
      </div>
      <Button
        color="cyan"
        variant="solid"
        onClick={openModal}
        disabled={!amount}
      >
        Exchange
      </Button>
    </div>
  );
};
