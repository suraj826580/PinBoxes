import { useState } from "react";
import "./App.css";
import Pintab from "./Components/Pintab";

function App() {
  const [Otp, setOtp] = useState("");

  return (
    <div className="App">
      <h1>Pin Boxes</h1>
      <Pintab maxChar={2} length={4} setOtp={setOtp} />
      <h1> OTP : {Otp}</h1>
    </div>
  );
}

export default App;
