import { Flex, Image, Typography } from "antd";
import React, { useEffect, useState } from "react";
import globalListenerCode from "./assets/globalListenerCode.png";

const WindowResizeListener = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      console.log(
        `Yeni genişlik: ${window.innerWidth}, Yeni yükseklik: ${window.innerHeight}`
      );
    };

    // Global listener ekleniyor
    window.addEventListener("resize", handleResize);

    // Bileşen kaldırıldığında listener temizleniyor
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <h4>Pencere Boyutlandırma Dinleyici Örneği</h4>
      <p>
        Genişlik: {windowSize.width}px, Yükseklik: {windowSize.height}px
      </p>
    </div>
  );
};

const GlobalListener = () => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      console.log(`Tuşa basıldı: ${event.key}`);
    };

    // Global listener ekleniyor
    window.addEventListener("keydown", handleKeyDown);

    // Bileşen kaldırıldığında listener temizleniyor
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return (
    <div style={{ display: "flex" }}>
      <Flex justify="space-around" align="center" gap={"small"}>
        <Flex vertical>
          <Typography.Title> GLOBAL LISTENER EVENT</Typography.Title>
          <Typography.Text>
            belirli bir olay türünü yakalamak için tarayıcı penceresine (veya
            başka bir büyük kapsamlı öğeye, örneğin document veya window
            nesnesine) eklenen bir dinleyicidir. <br />
            Bu dinleyici, sayfadaki herhangi bir öğede tetiklenen olayları
            yakalayabilir. Örneğin, bir kullanıcı klavyede bir tuşa bastığında
            veya fareyi hareket ettirdiğinde, bu olaylar küresel dinleyiciler
            tarafından yakalanabilir. <br />
            React'te bir global event listener eklemek için, genellikle
            useEffect hook'u kullanılır.Bu, bileşen yüklendiğinde
            (componentDidMount aşamasında) dinleyiciyi eklemenize ve bileşen
            kaldırıldığında (componentWillUnmount aşamasında) dinleyiciyi
            temizlemenize olanak tanır.
            <br />
          </Typography.Text>
        </Flex>
        <Flex vertical gap={"large"}>
          <Typography.Title level={3}> KULLANALIM </Typography.Title>

          <Image width={400} src={globalListenerCode} />
        </Flex>
      </Flex>
    </div>
  );
};

export default GlobalListener;
