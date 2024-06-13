import Box from "./components/Box";

import "./App.css";
import { useState } from "react";

export default function App() {
  const [valueColor, setValueColor] = useState('red');

  const handleChangeColor = () => {

  }

  return (
    <div className="App">
      <input
        value={valueColor}
        onChange={(e) => setValueColor(e.target.value)}
        type="text"
      />
      <Box onClick={handleChangeColor} color={valueColor}/>
    </div>
  );
}
