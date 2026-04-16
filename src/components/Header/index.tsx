import { type FC } from "react";
import type { UahResponse } from "../../interface/data";

interface HeaderProps {
  date: UahResponse | null;
}

export const Header: FC<HeaderProps> = ({ date }) => {
  return (
    <div className="h-16 bg-amber-500">
      <div>{date?.date}</div>
      <div>{date?.uah.eur}</div>
    </div>
  );
};
