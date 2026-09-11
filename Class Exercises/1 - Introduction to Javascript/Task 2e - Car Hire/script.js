// Add event listener to the calculate button
document.getElementById('calculateBtn').addEventListener('click', calculateHireCharge);

function calculateHireCharge() {
    // TODO:
    // 1. Get the miles travelled from the input field
    // 2. Calculate:
    //    - Mileage charge (5p per mile = £0.05 per mile)
    //    - Total charge (£25.00 + mileage charge)
    // 3. Display both charges formatted to 2 decimal places

    let milesInput = parseFloat(document.getElementById("miles").value)

    let mileageCharge = 0.05 * milesInput
    let totalCharge = 25.00 + milesInput

    let mileageChargeOutput = document.getElementById("mileageCharge")
    let totalChargeOutput = document.getElementById("totalCharge")

    mileageChargeOutput.textContent = mileageCharge.toFixed(2)
    totalChargeOutput.textContent = totalCharge.toFixed(2)

}
