// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the button element
    const calculateButton = document.getElementById('calculateButton');
    
    // Add click event listener to the button
    calculateButton.addEventListener('click', calculateBill);
});

// Function to calculate the restaurant bill
function calculateBill() {

    let foodTotal = parseFloat(document.getElementById("foodTotal").value)
    let drinksTotal  = parseFloat(document.getElementById("drinksTotal").value)

    let dinersNumber = parseInt(document.getElementById("diners").value)
    let kidsNumber = parseInt(document.getElementById("kidsCount"))

    let weekDay = document.getElementById("day").value
    let clockTime = document.getElementById("time").value

    let loyaltyCard = document.getElementById("loyaltyCard").value
    

    let serviceCharges = {
        [1]: [0, 1, 4],
        [2]: [0.1, 5, 8],
        [3]: [0.15, 9, 1000],
    }

    let extraCharge = 1
    for (i in serviceCharges) {       
        let mandatoryCharge = serviceCharges[i][0]
        let min = serviceCharges[i][1]
        let max = serviceCharges[i][2]

        if (dinersNumber >= min && dinersNumber <= max) {
            extraCharge += mandatoryCharge
        }
    }

    let extraFoodCharge = 1
    let extraDrinksCharge = 1

    let timedDiscounts = {
        [1]: [function() {
            extraFoodCharge -= 0.2
        }, 0, 17],
        [2]: [function() {
            extraDrinksCharge -= 0.25
        }, 17, 19],
        [3]: [function() {
            extraCharge -= 0.1
        }, 10, 12]
    }
    
    // TODO: Apply time-based discounts
    // Before 5 PM: 20% off food
    // 5-7 PM: 25% off drinks
    // After 10 PM: 10% off total

    for (i in timedDiscounts) {
        let min = timedDiscounts[i][1]
        let max = timedDiscounts[i][2]

        if clockTime 
    }
    
    // TODO: Apply special offers
    // Mon-Thu: Second main half price
    // Sunday: Kids eat free (max 2 per adult)
    
    // TODO: Apply loyalty card discount
    // Bronze: 5% off
    // Silver: 10% off
    // Gold: 15% off
    
    // TODO: Calculate subtotal
    
    // TODO: Create breakdown of all discounts applied
    
    // TODO: Calculate and display final total
}
