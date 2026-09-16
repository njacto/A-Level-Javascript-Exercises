// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the button element
    const calculateButton = document.getElementById('calculateButton');
    
    // Add click event listener to the button
    calculateButton.addEventListener('click', calculateGrade);
});

// Function to calculate the A-Level grade
function calculateGrade() {
    // TODO: Get the marks for all four components
    let component1 = parseInt(document.getElementById("comp1").value)
    let component2 = parseInt(document.getElementById("comp2").value)
    let component3 = parseInt(document.getElementById("comp3").value)
    let component4 = parseInt(document.getElementById("comp4").value);
 
    // TODO: Calculate the total marks

    let totalMarks = component1 + component2 + component3 + component4
    const possibleMarks = 400;
    
    // TODO: Calculate the percentage (total possible marks is 400)

    let markPercentage = ((totalMarks / possibleMarks) * 100).toFixed(0)
    let possibleGrades = {
        [80]: "A",
        [70]: "B",
        [60]: "C",
        [50]: "D",
        [40]: "E",
    };

    let MarkGradePercentage = Math.round(markPercentage / 10) * 10
    let studentGrade = possibleGrades[MarkGradePercentage]

    let gradeOutput = document.getElementById("result")
    let percentageOutput = document.getElementById("percentage")

    if (! studentGrade) {
        studentGrade = "U"
    }
    
    gradeOutput.textContent = "Grade: "+studentGrade
    percentageOutput.textContent = "Mark Percentage: "+markPercentage
}
