// admin dashboard phone responsiveness

var menubar = document.getElementById("menu");
var dropdown = document.querySelector(".dash-header2");

// get all the css style in the element
var dropdowncss = window.getComputedStyle(dropdown);

// event listener for the event
menubar.addEventListener('click', displayDrop)

// function for displaying the dropdown
function displayDrop() {
    if (dropdowncss.display === "none") {
        dropdown.style.display = "block";
        menubar.classList.remove("fa-bars"); // Remove the original icon class
        menubar.classList.add("fa-times"); // Add the new icon class
        console.log("hey");
    } else {
        dropdown.style.display = "none";
        menubar.classList.remove("fa-times"); // add the original icon class
        menubar.classList.add("fa-bars"); // remove the new icon class
    }
}
