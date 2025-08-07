function convertTemperature() {
    const inputTemp = document.getElementById("temperature").value;
    const fromUnit = document.getElementById("from").value;
    const toUnit = document.getElementById("to").value;
    const resultBox = document.getElementById("result");
  
    if (inputTemp === "" || isNaN(inputTemp)) {
      resultBox.textContent = "Please enter a valid number.";
      return;
    }
  
    const temp = parseFloat(inputTemp);
    let result;
  
    // Convert input to Celsius first
    let celsius;
  
    if (fromUnit === "C") {
      celsius = temp;
    } else if (fromUnit === "F") {
      celsius = (temp - 32) * (5 / 9);
    } else if (fromUnit === "K") {
      celsius = temp - 273.15;
    }
  
    // Convert Celsius to target unit
    if (toUnit === "C") {
      result = celsius;
    } else if (toUnit === "F") {
      result = celsius * (9 / 5) + 32;
    } else if (toUnit === "K") {
      result = celsius + 273.15;
    }
  
    resultBox.textContent = `Converted: ${result.toFixed(2)} °${toUnit}`;
  }
  