// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the button element
    const checkButton = document.getElementById('checkButton');
    
    // Add click event listener to the button
    checkButton.addEventListener('click', calculateLeague);
});

// Function to calculate which league the player belongs to
function calculateLeague() {
    // TODO: Get the handicap value from the input field

    let handicapValue = parseInt(document.getElementById("handicap").value)
    
    // TODO: Check if the handicap is less than 13

    let leagueValue = "2"

    if (handicapValue < 13) {
        leagueValue = "1"
    }
    
    // TODO: Display the appropriate message in the result paragraph

    let resultOutput = document.getElementById("result")
    resultOutput.textContent = "You should play in league "+leagueValue
}
