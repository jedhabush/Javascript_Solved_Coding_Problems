## Problem

Given a string of digits, you should replace any 
digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string. 

EXAMPLES: <br/>
(fakeBin('45385593107843568'), '01011110001100111'); <br/>
(fakeBin('509321967506747'), '101000111101101'); 

**Solution:**

```javascript
function fakeBin(x) {
  let result = "";
  for (let i = 0; i < x.length; i++) {
    //console.log(x);
    result += x[i] >= "5" ? x[i].replace(x[i], "1") : "0";
  }

  return result;
}

console.log(fakeBin("45385593107843568")); //11101101110011100
```

**Unit Testing:**

```javascript
import { fakeBin } from "./functionsToTest";

describe("Testing fake bin", () => {
  it("Should return any digit BELOW 5 with 0 ", () => {
    expect(fakeBin("3")).toBe("0");
    expect(fakeBin("4")).toBe("0");
    expect(fakeBin("1")).toBe("0");
    expect(fakeBin("0")).toBe("0");
  });

  it("Should return any digit ABOVE or EQUAL 5 with 1", () => {
    expect(fakeBin("6")).toBe("1");
    expect(fakeBin("5")).toBe("1");
    expect(fakeBin("8")).toBe("1");
    expect(fakeBin("9")).toBe("1");
  });

  it("Should return the correct binary regardless the length of the number string", () => {
    expect(fakeBin("45385593107843568")).toBe("01011110001100111");
    expect(fakeBin("509321967506747")).toBe("101000111101101");
    expect(fakeBin("366058562030849490134388085")).toBe(
      "011011110000101010000011011"
    );
  });
  it("Should return empty STRING if the digit is type Number", () => {
    expect(fakeBin(4)).toBe("");
    expect(fakeBin(855)).toBe("");
    expect(fakeBin(5465841)).toBe("");
    expect(fakeBin(500000000)).toBe("");
  });
});
```
