'use strict';

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D");
*/
// const interface = "Audio";
// const private = 534;

/*
function logger() {
    console.log("My name is Jonas!");
}

// calling / running / invoking a function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');
*/

/*
// FUNCTION DECLARATION
const age1 = calcAge1(1982);

function calcAge1(birthYear) {
    return 2037 - birthYear;
}

console.log(age1);

// FUNCTION EXPRESSION

const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);

console.log(age1, age2);
*/

// ARROW FUNCTION
/*
const calcAge3 = birthYear => 2037 - birthYear;

const age3 = calcAge3(1928);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}
console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1980, "Bidzina"));
*/

/*
function fruitCutter(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {

    const applePieces = fruitCutter(apples);
    const orangePieces = fruitCutter(oranges);

    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces oranges.`;
    return juice;
}

console.log(fruitProcessor(2, 3));
*/

/*
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired.🎈`);
        return -1;
    }
}

console.log(yearsUntilRetirement(1991, "Jonas"));

console.log(yearsUntilRetirement(1950, "Mike"));
*/

// CODING CHALLENGE 2.1

/*
const calcAverage = (score1, score2, score3) => {
    const average = (score1 + score2 + score3) / 3;
    return average;
}
*/

/*
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins / avgKoalas >= 2) {
        console.log(`Dolphins win! (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas / avgDolphins >= 2) {
        console.log(`Koalas win! (${avgKoalas} vs. ${avgDolphins})`);
    } else (console.log("We do not have a winner."));
}

const avgDolphins = calcAverage(85, 54, 41);
const avgKoalas = calcAverage(23, 34, 27);

console.log(avgDolphins, avgKoalas);

const winnerData2 = checkWinner(avgDolphins, avgKoalas);

const avgDolphins1 = calcAverage(44, 23, 71);
const avgKoalas1 = calcAverage(65, 54, 49);

const winnerData1 = checkWinner(avgDolphins1, avgKoalas1);
*/

/*
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);
*/

// const years = new Array(1991, 1984, 2001, 2020);

/*
console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);

// friends = ["Bob", "Elis"];

const firstName = "Jonas";
const jonas = [firstName, "Dignidze", 2037 - 1991, "teacher", friends];
console.log(jonas);
console.log(jonas.length);
*/

// EXCERCISE

/*
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);
*/

/*
const friends = ["Michael", "Babuna", "Dignidze", "Schkhmenkel"];
// ADD ELEMENTS TO THE END
const newLength = friends.push("Otar");
console.log(friends);
console.log(newLength);

// ADD ELEMENTS TO THE BEGINNING
friends.unshift("Jonathan");
console.log(friends);

// REMOVE LAST ELEMENT
const popped = friends.pop();
console.log(friends);
console.log(popped);

// REMOVES FIRST ELEMENT
const firstRemove = friends.shift();
console.log(firstRemove);

console.log(friends.indexOf("Dignidze"));

console.log(friends.indexOf("Jonathan"));

friends.push(23);
console.log(friends.includes("Jonathan"));
console.log(friends.includes("Dignidze"));
console.log(friends.includes("23"));

if (friends.includes("Dignidze")) {
    console.log("Dignidze is your true friend!");
}

if (friends.includes("Jonathan")) {
    console.log("Jonathan is your true friend!");
}
*/

// CODING CHALLENGE #2

// calcTip function in a function declaration form
/*
function calcTip(bill) {
    if (bill >= 50 && bill <= 300) {
        const tip = bill * 0.15;
        return tip;
    } else {
        const tip = bill * 0.2;
        return tip;
    }
}
*/

// calcTip function in expression form using ternary operator.
/*
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
*/
// LOOK AT THIS ABOVE FUNCTION AND MAKE SURE IT WORKS THEN ALSO MAKE THIS FUNCTION IN AN ARROW FORM. 

// calcTip function in arrow form using ternary operator in two variants.

// variant A
/*
const calcTip = bill => {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
*/
// variant B
/*
const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const myBill = 100;

console.log(calcTip(myBill));

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

console.log(tips);

const total = [125 + calcTip(bills[0]), 555 + calcTip(bills[1]), 44 + calcTip(bills[2])];

console.log(total);
*/

/*
const jonas = {
    firstName: "Jonas",
    lastName: "Dignidze",
    age: 2037 - 1991,
    job: "teacher",
    friends: ["Michael", "Jordan", "Lazi"]
};

console.log(jonas);

console.log(jonas.lastName);

console.log(jonas['lastName']);

const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

// console.log(jonas."last" + nameKey);

const interestedIn = prompt("What do you want to know about Jonas? Choose from firstName, lastName, age, job and friends.");
console.log(jonas[interestedIn]);

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log("Wrong request! Choose from firstName, lastName, age, job and friends, please.");
}

jonas.location = "Portugal";
jonas["twitter"] = "@jonasschmedtman";
console.log(jonas);

// Challenge
// "Jonas has 3 friends and his best friend is Michael."

console.log(`${jonas['firstName']} has ${jonas.friends.length} friends and his best friend is ${jonas.friends[0]}.`);
*/

/*
const jonas = {
    firstName: "Jonas",
    lastName: "Dignidze",
    birthYear: 1991,
    job: "teacher",
    friends: ["Michael", "Jordan", "Lazi"],
    hasDriversLicense: true, */
// calcAge: function (birthYear) {
// return 2037 - birthYear;
// }
// calcAge: function () {
// console.log(this);
// return 2037 - this.birthYear;
// }
/*
calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
},*/

/*
getSummary: function () {
    this.summary = this.hasDriversLicense === true ? console.log(`${this.firstName} is a ${this.age} year old ${this.job} with a driver's licence.`) : console.log(`${this.firstName} is a ${this.age} year old ${this.job} with no driver's licence.`);
    return this.summary;
}
*/

/*
getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.job}, and he has ${this.hasDriversLicense ? "a" : "no"} driver's licence.`
}
};

console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

console.log(jonas.getSummary());
*/

// CHALLENGE
// getSummary description: method that
// return string summary data of jonas
// "Jonas Dignidze is a 46-year old teacher... and he
// EITHER has a driver's licence OR has no driver's
// licence"

/*
const mark = {
    firstName: "Mark",
    lastName: "Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

const john = {
    firstName: "John",
    lastName: "Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};
*/

// const compareBMI = function () {
// mark.bmi > john.bmi ? console.log()
// };
// console.log(`${mark.bmi > john.bmi ? }`);

/*
console.log(`${john.firstName} ${john.lastName} has ${john.calcBMI() > mark.calcBMI() ? "higher" : "lower"} (${john.calcBMI()}) BMI than ${mark.firstName} ${mark.lastName} (${mark.calcBMI()})`);

console.log(john.bmi);
console.log(mark.bmi);

if (mark.bmi > john.bmi) {
    console.log(`${mark.firstName}'s BMI (${mark.bmi}) is higher than ${john.firstName}'s BMI (${john.bmi})`)
} else if (john.bmi > mark.bmi) {
    console.log(`${john.firstName}'s BMI (${john.bmi}) is higher than ${mark.firstName}'s BMI (${mark.bmi})`)
}
*/

/*
console.log(`Lifting weights repertition 1 🏋️‍♀️`);
console.log(`Lifting weights repertition 2 🏋️‍♀️`);
console.log(`Lifting weights repertition 3 🏋️‍♀️`);
console.log(`Lifting weights repertition 4 🏋️‍♀️`);
console.log(`Lifting weights repertition 5 🏋️‍♀️`);
console.log(`Lifting weights repertition 6 🏋️‍♀️`);
console.log(`Lifting weights repertition 7 🏋️‍♀️`);
console.log(`Lifting weights repertition 8 🏋️‍♀️`);
console.log(`Lifting weights repertition 9 🏋️‍♀️`);
console.log(`Lifting weights repertition 10 🏋️‍♀️`);
*/

// for loop keeps running while condition is TRUE
/*
for (let rep = 1; rep <= 30; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}
*/

/*
const jonas = {
    firstName: "Jonas",
    lastName: "Dignidze",
    age: 2037 - 1991,
    job: "teacher",
    friends: ["Michael", "Jordan", "Lazi"]
};
*/

/*
const jonas = [
    "Jonas",
    "Dignidze",
    2037 - 1991,
    "teacher",
    ["Michael", "Jordan", "Lazi"],
    true
];

const types = [];

for (let i = 0; i < jonas.length; i++) {
    // READING JONAS ARRAY
    console.log(jonas[i], typeof jonas[i]);
    // FILLING TYPES ARRAY
    // types[i] = typeof jonas[i];
    types.push(typeof jonas[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];

const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}

console.log(ages);

// CONTINUE AND BREAK

console.log("---ONLY STRINGS---")
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] !== 'string') continue;

    console.log(jonas[i], typeof jonas[i]);
}

console.log("---BREAK WITH NUMBER---")
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] === 'number') break;

    console.log(jonas[i], typeof jonas[i]);
}
*/

/*
const jonas = [
    "Jonas",
    "Dignidze",
    2037 - 1991,
    "teacher",
    ["Michael", "Jordan", "Lazi"],
    true
];
// BACKWARDS LOOP
for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(i, jonas[i]);
};
// LOOP WITHIN LOOP
for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`-------------Starting exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: lifting weights repetition ${rep} 🏋️‍♂️`);
    }
}
*/

/*
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}
*/

/*
let rep = 1;
while (rep <= 10) {
    // console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♀️`);
    rep++;
}
*/

/*
let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);


while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log("You just rolled 6! CONGRATULATIONS!");
}
*/

// CODING CHALLENGE # 4: THE LAST CODING CHALLENGE OF THE SECTION 2.

const bills = [
    22,
    295,
    176,
    440,
    37,
    105,
    10,
    1100,
    86,
    52
];

const tips = [];

const totals = [];

const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    totals.push(bills[i] + tips[i]);

    // JONAS VERSION
    /*
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
    */
}

console.log(bills);
console.log(tips);
console.log(totals);

/*
const arr = [
    22,
    295,
    176,
    440,
    37,
    105,
    10,
    1100,
    86,
    52
];
*/

const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = arr[i] + sum;
    }
    return sum / arr.length;
}

console.log(calcAverage(bills));

console.log(calcAverage(totals));

console.log(calcAverage(tips));