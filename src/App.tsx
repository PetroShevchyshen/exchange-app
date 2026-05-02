import { useEffect, type FC } from "react";
import { Header } from "./components/Header";
import { useExchangeStore } from "./store/exchange-store";
import { MainPage } from "./pages";

export const App: FC = () => {
  const uahResponse = useExchangeStore((state) => state.item);
  const exchangeRate = useExchangeStore((state) => state.exchangeRate);

  useEffect(() => {
    exchangeRate();
  }, [exchangeRate]);

  return (
    <section className="w-dvw h-dvh flex flex-col bg-amber-800 ">
      <Header date={uahResponse} />
      <MainPage />
    </section>
  );
};
