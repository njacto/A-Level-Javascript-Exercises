// Add your event listener and while loop code here
// When the button is clicked, display numbers 1 to N in the output area using a while loop
document.addEventListener('DOMContentLoaded', function() {

let button = document.getElementById("addBtn")
button.addEventListener("click", buttonClicked)

});

let repeat = true
let sum = 0

function buttonClicked() {
    let output = document.getElementById("output")
    let number = parseInt(document.getElementById("numberInput").value)

    if (number == 0) {
        output.textContent += "\n Sum = "+sum
    }
    else {
        sum += number
        
        output.textContent = output.textContent+"\n +"+number;
        output.style.whiteSpace = "pre-wrap";
    }

}
