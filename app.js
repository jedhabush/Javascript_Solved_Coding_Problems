//--------------------- Problem 1 ----------------------------
/*
Given a string of digits, you should replace any 
digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string. 

assert.strictEqual(fakeBin('45385593107843568'), '01011110001100111');
assert.strictEqual(fakeBin('509321967506747'), '101000111101101'); 


*/
function fakeBin(x) {
  let result = "";
  for (i = 0; i < x.length; i++) {
    //console.log(x);
    result += x[i] >= "5" ? x[i].replace(x[i], "1") : "0";
  }

  return result;
}

console.log(fakeBin("45385593107843568")); //11101101110011100


//--------------------- Problem 2 ----------------------------
/*
Your task is to make a function that can take any non-negative integer as an argument 
and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321

*/

//Non Ideal SOLUTION
const descendingOrder = (n) => {
  let numbArray = String(n)
    .split("")
    .map((x) => Number(x))
    .sort((a, b) => b - a)
    .join("");

  return Number(numbArray);
};

console.log(descendingOrder(123456789));


//--------------------- Problem 3 ----------------------------

/*
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/

const XO = (str) => {
  let lower = str.toLowerCase();
  let xs = 0;
  let os = 0;
  let result = lower.split("").map((x) => {
    if (x === "x") {
      return xs++;
    }
    if (x === "o") {
      return os++;
    }
  });

  return xs === os;
};

console.log(XO("zpzpzpp"));


//--------------------- Problem 4 ----------------------------

/*
It's pretty straightforward. Your goal is to create a function that removes 
the first and last characters of a string. You're given one parameter, the original string. 
You don't have to worry with strings with less than two characters.

                                 ('eloquent'), 'loquen');
    assert.strictEqual(removeChar('country'), 'ountr');
    assert.strictEqual(removeChar('person'), 'erso');
    assert.strictEqual(removeChar('place'), 'lac');
    assert.strictEqual(removeChar('ooopsss'), 'oopss');
  });
*/

const remove = (str) => {
  return str.slice(1, -1);
};

console.log(remove(`lw0g0`));


//--------------------- Problem 5 ----------------------------

/*
Write a function that takes an array of numbers and returns the sum of the numbers. 
The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

Input: [1, 5.2, 4, 0, -1]
Output: 9.2

Input: []
Output: 0

Input: [-2.398]
Output: -2.398
*/

const sumOfArray = (numbers) => {
  //if (numbers.length === 0) return 0;
  return numbers.reduce((a, b) => a + b, 0);
};

console.log(sumOfArray([]));


//--------------------- Problem 6 ----------------------------

/*
our task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

Examples
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
*/

const order = (str) => {
  let strArray = str.split(" ");
  let number = 1;

  let finalArray = [];
  for (let i = 0; i < strArray.length; i++) {
    // console.log(strArray[i]);
    for (let j = 0; j < strArray.length; j++) {
      //console.log("This is J", strArray[j]);
      if (strArray[j].match(number)) {
        finalArray.push(strArray[j]);
        number++;
      }
    }
  }

  return finalArray.join(" ");
};

console.log(order("")); 


//--------------------- Problem 7 ----------------------------

/*
This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

const accum = (str) => {
  let strArray = str.toLowerCase().split("");
  let finalStr = [];
  for (let i = 0; i < strArray.length; i++) {
    finalStr.push(strArray[i].repeat(i + 1));
  }

  return finalStr
    .map((firstLetter) => firstLetter[0].toUpperCase() + firstLetter.slice(1))
    .join("-");
};

console.log(accum("RqaEzty")); 


//--------------------- Problem 8 ----------------------------

/*
Encrypt this!

You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

Your message is a string containing space separated words.
You need to encrypt each word in the message using the following rules:
The first letter must be converted to its ASCII code.
The second letter must be switched with the last letter
Keepin' it simple: There are no special characters in the input.
Examples:
encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo"
encryptThis("A wise old owl lived in an oak")=== "65 119esi 111dl 111lw 108dvei 105n 97n 111ka");
encryptThis("The more he saw the less he spoke")=== "84eh 109ero 104e 115wa 116eh 108sse 104e 115eokp");
encryptThis("The less he spoke the more he heard")=== "84eh 108sse 104e 115eokp 116eh 109ero 104e 104dar
*/

const encryption = (text) => {
  // asci Code convertor function
  const asciiLetterConvertorFunction = (asciiCode) => {
    return asciiCode[0].charCodeAt();
  };

  // string slice function
  const stringSliceFunction = (str, from, to) => {
    return str.slice(from, to);
  };

  return text
    .split(" ")
    .map((letterSwaps) => {
      if (letterSwaps.length <= 2) {
        return (
          asciiLetterConvertorFunction(letterSwaps) +
          stringSliceFunction(letterSwaps, 1)
        );
      }
      return `${asciiLetterConvertorFunction(letterSwaps)}${stringSliceFunction(
        letterSwaps,
        -1
      )}${stringSliceFunction(letterSwaps, 2, -1)}${letterSwaps[1]}`;
    })
    .join(" ");
};

console.log(encryption("Thank you Piotr for all your help")); 


//--------------------- Problem 9 ----------------------------
/*
reate a function that transforms any positive number to a string representing the number in words. The function should work for all numbers between 0 and 999999.
---------
EXAMPLES:
number2words(0)  ==>  "zero"
number2words(1)  ==>  "one"
number2words(9)  ==>  "nine"
number2words(10)  ==>  "ten"
number2words(17)  ==>  "seventeen"
number2words(20)  ==>  "twenty"
number2words(21)  ==>  "twenty-one"
number2words(45)  ==>  "forty-five"
number2words(80)  ==>  "eighty"
number2words(99)  ==>  "ninety-nine"
number2words(100)  ==>  "one hundred"
number2words(301)  ==>  "three hundred one"
number2words(799)  ==>  "seven hundred ninety-nine"
number2words(800)  ==>  "eight hundred"
number2words(950)  ==>  "nine hundred fifty"
number2words(1000)  ==>  "one thousand"
number2words(1002)  ==>  "one thousand two"
number2words(3051)  ==>  "three thousand fifty-one"
number2words(7200)  ==>  "seven thousand two hundred"
number2words(7219)  ==>  "seven thousand two hundred nineteen"
number2words(8330)  ==>  "eight thousand three hundred thirty"
number2words(99999)  ==>  "ninety-nine thousand nine hundred ninety-nine"
number2words(888888)  ==>  "eight hundred eighty-eight thousand eight hundred eighty-eight"
  */

const numbersToWords = (number) => {
  let numbersA = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];

  let numbersB = [
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];

  if (number <= 19 && number >= 0) {
    return numbersA[number];
  }
  if (number >= 20 && number <= 99) {
    return (
      numbersB[Math.floor(number / 10) - 2] +
      (number % 10 === 0 ? "" : "-" + numbersA[number % 10])
    );
  }

  if (number >= 100 && number <= 999) {
    return (
      numbersA[Math.floor(number / 100)] +
      " hundred" +
      (number % 100 === 0 ? "" : "-" + numbersToWords(number % 100))
    );
  } else {
    return (
      numbersToWords(Math.floor(number / 1000)) +
      " thousand" +
      (number % 1000 === 0 ? "" : " " + numbersToWords(number % 1000))
    );
  }
};

console.log(numbersToWords(8003));


