import React from "react";
import react, { useState } from "react";
import { PropertiesInput } from "../../molecules/PropertiesInputs.component";

export const PropertiesPanel = () => {
  const [propertyValues, setPropertyValues] = useState<Record<string, string>>(
    {},
  );

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    console.log(propertyValues);
    setPropertyValues({ ...propertyValues, [name]: value });
  };

  return (
    <>
      <PropertiesInput
        onChange={onChange}
        property="margin"
        propertyValues={propertyValues}
      >
        <PropertiesInput
          onChange={onChange}
          property="padding"
          propertyValues={propertyValues}
        />
      </PropertiesInput>
    </>
  );
};
