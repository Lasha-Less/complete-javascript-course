'use strict';

/*
function describeCountry(country, population, capitalCity) {
    const countryString = `${country} has ${population} people and it's capital city is ${capitalCity}`;
    return countryString;
}

const finlandData = describeCountry('Finland', '6 million', 'Helsinki');
console.log(finlandData);

const netherlandsData = describeCountry("Netherlands", "16 million", "Amsterdam");
console.log(netherlandsData);

const dataGeorgia = describeCountry("Georgia", "4 million", "Tbilisi");
console.log(dataGeorgia);
*/

/*
function percentageOfWorld1(population) {
    const percent = (population / 7900) * 100;
    return percent;
}

const china = percentageOfWorld1(1441);

console.log(china);

const netherlands = percentageOfWorld1(16);

console.log(netherlands);

const georgia = percentageOfWorld1(5);

console.log(georgia);

const percentageOfWorld2 = function (population) {
    const percent = (population / 7900) * 100;
    return percent;
}

const usa = percentageOfWorld2(331);

console.log(usa);

const india = percentageOfWorld2(1352);

console.log(india);

const japan = percentageOfWorld2(125);

console.log(japan);
*/

/*
const percentageOfWorld3 = population => {
    const percent = (population / 7900) * 100;
    return percent;
}

const nigeria = percentageOfWorld3(211);
console.log(nigeria);

const germany = percentageOfWorld3(83);
console.log(germany);

const brazil = percentageOfWorld3(210);
console.log(brazil);
*/

/*
function percentageOfWorld1(population) {
    const percent = (population / 7900) * 100;
    return percent;
}
*/

/*
function describePopulation(country, population) {
    const percent = percentageOfWorld1(population);
    const description = `${country} has ${population} million people, which is about ${percent}% of the world.`;
    return description;
}

console.log(describePopulation("Norway", 8));

const norway = describePopulation("Norway", 8);

console.log(norway);

const italy = describePopulation("Italy", 60);
console.log(italy);

const macedonia = describePopulation("North Macedonia", 2);
console.log(macedonia);
*/

/*
const describePopulation1 = function (country, population) {
    const percent = percentageOfWorld1(population);
    const description = `${country} has ${population} million people, which is about ${percent}% of the world.`;
    return description;
}

const israel = describePopulation1("Israel", 9);
console.log(israel);

const mozambique = describePopulation1("Mozambique", 30);
console.log(mozambique);

const eu = describePopulation1("European Union", 447);
console.log(eu);
*/

/*
const worldDescriptor = (country, population) => {
    const percent = percentageOfWorld1(population);
    const description = `${country} has ${population} million people, which is about ${percent}% of the world.`;
    return description;
}

const mongolia = worldDescriptor("Mongolia", 3);
console.log(mongolia);

const argentina = worldDescriptor("Argentina", 45);
console.log(argentina);

const colombia = worldDescriptor("Colombia", 50);
console.log(colombia);
*/

// Do the same with the two other percentageOfWorld functions as well that is each 3x in total it is gonna be 18x times. Good Luck dude!

// FUNCTION DECLARATION
/*
function describePopulation(country, population) {
    const percent = percentageOfWorld1(population);
    const description = `${country} has ${population} million people, which is about ${percent}% of the world.`;
    return description;
}
*/

// FUNCTION EXPRESSION
/*
const describePopulation1 = function (country, population) {
    const percent = percentageOfWorld1(population);
    const description = `${country} has ${population} million people, which is about ${percent}% of the world.`;
    return description;
}
*/

// ARROW FUNCTION
/*
const worldDescriptor = (country, population) => {
    const percent = percentageOfWorld1(population);
    const description = `${country} has ${population} million people, which is about ${percent}% of the world.`;
    return description;
}
*/

/*
const percentageOfWorld2 = function (population) {
    const percent = (population / 7900) * 100;
    return percent;
}

function describePopulation2(country, population) {
    const percent = percentageOfWorld2(population);
    const description = `${country} has ${population} million people, which is about ${percent}% of the world.`;
    return description;
}

const usa = describePopulation2("United States", 327);
console.log(usa);

const indonesia = describePopulation2("Indonesia", 267);
console.log(indonesia);

const pakistan = describePopulation2("pakistan", 212);
console.log(pakistan);

const describePopulation3 = function (country, population) {
    const percent = percentageOfWorld2(population);
    const description = `${country} has ${population} million people, which is about ${percent}% of the world.`;
    return description;
}

const bangladesh = describePopulation3("Bangladesh", 163);
console.log(bangladesh);

const worldDescriptor2 = (country, population) => {
    const percent = percentageOfWorld2(population);
    const description = `${country} has ${population} million people, which is about ${percent}% of the worldDescriptor2.`;
    return description;
}

const russia = worldDescriptor2("Russia", 145);
console.log(russia);
*/

/*
const percentageOfWorld3 = population => {
    const percent = (population / 7900) * 100;
    return percent;
}

function describePopulation4(country, population) {
    const percent = percentageOfWorld3(population);
    const description = `${country} has ${population} million people, which is about ${percent}% of the world.`;
    return description;
}

const mexico = describePopulation4("Mexico", 127);
console.log(mexico);

const describePopulation5 = function (country, population) {
    const percent = percentageOfWorld3(population);
    const description = `${country} has ${population} million people, which is about ${percent}% of the world`;
    return description;
}

const ethiopia = describePopulation4("Ethiopia", 112);
console.log(ethiopia);

const worldDescriptor3 = (country, population) => {
    const percent = percentageOfWorld3(population);
    const description = `${country} has ${population} million people, which is about ${percent}% of the world population.`;
    return description;
}

const philippines = describePopulation4("Philippines", 106);
console.log(philippines);
*/


// INTRODUCTION TO ARRAYS

/*
const percentageOfWorld2 = function (population) {
    const percent = (population / 7900) * 100;
    return percent;
}

const populations = [120, 85, 16, 5];
console.log(populations.length === 4);
const percentages = [percentageOfWorld2(120), percentageOfWorld2(85), percentageOfWorld2(16), percentageOfWorld2(5)];
console.log(populations);
console.log(percentages);
*/

/*
const swissNeighbors = ["France", "Germany", "Austria", "Liechtenstein", "Italy"];

swissNeighbors.push("Utopia");

console.log(swissNeighbors);

swissNeighbors.pop();
console.log(swissNeighbors);

if (swissNeighbors.includes("Germany")) {
    console.log("This is is an European country.");
} else {
    console.log("Not a Central European country");
}

console.log(swissNeighbors.indexOf("Austria"));
swissNeighbors[2] = "Oostenrijk";
console.log(swissNeighbors);
*/

/*
const myCountry = {
    country: "Netherlands",
    capital: "Amsterdam",
    language: "Dutch",
    population: "16 million",
    neighbors: ["Belgium", "Germany"]
}

myCountry.population = "18 million";

myCountry["population"] = "16 million";

console.log(`${myCountry.country} has ${myCountry.population} ${myCountry.language}-speaking people, ${myCountry.neighbors.length} neighbouring countries and a capital city called ${myCountry.capital}.`)
*/

/*
const myCountry = {
    country: "Netherlands",
    capital: "Amsterdam",
    language: "Dutch",
    population: "16 million",
    neighbors: ["Belgium", "Germany"],
    describe: function () {
        console.log(`${this.country} has ${this.population} ${this.language}-speaking people, ${this.neighbors.length} neighbouring countries and a capital city called ${this.capital}.`)
    },

    checkIsland: function () {
        this.neighbors.length === 0 ? this.isIsland = true : this.isIsland = false;
        return this.isIsland;
    },

    // HERE'S A MORE CONCISE VERSION OF THE ABOVE METHOD:
    checkIslandConsise: function () {
        this.isIsland = this.neighbors.length === 0 ? true : false;
        return this.isIsland;
    },

    // EVEN SHORTER VERSION OF THE ABOVE METHOD:
    checkIslandShort: function () {
        this.isIsland = !Boolean(this.neighbors.length);
        return this.isIsland;
    }
    // This above version is truly beautiful! Good job Jonas!
}

console.log(myCountry.describe());

console.log(myCountry.checkIsland());

console.log(myCountry.checkIslandConsise());

console.log(myCountry.checkIslandShort());
*/

/*
for (let voter = 1; voter <= 50; voter++) {
    console.log(`The voter number ${voter} is currently voting.`);
};
*/

// LOOPING ARRAYS, BREAKING AND CONTINUING
/*
const populations = [120, 85, 16, 5];

const percentages2 = [];

function percentageOfWorld1(population) {
    const percent = (population / 7900) * 100;
    return percent;
}

for (let i = 0; i < populations.length; i++) {
    percentages2.push(percentageOfWorld1(populations[i]));
    */
// VARIANT 2
/*
const perc = percentageOfWorld1(populations[i]);
percentages2.push(perc);
*/
/*
}

console.log(percentages2);

const percentages = [percentageOfWorld1(120), percentageOfWorld1(85), percentageOfWorld1(16), percentageOfWorld1(5)];

console.log(percentages);
*/

/*
const ListOfNeighbours = [
    ["Canada", "Mexico"],
    ["Spain"],
    ["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < ListOfNeighbours.length; i++) {
    for (let buur = 0; buur < ListOfNeighbours[i].length; buur++) {
        console.log(`Neighbour: ${ListOfNeighbours[i][buur]}`);
    }
}
*/

// WHILE LOOP
/*
const populations = [120, 85, 16, 5];

const percentages3 = [];

function percentageOfWorld1(population) {
    const percent = (population / 7900) * 100;
    return percent;
}

let j = 0;

while (j < populations.length) {
    const perc = percentageOfWorld1(populations[j]);
    percentages3.push(perc);
    j++;
}

console.log(percentages3);

console.log(populations.length);
*/