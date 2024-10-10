import React, { useState } from "react";
import { addComma } from "../../utils/common";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  Text,
} from "@chakra-ui/react";
function PriceInput({ onChange }) {
  const [rawPrice, setRawPrice] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const handleOnChange = (e) => {
    const value = e.target.value;

    const pureNumber = value.replace(/[^0-9.]/g, "");
    const decimalCount = (pureNumber.match(/\./g) || []).length;
    if (decimalCount <= 1) {
      setRawPrice(pureNumber);
      onChange({
        fieldName: "price",
        value: pureNumber,
      });
    }
    //validation
    setErrorMsg(pureNumber === "" ? "不可以為空白" : "");
  };

  const [integerPart, decimalPart = ""] = rawPrice.split(".");
  const displayValue =
    decimalPart !== ""
      ? `${addComma(integerPart)}.${decimalPart}`
      : addComma(integerPart) + (rawPrice.endsWith(".") ? "." : "");

  return (
    <FormControl isInvalid={errorMsg} p={2}>
      <FormLabel fontSize="md" color={"grey"}>
        入住費用(每人每晚)
      </FormLabel>
      <InputGroup mt={2} size={"lg"}>
        <InputLeftAddon
          color={"grey.400"}
          outline={"3px grey.100 solid"}
          py={5}
          px={2}
        >
          TWD
        </InputLeftAddon>
        <Input
          placeholder="請輸入費用"
          py={5}
          type="text"
          value={displayValue}
          onChange={handleOnChange}
          errorBorderColor="red.300"
        />
      </InputGroup>
      <FormErrorMessage
        color={"red.500"}
        bgColor={"red.100"}
        mt={0}
        p={2}
        borderRadius={"5px"}
      >
        {errorMsg}
      </FormErrorMessage>
      <Text fontSize="sm" color={"grey"} align={"right"} pt={1}>
        輸入 0 表示免費
      </Text>
    </FormControl>
  );
}

export default PriceInput;
