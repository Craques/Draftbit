import styled from "styled-components";

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 1;
  align-items: center;
  justify-content: center;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-shrink: 1;
`;

export const PropertiesInputContainer = styled.div`
  background-color: #3d4b6c;
  display: flex;
`;

export const ChildContainer = styled.div<{ hasChildren: boolean }>`
  border-width: 20px;
  border-color: ${({ hasChildren }) =>
    hasChildren ? "#28334d" : "transparent"};
  border-style: solid;
`;

export const CenterColumnInputContainer = styled.div`
  margin-top: 12px;
  margin-bottom: 12px;
`;
