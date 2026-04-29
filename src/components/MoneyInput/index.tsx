import { moneyOptions, type MoneyValue } from "../../const/moneyOptions";
import { InputNumber, Select } from "antd";

interface MoneyInputProps {
  defaultValue: MoneyValue;
}

export const MoneyInput = ({ defaultValue }: MoneyInputProps) => {
  return (
    <div className="flex flex-row gap-3">
      <InputNumber controls={false} defaultValue={0} />
      <Select defaultValue={defaultValue} options={moneyOptions} />
    </div>
  );
};
