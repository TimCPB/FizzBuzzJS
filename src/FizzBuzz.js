class FizzBuzz {

  _isDivisibleBy(num, divisor){
    num % divisor === 0
  }

  play(num){
    if(num % 3 === 0 && num % 5 === 0)
      return "fizzbuzz"
    else if(num % 3 === 0 && num % 5 !== 0)
      return "fizz"
    else if(num % 5 === 0 && num % 3 !== 0)
      return "buzz"
    else
      return num
}
}