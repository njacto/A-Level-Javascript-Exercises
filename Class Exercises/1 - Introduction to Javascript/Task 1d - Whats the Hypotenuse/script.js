// Add event listener to the calculate button
document.getElementById('calculateBtn').addEventListener('click', calculateHypotenuse);

function calculateHypotenuse() {
    // TODO:
    // 1. Get the lengths of sides A and B from the input fields
    // 2. Calculate the hypotenuse using the Pythagorean theorem: c = √(a² + b²)
    // 3. Display the result in the hypotenuse span element
    // Note: Use Math.sqrt() for square root

    let sideAInput = parseInt(document.getElementById("sideA").value)
    let sideBInput = parseInt(document.getElementById("sideB").value);

    let hypotenuseOutput = document.getElementById("hypotenuse")
    let hypotenuseValue = Math.sqrt(sideAInput**2 + sideBInput**2);

    hypotenuseOutput.textContent = hypotenuseValue

}
