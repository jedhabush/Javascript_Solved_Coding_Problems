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

**Unit Testing:**

```javascript
import { encryption } from "./functionsToTest";

describe("Testing Encryption function", () => {
  it("Should convert the first letter to its ASCII code", () => {
    expect(encryption("Hello")).toEqual("72olle");
    expect(encryption("good")).toEqual("103doo");
    expect(encryption("world")).toEqual("119drlo");
    expect(encryption("A")).toEqual("65");
  });
  it("Should switch the second letter with the last letter", () => {
    expect(encryption("wise")).toEqual("119esi");
    expect(encryption("The")).toEqual("84eh");
    expect(encryption("saw")).toEqual("115wa");
  });
  it("Should be able to encrypt long strings", () => {
    expect(encryption("A wise old owl lived in an oak")).toEqual(
      "65 119esi 111dl 111lw 108dvei 105n 97n 111ka"
    );
    expect(encryption("Thank you Piotr for all your help")).toEqual(
      "84kanh 121uo 80roti 102ro 97ll 121ruo 104ple"
    );
    expect(encryption("Why can we not all be like that wise old bird")).toEqual(
      "87yh 99na 119e 110to 97ll 98e 108eki 116tah 119esi 111dl 98dri"
    );
  });
});
```

