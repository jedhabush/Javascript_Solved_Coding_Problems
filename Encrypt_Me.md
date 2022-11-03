## Problem

Encrypt this! <br/>
You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions: <br/>
Your message is a string containing space separated words. <br/> 
You need to encrypt each word in the message using the following rules: <br/>
The first letter must be converted to its ASCII code. <br/>
The second letter must be switched with the last letter <br/>
Keepin' it simple: There are no special characters in the input. <br/>

Examples: <br/>
encryptThis("Hello") === "72olle" <br/>
encryptThis("good") === "103doo" <br/>
encryptThis("hello world") === "104olle 119drlo" <br/>
encryptThis("A wise old owl lived in an oak")=== "65 119esi 111dl 111lw 108dvei 105n 97n 111ka"); <br/>
encryptThis("The more he saw the less he spoke")=== "84eh 109ero 104e 115wa 116eh 108sse 104e 115eokp"); <br/>
encryptThis("The less he spoke the more he heard")=== "84eh 108sse 104e 115eokp 116eh 109ero 104e 104dar <br/>

**Solution:**

```javascript
const encryption = (text) => {
  // asci Code convertor function
  const asciiLetterConvertorFunction = (asciiCode) => {
    return asciiCode[0].charCodeAt();
  };

  // string slice function
  const stringSliceFunction = (str, from, to) => {
    return str.slice(from, to);
  };

  return text
    .split(" ")
    .map((letterSwaps) => {
      if (letterSwaps.length <= 2) {
        return (
          asciiLetterConvertorFunction(letterSwaps) +
          stringSliceFunction(letterSwaps, 1)
        );
      }
      return `${asciiLetterConvertorFunction(letterSwaps)}${stringSliceFunction(
        letterSwaps,
        -1
      )}${stringSliceFunction(letterSwaps, 2, -1)}${letterSwaps[1]}`;
    })
    .join(" ");
};

console.log(encryption("Thank you Piotr for all your help")); 
```
