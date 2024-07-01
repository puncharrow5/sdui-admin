import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #2d333b;
`;

export const Box = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 40px;
  background-color: #f8fafc;
  border-radius: 10px;
`;

export const Label = styled.label`
  margin-bottom: 5px;
  font-size: 18px;
  font-weight: bold;
`;

export const Input = styled.input`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
  padding: 3px 5px;
  border-width: 2px;
  border-radius: 10px;
`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #9ad0c2;
  color: #fff;
  font-weight: bold;
  border-radius: 10px;
`;
