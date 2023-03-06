// -------------Question 1-------------------
// a. 
// Mutating Array methods are ones that change the array after the method has been used. while Non-mutating Array methods do not change the array after the method has been used.

// b.  
// Mutating Array Methods:
//  array.pop(), 
//  array.push(), 
//  array.shift(), 
//  array.unshift(),
// array.splice().

// Non-Mutating Array Methods:
// array.concat(),
//  array.includes(),
//   array.indexOf,
//    array.lastIndexOf()
//    array.slice()

// -----------------Question 2-------------
let languages =["C#", "JavaScript", "Ruby","PHP", "Python"];
console.log({languages});

// a.  Add "Kotlin" to the end of the array;
// languages.push("Kotlin");
languages.splice(5,0, "Kotlin");
console.log({languages});

// b.  Add ‘Java’ after ‘Ruby’
languages.splice(3,0, "Java");
console.log({languages});

// c.  Remove the first item in the array
languages.splice(0,1,);
console.log({languages});

// d.  Add ’Scala’ and ‘Swift’ to the beginning of the array
languages.splice(0,0, "Scala", "Swift");
console.log({languages});

// e.  Replace ‘PHP’ with ‘Go’ and ‘Rust’
languages.splice(5,1, "Go","Rust");
console.log({languages});


// ------------------Question 3----------------
// What will be the value of fruit after calling the function changeFruit?

let fruit = ['apple', 'mango', 'banana'];
		function changeFruit( fruit ) {
    			fruit[2] = "orange";
    			return fruit;
		}
// Answer:
// After calling the changeFruit function and passing fruit as the argument, the value returned would be:
 ['apple', ' mango', 'orange'];


//  -------------Question 4-------------
// Write a function that accepts an array of numbers as an argument. Return the maximum value in the array.

const arrayNumbers = [ 2, 4, 7, 9, 13,  15, 20];
function maxNumber( arrayNumbers){
        let maxValue = 0;
        for (let i =0; i< arrayNumbers.length; i++){
                if (arrayNumbers[i] > maxValue){
                        maxValue= arrayNumbers[i];
                }
        }
        return `maximum value is ${maxValue}`;
}
console.log(maxNumber(arrayNumbers));





// ----------Question 5--------------
// Write a function called valTimesIndex which accepts an array of numbers and returns a new array with each value multiplied by the index it is at in the array:

const numbersArray= [ 3, 4, 8, 9, 7];
function valTimesIndex (numbersArray){
    let newNumberArray = [];
    for( let  i =0; i < numbersArray.length; i++){
            let newNumber = i * numbersArray[i];
            newNumberArray.push(newNumber);
    }
    return newNumberArray;
}
console.log(valTimesIndex(numbersArray));