import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import "./App.css";
import { Collapsible } from "./components/molecules/Collapsible/Collapsible.component";

import { PropertiesPanel } from "./components/organisms/PropertiesPanel/PropertiesPanel.component";
import { theme } from "./theme/theme";

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
      const expression = new RegExp(/^\d+(em|ex|%|px|cm|mm|in|pt|pc)$/);
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
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}

export default App;
