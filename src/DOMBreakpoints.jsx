import React, { useState } from "react";

const SubtreeModificationExample = () => {
  const [items, setItems] = useState(["Item 1", "Item 2"]);

  const addItem = () => {
    setItems([...items, `Item ${items.length + 1}`]);
  };

  return (
    <div id="list-container">
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={addItem}>Add Item</button>
    </div>
  );
};

const AttributeModificationExample = () => {
  const [isRed, setIsRed] = useState(false);

  const toggleColor = () => {
    setIsRed(!isRed);
  };

  return (
    <div>
      <div
        id="color-box"
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: isRed ? "red" : "blue",
          transition: "background-color 0.3s ease",
        }}
      ></div>
      <button onClick={toggleColor}>Toggle Color</button>
    </div>
  );
};

const NodeRemovalExample = () => {
  const [showElement, setShowElement] = useState(true);

  const removeElement = () => {
    setShowElement(false);
  };

  return (
    <div>
      {showElement && <div id="removable">This element will be removed</div>}
      <button onClick={removeElement}>Remove Element</button>
    </div>
  );
};

export const DOMBreakpoints = () => {
  return (
    <div>
      <h3>DOM Breakpoint`&apos;`leri</h3>

      <SubtreeModificationExample />
      <AttributeModificationExample />
      <NodeRemovalExample />
    </div>
  );
};
