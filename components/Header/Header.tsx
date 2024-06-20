import React from "react";
import { Link } from "react-scroll";
import * as S from "./Header.style";

interface Props {
  sectionNames?: string[];
  logo?: string | null;
  textSize?: number | null;
  textColor?: string | null;
  backgroundColor?: string | null;
}

export const Header = ({ sectionNames, logo, textSize, textColor, backgroundColor }: Props) => {
  return (
    <S.Header textSize={textSize} textColor={textColor} backgrounColor={backgroundColor}>
      <div className="cursor-pointer">{logo ?? "로고"}</div>

      <div className="flex gap-6 cursor-pointer">
        {sectionNames?.map((value: string, index: number) => (
          <Link to={value} spy={true} smooth={true} offset={-80} key={index}>
            {value}
          </Link>
        ))}
      </div>
    </S.Header>
  );
};
