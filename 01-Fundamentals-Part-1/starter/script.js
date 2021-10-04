/*
let js = 'amazing';
if (js === 'amazing') alert('Javascript is FUN!');
// This is a comment
40 + 8 + 23 - 10;
console.log(40 + 8 + 23 - 10);
*/
// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// console.log(typeof true);
// console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');
/*
javascriptIsFun = 'YES';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);
*/
// let age = 30;
// age = 31;

// const birthYear = 1991;
// birthYear = 1990;

// const job;
/*
var job = 'programmer';
job = 'teacher';

lastName = 'Schmedtmann';
console.log(lastName);
*/

/*
const now = 2037;
const ageJonas = 2037 - 1991;
const ageSarah = 2037 - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 3 = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

// assignment operators
/*
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 =  100;
x++; // x = x + 1 = 101;
x--;
x--;
console.log(x);
*/

// comparison operators
/*
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);
const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);


// coding challenge #1 & #2
*/

/*
const massMarkD1 = 78;
const heightMarkD1 = 1.69;
const massJohnD1 = 92;
const heightJohnD1 = 1.95;
const massMarkD2 = 95;
const heightMarkD2 = 1.88;
const massJohnD2 = 85;
const heightJohnD2 = 1.76;

let bmiMarkD1 = massMarkD1 / heightMarkD1 ** 2;
console.log(bmiMarkD1);
let bmiJohnD1 = massJohnD1 / heightJohnD1 ** 2;
console.log(bmiJohnD1);

let bmiMarkD2 = massMarkD2 / (heightMarkD2 * heightMarkD2);
let bmiJohnD2 = massJohnD2 / (heightJohnD2 * heightJohnD2);
console.log(bmiMarkD2);
console.log(bmiJohnD2);

let markHigherBMI = bmiMarkD1 > bmiJohnD1;
console.log(markHigherBMI);
markHigherBMI = bmiMarkD2 > bmiJohnD2;
console.log(markHigherBMI);

if (bmiMarkD2 > bmiJohnD2) {
    console.log(`Mark's BMI (${bmiMarkD2}) is higher than John's BMI (${bmiJohnD2})!`)
} else {
    console.log(`John's BMI (${bmiJohnD2}) is higher than Mark's (${bmiMarkD2})!`);
}
*/

/*
const firstName = "Jonas";
const job = "teacher"
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log("String with \n\
multiple \n\
lines");

console.log(`String
with multiple
lines`);
*/

/*
const age = 15;
const isOldEnough = age >= 18;

if (isOldEnough) {
    console.log("Sarah can start her driving licence lessons! 🚗");
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2001;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
*/

/*
// type conversion. This is explicit
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion. This is implicit.
console.log('I am ' + 23 + ' years old');

console.log('I am ' + '23' + ' years old');

console.log('23' + '10' + 3);

console.log('23' * '2');

console.log('23' / '2');

console.log('23' > '18');

let n = '1' + 1;
n = n - 1;
console.log(n);
*/

/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if (money) {
    console.log("Don't spend it all!");
} else {
    console.log("You should get a job!");
}

let height = 0;
if (height) {
    console.log('YAY! Height is defined!');
} else {
    console.log('Height is UNDEFINED');
}
*/

/*
const age = '18';
if (age === 18) console.log('You just became an adult!');

if (age == 18) console.log('You just became an adult!');

const favorite = Number(prompt("What's your favorite number?"));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 7) {
    console.log("Cool 7  is truly auspicious number!");
} else if (favorite === 23) {
    console.log('23 is a pretty good number too. Ask Michael!')
} else if (favorite === 9) {
    console.log("Woow a magic number 9!")
} else {
    console.log("The number is neither 7 nor 23 nor is it 9 for that matter!")
}

if (favorite !== 23) {
    console.log("Why not 23 you little shit?!");
}
*/

/*
const hasDriversLicense = true; // A
const HasGoodVision = true; // B

console.log(hasDriversLicense && HasGoodVision);
console.log(hasDriversLicense || HasGoodVision);
console.log(!hasDriversLicense);
*/


// if (hasDriversLicense && HasGoodVision) {
//     console.log("Let her drive!");
// } else {
//     console.log("Let her walk!");
// }

/*
const isTired = false; // C
console.log(hasDriversLicense && HasGoodVision && isTired);

if (hasDriversLicense && HasGoodVision && !isTired) {
    console.log("Let Sarah drive!");
} else {
    console.log("Let her walk!");
}
*/

/*
const averageDolphins = (97 + 112 + 101) / 3;
const averageKoalas = (109 + 95 + 106) / 3;

if (averageDolphins > averageKoalas && averageDolphins >= 100) {
    console.log("Dolphins are the winners!");
} else if (averageDolphins < averageKoalas && averageKoalas >= 100) {
    console.log("Koalas are the winners!");
} else if ((averageKoalas === averageDolphins) >= 100) {
    console.log("It's a draw!");
} else {
    console.log("The winner is still undecided. There will be a rematch!");
}
*/

const day = 'tuesday';
/*
switch (day) {
    case 'monday': // if day equals monday
        console.log("Plan course strucutre");
        console.log("Go to supermarket");
        break;
    case 'tuesday':
        console.log("Prepare theory videos");
        break;
    case 'wednesday':
    case 'thursday':
        console.log("Play badminkton till exhaustion.");
        break;
    case 'friday':
        console.log("run, hide, write, sleep");
        break;
    case 'saturday':
    case 'sunday':
        console.log("don't you dare to do anything!");
        break;
    default:
        console.log("invalid day. Please validate or leave!");
}
*/

/*
if (day === 'monday') {
    console.log("Plan course structure");
    console.log("Go to supermarket");
} else if (day === 'tuesday') {
    console.log("Prepare theory videos");
} else if (day === 'wednesday' || day === 'thursday') {
    console.log("Play badminkton till exhaustion!");
} else if (day === 'friday') {
    console.log("Run, hide, repeat");
} else if (day === 'saturday' || day === 'sunday') {
    console.log("don't you dare to do anything!");
} else {
    console.log("invalid date. Validate or leave!");
}
*/

// const age = 12;
/*
age >= 18 ? console.log("I'd like to have some wine. 🍷") : console.log("I'd like to have some milk. 🥛")
*/

/*
const drink = age >= 18 ? "wine" : "milk";
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'wine';
} else {
    drink2 = "water";
}
console.log(drink2);

console.log(`I'd line to drink ${age >= 18 ? "wine" : "milk"}`);
*/

// CODING CHALLENGE #4

/*
const bill = 430;

const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const totalBill = bill + tip;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value was ${totalBill}.`)
*/

