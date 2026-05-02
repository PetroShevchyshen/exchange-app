import { create } from "zustand";
import type { Root, UahResponse } from "../interface/data";
import axios from "axios";

interface ExchangeState {
  item: Root<"uah">;
  amount: number;
  amountType: string | null;
  error: string | null;
  exchangeRate: () => Promise<void>;
  setAmount: (amount: number) => void;
  setAmountType: (amountType: string) => void;
}

export const useExchangeStore = create<ExchangeState>()((set) => ({
  item: {
    date: "",
    uah: { eur: 0, usd: 0 },
  },
  amount: 0,
  error: null,
  amountType: null,
  exchangeRate: async () => {
    try {
      const resp = await axios.get<UahResponse>(
        "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/uah.json",
      );
      set({ item: resp.data, error: null });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      set({ item: undefined, error: "Failed to fetch exchange rates" });
    }
  },
  setAmount: (amount: number) => set({ amount }),
  setAmountType: (amountType: string) => set({ amountType }),
}));
