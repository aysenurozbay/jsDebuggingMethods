import { Button, Card, message, Steps, Typography, Space, Flex } from "antd";
import React, { useState } from "react";
import CSPViolationBreakpoints from "./CSPViolationBreakpoints";
import { DOMBreakpoints } from "./DOMBreakpoints";
import EventListenerExample from "./EventListener";
import { StartingScreen } from "./StartingScreen";

const { Step } = Steps;

function App() {
  const [current, setCurrent] = useState(0);

  const steps = [
    {
      title: (
        <Typography.Text level={2} type="warning">
          First Baby Step
        </Typography.Text>
      ),
      content: <StartingScreen />,
    },
    {
      title: (
        <Typography.Text level={2} type="warning">
          Breakpoints
        </Typography.Text>
      ),
      content: <DOMBreakpoints />,
    },
    {
      title: "Pause on Exceptions",
      content: <CSPViolationBreakpoints />,
    },
    {
      title: "XHR/Fetch Breakpoints",
      content: <EventListenerExample />,
    },
    {
      title: "XHR/Fetch Breakpoints",
      content: <EventListenerExample />,
    },
  ];

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <Flex style={{ flex: 1, padding: "40px" }} vertical gap={"large"}>
      <Typography.Title level={2} type="danger" style={{ alignSelf: "center" }}>
        How to Train Your Debugger?
      </Typography.Title>
      <Steps
        current={current}
        style={{ marginBottom: "40px" }}
        labelPlacement="vertical"
      >
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <Flex style={{ width: "900px" }}>
        <div className="steps-content">{steps[current].content}</div>
      </Flex>
      <Space
        style={{ marginTop: "40px", display: "flex", justifyContent: "center" }}
      >
        {current > 0 && (
          <Button style={{ marginRight: 8 }} onClick={() => prev()}>
            Previous
          </Button>
        )}
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => message.success("All steps completed!")}
          >
            Done
          </Button>
        )}
      </Space>
    </Flex>
  );
}

export default App;
