import { useState } from "react";

function App() {
  const [isOn, setOn] = useState(false);

  const toggle = () => {
    setOn(!isOn);
  };

  return (
    <header>
      <h1>Our Pricing</h1>
      <div>
        <div
          className={`toggle-button ${isOn ? "on" : "off"}`}
          onClick={toggle}
        >
          <div className="slider"></div>
        </div>
        
      </div>
    </header>
  );
}

export default App;
