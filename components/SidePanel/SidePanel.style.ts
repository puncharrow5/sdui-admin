import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 100%;
  top: 0;
  right: 0;
  background-color: #fff;
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  border-bottom: 1px solid #e7e7ec;
`;

export const ComponentBox = styled.div`
  overflow-y: auto;

  /* Hide scrollbar for Webkit browsers (Chrome, Safari) */
  ::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge, and Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;
