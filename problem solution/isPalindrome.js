const isPalindrome = (incoming) => {
    let reversed = incoming.split('').reverse().join('');
    return incoming === reversed;
}
console.log(isPalindrome('radar'));
console.log(isPalindrome('ramakantnakamar'));
console.log(isPalindrome('hello'));