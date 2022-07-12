import styled from "styled-components";

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 1;
  align-items: center;
  padding-left: ${({ theme }) => theme.spacing.small}px;
  padding-right: ${({ theme }) => theme.spacing.small}px;
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
  border-radius: ${({ theme }) => theme.spacing.small}px;
`;

export const ChildContainer = styled.div<{ hasChildren: boolean }>`
  border-width: 4px;
  border-color: ${({ hasChildren, theme }) =>
    hasChildren ? theme.colors.blueSecondary : "transparent"};
  border-style: solid;
`;

export const CenterColumnInputContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing.medium}px;
  margin-bottom: ${({ theme }) => theme.spacing.medium}px;
`;
