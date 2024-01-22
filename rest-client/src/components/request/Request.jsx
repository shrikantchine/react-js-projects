import React, { useCallback, useState } from "react";
import ThemedSelect from "../../ui/ThemedSelect";
import ThemedInput from "../../ui/ThemedInput";
import ThemedButton from "../../ui/ThemedButton";
import ThemedTabPanel from "../../ui/ThemedTabPanel";
import KeyValue from "../keyValue/KeyValue";
import ThemedCodeEditor from "../../ui/ThemedCodeEditor";

const Request = () => {
  const [params, setParams] = useState([{ key: "", value: "" }]);
  const [headers, setHeaders] = useState([{ key: "", value: "" }]);
  const [body, setBody] = useState("");

  const onBodyChange = useCallback((val) => {
    setBody(val);
  }, []);

  const handleHttpMethodChange = (event) => {
    console.log(event.target.value);
  };

  const items = [
    {
      key: "Param",
      value: <KeyValue title="Params" data={params} update={setParams} />,
    },
    {
      key: "Headers",
      value: <KeyValue title="Headers" data={headers} update={setHeaders} />,
    },
    {
      key: "Body",
      value: <ThemedCodeEditor onChange={onBodyChange} />,
    },
  ];
  return (
    <div className="mx-4">
      <h1 className=" mb-3 text-3xl dark:text-white">Request</h1>
      <form>
        <div className="flex justify-normal">
          <ThemedSelect onChange={handleHttpMethodChange}>
            <option value={"GET"}>GET</option>
            <option value={"POST"}>POST</option>
            <option value={"PUT"}>PUT</option>
            <option value={"DELETE"}>DELETE</option>
          </ThemedSelect>
          <ThemedInput type={"url"} placeholder={"http://example.com"} />
          <ThemedButton>Send</ThemedButton>
        </div>
        <div className="mt-5">
          <ThemedTabPanel items={items} />
        </div>
      </form>
    </div>
  );
};

export default Request;
