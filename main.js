let something;

console.log(something);

something = 5486329;
console.log(something);

const variabel2 = 2;

console.log(variabel2);

//? Datatype string:
let string = "           some tekst   ";

console.log(string);

// //! the two lines below does the same:
console.log(string[2]);
console.log(string.charAt(2));

console.log(string.trim());

//? Datatype number:
let num = 764;
console.log(num);

//? What happens if we combine string and number datatype?
let stringPart = "10";
let numberPart = 10;
console.log(stringPart + numberPart);

//? Data array:

const exampleArray = [
  "some data here that is a string", // index 0
  "some other data here", // index 1
  10, // index 2
];

console.log(exampleArray[0]);
const copyOfArray = [...exampleArray];

console.log(copyOfArray);

copyOfArray.pop();
copyOfArray.pop();

console.log(copyOfArray);

console.log(exampleArray);

copyOfArray.splice(0, 0, "new data through splice");

console.log(copyOfArray);

//? Datatype Object:

const objectExample = {
  key1: "value1",
  key2: "value2",
};

console.log(objectExample);

console.log(objectExample.key1);

const person1 = {
  fName: "Joakim",
  lName: "Villo",
  age: "37",
  hobbies: ["E-girl! yaaaa!", "gaming", "coding"],
};

console.log(person1);
console.log(person1.hobbies[0]);

const personAlice = {
  name: "Alice",
  age: 28,
  job: "Frontend Developer",
  hobbies: ["drawing", "hiking", "reading"],
};

const personBob = {
  name: "Bob",
  age: 35,
  job: "Backend Engineer",
  hobbies: ["cooking", "gaming", "cycling"],
};

const personClara = {
  name: "Clara",
  age: 22,
  job: "UI/UX Designer",
  hobbies: ["photography", "yoga", "painting"],
};

const personDan = {
  name: "Dan",
  age: 41,
  job: "Project Manager",
  hobbies: ["woodworking", "traveling", "gardening"],
};

const allPersons = [personAlice, personBob, personClara, personDan];

console.log(allPersons);

let bool = false;
let number = 1;

let stringToShowIfTrue = "Here you go";
let stringToShowIfFalse = "NOT TRUE!";

if (!bool) {
  console.log(stringToShowIfTrue);
  num++;
} else {
  console.log(stringToShowIfFalse);
  num--;
}

/* truthy values: 
- boolean: true
- number: higher or less than 0
- string: that are not empty ("tekst")
*/

/* falsly values: 
- boolean: false
- number: 0
- string: that are empty ("")
- undefined
- null
- NaN (not a number) ??
*/

let userName = "Joakim";

if (userName) {
  console.log("hallo", userName);
} else {
  console.log("please put in a userName");
}

console.log(num);

let numberToCheck = 5;

if (numberToCheck < 5) {
  console.log(numberToCheck, "is less then 5");
} else if (numberToCheck > 5) {
  console.log(numberToCheck, "is more then 5");
} else {
  console.log(numberToCheck, "is 5");
}
