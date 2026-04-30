import { type FC } from "react";
import type { UahResponse } from "../../interface/data";
import { uahConvert } from "../../utils/convert";

interface HeaderProps {
  date: UahResponse | null;
}

export const Header: FC<HeaderProps> = ({ date }) => {
  return (
    <div className="h-16 flex justify-around bg-amber-500">
      <div>{date?.date}</div>
      <div className="flex gap-4">
        <p>Exchange Rates</p>
        <div>{"$ " + uahConvert(date?.uah.usd)}</div>
        <div>{"€ " + uahConvert(date?.uah.eur)}</div>
      </div>
    </div>
  );
};
