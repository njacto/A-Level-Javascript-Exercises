// Add event listener to the calculate button
document.getElementById('calculateBtn').addEventListener('click', calculateArea);

function calculateArea() {
    // TODO:
    // 1. Get the base and height values from the input fields
    // 2. Calculate the area using the formula: area = (base * height) / 2
    // 3. Display the result in the area span element

    let baseInput = parseFloat(document.getElementById("base").value)
    let heightInput = parseFloat(document.getElementById("height").value)

    let area = (baseInput * heightInput) / 2
    document.getElementById("area").textContent = area

}
