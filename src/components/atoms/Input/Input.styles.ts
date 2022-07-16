import styled from "styled-components";
import { InputProps } from "./Input.types";

//may add an overall theme to handle sizing and colors

export const StyledInput = styled.input<InputProps>`
  padding-bottom: ${({ theme }) => theme.spacing.small}px;
  padding-top: ${({ theme }) => theme.spacing.small}px;
  background-color: transparent;
  outline: none;
  color: inherit;
  text-decoration-line: underline;

  text-decoration-color: ${({ focused, value, theme }) =>
    !focused && value?.length ? theme.colors.highlight : "transparent"};
  text-decoration-style: dotted;
  font-weight: bold;
  text-align: center;
  border: none;
  flex-shrink: 1;
  font-size: inherit;
  width: 4em;
  ::placeholder {
    color: ${({ theme }) => theme.colors.placeholderText};
  }
`;

export const StyledInputContainer = styled.div<InputProps>`
  background-color: ${({ focused, theme }) =>
    focused ? theme.colors.blueSecondary : "transparent"};
  outline-color: ${({ theme }) => theme.colors.inputOutline};
  outline-width: 2px;
  outline-width: ${({ focused }) => (focused ? 2 : 0)}px;
  outline-style: solid;
  display: flex;
  flex-direction: row;
  width: max-content;
  justify-content: center;
  border-radius: 4px;
  font-size: 12px;
  font-weight: bold;
  color: ${({ focused, value, theme }) =>
    focused || value?.length ? "white" : theme.colors.placeholderText};
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
`;
