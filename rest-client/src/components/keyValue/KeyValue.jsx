import React from "react";
import ThemedInput from "../../ui/ThemedInput";
import ThemedButton from "../../ui/ThemedButton";

const KeyValue = ({ data, title, update }) => {
  const handleChange = (idx, event) => {
    let tmp = [...data];
    tmp[idx][event.target.name] = event.target.value;
    update(tmp);
  };

  const removeParam = (event, idx) => {
    let tmp = [...data];
    tmp.splice(idx, 1);
    update(tmp);
  };

  const addParam = () => {
    update([...data, { key: "", value: "" }]);
  };

  return (
    <div className="p-3">
      <div className="mb-3 flex justify-between">
        <h3 className="text-xl dark:text-white">{title}</h3>
        <ThemedButton onClick={addParam}>Add</ThemedButton>
      </div>
      {data.map((element, index) => (
        <div className="mt-1 flex justify-normal" key={index}>
          <ThemedInput
            type={"text"}
            name="key"
            placeholder={"Key"}
            value={element.key || ""}
            onChange={(e) => handleChange(index, e)}
          />
          <ThemedInput
            type={"text"}
            name="value"
            placeholder={"Value"}
            value={element.value || ""}
            onChange={(e) => handleChange(index, e)}
          />
          <ThemedButton
            variant={"danger"}
            onClick={(e) => removeParam(e, index)}
          >
            Remove
          </ThemedButton>
        </div>
      ))}
    </div>
  );
};

export default KeyValue;
