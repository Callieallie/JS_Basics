// Created on August 7th, 2023
// A beginner-level JavaScript file

const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "/images/Example Icon.png") {
        myImage.setAttribute("src", "/images/duck.png");
    } else {
        myImage.setAttribute("src", "/images/Example Icon.png");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

// localStorage is an API that allows information to be stored in the browser
// Incorporate checking to ensure that names are never null or an empty string
function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Welcome to the troop, ${myName}`;
    }
}

// Initialization code
if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Welcome to the troop, ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
};