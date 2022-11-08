## Problem

A Narcissistic Number is a positive number which is the sum of its own digits, <br/>
each raised to the power of the number of digits in a given base. In this Kata,  <br/>
we will restrict ourselves to decimal (base 10). <br/>

Example: <br/>

Take 153 (3 digits), which is narcisstic: <br/>

1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153 and 1652 (4 digits), which isn't <br/>

1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938 <br/>

**Solution:**

```javascript
const basePower = (num) => {
  let base = num.toString().length;

  let totalBase = num
    .toString()
    .split("")
    .map((x) => {
      return x ** base;
    })
    .reduce((a, b) => a + b);

  return totalBase === num;
};

console.log(basePower(15));
```

**Unit Testing:**

```javascript
import { basePower } from "./functionsToTest";

describe("Testing the basePower function", () => {
  it("should evaluate TRUE if the input is a Narcissistic Number", () => {
    expect(basePower(153)).toBe(true);
    expect(basePower(370)).toBe(true);
    expect(basePower(371)).toBe(true);
    expect(basePower(407)).toBe(true);
    expect(basePower(1634)).toBe(true);
    expect(basePower(9926315)).toBe(true);
    expect(basePower(4679307774)).toBe(true);
  });

  it("should evaluate FALSE if the input is  NOT a Narcissistic Number", () => {
    expect(basePower(159)).toBe(false);
    expect(basePower(4679307777)).toBe(false);
    expect(basePower(4210838)).toBe(false);
    expect(basePower(8207)).toBe(false);
    expect(basePower(9475)).toBe(false);
  });
});
```
