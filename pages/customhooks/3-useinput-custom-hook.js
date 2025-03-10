import React, { useRef } from "react";
import { Container, Text, Input, Button } from "@chakra-ui/react";
import useInput from "../../src/Hooks/useInput";

const UseInputCustomHook = () => {
  const firstInputRef = useRef(null);
  const lastInputRef = useRef(null);

  const [firstname, bindFirstname, resetFirstname] = useInput("");
  const [lastname, bindLastname, resetLastname] = useInput("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log({ e });
    resetFirstname();
    resetLastname();
  };

  // NOTE: useRef is just used for viewing the current value prop,
  // everything will perfectly work even without useRef
  console.log({
    firstname: firstInputRef?.current?.value,
    lastname: lastInputRef?.current?.value,
  });

  //  NOTE: spreads operator adds these attributes to "{value: '', onChange: ƒ}" input
  console.log("bindFirstname", { ...bindFirstname });
  console.log("bindLastname", { ...bindLastname });

  return (
    <Container p={5} m={5}>
      <Text fontSize={20} textDecoration="underline">
        useInput Custom Hook Example
      </Text>
      <form>
        First name: <Input type="text" {...bindFirstname} ref={firstInputRef} name="firstname" id="firstname" />
        Last name: <Input type="text" {...bindLastname} ref={lastInputRef} name="lastname" id="lastname" />
        <Button type="submit" onSubmit={(e) => onSubmitHandler(e)}>
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default UseInputCustomHook;
