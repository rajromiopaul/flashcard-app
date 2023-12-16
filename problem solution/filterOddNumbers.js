// filterOddNumbers
const filterOddNumbers = (incoming) => {
return incoming.filter(incoming => incoming % 2 !== 0)
}
let numArray = [1,2,3,4,5];
console.log("Those odd numbers are: ", filterOddNumbers(numArray));