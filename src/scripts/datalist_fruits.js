const requestURL = 'https://brotherblazzard.github.io/canvas-content/fruit.json';

const drinkNutritionTable = document.getElementById("userDrinkReceipt");
const drinkTable = document.getElementById("userDrinks");
const drinkForm = document.getElementById("form");

const fruit1 = document.getElementById("fruit1");
const fruit2 = document.getElementById("fruit2");
const fruit3 = document.getElementById("fruit3");

const fruitNames = 1;
const carbohydrates = 2;
const fat = 3;
const protein = 4;
const sugar = 5;
const calories = 6;
const grams = 7;
const specialInstructions = 8;
const date = 9;
const email = 10;
const cellPhone = 11;
const userName = 12;

let fruits = null;

fetch(requestURL)
.then(function (response) {
    return response.json();
})
.then(function (jsonObject) {
    fruits = jsonObject;
    fruits.forEach(loadFruitData);
});

function loadFruitData (fruit) {

    let newFruit1 = document.createElement('option');
    let newFruit2 = document.createElement('option');
    let newFruit3 = document.createElement('option');
    newFruit1.innerText = fruit.name;
    newFruit2.innerText = fruit.name;
    newFruit3.innerText = fruit.name;

    fruit1.appendChild(newFruit1);
    fruit2.appendChild(newFruit2);
    fruit3.appendChild(newFruit3);
    
}

//wire up button event
const calculateDrinkButton = document.getElementById("submitForm");
calculateDrinkButton.onclick = calculateDrink;

function calculateDrink() {

    if (isFormValid()) {

        // carbohydrates, protein, fat, sugar, and calories , names
        const drink_selection = [];
        drink_selection[date] = new Date().getTime();
        drink_selection[fruitNames] = "";
        drink_selection[carbohydrates] = 0;
        drink_selection[protein] = 0;
        drink_selection[fat] = 0;
        drink_selection[sugar] = 0;
        drink_selection[calories] = 0;
        drink_selection[grams] = 0;
        drink_selection[userName] = document.getElementById("fname").value;
        drink_selection[email] = document.getElementById("email").value;
        drink_selection[cellPhone] = document.getElementById("phone").value;
        drink_selection[specialInstructions] = document.getElementById("instructions").value;
        const fruitSelectionList = [fruit1,fruit2, fruit3];

        fruitSelectionList.forEach((item) => {

            if (item.selectedIndex != 0) {
                const currentFruit = fruits[item.selectedIndex - 1];
                const currentCarbs = currentFruit.nutritions.carbohydrates;
                const currentProtein = currentFruit.nutritions.protein;
                const currentFat = currentFruit.nutritions.fat;
                const currentSugar = currentFruit.nutritions.sugar;
                const currentCalories = currentFruit.nutritions.calories;
                
                drink_selection[fruitNames] += currentFruit.name + ", ";
                drink_selection[carbohydrates] += (currentCarbs);
                drink_selection[protein] += (currentProtein);
                drink_selection[fat] += (currentFat);
                drink_selection[sugar] += (currentSugar);
                drink_selection[calories] += (currentCalories);
                drink_selection[grams] += (100);
            
            }
            else{
                console.log(item);
                console.log("item index error")
            }
        })

        let drinkList = localStorage.drinkList;

        if (drinkList != null) {
            drinkList = JSON.parse(drinkList);
            drinkList.push(drink_selection);
        }
        else {
            drinkList = [drink_selection];
        }
        
        localStorage.drinkList = JSON.stringify(drinkList);
        localStorage.numDrinks = drinkList.length;

        loadDrinkTable();
        drinkTable.lastChild.click();
    }
    else{
        console.log("slight error, something went wrong")
    }
}

function isFormValid() {
    if (fruit1.selectedIndex != 0) {
                return true;
    } else {
        return false;
    }
}

function loadDrinkTable() {


    let drinkList = [];

    // clear all children
    drinkTable.innerHTML = "";

    // get the drink data
    const drinkObject = localStorage.drinkList 
    if (drinkObject != null) {
        drinkList = JSON.parse(localStorage.drinkList);
    } else {

    }
    drinkList.forEach((drink, index) => {
        let drinkRow = document.createElement('tr');

        drinkRow.addEventListener("click", function () {
            const rowNumber = parseInt(this.children[0].innerText);
            loadNutritionData(rowNumber);
        })

        let drinkNumber = document.createElement('td');
        drinkNumber.innerHTML = "<p>" + (index + 1) + "</p>";
    
        let drinkName = document.createElement('td');
        drinkName.innerHTML= "<p>" + drink[fruitNames] + "</p>";
        
        drinkRow.appendChild(drinkNumber);
        drinkRow.appendChild(drinkName);
    
        drinkTable.appendChild(drinkRow);
        drinkTable.lastChild.click();

    
    })
    
}

function loadNutritionData(value) {

    //get the current drink
    let drinkList = JSON.parse(localStorage.drinkList);
    const drink = drinkList[value - 1]

    // if (screen.width < 640) {
    //     drinkNutritionTable.scrollIntoView({behavior: "smooth", block: "end"});
    // }

    drinkDate = new Date(parseInt(drink[9])).toDateString();
    //walk the current drink selection, add data to the table.
    document.getElementById("drink-fname").innerHTML = "<p>" + drink[userName] + "</p>";
    document.getElementById("drink-email").innerHTML = "<p>" + drink[email] + "</p>";
    document.getElementById("drink-phone").innerHTML = "<p>" + drink[cellPhone] + "<p>";
    document.getElementById("drink-instructions").innerHTML = "<p>" + drink[specialInstructions] + "</p>";
    document.getElementById("drink-fruitnames").innerHTML = "<p>" + drink[fruitNames]+ "</p>";
    document.getElementById("drink-carbs").innerHTML = "<p>" + drink[carbohydrates] + "</p>";
    document.getElementById("drink-protein").innerHTML = "<p>" + drink[protein] + "</p>";
    document.getElementById("drink-fat").innerHTML = "<p>" + drink[fat] + "</p>";
    document.getElementById("drink-sugar").innerHTML = "<p>" + drink[sugar] + "</p>";
    document.getElementById("drink-calories").innerHTML = "<p>" + drink[calories] + "</p>";
    document.getElementById("drink-grams").innerHTML = "<p>" + drink[grams] +"<p>";
    document.getElementById("drinkDate").textContent = drinkDate;

}

loadDrinkTable();