import styled from "styled-components";
import { CaretDown } from "@styled-icons/fa-solid/CaretDown";
import { Info } from "@styled-icons/evaicons-solid/Info";
import { CollapsibleProps } from "./Collapsible.types";

export const StyledCaretDown = styled(CaretDown).attrs({ size: 24 })`
  margin-right: ${({ theme }) => theme.spacing.small}px;
`;

export const StyledInfoIcon = styled(Info).attrs({ size: 24 })`
  margin-left: ${({ theme }) => theme.spacing.small}px;
  color: ${({ theme }) => theme.colors.placeholderText};
`;

export const CollapsibleBody = styled.div<Partial<CollapsibleProps>>`
  padding-left: ${({ theme }) => theme.spacing.medium}px;
  padding-right: ${({ theme }) => theme.spacing.medium}px;
  padding-top: ${({ isOpen, theme }) => (isOpen ? theme.spacing.medium : 0)}px;
  padding-bottom: ${({ isOpen, theme }) =>
    isOpen ? theme.spacing.large : 0}px;
  background-color: ${({ theme }) => theme.colors.blueSecondary};
  height: ${({ isOpen }) => (isOpen ? "auto" : "0px")};
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
`;
