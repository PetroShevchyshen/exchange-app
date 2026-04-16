import axios from "axios";
import { useEffect, useState, type FC } from "react";
import { Header } from "./components/Header";
import type { UahResponse } from "./interface/data";

export const App: FC = () => {
  const [uahResponse, setUahResponse] = useState<UahResponse | null>(null);

  const exchangeRate = async () => {
    const resp = await axios.get<UahResponse>(
      "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/uah.json",
    );
    setUahResponse(resp.data);
    console.log(resp.data.uah, "resp");
  };

  useEffect(() => {
    (async () => {
      await exchangeRate();
    })();
  }, []);
  return (
    <div className="w-dvw h-dvh bg-amber-800">
      <Header date={uahResponse} />
      Main Paige
    </div>
  );
};
