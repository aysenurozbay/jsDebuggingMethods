import { Button, Flex, Image, Typography } from "antd";
import React from "react";
import callStackCode from "./assets/callStackCode.png";

const CallStack = () => {
  function first() {
    second();
  }

  function second() {
    third();
  }

  function third() {
    console.log("Third function called"); // Buraya breakpoint ekleyin
  }
  return (
    <div style={{ display: "flex" }}>
      <Flex justify="space-around" align="center" gap={"small"}>
        <Flex vertical>
          <Typography.Title> CALL STACK</Typography.Title>
          <Typography.Text>
            JavaScript'te fonksiyonların hangi sırayla çağrıldığını gösteren bir
            veri yapısıdır
            <br />
            Kod çalışırken hangi fonksiyonun hangi diğer fonksiyonlar tarafından
            çağrıldığını, <br />
            yani kodun yürütülme yolunu takip eder. Bu, özellikle hata ayıklama
            sırasında kodun hangi noktada durduğunu ve oraya nasıl ulaştığını
            <br />
            anlamak için çok faydalıdır.
          </Typography.Text>
        </Flex>
        <Flex vertical gap={"large"}>
          <Typography.Title level={3}> KULLANALIM </Typography.Title>
          <Image width={500} src={callStackCode} />
          <Button onClick={first}>Call Stack </Button>
        </Flex>
      </Flex>
    </div>
  );
};

export default CallStack;
