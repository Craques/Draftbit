import styled from "styled-components";
import { InputPropTypes } from "./Input.types";

//may add an overall theme to handle sizing and colors

export const StyledInput = styled.input<InputPropTypes>`
  padding-left: 8px;
  padding-right: 0px;
  padding-bottom: 12px;
  padding-top: 12px;
  background-color: transparent;
  outline: none;
  color: white;
  text-decoration-line: underline;
  text-underline-offset: 1px;
  text-decoration-color: #fdd600;
  text-decoration-style: dotted;
  font-weight: bold;
  text-align: center;
  border: none;
  flex-shrink: 1;
`;

export const StyledInputContainer = styled.div<InputPropTypes>`
  background-color: ${({ focused }) => (focused ? "#28334d" : "transparent")};
  outline-color: ${({ focused }) => (focused ? "#1d8cbe" : "transparent")};
  display: flex;
  flex-direction: row;
  width: max-content;
  justify-content: center;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
`;

export const DimensionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  font-size: 16px;
  margin-left: 4px;
  margin-right: 16px;
`;
