import React, { useEffect, useRef, useState } from "react";

const SendOTPForm = ({ setSubmitted }) => {
  const [phone, setPhone] = useState("");

  const sendOtp = (event) => {
    event.preventDefault();
    const regex = /[^0-9]/g;
    if (phone.length < 10 || regex.test(phone)) {
      alert("Invalid phone number");
      return;
    }
    setSubmitted(true);
  };

  const phoneNumberInput = useRef();

  useEffect(() => {
    phoneNumberInput.current.focus();
  }, []);

  return (
    <form className="text-center mt-5" onSubmit={sendOtp}>
      <input
        type="text"
        placeholder="Phone number"
        className="mr-5 shadow border rounded py-2 px-4 text-grey-700"
        ref={phoneNumberInput}
        onChange={(event) => setPhone(event.target.value)}
      />
      <input
        type="submit"
        value={"Send OTP"}
        className="bg-blue-500 hover:bg-blue-700 py-2 px-4 text-white rounded"
      ></input>
    </form>
  );
};

export default SendOTPForm;
