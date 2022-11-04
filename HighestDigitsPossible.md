## Problem

Your task is to make a function that can take any non-negative integer as an argument  <br/>
and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number. <br/>

Examples: <br/>
Input: 42145 Output: 54421 <br/>
Input: 145263 Output: 654321 <br/>
Input: 123456789 Output: 987654321 

**Solution:**

```javascript
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

**Unit Testing:**
```javascript
import { descendingOrder } from "./functionsToTest";

describe("Testing descendingOrder function", () => {
  it("Should rearrange the digits to create the highest possible number", () => {
    expect(descendingOrder(42145)).toBe(54421);
    expect(descendingOrder(145263)).toBe(654321);
    expect(descendingOrder(123456789)).toBe(987654321);
    expect(descendingOrder(0)).toBe(0);
    expect(descendingOrder(15)).toBe(51);
    expect(descendingOrder(111)).toBe(111);
  });

  it("Should return NaN if the number is non-positive or if there's no input (Empty)", () => {
    expect(descendingOrder(-8)).toBe(NaN);
    expect(descendingOrder(-16584783)).toBe(NaN);
    expect(descendingOrder(-6789)).toBe(NaN);
    expect(descendingOrder(-12212)).toBe(NaN);
    expect(descendingOrder(-777777)).toBe(NaN);
    expect(descendingOrder()).toBe(NaN);
  });
});
```
