import React from "react";
import "./App.css";
import { PropertiesInput } from "./components/molecules/PropertiesInputs.component";

function App() {
  return (
    <div className="App">
      <PropertiesInput onChange={(e) => null} property="margin">
        <PropertiesInput onChange={(e) => null} property="padding" />
      </PropertiesInput>
    </div>
  );
}

export default App;
