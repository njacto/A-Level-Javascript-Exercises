// Add event listener to the calculate button
document.getElementById('calculateBtn').addEventListener('click', calculate);

function calculate() {
    // TODO:
    // 1. Get the three numbers (A, B, C) from the input fields
    // 2. Calculate:
    //    - (A + B + C) / 3
    //    - A × B × C
    //    - A + (B × C)
    // 3. Display the results in the respective span elements

    let numA = parseFloat(document.getElementById("numberA").value)
    let numB = parseFloat(document.getElementById("numberB").value)
    let numC = parseFloat(document.getElementById("numberC").value)

    let averageOutput = document.getElementById("average")
    let productOutput = document.getElementById("product")
    let expressionOutput = document.getElementById("expression")

    let averageResult = parseFloat(( numA + numB + numC ) / 3)
    let productResult = numA * numB * numC
    let expressionResult = numA + ( numB * numC )

    averageOutput.textContent = parseFloat(averageResult)
    productOutput.textContent = productResult
    expressionOutput.textContent = expressionResult
}
