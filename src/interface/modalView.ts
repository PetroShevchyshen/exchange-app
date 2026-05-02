export interface ModalViewProps {
  amount: number;
  amountType: string | null;
  isOpen: boolean;
  onClose: () => void;
}
