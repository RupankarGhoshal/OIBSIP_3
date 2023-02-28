const inputTemperature = document.getElementById("inputTemperature");
const inputScale = document.getElementById("inputScale");
const outputTemperature = document.getElementById("outputTemperature");
const outputScale = document.getElementById("outputScale");
const convertBtn = document.getElementById("convertBtn");

convertBtn.addEventListener("click", function () {
    let inputTemp = parseFloat(inputTemperature.value);
    let inputUnit = inputScale.value;
    let outputUnit = outputScale.value;

    if (inputUnit === "celsius") {
        if (outputUnit === "fahrenheit") {
            outputTemperature.value = (inputTemp * 9 / 5) + 32;
        } else if (outputUnit === "kelvin") {
            outputTemperature.value = inputTemp + 273.15;
        } else {
            outputTemperature.value = inputTemp;
        }
    } else if (inputUnit === "fahrenheit") {
        if (outputUnit === "celsius") {
            outputTemperature.value = (inputTemp - 32) * 5 / 9;
        } else if (outputUnit === "kelvin") {
            outputTemperature.value = (inputTemp - 32) * 5 / 9 + 273.15;
        } else {
            outputTemperature.value = inputTemp;
        }
    } else if (inputUnit === "kelvin") {
        if (outputUnit === "celsius") {
            outputTemperature.value = inputTemp - 273.15;
        } else if (outputUnit === "fahrenheit") {
            outputTemperature.value = (inputTemp - 273.15) * 9 / 5 + 32;
        } else {
            outputTemperature.value = inputTemp;
        }
    }
});
