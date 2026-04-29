import { create } from "zustand";
import type { Root, UahResponse } from "../interface/data";
import axios from "axios";

interface ExchangeState {
  item: Root<"uah">;
  exchangeRate: () => Promise<void>;
}

export const useExchangeStore = create<ExchangeState>()((set) => ({
  item: {
    date: "",
    uah: { eur: 0, usd: 0 },
  },
  exchangeRate: async () => {
    const resp = await axios.get<UahResponse>(
      "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2025-04-29/v1/currencies/uah.json",
    );
    set({ item: resp.data });
  },
}));
