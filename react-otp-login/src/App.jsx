import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SendOTPForm from "./components/SendOTPForm";
import VerifyOtpForm from "./components/VerifyOtpForm";

function App() {
  const [optSent, setOptSent] = useState(false);

  return (
    <div className="mt-5">
      <h1 className="text-3xl font-bold underline text-center">
        Login with OTP
      </h1>
      {optSent ? (
        <VerifyOtpForm length={4} />
      ) : (
        <SendOTPForm setSubmitted={setOptSent} />
      )}
    </div>
  );
}

export default App;
