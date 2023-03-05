// Question 1
// Mutating array modify the original array and permanently change the content of the array, while non-mutating array do not modify the original array, instead the return a new array
//Examples of Mutating Array Methods
let names = ["Adeyera", "Busayo", "Chidinma", "Nafisat", "Elizabeth"];
names.push("Adeniyi");
console.log(names)
// Adds Adeniyi to the end of the array "names"

names.pop();
console.log("Pop removes the last element in " + names);
// Removes the last element

names.unshift("Asimolowo");
console.log(names);
// Adds Asimolowo to the beginning of the array

names.shift();
console.log(names);
// removes the first item in an array

names.reverse();
console.log(names);
// reverses the items in an array

// The push, pop, shift, unshift and reverse are all examples of mutating methods in array


//Examples of non-mutating array


// Question 2
languages = ["C#", "JavaScript", "Ruby", "PHP", "Python"];
languages.push("Kotlin");
languages.splice(3,0, "Java");
languages.shift();
languages.unshift("Scala","Swift");
languages.splice(5,1, "Go", "Rust")
console.log(languages)

// Question 3 
// The value of  changeFruit would be 
let fruit = ['apple', 'mango', 'orange'];


// Question 4
function max(arr) {
    return Math.max(...arr);
  }
console.log(max([10,20,5,2,30,50]));

// Question 5
function valTimesIndex(arr) {
    return arr.map((val, index) => val * index);
  }
console.log(valTimesIndex([5,6,7,8,9]));
