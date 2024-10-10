import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  InputGroup,
  InputLeftAddon,
  Select,
} from "@chakra-ui/react";
import React, { useState } from "react";

const ageOptions = [...Array(21)].map((_, index) => ({
  value: index,
}));
const fieldConfig = {
  ageStart: 0,
  ageEnd: 1,
};

function AgeGroupSelect({ onChange }) {
  const [ageRange, setAgeRange] = useState([0, 0]);
  const disabledHandler = ({ age, name }) => {
    if (fieldConfig[name] === 0 && ageRange[1] !== 0) {
      return ageRange[1] < age;
    }

    if (fieldConfig[name] === 1) {
      return ageRange[0] > age;
    }
  };
  const handleOnChange = ({ target: { value, name } }) => {
    const index = fieldConfig[name];
    const newAgeRange = [...ageRange];
    if (index !== undefined) {
      newAgeRange[index] = parseInt(value);
      setAgeRange(newAgeRange);
    }
    onChange({
      fieldName: "ageGroup",
      value: newAgeRange,
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
          {ageOptions.map(({ index, value }) => (
            <option
              key={index}
              value={value}
              disabled={disabledHandler({ age: value, name: "ageStart" })}
            >
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
          name="ageEnd"
          borderRadius={"0px 6px 6px 0px"}
          errorBorderColor="red.300"
          onChange={handleOnChange}
        >
          {ageOptions.map(({ index, value }) => (
            <option
              key={index}
              value={value}
              disabled={disabledHandler({ age: value, name: "ageEnd" })}
            >
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
