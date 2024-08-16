import { Button, Flex, Image, Typography } from "antd";
import React from "react";
import scopeCode from "./assets/scopeCode.png";

const Scope = () => {
  var globalVar = "I am a global variable";

  function testScopes() {
    // Fonksiyon değişkenleri
    var functionVar = "I am a function variable";

    if (true) {
      // Blok değişkenleri
      let blockVar = "I am a block variable";
      console.log(blockVar); // Erişilebilir
    }

    console.log(functionVar); // Erişilebilir
    // console.log(blockVar); // Hata: blockVar is not defined

    var globalVar = "I am still a global variable";
  }
  return (
    <div style={{ display: "flex" }}>
      <Flex justify="space-around" align="center" gap={"small"}>
        <Flex vertical>
          <Typography.Title> DOM BREAKPOINTS</Typography.Title>
          <Typography.Text>
            belirli bir DOM (Document Object Model) öğesi değiştirildiğinde,
            silindiğinde veya children’ları güncellendiğinde kodun durmasını
            sağlayan bir hata ayıklama aracıdır. <br />
            Bu, özellikle bir sayfada beklenmedik bir DOM manipülasyonu
            olduğunda, bu değişikliğin kaynağını bulmak için çok kullanışlıdır.
            <br />
          </Typography.Text>
        </Flex>
        <Flex vertical gap={"large"}>
          <Typography.Title level={3}> KULLANALIM </Typography.Title>
          <Image width={400} src={scopeCode} />
          <Button onClick={testScopes}>Test Scope</Button>
        </Flex>
      </Flex>
    </div>
  );
};

export default Scope;
