import styled from "styled-components";

export const Container = styled.div<{
  textSize?: number | null;
  textColor?: string | null;
  backgrounColor?: string | null;
}>`
  display: flex;
  flex-direction: column;
  color: ${({ textColor }) => textColor ?? "#000"};
  background-color: ${({ backgrounColor }) => backgrounColor ?? "#FFF"};
`;

export const Backdrop = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: calc(100% - 400px);
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Modal = styled.div`
  position: relative;
  width: 80%;
  height: 70%;
  padding: 20px;
  background-color: #fff;
  overflow-x: auto;
`;

export const Terms = styled.div`
  h2 {
    margin-bottom: 5px;
    font-weight: bold;
  }
  p {
    font-size: 14px;
  }
`;

export const Top = styled.div<{ paddingTop?: string | null }>`
  display: flex;
  flex-direction: row;
  column-gap: 80px;
  padding: ${({ paddingTop }) => paddingTop ?? "40px"};
  border-bottom: 1px solid #e7e7ec;
`;

export const Bottom = styled.div<{ paddingBottom?: string | null }>`
  display: flex;
  flex-direction: row;
  padding: ${({ paddingBottom }) => paddingBottom ?? "40px"};
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.p`
  margin-bottom: 20px;
  font-size: 18px;
`;

export const Content = styled.div<{
  textSize?: number | null;
  textColor?: string | null;
  lineHeight?: number | null;
  cursor?: "default" | "pointer" | undefined;
}>`
  font-size: ${({ textSize }) => textSize ?? 14}px;
  color: ${({ textColor }) => textColor ?? "#888888"};
  line-height: ${({ lineHeight }) => lineHeight ?? 2.14};
  cursor: ${({ cursor }) => cursor ?? "default"};
`;
