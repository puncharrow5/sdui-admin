import styled from "styled-components";

export const Header = styled.div<{
  $height?: number | null;
  $textSize?: number | null;
  $textColor?: string | null;
  $backgroundColor?: string | null;
  $paddingHorizontal?: string | null;
}>`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 375px;
  height: ${({ $height }) => $height ?? 80}px;
  top: 0;
  padding-right: ${({ $paddingHorizontal }) => $paddingHorizontal ?? undefined};
  padding-left: ${({ $paddingHorizontal }) => $paddingHorizontal ?? undefined};
  background-color: ${({ $backgroundColor }) => $backgroundColor ?? undefined};
  /* border-bottom: 1px solid #e7e7ec; */
  z-index: 1;
`;

export const Backdrop = styled.div`
  display: flex;
  position: fixed;
  justify-content: center;
  width: 375px;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Menu = styled.div<{
  $top?: number | null;
  $textSize?: number | null;
  $textColor?: string | null;
  $paddingVertical?: string | null;
  $backgroundColor?: string | null;
}>`
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 375px;
  top: ${({ $top }) => $top ?? 80}px;
  font-size: ${({ $textSize }) => $textSize ?? 16}px;
  color: ${({ $textColor }) => $textColor ?? "#000"};
  padding-top: ${({ $paddingVertical }) => $paddingVertical ?? undefined};
  padding-bottom: ${({ $paddingVertical }) => $paddingVertical ?? undefined};
  background-color: ${({ $backgroundColor }) => $backgroundColor ?? undefined};
`;

export const Logo = styled.img<{
  $logoSize?: string | null;
}>`
  width: ${({ $logoSize }) => $logoSize ?? "100%"};
  cursor: pointer;
`;

export const Button = styled.img<{
  $buttonSize?: string | null;
}>`
  width: ${({ $buttonSize }) => $buttonSize ?? "100%"};
  cursor: pointer;
`;

export const Item = styled.div<{
  $paddingHorizontal?: string | null;
  $paddingVertical?: string | null;
}>`
  display: flex;
  align-items: center;
  padding-top: ${({ $paddingVertical }) => $paddingVertical ?? undefined};
  padding-bottom: ${({ $paddingVertical }) => $paddingVertical ?? undefined};
  padding-right: ${({ $paddingHorizontal }) => $paddingHorizontal ?? undefined};
  padding-left: ${({ $paddingHorizontal }) => $paddingHorizontal ?? undefined};
  cursor: pointer;
`;
