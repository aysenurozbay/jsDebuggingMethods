import { Button, Flex, Typography, Image } from "antd";
import React, { useState } from "react";
import breakpointsCode from "./assets/breakpointsCode.png";

const Breakpoint = () => {
  const [calculation, setCalculation] = useState(0);

  function calculateSum(a, b) {
    let sum = a + b;
    return sum;
  }

  const handleOnClick = () => {
    let result = calculateSum(5, 10);
    setCalculation(result);
  };
  function pauseOnCaughtExceptions() {
    try {
      console.log("Start of try block");
      // Yakalanmış hata
      throw new Error("This is a caught exception");
    } catch (e) {
      console.log("Caught an exception:", e.message);
    }

    // Yakalanmamış hata
    console.log("About to throw uncaught exception");
    throw new Error("This is an uncaught exception");
  }
  return (
    <div style={{ display: "flex" }}>
      <Flex justify="space-around" align="center" gap={"small"}>
        <Flex vertical gap={"small"}>
          <Typography.Title> BREAKPOINTS</Typography.Title>
          <Typography.Text>
            Bu özellikler, kodunuzda istisnalar (exceptions) meydana geldiğinde
            yürütmeyi durdurmanıza olanak tanır, <br />
            böylece hatayı ayrıntılı bir şekilde inceleyebilirsiniz. CSS
            hatalarının ayıklanması, JavaScript hatalarının giderilmesi,
          </Typography.Text>
          <Flex vertical>
            <Typography.Title level={5}>
              Pause on Uncaught Exceptions
            </Typography.Title>
            <Typography.Text>
              Kodda bir istisna (hata) <br />
              meydana geldiğinde ve bu hata bir try...catch bloğu ile
              yakalanmadığında (uncaught)
              <br />
            </Typography.Text>
          </Flex>
          <Flex vertical>
            <Typography.Title level={5}>
              Pause on Caught Exceptions
            </Typography.Title>
            <Typography.Text>
              Kodda bir istisna (hata) <br />
              meydana geldiğinde ve bu hata bir try...catch bloğu ile
              yakalandığında (uncaught)
              <br />
              * Hata fırlatıldığında ve catch bloğu içine girildiğinde, kod
              yürütmeyi durdurur. <br />* DevTools size bu noktada hatayı, hata
              mesajını, hangi satırda olduğunu, hata anındaki değişken
              değerlerini ve çağrı yığınını (call stack) inceleme imkanı verir.
            </Typography.Text>
          </Flex>
        </Flex>
        <Flex vertical gap={"large"}>
          <Typography.Title level={3}> KULLANALIM </Typography.Title>

          <Image width={400} src={breakpointsCode} />
          <Button onClick={pauseOnCaughtExceptions}>
            Pause on Uncaught / Caught Exceptions
          </Button>
        </Flex>
      </Flex>
    </div>
  );
};

export default Breakpoint;
