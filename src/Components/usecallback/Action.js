import React from "react";
import { Button } from "@chakra-ui/react";

const Action = ({ actionName, actionFunction }) => {
  console.log(`${actionName} - Action is rendered`);

  const onClickHandler = () => {
    if (actionFunction) {
      actionFunction();
    } else {
      console.log("no actionFunction returned");
    }
  };

  return (
    <div>
      <Button onClick={() => onClickHandler()}> {actionName} </Button>
    </div>
  );
};

export default React.memo(Action);
