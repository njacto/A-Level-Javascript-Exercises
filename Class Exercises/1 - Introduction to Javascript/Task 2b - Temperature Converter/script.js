// Add event listener to the convert button
document.getElementById('convertBtn').addEventListener('click', convertTemperature);

function convertTemperature() {
    // TODO:
    // 1. Get the Celsius temperature from the input field
    // 2. Convert to Fahrenheit using the formula: F = 1.8 * C + 32
    // 3. Display the result in the fahrenheit span element

    let celsiusInput = parseFloat(document.getElementById("celsius").value);

    let fahreinheitValue = 1.8 * celsiusInput + 32
    let fahrenheitOutput = document.getElementById("fahrenheit");

    if (Number.isNaN(celsiusInput)) {
        fahrenheitOutput.textContent = "Enter a number value "
      }  else {
        fahrenheitOutput.textContent = fahreinheitValue.toFixed(1)
    }

}
