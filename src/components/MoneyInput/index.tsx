import type { FC } from "react";
import { moneyOptions, type MoneyValue } from "../../const/moneyOptions";
import { InputNumber, Select } from "antd";

interface MoneyInputProps {
  defaultValue: MoneyValue;
  value: number;
  onChange: (value: number) => void;
  onAmountTypeChange: (value: MoneyValue) => void;
}

export const MoneyInput: FC<MoneyInputProps> = ({
  defaultValue,
  value,
  onChange,
  onAmountTypeChange,
}) => {
  return (
    <div className="flex flex-row gap-3">
      <InputNumber
        className="flex-1"
        style={{ width: "100%" }}
        controls={false}
        defaultValue={0}
        value={value}
        onChange={(val) => onChange(val!)}
      />
      <Select
        className="w-24"
        defaultValue={defaultValue}
        options={moneyOptions}
        onChange={(value) => onAmountTypeChange(value)}
      />
    </div>
  );
};
