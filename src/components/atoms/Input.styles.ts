import styled from "styled-components";
import { InputPropTypes } from "./Input.types";

//may add an overall theme to handle sizing and colors

export const StyledInput = styled.input<InputPropTypes>`
  padding-bottom: 8px;
  padding-top: 8px;
  background-color: transparent;
  outline: none;
  color: inherit;
  text-decoration-line: underline;

  text-decoration-color: ${({ focused, hasUpdatedValue }) =>
    !focused && hasUpdatedValue ? "#fdd600" : "transparent"};
  text-decoration-style: dotted;
  font-weight: bold;
  text-align: center;
  border: none;
  flex-shrink: 1;
  font-size: inherit;
  width: 4em;
  ::placeholder {
    color: #a5b0c6;
  }
`;

export const StyledInputContainer = styled.div<InputPropTypes>`
  background-color: ${({ focused }) => (focused ? "#28334d" : "transparent")};
  outline-color: #1d8cbe;
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
  color: ${({ focused, hasUpdatedValue, value }) =>
    (focused || hasUpdatedValue) && value?.length ? "white" : "#a5b0c6"};
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
`;

export const DimensionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  margin-left: 4px;
  margin-right: 8px;
  color: inherit;
`;
