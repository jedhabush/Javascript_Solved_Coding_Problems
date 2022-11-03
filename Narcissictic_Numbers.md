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
