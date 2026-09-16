// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the button element
    const calculateButton = document.getElementById('calculateButton');
    
    // Add click event listener to the button
    calculateButton.addEventListener('click', calculateGrade);
});

// Function to calculate the Hang Gliding Certificate grade
function calculateGrade() {
    // TODO: Get the theory and practical exam scores

    let theoryScore = parseInt(document.getElementById("theory").value)
    let practicalScore = parseInt(document.getElementById("practical").value);

    let scoreAverage = (theoryScore + practicalScore) / 2
    
    // TODO: Check if both scores are above 50% (Pass requirement)

    let Passed = false
    let Grade = "Fail"

    if (theoryScore > 50 && practicalScore > 50) {
        Passed = true
        Grade = "Pass"
    };
    
    // TODO: If passed, calculate average and check if above 70% (Distinction requirement)

    if (Passed) {
        if (scoreAverage > 70) {
            Grade = "Distinction"
        }
    }
    
    // TODO: Display the appropriate grade (Pass, Distinction, or Fail)
    // Also display the average score

    let gradeOutput = document.getElementById("result")
    let averageOutput = document.getElementById("average")

    gradeOutput.textContent = "Grade: "+ Grade
    averageOutput.textContent = "Score Average: "+scoreAverage
}
