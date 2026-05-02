import type { FC } from "react";
import { moneyOptions } from "../../const/moneyOptions";
import { InputNumber, Select } from "antd";
import type { MoneyInputProps } from "../../interface/moneyInput";

export const MoneyInput: FC<MoneyInputProps> = ({
  defaultValue,
  value,
  lable,
  onChange,
  onAmountTypeChange,
}) => {
  return (
    <>
      <p className="text-amber-200">{lable}</p>
      <div className="flex flex-row gap-3">
        <InputNumber
          className="flex-1"
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
    </>
  );
};
