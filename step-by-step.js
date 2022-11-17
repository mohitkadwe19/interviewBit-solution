
function solve(A) {


  A = Math.abs(A);

  //variable to store minimum moves

  let i = 0;

  //variable to store running sum

  let running_sum = 0;

  //Till the time our running sum is less than A we will keep on moving in A's direction

  while (running_sum < A) {

    i++;

    running_sum += i;

  }

  //Now after this loop terminates we have 2 conditions

  //1. Our running sum is equal to A. Thats good we can return in i

  //2. Our running sum overshoot a

  //Here is our strategy: We will keep on adding moves to the running sum till the time an overshooting value is not divisible by 2

  //That is because every time we flip the sign of x number, our sum should decrease by 2*x

  while ((running_sum - A) % 2 != 0) {

    i++;

    running_sum += i;

  }

  return i;

}

let A = 3;
console.log(solve(A));
