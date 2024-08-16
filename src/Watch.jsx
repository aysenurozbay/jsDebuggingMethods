import { Button, Flex, Image, Typography } from "antd";
import React, { useState } from "react";
import watchCode from "./assets/watchCode.png";

const Watch = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1); // breakpoint ekleyin
  };

  const decrement = () => {
    setCount(count - 1); // breakpoint ekleyin
  };
  return (
    <div style={{ display: "flex" }}>
      <Flex justify="space-around" align="center" gap={"small"}>
        <Flex vertical>
          <Typography.Title> WATCH</Typography.Title>
          <Typography.Text>
            belirli bir değişkenin veya ifadenin değerini izlemek için
            kullanılır.
            <br />
            Bu, kodunuzun belirli bölümlerini incelemek ve değişkenlerin nasıl
            değiştiğini görmek için oldukça yararlıdır.
            <br /> Watch, özellikle kodunuzun belirli bir noktasında
            değişkenlerin ve ifadelerin değerlerini anlık olarak takip etmek
            için kullanışlıdır.
          </Typography.Text>
        </Flex>
        <Flex vertical gap={"large"}>
          <Typography.Title level={3}> KULLANALIM </Typography.Title>
          <Flex vertical gap={"large"}>
            <Image width={400} src={watchCode} />

            <Typography.Text>Current count: {count}</Typography.Text>
            <Button onClick={increment}>Increment</Button>
            <Button onClick={decrement} type="primary">
              Decrement
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
};

export default Watch;
