var fizzBuzz = function (n) {
    let number = []
    for (let i = 1; i <= n; i++) {
        number.push(i)
    }
    for (let i=0;i<number.length;i++){
        number[i] % 15 === 0 ? number[i] = `FizzBuzz` : number[i] % 3 === 0 ? number[i] = `Fizz` : number[i] % 5 === 0 ? number[i] = `Buzz` : number[i] = `${number[i]}`
    }
    return number
};