## Problem

Write a function that takes an array of numbers and returns the sum of the numbers.  <br/>
The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0. <br/>

EXAMPLES: <br/>

Input: [1, 5.2, 4, 0, -1] <br/>
Output: 9.2 <br/>

Input: []<br/>
Output: 0 <br/>

Input: [-2.398 ]<br/>
Output: -2.398 <br/>

**Solution:**

```javascript
const sumOfArray = (numbers) => {
  //if (numbers.length === 0) return 0;
  return numbers.reduce((a, b) => a + b, 0);
};

console.log(sumOfArray([]));
```
