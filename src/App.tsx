import React, { useState } from "react";
import "./App.css";
import { Collapsible } from "./components/molecules/Collapsible/Collapsible.component";

import { PropertiesPanel } from "./components/organisms/PropertiesPanel/PropertiesPanel.component";

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onToggle = () => {
    setIsOpen((prevState) => !prevState);
  };

  //may need to implement provider to handle state;

  return (
    <div>
      <Collapsible
        onToggle={onToggle}
        isOpen={isOpen}
        label="Margins & Padding"
      >
        <PropertiesPanel />
      </Collapsible>
    </div>
  );
}

export default App;
