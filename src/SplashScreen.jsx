import { Button, Flex } from "antd";
import React from "react";
import { Link } from "react-router-dom";

export const SplashScreen = () => {
  return (
    <div style={{}}>
      <Flex justify="center" align="center">
        <Link
          to={`debuggingMethods`}
          style={{
            backgroundColor: "#fff",
            padding: 20,
            borderRadius: 20,
          }}
        >
          Your Name
        </Link>
      </Flex>
    </div>
  );
};
