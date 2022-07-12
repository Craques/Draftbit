import React from "react";
import { PropertiesInput } from "../../molecules/PropertiesInputs/PropertiesInputs.component";
import { PrismProps } from "./Prism.types";

export const Prism: React.FC<PrismProps> = ({
  onChange,
  onBlur,
  propertyValues,
}) => {
  return (
    <>
      <PropertiesInput
        onChange={onChange}
        onBlur={onBlur}
        property="margin"
        propertyValues={propertyValues}
      >
        <PropertiesInput
          onChange={onChange}
          onBlur={onBlur}
          property="padding"
          propertyValues={propertyValues}
        />
      </PropertiesInput>
    </>
  );
};
