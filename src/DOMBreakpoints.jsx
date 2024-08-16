import { Button, Flex, Image, Typography } from "antd";
import React, { useState } from "react";
import scopeCode from "./assets/scopeCode.png";

const SubtreeModificationExample = () => {
  const [text, setText] = useState("Initial text");

  return (
    <div id="container">
      <p>{text}</p>
      <button onClick={() => setText("Text has been changed!")}>
        Change Text
      </button>
    </div>
  );
};

const AttributeModificationExample = () => {
  const [isRed, setIsRed] = useState(false);

  const toggleColor = () => {
    setIsRed(!isRed);
  };

  return (
    <div>
      <div
        id="color-box"
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: isRed ? "red" : "blue",
          transition: "background-color 0.3s ease",
        }}
      ></div>
      <Button onClick={toggleColor}>Toggle Color</Button>
    </div>
  );
};

const NodeRemovalExample = () => {
  const [showElement, setShowElement] = useState(true);

  const removeElement = () => {
    setShowElement(false);
  };

  return (
    <div>
      {showElement && <div id="removable">This element will be removed</div>}
      <Button onClick={removeElement}>Remove Element</Button>
    </div>
  );
};

const DOMBreakpoints = () => {
  return (
    <div style={{ display: "flex" }}>
      <Flex justify="space-around" align="center" gap={"small"}>
        <Flex vertical>
          <Typography.Title> DOM BREAKPOINTS</Typography.Title>
          <Typography.Text>
            belirli bir DOM (Document Object Model) öğesi değiştirildiğinde,
            silindiğinde veya <br />
            çocukları güncellendiğinde kodun durmasını sağlayan bir hata
            ayıklama aracıdır. <br />
            Bu, özellikle bir sayfada beklenmedik bir DOM manipülasyonu
            olduğunda, bu değişikliğin kaynağını bulmak için çok kullanışlıdır.
            <br />
            &#183; Subtree Modifications <br />
            &#183; Attribute Modifications <br />
            &#183; Node Removal
          </Typography.Text>
        </Flex>
        <Flex vertical gap={"large"}>
          <Typography.Title level={3}> KULLANALIM </Typography.Title>
          <a
            href="/public/domExample.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            DOM Breakpoints Örneklerini Görüntüle
          </a>
        </Flex>
      </Flex>
    </div>
  );
};

export default DOMBreakpoints;
