function sumOddNumbers(numbers) {
    let sum = 0;
    numbers.forEach(function(number) {
        if (number % 2 === 1 || number % 2 === -1) {
            sum += number;
        }
    });
    return sum;

}


console.log(sumOddNumbers([1,4,5,8,10,11]))