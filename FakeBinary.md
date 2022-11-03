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
  for (i = 0; i < x.length; i++) {
    //console.log(x);
    result += x[i] >= "5" ? x[i].replace(x[i], "1") : "0";
  }

  return result;
}

console.log(fakeBin("45385593107843568")); //11101101110011100
```
