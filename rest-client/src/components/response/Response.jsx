import React from "react";
import ThemedTabPanel from "../../ui/ThemedTabPanel";
import ThemedCodeEditor from "../../ui/ThemedCodeEditor";
import ResponseHeaders from "../responseHeaders/ResponseHeaders";

const Response = () => {
  const items = [
    {
      key: "Response body",
      value: <ThemedCodeEditor onChange={() => {}} readonly />,
    },
    {
      key: "Headers",
      value: <ResponseHeaders />,
    },
  ];

  return (
    <div className="mx-4 mt-5">
      <h1 className=" mb-3 text-3xl dark:text-white">Response</h1>
      <div className="flex justify-items-start">
        <span className="me-4 dark:text-gray-300">Status: 200</span>
        <span className="me-4 dark:text-gray-300">Time taken: 200</span>
      </div>
      <ThemedTabPanel items={items} />
    </div>
  );
};

export default Response;
