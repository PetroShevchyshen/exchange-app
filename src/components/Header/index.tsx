import { type FC } from "react";
import { uahConvert } from "../../utils/convert";
import type { HeaderProps } from "../../interface/header";

export const Header: FC<HeaderProps> = ({ date }) => {
  return (
    <div className="h-16 flex justify-around text-amber-100">
      <div>{date?.date}</div>
      <div className="flex gap-4">
        <p>Exchange Rates</p>
        <div>{"$ " + uahConvert(date?.uah.usd)}</div>
        <div>{"€ " + uahConvert(date?.uah.eur)}</div>
      </div>
    </div>
  );
};
