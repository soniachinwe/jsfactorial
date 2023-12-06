//Write a function that calculates the factorial of a given number

function calcfact (z) {
    if (z === 0 || z === 1) {
      return 1;
    } else {
      return z * calcfact(z - 1);
    }
  }
  let result = calcfact(5);
  console.log(result);
