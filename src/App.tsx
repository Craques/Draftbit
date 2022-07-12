import React, { useState } from "react";
import "./App.css";
import { Collapsible } from "./components/molecules/Collapsible/Collapsible.component";

import { PropertiesPanel } from "./components/organisms/PropertiesPanel/PropertiesPanel.component";

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onToggle = () => {
    setIsOpen((prevState) => !prevState);
  };

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

  //may need to implement provider to handle state;

  return (
    <div>
      <Collapsible
        onToggle={onToggle}
        isOpen={isOpen}
        label="Margins & Padding"
      >
        <PropertiesPanel
          onChange={onChange}
          onBlur={onBlur}
          propertyValues={propertyValues}
        />
      </Collapsible>
    </div>
  );
}

export default App;
