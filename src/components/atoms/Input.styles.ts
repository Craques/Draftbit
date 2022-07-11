import styled from "styled-components";
import { InputPropTypes } from "./Input.types";

//may add an overall theme to handle sizing and colors

export const StyledInput = styled.div<InputPropTypes>`
  background-color: ${({ focused }) => (focused ? "#28334d" : "transparent")};
  outline-color: ${({ focused }) => (focused ? "#1d8cbe" : "transparent")};
  padding-left: 12px;
  padding-right: 12px;
  padding-bottom: 8px;
  padding-top: 8px;
`;
