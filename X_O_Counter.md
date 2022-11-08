## Problem

Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char. <br/>
Examples input/output: <br/>

EXAMPLES <br/>
XO("ooxx") => true <br/>
XO("xooxx") => false <br/>
XO("ooxXm") => true <br/>
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true <br/>
XO("zzoo") => false <br/>


**Solution:**

```javascript
const XO = (str) => {
  let lower = str.toLowerCase();
  let xs = 0;
  let os = 0;
  let result = lower.split("").map((x) => {
    if (x === "x") {
      return xs++;
    }
    if (x === "o") {
      return os++;
    }
  });

  return xs === os;
};

console.log(XO("zpzpzpp"));
```

**Unit Testing:**

```javascript
import { XO } from "./functionsToTest";

describe("Testing the XO function", () => {
  it("should return TRUE if a string has the same amount of 'x's and 'o's", () => {
    expect(XO("xxo")).toBe(false);
    expect(XO("xxxooo")).toBe(true);
    expect(XO("zjjjjozjjjjodjjdjxx")).toBe(true);
    expect(XO("aaaossdddofffooaaaaxxhhhhhxx")).toBe(true);
    expect(XO("iiiiiiiioiiiiiioiiixxiiiiiio")).toBe(false);
    expect(XO("oopppppoppppxxxppppoppppx")).toBe(true);
  });
});
```

