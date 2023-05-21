import { styled } from "styled-components";

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

export const Tr = styled.tr``;
export const Button = styled.button`
  padding: 8px;
  border-radius: 6px;
  outline: none;
  background-color: #114d4d;
  color: #fff;
  margin-left: 15px;

  cursor: pointer;
  &:hover {
    background-color: #027575;
  }
`;

export const Tbody = styled.tbody`
transition: fading 3s;
  tr:nth-child(even) {
    background-color: #fff;
  }

  tr:hover {
    background-color: #BDBDBD;
  }
  @keyframes fading {
    0%{background-color: red}
    100%{opacity: 1}
  }
`;
export const Td = styled.td`
  border: 1px solid #ddd;
  padding: 15px;
  text-align: center;
`;
export const Th = styled.th`
  border: 1px solid #ddd;
  padding: 15px;
  text-align: center;

  padding: 1rem;
  background-color: #114d4d;
  color: #fff;
`;
export const Thead = styled.tbody``;
