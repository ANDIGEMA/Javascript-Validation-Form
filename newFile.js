form.addEventListener('signin', (event) => {
    e.preventDefault();
    let firstName = document.getElementById("firstName");
    let para = document.createElement("div");
    firstName.appendChild(para);
    if (firstName == "") {
        return para.innerText = 'Enter Your Name';
    }
    let LastName = document.getElementById("LastName");
});