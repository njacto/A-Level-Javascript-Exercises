// Add event listener to the calculate button
document.getElementById('calculateBtn').addEventListener('click', calculateCircle);

function calculateCircle() {
    // TODO:
    // 1. Get the radius value from the input field
    // 2. Calculate:
    //    - Circumference using the formula: 2 * π * radius
    //    - Area using the formula: π * radius^2
    // 3. Display both results in their respective span elements
    // Note: Use Math.PI for the value of π

    const pi = Math.PI;

    let radiusInput = parseInt(document.getElementById('radius').value)

    let circumference = 2 * pi * radiusInput
    let area = pi * Math.pow(radiusInput, 2)

    let circumferenceOutput = document.getElementById('circumference')
    let areaOutput = document.getElementById('area')
    
    circumferenceOutput.textContent = circumference
    areaOutput.textContent = area
}
