import React from "react";

const EventListenerExample = () => {
  const handleClick = () => {
    console.log("Butona tıklandı!");
  };

  return (
    <div>
      <h4>Event Listener Breakpoint Örneği</h4>
      <button onClick={handleClick}>Tıkla Beni</button>
    </div>
  );
};

export default EventListenerExample;
