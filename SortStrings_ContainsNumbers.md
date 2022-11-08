## Problem

Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result. <br/>
Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0). <br/>
If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers. <br/>

Examples: <br/>
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est" <br/>
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople" <br/>

**Solution:**

```javascript
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
```

**Unit Testing:**

```javascript
import { order } from "./functionsToTest";

describe("Testing the order function", () => {
  it("should sorts each word in the string that contains a single number. This number is the position the word should have in the result", () => {
    expect(order("is2 Thi1s T4est 3a")).toBe("Thi1s is2 3a T4est");
    expect(order("can1 y2ou s3pell")).toBe("can1 y2ou s3pell");
    expect(order("ca2n good5 a4 I1 p6rogrammer be3")).toBe(
      "I1 ca2n be3 a4 good5 p6rogrammer"
    );
    expect(order("h3o m2 t4 impr5ve te1ll")).toBe("te1ll m2 h3o t4 impr5ve");
    expect(order("f6ench i2 in5 yo3ur na4me  wha1")).toBe(
      "wha1 i2 yo3ur na4me in5 f6ench"
    );
    expect(order("for4 co1ding an7d is2 sou8l healthy3  your5 mind6 ")).toBe(
      "co1ding is2 healthy3 for4 your5 mind6 an7d sou8l"
    );
  });
});
```
