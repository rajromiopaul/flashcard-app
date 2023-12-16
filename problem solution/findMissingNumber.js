const findMissingNumber = (incoming) => {
    let n = incoming.length + 1;
    let sum = n*(n+1)/2;
    let total = incoming.reduce((a,b) => a + b, 0);
    return sum - total;
}
let numArray = [1,2,3,5,6]
console.log("The missing number is: ", findMissingNumber(numArray));