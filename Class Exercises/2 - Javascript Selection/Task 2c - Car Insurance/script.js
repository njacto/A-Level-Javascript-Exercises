// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the button element
    const calculateButton = document.getElementById('calculateButton');
    
    // Add click event listener to the button
    calculateButton.addEventListener('click', calculatePremium);
});

// Function to calculate the insurance premium
function calculatePremium() {
    // TODO: Get values from input fields

    let driverAge = parseInt(document.getElementById("age").value)
    let noClaimYears = parseInt(document.getElementById("noClaims").value)
    let previousClaimNum = parseInt(document.getElementById("previousClaims").value)
    
    // TODO: Calculate base premium (£500)

    const basePremium = 500
    let ageMultiplier = 1

    if (driverAge < 25) {
        ageMultiplier = 1.5
    }
    else if (driverAge > 40) {
        ageMultiplier = 1.0 - 0.15
    }
    
    // TODO: Apply age adjustment
    // Under 25: +50%
    // 25-40: No change
    // Over 40: -15%
    
    // TODO: Apply no claims bonus
    // 0 years: No discount
    // 1-2 years: 10% discount
    // 3-5 years: 25% discount
    // Over 5 years: 35% discount
    
    // TODO: Add previous claims adjustment
    // Each claim adds 20%
    
    // TODO: Display the final premium and the breakdown of calculations
}
