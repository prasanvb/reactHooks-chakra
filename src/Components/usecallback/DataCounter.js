import React from "react";

const DataCounter = ({ info, value }) => {
  console.log(`${info} - DataCounter is rendered`);
  return (
    <div>
      <p> {`${info} = ${value}`} </p>
    </div>
  );
};

export default React.memo(DataCounter);
