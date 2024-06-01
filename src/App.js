import React, { useState } from "react";
import dropDownItems from "../src/mock/drop-items.json";
import formData from "../src/mock/form-data.json";

import "./App.css";
import DGXContainer from "./components/DGXContainer";
import DGXDropdown from "./components/DGXDropdown";
import DGXLogo from "./components/DGXLogo";
import "./fonts/font.css";

const defaultValue = {
  key: -1,
  name: "یک مورد را انتخاب کنید",
};

function App() {
  const [result, setResult] = useState("هیچ!");
  console.log(dropDownItems, formData, defaultValue);

  return (
    <div
      id="app"
      className="flex"
      style={{ backgroundImage: 'url("/assets/pixel-arts/pixel-wall.png")' }}
    >
      <DGXContainer className="top">
        <DGXLogo className="flex" />
        <div className="mt">
          <DGXDropdown
            list={dropDownItems}
            onChange={(selected) => {
              setResult(selected.name);
            }}
            value={formData.dropdown}
            defaultText="یک مورد را انتخاب کنید!"
            renderItem={(item) => (
              <div className="item" key={item.key}>
                <img src={item.img} alt={item.name} width={20} height={20} />
                <span>{item.key}</span>
                <span>{item.name}</span>
              </div>
            )}
          />
        </div>

        <div className="result">{result}</div>
      </DGXContainer>
    </div>
  );
}

export default App;
