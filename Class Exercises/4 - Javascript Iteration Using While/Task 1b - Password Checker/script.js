// Add your event listener and while loop code here
// When the button is clicked, use a while loop to check the password until correct

document.addEventListener('DOMContentLoaded', function() {

let button = document.getElementById("checkBtn")
button.addEventListener("click", buttonClicked)

});

const Password = "Cool123"
let correct = false;

function buttonClicked() {
    let output = document.getElementById("message")

    while (! correct) {
        let enteredPass = document.getElementById("passwordInput").value

        if (enteredPass == Password) {
            output.textContent = "Password Correct"
            correct = true
        }
        else {
            output.textContent = "Password Incorrect. Try again"

            setTimeout(function () {
                output.textContent = ""
            }, 1000)

            return
        }              
    }
}