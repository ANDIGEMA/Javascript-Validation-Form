var firstName = document.getElementById("firstName").value;
var para1 = document.createElement('p');
var firstNameDiv = document.getElementById("firstNameDiv");


var lastName = document.getElementById("LastName").value;
var para2 = document.createElement('p');
var lastNameDiv = document.getElementById("lastNameDiv");

var email = document.getElementById("Email").value;
var para3 = document.createElement('p');
var emailDiv = document.getElementById("emailDiv");

var password = document.getElementById("Password").value;
var para4 = document.createElement('p');
var passwordDiv = document.getElementById("passwordDiv");

var confirmPassword = document.getElementById("ConfirmPassword").value;
var para5 = document.createElement('p');
var confirmPasswordDiv = document.getElementById("confirmPasswordDiv");

var region = document.getElementById("Region").value;
var para6 = document.createElement('p');
var regionDiv = document.getElementById("regionDiv");


var country = document.getElementById("Country").value;
var para7 = document.createElement('p');
var countryDiv = document.getElementById("passwordDiv");


var town = document.getElementById("Town").value;
var para8 = document.createElement('p');
var townDiv = document.getElementById("townDiv");


function errorMessage() {
    if (firstName.trim() == " " || lastName.innerText.trim() == " ") {
        firstNameDiv.appendChild(para1);
        firstNameDiv.innerText("Enter Your First Name")
        console.log("Enter Your First Name");
        return false;
    } else {
        true;
    }
}
signInForm.addEventListener("submit", errorMessage);