import React from "react";
import { Button } from "../../atoms/Button/Button.component";
import {
  CollapsibleBody,
  StyledCaretDown,
  StyledInfoIcon,
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
      <Button onClick={onToggle}>
        <StyledCaretDown />
        <label>{label}</label>
        <StyledInfoIcon />
      </Button>

      <CollapsibleBody isOpen={isOpen}>{children}</CollapsibleBody>
    </div>
  );
};
