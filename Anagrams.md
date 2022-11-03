## Problem

Check if two strings are anagrams of each other. <br/> 
One string is an anagram of another if it uses exact same characters <br/>
in exact same quantity. Only consider word characters, and make sure the function is case insensitive. <br/>
  
 Examples <br/>
 anagrams('heart', 'earth') --> True <br/>
 anagrams('heart', '  earth') --> True <br/>
 anagrams('Heart!', 'EARTH') --> True <br/>
 anagrams('lol', 'lolc') --> False <br/>
 
 **Solution:**

```javascript
const anagrams = (strA, strB) => {
  // to clear any non character in the string

  strA = strA.toLowerCase().replace(/[\W_]/g, "");
  strB = strB.toLowerCase().replace(/[\W_]/g, "");

  const sortedStrA = strA.split("").sort().join("");
  const sortedStrB = strB.split("").sort().join("");

  return sortedStrA === sortedStrB;
};

console.log(anagrams("heart", "earth"));
```
