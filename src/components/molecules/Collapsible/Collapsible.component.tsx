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
}) => {
  return (
    <div>
      <StyledTitleContainer>
        <StyledCaretDown size={24} />
        <label>{label}</label>
        <StyledInfoIcon size={24} />
      </StyledTitleContainer>

      <CollapsibleBody>{children}</CollapsibleBody>
    </div>
  );
};
