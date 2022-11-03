## Problem

Your task is to make a function that can take any non-negative integer as an argument  <br/>
and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number. <br/>

Examples: <br/>
Input: 42145 Output: 54421 <br/>
Input: 145263 Output: 654321 <br/>
Input: 123456789 Output: 987654321 

**Solution:**

```javascript
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
```
