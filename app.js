console.log("test");

const longestPalindrome = (str) => {
  // exit if str is empty or null
  // str = str.replace(/[^a-z0-9]/gi, "");

  console.log(str);
  if (str.length < 1) return "";

  // store the longest palindrom in string in a variable
  let longest = "";

  //loop through the str for both being even and odd string characters
  for (let i = 0; i < str.length; i++) {
    // store the str in two different variable leading to a funciton
    //takes the string and for odd we have both i pointing in the middle of the str then move (expand center) to the opisit direction of the str
    // in the even one i points in the middle and i-1 points to the one to left then move expand center) opisit direction of the str
    let oddPalindrome = expandCenter(str, i, i);
    let evenPalindrome = expandCenter(str, i - 1, i);

    if (oddPalindrome.length > longest.length) {
      longest = oddPalindrome;
    }
    if (evenPalindrome.length > longest.length) {
      longest = evenPalindrome;
    }
  }

  // doing the real action in expand center to check the characters

  function expandCenter(str, left, right) {
    let i = 0;

    while (str[left - i] && str[left - i] === str[right + i]) {
      i++;
    }
    i--;

    return str.slice(left - i, right + i + 1);
  }

  return longest; // the length to get the length of the longest string else remove legnth to get the word itself
};
console.warn(longestPalindrome("bandana")); //racecar

// Function to return longest palindromic
// String possible from the given String
// after removal of any subString
/* function findAns(s, n) {
  let dp = 7;
  for (let i = 1; i < s.length; i++) {
    for (let j = 0; j < s.length; j++) {
      if (j + i < s.length) {
        dp[j][j + 1] =
          s[j] === s[j + i]
            ? dp[j + 1][j + i - 1] + 2
            : Math.max(dp[j][j + i - 1], dp[j + 1][i + j]);
      }
    }
  }
  return dp[0][s.length - 1];
}

console.warn(findAns("bandana", 7)); */

function max(x, y) {
  return x > y ? x : y;
}
//------------------------
function max(x, y) {
  return x > y ? x : y;
}

// Returns the length of the longest
// palindromic subsequence in seq
function lps(s) {
  let n = s.length;
  let i, j, cl;

  let L = new Array(n);
  for (let x = 0; x < n; x++) {
    L[x] = new Array(n);
    for (let y = 0; y < n; y++) L[x][y] = 0;
  }

  for (i = 0; i < n; i++) L[i][i] = 1;

  for (cl = 2; cl <= n; cl++) {
    for (i = 0; i < n - cl + 1; i++) {
      j = i + cl - 1;
      if (s[i] == s[j] && cl == 2) L[i][j] = 2;
      else if (s[i] == s[j]) L[i][j] = L[i + 1][j - 1] + 2;
      else L[i][j] = max(L[i][j - 1], L[i + 1][j]);
    }
  }

  return L[0][n - 1];
}
console.log(
  lps(
    "frzrmzlygfveulqfpdbhlqdqrrcrwdnxeuoqqeklaitgdphcspijthbsfyfvladzpbfudkklrwqaozmixrpifeffeclhbvfukbye"
  )
);

const currency = (arr) => {
  let code;
  let currency;
  let year;
  let note;
  let savings = 0;

  for (let i = 0; i < arr.length; i++) {
    code = arr[i].split("").slice(0, 3);
    year = arr[i].slice(3, 7);
    note = arr[i].slice(-1);
    currency = arr[i].slice(7, -1);

    console.log(code, year, currency, note);
    //console.log(code);
    if (code[0] !== code[1] && code[0] !== code[2] && code[1] !== code[2]) {
      // console.log("CODE", code);
      if (parseInt(year) >= 1900 && parseInt(year) <= 2019) {
        //check if euqal and bigger or jus one of them
        // console.log("year", year);
        if (note.match(/[A-Z]/)) {
          console.warn("passed", arr[i]);
          savings += Number(currency);
        }
      }
    }
  }

  return savings;
};

//console.log(currency(["AVG190420T", "RTF20001000Z", "QWER201850G"]));

/*

Description
A software company is forming teams that consist of a specific number of employees. 
There are two types of employees: software developers and software testers. 
They want to make sure the developers and testers are well-integrated, 
so they decide to limit the number of testers and developers that can be seated 
consecutively with employees of the same type. Given the desired team size and these limits, 
how many different ways can the company form a team?

Note: The number of ways could be very large, so return it modulo 10**9 + 7.

ex 1 
---
Input:
d = 2
t = 2
queries = [2, 5, 7, 11]
Output: [2, 2, 2, 2]
Explanation: Here, d = 2, t = 2, and there are 4 queries regarding team size: [2, 5, 7, 11]. Here are the possible ways to form the teams:
- n = 2: DT, TD
- n = 5: DTDTD, TDTDT
- n = 7, DTDTDTD, TDTDTDT
- n = 11, DTDTDTDTDTD, TDTDTDTDTDT


ex 2
---

Input:
d = 3
t = 2
queries = [4]
Output: [5]
Explanation: This means you need a team of 4 employees
 where there are fewer than 3 developers seated consecutively and fewer than 2 testers seated consecutively. 
 There are 5 ways to form the team with these constraints. These ways are as follows:
DDTD, TDDT, DTDD, TDTD, DTDT
*/

/**
 * theNumberofWays
 *
 * @param d:  limit the number of developers that can be seated consecutively with employees of the same type
 * @param t:  limit the number of testers that can be seated consecutively with employees of the same type
 * @param queries: the queries of team size
 * @return: return the number of ways
 */
function theNumberofWays(d, t, queries) {
  // Write your code here

  for (let i = 0; i < queries.length; i++) {
    console.log(queries[i]);
  }

  console.log("D".repeat(3.8));
}

//console.log(theNumberofWays(3, 2, [4]));

// --- sort the odd numbers ---------------
/*
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
*/

console.log("---------- NEW START -------------");

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

/*
Your task is to make a function that can take any non-negative integer as an argument 
and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321

*/

//DODGY SOLUTION
const descendingOrder = (n) => {
  let numbArray = String(n)
    .split("")
    .map((x) => Number(x))
    .sort((a, b) => b - a)
    .join("");

  return Number(numbArray);
};

console.log(descendingOrder(123456789));

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

//----------------------------------

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

console.log(order("")); // Thi1s is2 a3 T4est

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

console.log(accum("RqaEzty")); //"A-Bb-Ccc-Dddd"

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

console.log(encryption("Thank you Piotr for all your help")); //104e

//84kanh 121uo 80roti 102ro 97ll 121ruo 104ple

/*

return text
    .split(" ")
    .map((letterSwaps) => {
      if (letterSwaps.length <= 2) {
        return letterSwaps[0].charCodeAt() + letterSwaps.slice(1);
      }
      return `${letterSwaps[0].charCodeAt()}${letterSwaps.slice(
        -1
      )}${letterSwaps.slice(2, -1)}${letterSwaps[1]}`;
    })
    .join(" ");
    */
