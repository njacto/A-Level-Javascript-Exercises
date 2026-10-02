// Add your event listener and while loop code here
// When the button is clicked, display numbers 1 to N in the output area using a while loop
document.addEventListener('DOMContentLoaded', function() {

let button = document.getElementById("countBtn")
button.addEventListener("click", buttonClicked)

});

function buttonClicked() {

    let number = parseInt(document.getElementById("numberInput").value)
    let output = document.getElementById("output")

    for (let i = 1; i < number+1; i++) {
        output.textContent = output.textContent + "\n"+i
    }
}
