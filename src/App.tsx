import { useEffect, type FC } from "react";
import { Header } from "./components/Header";
import { ExchangeForm } from "./components/ExchangeFrom";
import { useExchangeStore } from "./store/exchange-store";
import { Button } from "antd";

export const App: FC = () => {
  const uahResponse = useExchangeStore((state) => state.item);
  const exchangeRate = useExchangeStore((state) => state.exchangeRate);

  useEffect(() => {
    exchangeRate();
  }, [exchangeRate]);

  return (
    <section className="w-dvw h-dvh flex flex-col bg-amber-800 ">
      <Header date={uahResponse} />
      <div className="w-full h-full flex justify-center items-center min-w-0">
        <div className="flex flex-col items-center gap-10 border-2 border-amber-100 rounded-lg p-10">
          <p className="text-amber-100">Exchange Form</p>
          <ExchangeForm />
          <Button color="cyan" variant="solid">
            Exchange
          </Button>
        </div>
      </div>
    </section>
  );
};
