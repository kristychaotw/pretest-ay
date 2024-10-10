import React, { useEffect, useState } from "react";
import AgeGroupSelect from "../units/AgeGroupSelect";
import PriceInput from "../units/PriceInput";
import { Button, Divider, Flex, Text } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";
import { getNumberIntervals } from "../../utils/common";

function AgeGroupPriceList({ onChange }) {
  const [list, setList] = useState([]);
  const existedAgeGroup = list.map((i) => i.ageGroup);
  const isAddDisabled =
    getNumberIntervals(existedAgeGroup).notInclude.length === 0;

  const addToList = () => {
    const newItem = { id: uuidv4(), ageGroup: [], price: 0 };
    setList([...list, newItem]);
  };

  const removeFromList = (id) => {
    setList((prev) => prev.filter((item) => item.id !== id));
  };

  const handleOnChange = ({ id, fieldName, value }) => {
    const updateItem = list.map((item) =>
      item.id === id ? { ...item, [fieldName]: value } : item
    );
    setList(updateItem);
  };

  useEffect(() => {
    const finalList = list.map((i) => ({
      ageGroup: i.ageGroup,
      price: i.price,
    }));
    onChange(finalList);
  }, [list, onChange]);

  return (
    <>
      {list.map((item, index) => (
        <div key={item.id}>
          {index > 0 && <Divider my={6} />}
          <Flex justifyContent={"space-between"}>
            <Text fontSize={"xl"} p={2}>
              價格設定 - {`${index + 1}`}
            </Text>
            {index > 0 && (
              <Button
                color={"red.400"}
                bgColor={"transparent"}
                onClick={() => removeFromList(item.id)}
              >
                Ｘ移除
              </Button>
            )}
          </Flex>
          <Flex>
            <AgeGroupSelect
              onChange={({ fieldName, value }) =>
                handleOnChange({ id: item.id, fieldName, value })
              }
              existedAgeGroup={existedAgeGroup}
            />
            <PriceInput
              onChange={({ fieldName, value }) =>
                handleOnChange({ id: item.id, fieldName, value })
              }
            />
          </Flex>
        </div>
      ))}
      <Button
        color={"green.400"}
        bgColor={"transparent"}
        disabled={isAddDisabled}
        onClick={addToList}
      >
        ＋新增價格設定
      </Button>
    </>
  );
}

export default AgeGroupPriceList;
