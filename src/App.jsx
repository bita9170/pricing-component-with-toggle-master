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
        <h1>$19.99</h1>
        <p>500 GB Storage</p> 
        <p>2 Users Allowed</p> 
        <p>Send up to 3 GB</p> 
        <button>LEARN MORE</button> 
      </div>

      <div className="card-container">
        <h2>Basic</h2> 
        <h1>$19.99</h1>
        <p>500 GB Storage</p> 
        <p>2 Users Allowed</p> 
        <p>Send up to 3 GB</p> 
        <button>LEARN MORE</button> 
      </div>

      <div className="card-container">
        <h2>Basic</h2> 
        <h1>$19.99</h1>
        <p>500 GB Storage</p> 
        <p>2 Users Allowed</p> 
        <p>Send up to 3 GB</p> 
        <button>LEARN MORE</button> 
      </div>

    </main>

    </>
  );
}

export default App;
