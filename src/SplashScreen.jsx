import { Button, Typography, Layout } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import backgroundImg from "./assets/bg.jpg";

const { Content } = Layout;

export const SplashScreen = () => {
  return (
    <Layout
      style={{
        minHeight: "100vh",
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Content
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography.Title level={1}>
          Chrome JavaScript Debugging Techniques
        </Typography.Title>
        <Link to="debuggingMethods">
          <Button size="large" className="primary--color">
            Getting Started
          </Button>
        </Link>
      </Content>
    </Layout>
  );
};
