import { Button, Flex, Image, Input, Typography } from "antd";
import React, { useEffect, useState } from "react";

const PolicyViolationExample = () => {
  useEffect(() => {
    if (window.trustedTypes) {
      try {
        // Trusted Types politikası oluşturun
        const policy = trustedTypes.createPolicy("default", {
          createHTML: (input) => {
            // Güvenli HTML içeriği oluşturma
            return input;
          },
          createScript: (input) => input,
          createScriptURL: (input) => input,
        });

        // Güvenli içerik oluşturma
        const safeContent = "<p>Bu güvenli bir içeriktir.</p>";
        document.getElementById("content").innerHTML =
          policy.createHTML(safeContent);

        // Trusted Types politikası tarafından engellenmemesi gereken güvenli içerik
        const unsafeContent =
          '<script>alert("Bu bir güvenlik açığıdır!");</script>';

        // Güvenli olmayan içeriği eklemeyi deneyin
        document.getElementById("content").innerHTML = unsafeContent;
      } catch (error) {
        console.error("Trusted Types API hatası:", error);
      }
    } else {
      console.error("Trusted Types API mevcut değil.");
    }
  }, []);

  return <div></div>;
};
const SinkViolationExample = () => {
  const [userInput, setUserInput] = useState("");

  const handleChange = (event) => {
    setUserInput(event.target.value);
  };

  return (
    <Flex gap={"large"} vertical>
      <Input
        type="text"
        value={userInput}
        onChange={handleChange}
        placeholder="Type something"
        style={{ width: 400 }}
      />

      <Flex gap={"large"} align="center">
        <Typography.Text strong>Output:</Typography.Text>
        <div dangerouslySetInnerHTML={{ __html: userInput }} />
      </Flex>
    </Flex>
  );
};
const CSPViolationBreakpoints = () => {
  return (
    <div style={{ display: "flex" }}>
      <Flex justify="space-around" align="center" gap={"small"}>
        <Flex vertical>
          <Typography.Title> CALL STACK</Typography.Title>
          <Typography.Text>
            İçerik Güvenlik Politikası (Content Security Policy, CSP)
            ihlallerini izlemenize olanak tanır. <br />
            CSP, web sayfalarının hangi kaynakları yükleyebileceğini kontrol
            etmek için kullanılan bir güvenlik özelliğidir.
            <br /> CSP Violation Breakpoints, bu politikaların ihlal edildiği
            durumlarda kodu durdurarak, <br /> hangi kaynakların veya kodların
            güvenlik politikalarını aştığını anlamanızı sağlar. <br />* Sink
            Violations: Trusted Types ile oluşturulmuş güvenilir türlerin bir
            yere aktarıldığı durumlarda, politikaya uygun olup olmadığını
            denetler.
            <br />* Policy Violations: Trusted Types politikalarının ihlal
            edildiği durumlarda devreye girer ve güvenlik açıklarını gösterir.
          </Typography.Text>
        </Flex>
        <Flex vertical gap={"large"}>
          <Typography.Title level={3}> KULLANALIM </Typography.Title>
          <SinkViolationExample />
          <PolicyViolationExample />
        </Flex>
      </Flex>
    </div>
  );
};

export default CSPViolationBreakpoints;
