import { Button, Flex, Layout, Steps, Typography } from "antd";
import React, { useState } from "react";
import backgroundImg from "./assets/mainBg.jpg";
import Breakpoint from "./Breakpoint";
import CallStack from "./CallStack";
import CSPViolationBreakpoints from "./CSPViolationBreakpoints";
import DOMBreakpoints from "./DOMBreakpoints";
import EventListener from "./EventListener";
import GlobalListener from "./GlobalListener";
import Scope from "./Scope";
import StartingScreen from "./StartingScreen";
import Watch from "./Watch";
import XHRFetchBreakpoints from "./XHRFetchBreakpoints";

const { Content } = Layout;
const { Step } = Steps;

export const App = () => {
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
          Watch
        </Typography.Text>
      ),
      content: <Watch />,
    },
    {
      title: (
        <Typography.Text level={2} type="warning">
          Breakpoints
        </Typography.Text>
      ),
      content: <Breakpoint />,
    },
    {
      title: (
        <Typography.Text level={2} type="warning">
          Scope
        </Typography.Text>
      ),
      content: <Scope />,
    },
    {
      title: (
        <Typography.Text level={2} type="warning">
          Call Stack
        </Typography.Text>
      ),
      content: <CallStack />,
    },
    {
      title: (
        <Typography.Text level={2} type="warning">
          XHR Fetch Breakpoints
        </Typography.Text>
      ),
      content: <XHRFetchBreakpoints />,
    },
    {
      title: (
        <Typography.Text level={2} type="warning">
          DOM Breakpoints
        </Typography.Text>
      ),
      content: <DOMBreakpoints />,
    },
    {
      title: (
        <Typography.Text level={2} type="warning">
          Global Listener
        </Typography.Text>
      ),
      content: <GlobalListener />,
    },
    {
      title: (
        <Typography.Text level={2} type="warning">
          Event Listener Breakpoints
        </Typography.Text>
      ),
      content: <EventListener />,
    },
    {
      title: "CSP Violation Breakpoints",
      content: <CSPViolationBreakpoints />,
    },
  ];

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };
  return (
    <Layout
      style={{
        minHeight: "100vh",
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
      }}
    >
      <Flex vertical gap={"large"} style={{ padding: 20 }}>
        <Steps current={current} labelPlacement="vertical">
          {steps.map((item) => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <Flex style={{ height: 540 }}>
          <div className="steps-content">{steps[current].content}</div>
        </Flex>
        <Flex justify="space-between">
          {current > 0 && (
            <Button
              style={{ marginRight: 8 }}
              className="primary--color"
              onClick={() => prev()}
            >
              Previous
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
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => next()}>
              Next
            </Button>
          )}
        </Flex>
      </Flex>
    </Layout>
  );
};

export default App;
