// Add event listener to the calculate button
document.getElementById('calculateBtn').addEventListener('click', calculateOrder);

function calculateOrder() {
    // TODO:
    // 1. Get the order number and quantity from the input fields
    // 2. Calculate the total cost (£2.45 per bag)
    // 3. Display:
    //    - Order number
    //    - Quantity
    //    - Total cost (format to 2 decimal places)

    let orderNumberInput = parseInt(document.getElementById("orderNumber").value)
    let quantityInput = parseInt(document.getElementById("quantity").value);

    let numberOutput = document.getElementById("displayOrderNumber")
    let quantityOutput = document.getElementById("displayQuantity")
    let totalCostOutput = document.getElementById("totalCost");

    let totalCost = quantityInput * 2.45

    numberOutput.textContent = orderNumberInput
    quantityOutput.textContent = quantityInput
    totalCostOutput.textContent = totalCost.toFixed(2)

}
