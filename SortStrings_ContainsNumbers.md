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
