## Problem

Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) <br/> 
that checks whether the two arrays have the "same" elements, <br/>
 with the same multiplicities (the multiplicity of a member is the number of times it appears). <br/> 
 "Same" means, here, that the elements in b are the elements in a squared, regardless of the order. <br/>
comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, <br/> 
 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares: <br/>
a = [121, 144, 19, 161, 19, 144, 19, 11]  <br/>
b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19] <br/>

Examples <br/>
Valid arrays <br/>
a = [121, 144, 19, 161, 19, 144, 19, 11] <br/>  
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361] <br/>

** Remarks ** <br/>
a or b might be [] or {} (all languages except R, Shell). <br/>
a or b might be nil or null or None or nothing  <br/>
(except in C++, COBOL, Crystal, D, Dart, Elixir, Fortran, F#, Haskell, Nim, OCaml, Pascal, Perl, PowerShell, Prolog, PureScript, R, Racket, Rust, Shell, Swift). <br/>
If a or b are nil (or null or None, depending on the language), the problem doesn't make sense so return false. <br/>

**Solution:**

```javascript
const comp = (arr1, arr2) => {
  if (arr1 === null || arr2 === null) {
    return false;
  }

  let arr1Sorted = arr1.sort((a, b) => b - a).map((num) => num * num);
  let arr2Sorted = arr2.sort((a, b) => b - a);
  let resultTrue = 0;
  let resultFalse = 0;
  for (let i = 0; i < arr1Sorted.length; i++) {
    if (arr1Sorted[i] === arr2Sorted[i]) {
      resultTrue++;
    } else {
      resultFalse++;
    }
  }

  //if the counter of true's equal the number of array 1 length, it means all of the elements are true
  return resultTrue === arr1Sorted.length;
};

console.log(
  comp(
    [121, 144, 19, 161, 19, 144, 19, 11],
    [132, 14641, 20736, 361, 25921, 361, 20736, 361]
  )
);
```

**Unit Testing:**

```javascript
import { comp } from "./functionsToTest";

describe("Testing the comp  function", () => {
  it("should check whether the two arrays have the - same - elements, with the same multiplicities", () => {
    expect(
      comp([10000000, 100000000], [100000000000000, 10000000000000000])
    ).toBe(true);
    expect(comp([2, 2, 3], [4, 9, 9])).toBe(false);
    expect(comp([4, 4], [1, 31])).toBe(false);
    expect(
      comp(
        [9, 8, 0, 0, 7, 6, 2, 6, 10, 2, 2, 10, 8, 0, 2, 2],
        [100, 64, 0, 1, 0, 36, 81, 4, 4, 36, 100, 49, 4, 64, 4, 4]
      )
    ).toBe(false);
    expect(comp(null, null)).toBe(false);
    expect(
      comp(
        [2, 10, 9, 8, 1, 10, 0, 9, 3, 8, 4, 6, 10, 1, 5, 8, 0, 4, 5, 5, 7, 1],
        [
          16, 81, 100, 4, 64, 0, 64, 81, 1, 25, 9, 1, 49, 1, 64, 0, 100, 16, 25,
          25, 36, 100,
        ]
      )
    ).toBe(true);
    expect(
      comp(
        [8, 4, 8, 0, 5, 9, 1, 2, 10, 7, 6, 10, 2, 9, 8, 5, 6, 3, 6, 2, 6],
        [
          9, 4, 81, 1, 36, 36, 100, 64, 4, 16, 81, 64, 49, 64, 36, 25, 100, 36,
          25, 0, 4,
        ]
      )
    ).toBe(true);
    expect(
      comp(
        [3, 6, 2, 5, 3, 9, 4, 2, 10, 0, 4, 0, 10, 10, 6, 6, 2, 10, 9, 2],
        [
          4, 4, 16, 16, 36, 100, 9, 9, 100, 81, 4, 100, 4, 36, 0, 100, 36, 81,
          25, 0,
        ]
      )
    ).toBe(true);
  });
});
```

