// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the button element
    const calculateButton = document.getElementById('calculateButton');
    
    // Add click event listener to the button
    calculateButton.addEventListener('click', calculateResult);
});

// Function to calculate if student passed or failed
function calculateResult() {
    // TODO: Get the marks for all three papers
    
    // TODO: Calculate the total mark
    
    // TODO: Check if total is greater than 160
    
    // TODO: Display the total mark and whether the student passed or failed

    let paperOneMark = parseInt(document.getElementById("paper1").value)
    let paperTwoMark = parseInt(document.getElementById("paper2").value)
    let paperThreeMark = parseInt(document.getElementById("paper3").value)

    let totalMark = paperOneMark + paperTwoMark + paperThreeMark

    let passValue = "Failed"

    if (totalMark > 160) {
        passValue = "Passed"
    }

    let passOutput = document.getElementById("result")
    passOutput.textContent = "You "+passValue+" with a score "+totalMark

}
