import React from "react";
import { useState } from "react";
import { PropertiesInput } from "../../molecules/PropertiesInputs/PropertiesInputs.component";
import { PropertiesPanelProps } from "./PropertiesPanel.types";

export const PropertiesPanel: React.FC<PropertiesPanelProps> = ({
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
