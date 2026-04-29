import { useEffect, type FC } from "react";
import { Header } from "./components/Header";
import ExchangeForm from "./components/ExchangeFrom";
import { useExchangeStore } from "./store/exchange-store";

export const App: FC = () => {
  const uahResponse = useExchangeStore((state) => state.item);
  const exchangeRate = useExchangeStore((state) => state.exchangeRate);

  useEffect(() => {
    exchangeRate();
  }, [exchangeRate]);

  return (
    <div className="w-dvw h-dvh bg-amber-800">
      <Header date={uahResponse} />
      Main Paige
      <ExchangeForm />
    </div>
  );
};
