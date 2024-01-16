import React, { useEffect, useRef, useState } from "react";

const VerifyOtpForm = ({ length = 4 }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const otpInputRefs = useRef([]);

  useEffect(() => {
    otpInputRefs[0].focus();
  }, []);

  const handleOnChange = (event, index) => {
    const data = event.target.value;
    const newOtp = [...otp];
    newOtp[index] = data.substring(data.length - 1);
    setOtp(newOtp);

    if (index < length - 1 && data) {
      otpInputRefs[index + 1].focus();
    }
  };

  const handleClick = (index) => {
    otpInputRefs[index].setSelectionRange(1, 1);
  };

  const handleKeyDown = (event, index) => {
    if (event.key === "Backspace" && index > 0) {
      if (otp[index]) {
        const newOtp = [...otp];
        newOtp[index] = "";
        setOtp(newOtp);
      } else {
        otpInputRefs[index - 1].focus();
      }
    }
  };

  const handleOtpVerify = () => {
    const combinedOtp = otp.join("");
    console.log(otp);
    if (combinedOtp.length != length) {
      console.log("Login failure with OTP: " + combinedOtp);
    } else {
      console.log("Login success with OTP: " + combinedOtp);
    }
  };

  return (
    <>
      <div className="mt-4 text-center">
        {otp.map((data, index) => (
          <input
            key={index}
            ref={(input) => (otpInputRefs[index] = input)}
            type="text"
            value={data}
            className="border-solid border-2 border-grey-700 py-2 px-8 h-20 w-20 rounded mx-2 text-lg"
            onChange={(event) => handleOnChange(event, index)}
            onClick={() => handleClick(index)}
            onKeyDown={(event) => handleKeyDown(event, index)}
          />
        ))}
      </div>
      <div className="text-center mt-6">
        <button
          type="button"
          className="bg-blue-500 hover:bg-blue-700 px-40 py-4 rounded text-white"
          onClick={handleOtpVerify}
        >
          Verify
        </button>
      </div>
    </>
  );
};

export default VerifyOtpForm;
