import { Button, Flex, Image, Typography } from "antd";
import React from "react";
import xhrFetchCode from "./assets/xhrFetchCode.png";

const XHRFetchBreakpoints = () => {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);
  xhr.onload = function () {
    console.log(xhr.responseText);
  };

  const fetching = () =>
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {})
      .catch((error) => console.error("Error:", error));

  return (
    <div style={{ display: "flex" }}>
      <Flex justify="space-around" align="center" gap={"small"}>
        <Flex vertical>
          <Typography.Title> XHR FETCH BREAKPOINTS</Typography.Title>
          <Typography.Text>
            bir web sayfası tarafından yapılan XHR (XMLHttpRequest) veya Fetch
            API istekleri sırasında kodun durmasını sağlamak için kullanılır.
            <br /> Bu breakpoints, özellikle web uygulamalarında API isteklerini
            izlemek ve bu isteklerin sonuçlarını analiz etmek için çok
            faydalıdır.
            <br />
            Bu, özellikle bir web uygulamasının belirli bir veri çekme veya
            gönderme işleminde hatalar oluştuğunda çok yararlı olabilir.
          </Typography.Text>
        </Flex>
        <Flex vertical gap={"large"}>
          <Typography.Title level={3}> KULLANALIM </Typography.Title>
          <Image width={400} src={xhrFetchCode} />
          <Button onClick={fetching}>XHR Fetch Breakpoints Stack </Button>
        </Flex>
      </Flex>
    </div>
  );
};

export default XHRFetchBreakpoints;
