import React from "react";
import {
  CollapsibleBody,
  LeftIconContainer,
  RightIconContainer,
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
        <LeftIconContainer></LeftIconContainer>
        <label>{label}</label>
        <RightIconContainer></RightIconContainer>
      </StyledTitleContainer>

      <CollapsibleBody>{children}</CollapsibleBody>
    </div>
  );
};
