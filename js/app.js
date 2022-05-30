// question 1
const groupName = "Team Ares";
document.querySelector('.groupName').innerHTML =groupName;
document.querySelector('.groupName').style.color = "purple";


// question 2
const teamMembers = ['Austin Tonayam',
'Oriyomi Aladesuru',
'Izima Obisike',
'Akorede Giyasat',
'Khalid',
'Amos Thibault',
'Igah Abiye']

console.log(teamMembers[1]);

// question 3
const aboutMe = {
    firstName: "Oriyomi",
    lastname: 'Aladesuru',
    bestMovie: 'Van Helsing',
    bestFood: 'Plantain',
    complexion: 'Dark',
    birthMonth: 'May',
    state: 'Lagos',
    groupName: 'Ares'
}

console.log(aboutMe.bestMovie);

// question 4
const aNoun = 'Rebecca';
const aVerb = 'dancing';
const anAdjective = 'perfect';

const sentence1 = aNoun + ' ' + aVerb + ' ' + 'steps are ' + anAdjective;
const sentence2 = aNoun + "'s smile is " + anAdjective;
const sentence3 = 'There is nothing like ' + anAdjective + ' ' + aVerb + ' steps, just do what you can do ';
const sentence4 = aNoun + "'s relationship is a " + anAdjective + " romantic relationship, the thought of it keeps me " + aVerb;
const sentence5 = aNoun + ' loves ' + aVerb;

console.log(sentence1);
console.log(sentence2);
console.log(sentence3);
console.log(sentence4);
console.log(sentence5);

// question 5 
function modulus(x,y) {
    console.log(x % y);
}

modulus(100,30);

// question 6
function quadraticEquation(a,b,c) {
    const equationFormula = Math.pow(b, 2) - 4 * a * c;
    let x1 = (-1 * b + Math.sqrt(equationFormula)) / 2 * a;
    let x2 = (-1 * b - Math.sqrt(equationFormula)) / 2 * a;
    return x1 + "and" + x2;
 }
console.log(quadraticEquation(5, 6, -2));

// question 7
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";


const wordBlanks = "The " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb;

console.log(wordBlanks);

// question 8
function circleArea(r) {
    const pi = 3.142;
    const radiusSq = Math.pow(r,2);
    const area = pi * radiusSq;

    return area;
}

console.log("the area of the circle with radius of 9 is: " + circleArea(9));

// question 9
function simpleInterest() {
    const principalAmount = 8200;
    const rate = 0.175;
    const time = 2.5;
    const i = (principalAmount * rate * time)/100;
    return i;
}

console.log(simpleInterest());

// question 10
let value1 = 10;
let value2 = 4;
result = value1 % value2;
console.log(result);

// question 11
// data 1
const meritWeight = 78;
const meritHeight = 1.69;
const meritBMI = meritWeight / (meritHeight * meritHeight);
console.log(meritBMI);

const nutjobWeight = 92;
const nutjobHeight = 1.95;
const nutjobBMI = nutjobWeight / (nutjobHeight * nutjobHeight);
console.log(nutjobBMI);

const meritHigherBMI = meritBMI > nutjobBMI;
console.log(meritHigherBMI);


// data 2
const meritWeight2 = 95;
const meritHeight2 = 1.88;
const meritBMI2 = meritWeight2 / (meritHeight2 * meritHeight2);
console.log(meritBMI2);

const nutjobWeight2 = 85;
const nutjobHeight2 = 1.76;
const nutjobBMI2 = nutjobWeight2 / (nutjobHeight2 * nutjobHeight2);
console.log(nutjobBMI2);

const meritHigherBMI2 = meritBMI2 > nutjobBMI2;
console.log(meritHigherBMI2);