import React from "react";
import { Input } from "../atoms/Input.component";
import {
  CenterColumnInputContainer,
  ChildContainer,
  Column,
  PropertiesInputContainer,
  Row,
} from "./PropertiesInput.styles";
import { PropertiesInputProps } from "./PropertiesInput.types";

export const PropertiesInput: React.FC<PropertiesInputProps> = ({
  children,
  onChange,
  property,
  propertyValues,
}) => {
  return (
    <PropertiesInputContainer>
      <Row data-testid="properties-input-row">
        <Column>
          <Input
            onChange={onChange}
            name={`${property}-left`}
            value={propertyValues[`${property}-left`]}
          />
        </Column>
        <Column>
          <CenterColumnInputContainer>
            <Input
              onChange={onChange}
              name={`${property}-top`}
              value={propertyValues[`${property}-top`]}
            />
          </CenterColumnInputContainer>
          <ChildContainer hasChildren={children != null}>
            {children}
          </ChildContainer>
          <CenterColumnInputContainer>
            <Input
              onChange={onChange}
              name={`${property}-bottom`}
              value={propertyValues[`${property}-bottom`]}
            />
          </CenterColumnInputContainer>
        </Column>
        <Column>
          <Input
            onChange={onChange}
            name={`${property}-right`}
            value={propertyValues[`${property}-right`]}
          />
        </Column>
      </Row>
    </PropertiesInputContainer>
  );
};
