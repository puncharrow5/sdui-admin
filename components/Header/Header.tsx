import React from "react";
import { Link } from "react-scroll";
import * as S from "./Header.style";

interface Props {
  sectionNames?: string[];
  logo?: string | null;
  backgroundColor?: string | null;
  textColor?: string | null;
}

export const Header = ({ sectionNames, logo, backgroundColor, textColor }: Props) => {
  return (
    <S.Header>
      <div>{logo ?? "로고"}</div>

      <div className="flex gap-6">
        {sectionNames?.map((value: string, index: number) => (
          <Link to={value} spy={true} smooth={true} offset={-80} key={index}>
            {value}
          </Link>
        ))}
      </div>
    </S.Header>
  );
};
