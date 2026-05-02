import { Modal } from "antd";
import { type FC } from "react";
import type { ModalViewProps } from "../../interface/modalView";

export const ModalView: FC<ModalViewProps> = ({
  amount,
  amountType,
  isOpen,
  onClose,
}) => {
  return (
    <Modal
      title="Basic Modal"
      closable={{ "aria-label": "Custom Close Button" }}
      open={isOpen}
      onCancel={onClose}
      onOk={onClose}
      okText="Confirm"
    >
      <p>
        The amount {amount} {amountType?.toLocaleUpperCase()} will become to
        your balance
      </p>
      <p>Thank you for choosing our service!</p>
    </Modal>
  );
};
