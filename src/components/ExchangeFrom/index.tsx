import { InputNumber, Select } from "antd";
import { moneyOptions } from "../../const/moneyOptions";

function ExchangeForm() {
  return (
    <div className="flex flex-row gap-3">
      <InputNumber controls={false} defaultValue={0} />
      <Select defaultValue="uah" options={moneyOptions} />
    </div>
  );
}

export default ExchangeForm;
