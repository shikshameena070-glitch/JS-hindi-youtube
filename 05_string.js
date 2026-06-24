const name = "shiksha"

const repoCount = 50

//console.log(name + repoCount + "value");

console.log(`Hello my name is ${name} and my repo Count is ${repoCount}`);

const gameName = new String('shiksha')
//methods
//console.log(gameName[0]);
//console.log(gameName.__proto__);

//console.log(gameName.length);
//console.log(gameName.toUpperCase());
//console.log(gameName.charAt(2));
//console.log(gameName.indexOf('s'));

const newString = gameName.substring(0,6);
console.log(newString);

const anotherString = gameName.slice(-8,5)
console.log(anotherString);

const newStringOne = "  shiksha  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://shiksha.com/shiksha%20meena"

console.log(url.replace('%20','-'))
console.log(url.includes('sundar'))

console.log(gameName.split('-'));