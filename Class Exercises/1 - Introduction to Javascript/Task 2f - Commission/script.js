// Add event listener to the calculate button
document.getElementById('calculateBtn').addEventListener('click', calculateCommission);

function calculateCommission() {
    // TODO:
    // 1. Get all invoice numbers and amounts from the input fields
    // 2. Calculate:
    //    - Total sales amount
    //    - Commission (20% of total sales)
    // 3. Display:
    //    - Each sale's details
    //    - Total sales amount
    //    - Commission earned
    // Note: Format all monetary values to 2 decimal places


    // Sale 1

    let invoiceOne = parseInt(document.getElementById("invoice1").value)
    let amountOne = parseFloat(document.getElementById("amount1").value);

    // Sale 2

    let invoiceTwo = parseInt(document.getElementById("invoice2").value)
    let amountTwo = parseFloat(document.getElementById("amount2").value);

    // Sale 3

    let invoiceThree = parseInt(document.getElementById("invoice3").value)
    let amountThree = parseFloat(document.getElementById("amount3").value);


    // Summary

    let totalSalesOutput = document.getElementById("totalSales")
    let commissionOutput = document.getElementById("commission")

    let totalSalesAmount = (amountOne + amountTwo + amountThree).toFixed(2)
    let commissionAmount = (totalSalesAmount * 0.2).toFixed(2)

    totalSalesOutput.textContent = "£"+totalSalesAmount+" ("+invoiceOne +", "+ invoiceTwo +", "+ invoiceThree+")"
    commissionOutput.textContent = commissionAmount
}
