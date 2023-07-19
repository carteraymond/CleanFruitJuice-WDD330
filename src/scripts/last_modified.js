document.querySelector(
	"#lastModified"
).textContent = `@ 2022 BountifulFoods | Carter Raymond | WDD230 Project | Last Modification: ${document.lastModified}`;

const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};

// select the elements to manipulate (output to)
const datefield = document.querySelector(".date");

    // initialize display elements
    const numDrinksDisplay = document.getElementById("drink-counter");
    // get the stored value in localStorage
    let numDrinks = localStorage.numDrinks

    // determine if this is the first visit or display the number of visits.
    if (numDrinks != undefined) {
        numDrinksDisplay.innerText = (`You have made ${numDrinks} Drinks with us`);
    } else {
        numDrinksDisplay.innerText = (`You have made no Drinks with us`);
        localStorage.numDrinks = 0;
    }
