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
}) => {
  return (
    <PropertiesInputContainer>
      <Row>
        <Column>
          <Input onChange={onChange} name={`${property}-left`} />
        </Column>
        <Column>
          <CenterColumnInputContainer>
            <Input onChange={onChange} name={`${property}-top`} />
          </CenterColumnInputContainer>
          <ChildContainer hasChildren={children != null}>
            {children}
          </ChildContainer>
          <CenterColumnInputContainer>
            <Input onChange={onChange} name={`${property}-bottom`} />
          </CenterColumnInputContainer>
        </Column>
        <Column>
          <Input onChange={onChange} name={`${property}-right`} />
        </Column>
      </Row>
    </PropertiesInputContainer>
  );
};
