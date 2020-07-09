// const myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello World!';

// Adding an Image Changer
let myImage = document.querySelector("img");

myImage.onclick = function() {
    let mySrc = myImage.getAttribute("src");
    if(mySrc === "../images/firefox.png") {
        myImage.setAttribute ("src", "../images/firefox2.jpg");
    } else {
        myImage.setAttribute ("src", "../images/firefox.png")
    }
}

// Adding a Personalized Welcome Message
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    let myName = prompt("Please enter your name.");
    if(!myName) {
        setUserName();
    } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = "Mozilla is cool, " + myName;
    }
}

if(!localStorage.getItem("name")) {
    setUserName();
} else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "Mozilla is cool, " + storedName;
}

myButton.onclick = function() {
    setUserName();
}

