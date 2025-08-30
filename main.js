function mirrorImage(arr){
  //define default return as a variable
  let result = [-1, -1];
  
  //use the some method to determine if any cases of mirred numbers exist within the array
  arr.some((x, i) =>{
    // turn the numbers to srings to manipulate and compare them
    const a = String(x);
    const b = String(arr[i + 1]);
    //if the current number and the number following it match when one is reversed, it returns true along with those numbers
    if (a === b.split('').reverse().join('')) {
      result = [x, arr[i + 1]];
      return true;
    }
    return false;
  });
  // otherwise it returns the default [-1, -1]
  return result;
}