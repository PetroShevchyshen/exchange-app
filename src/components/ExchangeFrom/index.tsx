import { MoneyInput } from "../MoneyInput";

function ExchangeForm() {
  return (
    <div className="flex flex-col gap-5">
      <MoneyInput defaultValue="uah" />
      <MoneyInput defaultValue="usd" />
    </div>
  );
}

export default ExchangeForm;
