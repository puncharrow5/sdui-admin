import styled from "styled-components";

export const Backdrop = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 300px;
  padding: 0 40px;
  gap: 10px;
  background-color: #fff;
  border-radius: 10px;
`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  padding: 10px 20px;
  border-width: 2px;
  border-radius: 10px;
`;

export const FirstStep = styled.div`
  display: flex;
`;
