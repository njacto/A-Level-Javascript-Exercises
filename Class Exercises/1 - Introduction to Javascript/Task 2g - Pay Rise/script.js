// Add event listener to the calculate button
document.getElementById('calculateBtn').addEventListener('click', calculatePayRise);

function calculatePayRise() {
    // TODO:
    // 1. Get the current salary, months back dated, and pay rise percentage
    // 2. Calculate:
    //    - New annual salary (current salary + percentage increase)
    //    - Back pay (difference in monthly salary × number of months)
    // 3. Display both results formatted to 2 decimal places

    let currentSalary = parseFloat(document.getElementById("currentSalary").value)
    let monthsBackdated = parseInt(document.getElementById("months").value)
    let risePercentage = parseFloat(document.getElementById("percentage").value);

    let newSalaryOutput = document.getElementById("newSalary")
    let backPayOutput = document.getElementById("backPay");

    let percentageDecimal = risePercentage / 100
    let newSalary = currentSalary * (1+percentageDecimal)
    let backPay = (newSalary - currentSalary) * monthsBackdated;

    newSalaryOutput.textContent = newSalary.toFixed(2)
    backPayOutput.textContent = backPay.toFixed(2)

}
