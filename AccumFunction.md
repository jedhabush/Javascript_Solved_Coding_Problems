## Problem

This time no story, no theory. The examples below show you how to write function accum: <br/>

Examples: <br/>
accum("abcd") -> "A-Bb-Ccc-Dddd" <br/>
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy" <br/>
accum("cwAt") -> "C-Ww-Aaa-Tttt" <br/>
The parameter of accum is a string which includes only letters from a..z and A..Z.

**Solution:**

```javascript
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
```

**Unit Testing:**

```javascript
import { accum } from "./functionsToTest";

describe("Testing accum function", () => {
  it("Should capitalize the letters then repeat them as many times according to their poision in the string seperated by - between each letter", () => {
    expect(accum("abcd")).toBe("A-Bb-Ccc-Dddd");
    expect(accum("RqaEzty")).toBe("R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy");
    expect(accum("cwAt")).toBe("C-Ww-Aaa-Tttt");
    expect(accum("JedHabush")).toBe(
      "J-Ee-Ddd-Hhhh-Aaaaa-Bbbbbb-Uuuuuuu-Ssssssss-Hhhhhhhhh"
    );
  });

  it("Should return an empty STRING when there's no input (EMPTY)", () => {
    expect(accum("")).toBe("");
  });

  it("Should repeat numbers as many times according to their position in the string of numbers seperated by - between each number/s", () => {
    expect(accum("5641")).toBe("5-66-444-1111");
    expect(accum("87777")).toBe("8-77-777-7777-77777");
    expect(accum("10")).toBe("1-00");
    expect(accum("44551234")).toBe(
      "4-44-555-5555-11111-222222-3333333-44444444"
    );
  });
});
```
