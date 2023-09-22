function fizzBuzzArray(num) {
    const arr =[]
    for (let index = 1; index <= num; index++) {
        if(index % 3 === 0 && index % 5 === 0){
            arr.push('FizzBuzz')
        }else if(index % 3 === 0){
            arr.push('Fizz')
        }else if (index % 5 === 0){
            arr.push('Buzz')
        }else{
            arr.push(index)
        }
    }
    return arr
}

module.exports = fizzBuzzArray;
