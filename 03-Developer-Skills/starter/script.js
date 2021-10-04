// Remember, we're gonna use strict mode in all scripts now!
"use strict";

/*
const x = 23;

const calcAge = (birthYear) => 2037 - birthYear;

console.log(calcAge(1991));
*/

/*
1) Understanding the problem
- What is temp amplitude?
Answer: difference between highest and lowest temp.
- How to compute max and min temperatures?
- What's a sensor error? And what to do?

2) Breaking up into sub-problems.
- How to ignore errors?
- Find max value in temp array
- Find min value in temp array
- Subtract min from max (amplitude) and return it
*/

/*
const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

const calcTempAplitudes = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitude = calcTempAplitudes(temperatures);

console.log(amplitude);
*/

/*
PROBLEM 2:
Function should now receive 2 arrays of temps.

1) Understanding the problem
- With 2 arrays, should we implement functionality twice? NO! Just merge two arrays.

2) Breaking up into sub-problems
- How to merge 2 arrays?
This is how:
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);
*/

/*
const calcTempAmp0 = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const ampl0 = calcTempAmp0([3, 5, 1], [9, 0, 5]);

console.log(ampl0);
*/
/*
const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    // C) FIX
    // value: Number(prompt("Degrees celsius")),
    value: 10,
  };
  // B) FIND
  console.table(measurement);

  // console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};
// A) IDENTIFY
console.log(measureKelvin());
*/
// USING DEBUGGER
const calcTempAmpBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = 0;
  let min = 0;

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
/*
const amplBug = calcTempAmpBug([3, 5, 1], [9, 4, 5]);
// IDENTIFY
console.log(amplBug);
*/

// DEVELOPER SKILLS & EDITOR SETUP
// CODING CHALLENGE #1
// DS&ES.CC#1.SOLUTION#1

// Number to string converting function
const num2string = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    let stringer = [];
    let length = stringer.push(arr[i].toString());
    // stringer = stringer.push(arr[i].toString());
    console.log(stringer);
    // console.log(stringer[3] + 100);
    // return stringer;
  }
};

const printForecast = function (arr) {
  let stringer = [];
  for (let i = 0; i < arr.length; i++) {
    let length = stringer.push(arr[i].toString());
    // console.log(stringer);
    const forecastT = `... ${stringer[i]} degrees Celsius on day ${
      arr.indexOf(arr[i]) + 1
    }...`;
    console.log(forecastT);
  }
};

const data1 = [17, 21, 23];
// console.log(data1.length);
const data2 = [12, 5, -5, 0, 4];

printForecast(data2);
// printForecast(data2);

/*
You need to:
1 - convert elements of arr into strings one by one.
2 - you need to save those converted elements into a new
variable.
*/

// const stringData = num2string(data2);
// console.log(stringData);

/*
Apparently, in your solution, you forgot to transform
numbers into the strings, although you did the rest of the 
tasks well it seems. Now here below, Jonas" solution
with numbers to strings transformation.
*/

// DS&ES.CC#1.SOLUTION#2

/* Jonas' problem breakdown.
1) Understanding the problem
- Array transformed to string, separated by ...
- What is the X days? Answer: index + 1

2) Breaking up into sub-problems
- Transform array into string.
- Transform each element to string with "Degrees Celsius".
- Strings needs to contain day (index + 1).
- Add ... between elements and start and end of string.
- Log string to console.
*/

console.log(
  `... ${data1[0]} degrees Celsius ... ${data1[1]} degrees Celsius ... ${data1[2]} degrees Celsius ...`
);

const printForecast1 = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]} degrees Celsius in ${i + 1} days ... `;
  }
  console.log(`...` + str);
};

printForecast1(data1);
