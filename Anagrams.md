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

**Unit Testing:**

```javascript
import {anagrams} from "./functionsToTest";

describe("Testing Anagrams function", () => {
  it("should evaluate TRUE if the input as anagram", () => {
    expect(anagrams("below", "elbow")).toBe(true);
    expect(anagrams("study", "dusty")).toBe(true);
    expect(anagrams("night", "thing")).toBe(true);
    expect(anagrams("act", "cat")).toBe(true);
    expect(anagrams("bare", "bear")).toBe(true);
    expect(anagrams("gainly", "laying")).toBe(true);
    expect(anagrams("pear", "reap")).toBe(true);
  });

  it("should evaluate FALSE if the input as anagrams", () => {
    expect(anagrams("dog", "dogs")).toBe(false);
    expect(anagrams("buddy", "juddy")).toBe(false);
    expect(anagrams("sigh", "light")).toBe(false);
    expect(anagrams("risk", "risks")).toBe(false);
    expect(anagrams("jam", "jaron")).toBe(false);
    expect(anagrams("mom", "om")).toBe(false);
    expect(anagrams("back", "cap")).toBe(false);
  });
});
```
