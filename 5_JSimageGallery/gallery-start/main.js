const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const myNames = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];

/* Declaring the alternative text for each image file */
const myAlt = ["Closeup of a human eye", "Wood", "Flower", "Ancient Painting", "Butterfly"]

/* Looping through images */
myNames.forEach((value, index) => {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', 'images/'+value);
    newImage.setAttribute('alt', myAlt[index]);
    thumbBar.appendChild(newImage);

    newImage.onclick = () => {
        displayedImage.setAttribute('src', 'images/'+value);
        displayedImage.setAttribute('alt', myAlt[index]);
    }
})

/* Wiring up the Darken/Lighten button */
btn.onclick = () => {
    if (btn.getAttribute('class') === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
}