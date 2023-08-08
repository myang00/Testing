const myHeading = document.querySelector("h1");

myHeading.onclick = () => {
    if (myHeading.textContent === "Hi There!") {
        myHeading.textContent = "This is a test site.";
    } else {
        myHeading.textContent = "Hi There!";
    }
}

let myButton = document.querySelector("button");

function setUserName() {
    if (!myName) {
        setUserName();
    } else {
        const myName = prompt("What's your name bruh?");
        localStorage.setItem("name", myName);
        myHeading.textContent = `Are you ${myName}`;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Are you ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
};