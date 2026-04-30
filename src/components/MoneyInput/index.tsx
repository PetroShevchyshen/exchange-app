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
        controls={false}
        defaultValue={0}
        value={value}
        onChange={(val) => onChange(val!)}
      />
      <Select
        defaultValue={defaultValue}
        options={moneyOptions}
        onChange={(value) => onAmountTypeChange(value)}
      />
    </div>
  );
};
