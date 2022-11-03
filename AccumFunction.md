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
