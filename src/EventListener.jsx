import { Button, Flex, Typography } from "antd";
import React from "react";

const EventListener = () => {
  const handleClick = () => {
    console.log("Butona tıklandı!");
  };
  return (
    <div style={{ display: "flex" }}>
      <Flex justify="space-around" align="center" gap={"small"}>
        <Flex vertical>
          <Typography.Title> DOM BREAKPOINTS</Typography.Title>
          <Typography.Text>
            kodunun belirli olay türleri (event types) tarafından
            tetiklendiğinde durmasını sağlar. <br />
            Bu, özellikle olay tabanlı programlama yaparken veya olay
            işleyicilerinde (event handlers) hata ayıklarken oldukça
            kullanışlıdır. <br />
            Bu breakpoints, bir olay tetiklendiğinde kodun nasıl çalıştığını
            daha iyi anlamanızı sağlar.
          </Typography.Text>
        </Flex>
        <Flex vertical gap={"large"}>
          <Typography.Title level={3}> KULLANALIM </Typography.Title>
          <Button onClick={handleClick}>Event Listener Breakpoints</Button>
        </Flex>
      </Flex>
    </div>
  );
};

export default EventListener;
