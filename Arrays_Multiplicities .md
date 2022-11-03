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
