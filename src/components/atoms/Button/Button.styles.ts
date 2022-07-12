import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.bluePrimary};
  padding: ${({ theme }) => theme.spacing.small}px;
  font-size: ${({ theme }) => theme.spacing.large}px;
  color: white;
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
  width: 100%;
  text-align: left;
  font-weight: bold;
  outline: none;
  border: none;
`;

export const StyledTitleContainer = styled.button`
  background-color: #3d4b6c;
  padding: 8px;
  font-size: 16px;
  color: white;
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
  width: 100%;
  text-align: left;
  font-weight: bold;
  outline: none;
  border: none;
`;
