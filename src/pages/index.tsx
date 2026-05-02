import { useState, type FC } from "react";
import { ExchangeForm } from "../components/ExchangeFrom";
import { Button } from "antd";
import { ModalView } from "../components/Modal";
import { useExchangeStore } from "../store/exchange-store";

export const MainPage: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const amount = useExchangeStore((state) => state.amount);
  const amountType = useExchangeStore((state) => state.amountType);

  return (
    <section className="w-full h-full flex justify-center items-center min-w-0">
      <div className="flex flex-col items-center gap-8 border-2 border-amber-100 rounded-lg p-10">
        <p className="text-amber-100">Exchange Form</p>
        <ExchangeForm />
        <Button
          color="cyan"
          variant="solid"
          onClick={() => setIsModalOpen(true)}
        >
          Exchange
        </Button>
      </div>
      <ModalView
        amount={amount}
        amountType={amountType}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};
