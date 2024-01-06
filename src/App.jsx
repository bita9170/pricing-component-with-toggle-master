import { useState } from "react";

function App() {
  const [isOn, setOn] = useState(false);

  const toggle = () => {
    setOn(!isOn);
  };

  return (
    <>
      <header>
        <h1>Our Pricing</h1>

        <div className="toggle-container">
          <p>Annually</p>

          <div
            className={`toggle-button ${isOn ? "on" : "off"}`}
            onClick={toggle}
          >
            <div className="slider"></div>
          </div>

          <p>Monthly</p>
        </div>
      </header>

      <main>
        <div className="card-container">
          <h2>Basic</h2>
          <h1>{isOn ? "$19.99" : "$199.99"}</h1>
          <p>500 GB Storage</p>
          <p>2 Users Allowed</p>
          <p>Send up to 3 GB</p>
          <button>LEARN MORE</button>
        </div>

        <div className="card-container">
          <h2>Professional</h2>
          <h1>{isOn ? "$24.99" : "$249.99"}</h1>
          <p>1 TB Storage</p>
          <p>5 Users Allowed</p>
          <p>Send up to 10 GB</p>
          <button>LEARN MORE</button>
        </div>

        <div className="card-container">
          <h2>Master</h2>
          <h1>{isOn ? "$39.99" : "$399.99"}</h1>
          <p>2 TB Storage</p>
          <p>10 Users Allowed</p>
          <p>Send up to 20 GB</p>
          <button>LEARN MORE</button>
        </div>
      </main>
    </>
  );
}

export default App;
