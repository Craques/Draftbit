import React from "react";
import "./App.css";
import { Collapsible } from "./components/molecules/Collapsible/Collapsible.component";

import { PropertiesPanel } from "./components/organisms/PropertiesPanel/PropertiesPanel.component";

function App() {
  return (
    <div>
      <Collapsible label="Margins & Padding">
        <PropertiesPanel />
      </Collapsible>
    </div>
  );
}

export default App;
