import React, { useEffect, useState } from "react";
import AgeGroupSelect from "../units/AgeGroupSelect";
import PriceInput from "../units/PriceInput";
import { Button, Divider, Flex, Text } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";

function AgeGroupPriceList({ onChange }) {
  const [list, setList] = useState([]);
  const isAddDisabled = false;

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
              <Button onClick={() => removeFromList(item.id)}>Ｘ移除</Button>
            )}
          </Flex>
          <Flex>
            <AgeGroupSelect
              onChange={({ fieldName, value }) =>
                handleOnChange({ id: item.id, fieldName, value })
              }
            />
            <PriceInput
              onChange={({ fieldName, value }) =>
                handleOnChange({ id: item.id, fieldName, value })
              }
            />
          </Flex>
        </div>
      ))}
      <Button disabled={isAddDisabled} onClick={addToList}>
        ＋新增價格設定
      </Button>
    </>
  );
}

export default AgeGroupPriceList;
