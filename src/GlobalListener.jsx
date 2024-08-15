import React, { useEffect, useState } from "react";

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

const GlobalListenerExample = () => {
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
    <div>
      <h4>Klavye Dinleyici Örneği</h4>
      <p>Herhangi bir tuşa basıldığında konsolda bir mesaj göreceksiniz.</p>
      {/* <WindowResizeListener /> */}
    </div>
  );
};

export default GlobalListenerExample;
