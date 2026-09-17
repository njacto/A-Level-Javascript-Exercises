// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the button element
    const calculateButton = document.getElementById('calculateButton');
    
    // Add click event listener to the button
    calculateButton.addEventListener('click', calculateTotal);
});

// Function to calculate the total ticket cost
function calculateTotal() {
    // TODO: Get values from all input fields

    let adultTickets = parseInt(document.getElementById("adultTickets").value)
    let childTickets = parseInt(document.getElementById("childTickets").value)
    let seniorTickets = parseInt(document.getElementById("seniorTickets").value)

    let selectedDay = document.getElementById("dayOfWeek").value
    let showingTime = document.getElementById("showingTime").value;

    let tickets = {
        ["Adult"]: adultTickets,
        ["Child"]: childTickets,
        ["Senior"]: seniorTickets,
    }
    let ticketAmount = adultTickets + childTickets + seniorTickets

    let ticketCosts = {
        ["Adult"]: 12.00,
        ["Child"]: 8.00,
        ["Senior"]: 7.50,
    }

    let dayCosts = {
        ["Friday"]: +2.50,
        ["Saturday"]: +2.50,
        ["Sunday"]: +2.50
    };
    


    let totalCost = 0.00

    for (let ticketType in tickets) {
        let ticketAmount = tickets[ticketType]
        let ticketCost = ticketCosts[ticketType]
 
        totalCost += (ticketCost * ticketAmount)
    }

    console.log(totalCost.toFixed(2))
    
    // TODO: Apply day of week adjustments
    // Friday-Sunday: +£2.50 per ticket

    let dayAdjustment = dayCosts[selectedDay] || 0.00
    totalCost += dayAdjustment
    
    // TODO: Apply time adjustments
    // Before 5 PM: -£1.50 per ticket

    if (showingTime < 5) {
        totalCost -= (1.50 * ticketAmount)
    }
    
    // TODO: Calculate subtotal

    let ticketSubtotal = totalCost
    
    // TODO: Check for and apply special discounts
    // Family ticket (2 adults + 2 children): 10% off
    // Group booking (6 or more tickets): 15% off

    let discountAmount = 1

    if (tickets.Adult == 2 && tickets.Child == 2) {
        discountAmount -= 0.1
    }

    if (ticketAmount >= 6) {
        discountAmount -= 0.15
    }

    let finalPrice = totalCost * discountAmount;

    let priceOutput = document.getElementById("finalTotal")


    priceOutput.textContent = "Total: £"+finalPrice

}
