## Problem

Create a function that transforms any positive number to a string representing the number in words. The function should work for all numbers between 0 and 999999. <br/>

EXAMPLES: <br/>
number2words(0)  ==>  "zero" <br/>
number2words(1)  ==>  "one" <br/>
number2words(9)  ==>  "nine" <br/>
number2words(10)  ==>  "ten" <br/>
number2words(17)  ==>  "seventeen" <br/>
number2words(20)  ==>  "twenty" <br/>
number2words(21)  ==>  "twenty-one" <br/>
number2words(45)  ==>  "forty-five" <br/>
number2words(80)  ==>  "eighty" <br/>
number2words(99)  ==>  "ninety-nine" <br/>
number2words(100)  ==>  "one hundred" <br/>
number2words(301)  ==>  "three hundred one" <br/>
number2words(799)  ==>  "seven hundred ninety-nine" <br/>
number2words(800)  ==>  "eight hundred" <br/>
number2words(950)  ==>  "nine hundred fifty" <br/>
number2words(1000)  ==>  "one thousand" <br/>
number2words(1002)  ==>  "one thousand two" <br/>
number2words(3051)  ==>  "three thousand fifty-one" <br/>
number2words(7200)  ==>  "seven thousand two hundred" <br/>
number2words(7219)  ==>  "seven thousand two hundred nineteen" <br/>
number2words(8330)  ==>  "eight thousand three hundred thirty" <br/>
number2words(99999)  ==>  "ninety-nine thousand nine hundred ninety-nine" <br/>
number2words(888888)  ==>  "eight hundred eighty-eight thousand eight hundred eighty-eight" <br/>

**Solution:**

```javascript
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
      (number % 100 === 0 ? "" : " " + numbersToWords(number % 100))
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
```

**Unit Testing:**

```javascript
import { numbersToWords } from "./functionsToTest";

describe("Testing the numbersToWords function", () => {
  it("should transforms any positive number to a string representing the number in words", () => {
    expect(numbersToWords(301)).toBe("three hundred one");
    expect(numbersToWords(800)).toBe("eight hundred");
    expect(numbersToWords(1000)).toBe("one thousand");
    expect(numbersToWords(3051)).toBe("three thousand fifty-one");
    expect(numbersToWords(7200)).toBe("seven thousand two hundred");
    expect(numbersToWords(99999)).toBe(
      "ninety-nine thousand nine hundred ninety-nine"
    );
    expect(numbersToWords(888888)).toBe(
      "eight hundred eighty-eight thousand eight hundred eighty-eight"
    );
  });
});
```
