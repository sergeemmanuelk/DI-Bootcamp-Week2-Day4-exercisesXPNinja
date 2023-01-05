console.log("*****Exercise 1: Random Number*****")

function getRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    for (let i = 0; i <= randomNumber; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

getRandomNumber()

console.log("*****Exercise 2: Capitalized Letters*****")

console.log("*****Exercise 3 : Is Palindrome?*****")

function checkPalindrome(inputString) {
    
    // find the length of a string
    let StringLength = inputString.length

    // loop through half of the string
    for (let item = 0; item < StringLength / 2; item++) {

        // check if first and last string are same
        if (inputString[item] !== inputString[StringLength - 1 - item]) {
            return 'It is not a palindrome'
        }
    }

    return 'It is a palindrome'
}

// call the function

console.log(checkPalindrome("madam"))
console.log(checkPalindrome("bob"))
console.log(checkPalindrome("kayak"))
console.log(checkPalindrome("controle"))


console.log("*****Exercise 4 : Biggest Number*****")

function biggestNumberInArray(arrayNumber) {

    if (arrayNumber.length === 0) {
        return 0
    }

    let biggestNumber = arrayNumber[0]

    for (let i = 1; i < arrayNumber.length; i++) {
        if (typeof arrayNumber[i] === 'number' && arrayNumber[i] > biggestNumber) {
            biggestNumber = arrayNumber[i]
        }
    }

    return biggestNumber;
}

const array = [-1, 0, 3, 100, 99, 2, 99];
console.log(biggestNumberInArray(array)); // 100

const array2 = ['a', 3, 4, 2];
console.log(biggestNumberInArray(array2)); // 4

const array3 = [];
console.log(biggestNumberInArray(array3)); // 0


console.log("*****Exercise 5: Unique Elements*****")

function uniqueElements(arrUniqueElements) {
    // Create a new array to store the unique elements
    const uniqueElements = []
  
    // Iterate through the input array
    for (let counter = 0; counter < arrUniqueElements.length; counter++) {
        // If the element is not already in the uniqueElements array, add it
        if (!uniqueElements.includes(arrUniqueElements[counter])) {
            uniqueElements.push(arrUniqueElements[counter])
        }
    }
  
    return uniqueElements
}

let list = [1, 2, 3, 3, 3, 3, 4, 5]
let newList = uniqueElements(list)
console.log(`New list : [${newList}]`)
  

