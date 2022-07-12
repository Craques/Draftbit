import React from "react";
import {
  CollapsibleBody,
  StyledCaretDown,
  StyledInfoIcon,
  StyledTitleContainer,
} from "./Collapsible.styles";
import { CollapsibleProps } from "./Collapsible.types";

export const Collapsible: React.FC<CollapsibleProps> = ({
  label,
  children,
  onToggle,
  isOpen,
}) => {
  return (
    <div>
      <StyledTitleContainer onClick={onToggle}>
        <StyledCaretDown size={24} />
        <label>{label}</label>
        <StyledInfoIcon size={24} />
      </StyledTitleContainer>

      <CollapsibleBody isOpen={isOpen}>{children}</CollapsibleBody>
    </div>
  );
};
