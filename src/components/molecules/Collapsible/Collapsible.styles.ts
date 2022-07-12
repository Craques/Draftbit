import styled from "styled-components";
import { CaretDown } from "@styled-icons/fa-solid/CaretDown";
import { Info } from "@styled-icons/evaicons-solid/Info";
import { CollapsibleProps } from "./Collapsible.types";

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

export const StyledCaretDown = styled(CaretDown)`
  margin-right: 8px;
`;

export const StyledInfoIcon = styled(Info)`
  margin-left: 8px;
  color: #a5b0c6;
`;

export const CollapsibleBody = styled.div<Partial<CollapsibleProps>>`
  padding-left: 12px;
  padding-right: 12px;
  padding-top: ${({ isOpen }) => (isOpen ? 12 : 0)}px;
  padding-bottom: ${({ isOpen }) => (isOpen ? 16 : 0)}px;
  background-color: #28334d;
  height: ${({ isOpen }) => (isOpen ? "auto" : "0px")};
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
`;