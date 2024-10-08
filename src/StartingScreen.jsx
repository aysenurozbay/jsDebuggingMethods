import React from "react";
import { Flex, Image, Typography } from "antd";
import backgroundImg from "./assets/debuggerIcons.png";

export const StartingScreen = () => {
  const containerStyle = {
    alignItems: "center",
    width: "100vw",
  };

  return (
    <div style={containerStyle}>
      <Flex justify="space-around" align="center" gap={"small"}>
        <Flex vertical>
          <Typography.Title> Chrome devtools Nedir</Typography.Title>
          <Typography.Text>
            Chrome DevTools, Google Chrome tarayıcısında bulunan bir web
            geliştirici aracıdır. DevTools, sayfaların düzenlenmesi,
            <br />
            CSS hatalarının ayıklanması, JavaScript hatalarının giderilmesi,
            <br />
            değişikliklerin uygulanması ve performans analizlerinin yapılması
            gibi çeşitli görevlerde yardımcı olur. <br />
            Bu araç, web geliştiricilerine sorunları çözmede ve uygulama
            performansını artırmada önemli bir destek sağlar.
          </Typography.Text>
        </Flex>

        <Image width={600} src={backgroundImg} />
      </Flex>
    </div>
  );
};

export default StartingScreen;
