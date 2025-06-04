let signInForm = document.getElementById("signInForm");

signInForm.addEventListener('submit', function(event) {
    event.preventDefault();
    var firstName = document.getElementById("firstName");
    var LastName = document.getElementById("LastName");
    var Email = document.getElementById("Email");
    var Password = document.getElementById("Password");
    console.log(firstName.innerText);
    let para = document.createElement("p");
    let h2 = document.createElement("h2");
    let h3 = document.createElement("h3");
    firstName.appendChild(para);
    LastName.appendChild(h2);
    Password.appendChild(h3);
    if (firstName.innerText.trim() === "") {
        para.innerText = 'Enter Your First Name';
        para.style.fontsize = "14px";
    }
    if (LastName.innerText.trim() === "") {
        h2.textContent = 'Enter Your Last Name';
        h2.style.fontsize = "14px";
    }
    if (Password.innerText.trim() === "") {
        h3.textContent = 'Enter Your Password';
        h3.style.fontsize = "14px";
    }
    // let LastName = document.getElementById("LastName");
})