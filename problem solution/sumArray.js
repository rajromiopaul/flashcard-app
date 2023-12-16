// sumArray
const sumArray = (incoming) => {
    let total = 0;
    for (let i = 0; i < incoming.length; i++){
        total += incoming[i];
    }
    return total;
};
let numArray = [1,2,3,4,5];
console.log("The sum is:", sumArray(numArray));