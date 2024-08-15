import { useState } from "react";

export const LineOfCode = () => {
  const [calculation, setCalculation] = useState(0);

  let globalVar = "Bu global bir değişken";

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
      throw new Error("Bu bir hata mesajıdır!");
    } catch (error) {
      console.error("Yakalanan hata:", error.message);
    }
    console.log("BURA");
  }

  function scopeFunction() {
    let localVar = "Yerel";
    if (true) {
      let blockVar = "Blok";
      console.log(blockVar); // Burada breakpoint ekleyelim
    }
    console.log(localVar);
  }

  function first() {
    second();
  }

  function second() {
    third();
  }

  function third() {
    console.log("Third function called"); // Buraya breakpoint ekleyin
  }

  let xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);
  xhr.onload = function () {
    console.log(xhr.responseText);
  };

  // console.log("todos", xhr.send());

  const fetching = () =>
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {})
      .catch((error) => console.error("Error:", error));

  return (
    <div>
      <h2>10 + 5 =</h2>
      <button onClick={handleOnClick}>Calculate</button>
      <h2>{calculation}</h2>

      <button onClick={pauseOnCaughtExceptions}>
        Pause on Uncaught / Caught Exceptions
      </button>
      <button onClick={scopeFunction}>Scope Button</button>
      <button onClick={first}>Call Stack Button</button>
      <button onClick={fetching}>Send Request Button</button>
    </div>
  );
};
