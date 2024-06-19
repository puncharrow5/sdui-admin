import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  border-bottom: 1px solid #e7e7ec;
`;

export const SectionName = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  font-weight: bold;
`;

export const Detail = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #e7e7ec;
`;

export const ItemBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
