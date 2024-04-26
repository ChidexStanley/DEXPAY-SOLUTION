// this funtion enables the user to see test typed

// stored variables fron the login section
var inputpwd = document.getElementById("password");
var showPword = document.querySelector(".eyeIcon");
var icon = document.getElementById("eye");

// event listener for the event
showPword.addEventListener('click', showPassword);


function showPassword() {

    if (inputpwd.type === "password") {
        inputpwd.type = "text";
        icon.classList.remove("fa-eye"); // Remove the original icon class
        icon.classList.add("fa-eye-slash"); // Add the new icon class
    } else {
        inputpwd.type = "password"
        icon.classList.remove("fa-eye-slash"); // Remove the new icon class
        icon.classList.add("fa-eye"); // Add the original icon class
    }
}

