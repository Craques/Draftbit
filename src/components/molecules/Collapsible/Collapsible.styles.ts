import styled from "styled-components";
import { CaretDown } from "@styled-icons/fa-solid/CaretDown";
import { Info } from "@styled-icons/evaicons-solid/Info";
import { CollapsibleProps } from "./Collapsible.types";

export const StyledCaretDown = styled(CaretDown).attrs({ size: 24 })`
  margin-right: 8px;
`;

export const StyledInfoIcon = styled(Info).attrs({ size: 24 })`
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
