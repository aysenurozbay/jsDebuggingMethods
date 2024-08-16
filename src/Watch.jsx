import { Flex, Typography } from "antd";
import React from "react";

const Watch = () => {
  return (
    <div style={{ display: "flex" }}>
      <Flex justify="space-around" align="center" gap={"small"}>
        <Flex vertical>
          <Typography.Title> WATCH</Typography.Title>
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
      </Flex>
    </div>
  );
};

export default Watch;
