import React from "react";
import { useState } from "react";
import { PropertiesInput } from "../../molecules/PropertiesInputs/PropertiesInputs.component";

export const PropertiesPanel = () => {
  const [propertyValues, setPropertyValues] = useState<Record<string, string>>(
    {},
  );

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setPropertyValues({ ...propertyValues, [name]: value });
  };

  const onBlur = (fieldName: string, fieldValue: string) => {
    if (fieldValue?.length) {
      const expression = new RegExp(/^\d+(pt|px)$/);
      const isValid = expression.test(fieldValue.replace(" ", ""));
      if (isValid) {
        setPropertyValues({
          ...propertyValues,
          [fieldName]: fieldValue.replace(" ", ""),
        });
      } else {
        setPropertyValues({
          ...propertyValues,
          [fieldName]: "",
        });

        alert("Value must start with a string and end with either pt,px,%,em");
      }
    }
  };

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
