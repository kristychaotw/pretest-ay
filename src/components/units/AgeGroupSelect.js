import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  InputGroup,
  InputLeftAddon,
  Select,
} from "@chakra-ui/react";
import React from "react";

function AgeGroupSelect({ onChange }) {
  const handleOnChange = ({ target: { value, name } }) => {
    const result = [0, 0];
    const nameToIndex = {
      ageStart: 0,
      ageEnd: 1,
    };

    const index = nameToIndex[name];
    if (index !== undefined) {
      result[index] = parseInt(value);
    }
    onChange({
      fieldName: "ageGroup",
      value: result,
    });
  };
  return (
    <FormControl isInvalid={true} p={2}>
      <FormLabel fontSize="md" color={"grey"}>
        年齡
      </FormLabel>
      <InputGroup mt={2} mb={0} size={"lg"}>
        <Select
          name="ageStart"
          borderRadius={"6px 0px 0px 6px"}
          errorBorderColor="red.300"
          onChange={handleOnChange}
        >
          {[
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
            19, 20,
          ].map((value, index) => (
            <option key={index} value={value}>
              {value}
            </option>
          ))}
        </Select>
        <InputLeftAddon
          color={"grey.400"}
          borderRadius={"0px"}
          outline={"10px grey.100 solid"}
        >
          ～
        </InputLeftAddon>
        <Select
          borderRadius={"0px 6px 6px 0px"}
          errorBorderColor="red.300"
          name="ageStart"
          onChange={handleOnChange}
        >
          {[
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
            19, 20,
          ].map((value, index) => (
            <option key={index} value={value}>
              {value}
            </option>
          ))}
        </Select>
      </InputGroup>
      <FormErrorMessage
        color={"red.500"}
        bgColor={"red.100"}
        mt={0}
        p={2}
        borderRadius={"5px"}
      >
        年齡區間不可重疊
      </FormErrorMessage>
    </FormControl>
  );
}

export default AgeGroupSelect;
