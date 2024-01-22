import React from "react";

const ResponseHeaders = () => {
  return (
    <table className="">
      <thead>
        <tr>
          <th>Key</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Content-type</td>
          <td>JSON</td>
        </tr>
      </tbody>
    </table>
  );
};

export default ResponseHeaders;
