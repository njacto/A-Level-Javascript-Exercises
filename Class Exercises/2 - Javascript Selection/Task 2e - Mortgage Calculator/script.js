// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the button element
    const calculateButton = document.getElementById('calculateButton');
    
    // Add click event listener to the button
    calculateButton.addEventListener('click', calculateMortgage);
});

// Function to calculate the mortgage details
function calculateMortgage() {
    // TODO: Get all input values

    let housePrice = parseFloat(document.getElementById("housePrice").value)
    let depositAmount = parseFloat(document.getElementById("deposit").value)
    let creditScore = parseFloat(document.getElementById("creditScore").value)
    let annualSalary = parseFloat(document.getElementById("annualSalary").value)
    let employmentStatus = document.getElementById("employmentStatus").value;
    

    let depositPercent = (depositAmount / housePrice) * 100
    const baseInterest = 0.03
    
    let depositInterestRates = {
        [10]: 0.02,
        [20]: 0.01,
    }
    let addedInterest = parseFloat(baseInterest) + (depositInterestRates[Math.round(depositPercent / 10) * 10]) || baseInterest

    let creditInterestRates = {
        ["Excellent"]: [950, 800, -0.005],
        ["Good"]: [799, 700, 0],
        ["Fair"]: [699, 600, +0.005],
        ["Poor"]: [600, 0, +0.01],
    }

    for (let creditScore in creditInterestRates) {

        let maxValue = creditInterestRates[creditScore][0]
        let minValue = creditInterestRates[creditScore][1]
        
        let interestAdjustment = creditInterestRates[creditScore][2]

        if (creditScore <= maxValue && creditScore >= minValue) {
            addedInterest += interestAdjustment

            break
        }
    }
    
    let borrowingAmounts = {
        ["Full-time Employed"]: 4.5,
        ["Self-employed"]: 4,
        ["Part-time"]: 3.5,
    }

    let requiredLoan = housePrice - depositAmount

    if (requiredLoan > (annualSalary * (borrowingAmounts[employmentStatus]))) {
        document.getElementById("depositPercentage").textContent = "Required loan exceeds maximum amount"
    }
   
    let totalPaymentNumber = 25 * 12
    let monthlyInterest = addedInterest / 12

    let monthlyPayment  = ( requiredLoan[monthlyInterest*(1 + monthlyInterest)^totalPaymentNumber] ) / ( [(1 + monthlyInterest)^totalPaymentNumber - 1] )
    let totalRepayable = requiredLoan*(addedInterest^25)
    // TODO: Calculate monthly payment using the formula:
    // P = L[c(1 + c)^n]/[(1 + c)^n - 1]
    // Where:
    // P = Monthly Payment
    // L = Loan Amount
    // c = Monthly Interest Rate (Annual Rate / 12)
    // n = Total Number of Payments (25 years × 12)
    
    // TODO: Calculate total amount repayable
    
    // TODO: Display all results

    document.getElementById("depositPercentage").textContent = "Deposit Percentage: "+depositPercent
    document.getElementById("interestRate").textContent = "Interest Rate: "+addedInterest * 100+"%"
    document.getElementById("monthlyPayment").textContent = "Monthly Payment : £"+ monthlyPayment
    document.getElementById("totalRepayable").textContent = "Total repayable: £"+ totalRepayable
}
