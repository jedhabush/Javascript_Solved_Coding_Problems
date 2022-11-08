## Problem

It's pretty straightforward. Your goal is to create a function that removes  <br/>
the first and last characters of a string. You're given one parameter, the original string.  <br/>
You don't have to worry with strings with less than two characters. <br/>

EXAMPLES: <br/>

(removeChar('eloquent'), 'loquen'); <br/>
(removeChar('country'), 'ountr'); <br/>
(removeChar('person'), 'erso'); <br/> 
(removeChar('place'), 'lac'); <br/>
(removeChar('ooopsss'), 'oopss');

**Solution:**

```javascript
const remove = (str) => {
  return str.slice(1, -1);
};

console.log(remove(`lw0g0`));
```

**Unit Testing:**

```javascript
import { remove } from "./functionsToTest";

describe("Testing the remove function", () => {
  it("should create a function that removes the first and last characters of a string", () => {
    expect(remove("eloquent")).toBe("loquen");
    expect(remove("country")).toBe("ountr");
    expect(remove("Jed")).toBe("e");
    expect(remove("boss")).toBe("os");
    expect(remove("computer")).toBe("ompute");
    expect(remove("consequences")).toBe("onsequence");
    expect(remove("butter")).toBe("utte");
  });
});
```
