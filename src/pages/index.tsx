import { useState, type FC } from "react";
import { ExchangeForm } from "../components/ExchangeFrom";
import { ModalView } from "../components/Modal";
import { useExchangeStore } from "../store/exchange-store";

export const MainPage: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [resetKey, setResetKey] = useState(0);
  const amount = useExchangeStore((state) => state.amount);
  const amountType = useExchangeStore((state) => state.amountType);

  const handlCloseModal = () => {
    setIsModalOpen(false);
    setResetKey((prev) => prev + 1);
  };

  return (
    <section className="w-full h-full flex justify-center items-center min-w-0">
      <ExchangeForm
        key={resetKey}
        openModal={() => {
          setIsModalOpen(true);
        }}
      />
      <ModalView
        amount={amount}
        amountType={amountType}
        isOpen={isModalOpen}
        onClose={handlCloseModal}
      />
    </section>
  );
};
