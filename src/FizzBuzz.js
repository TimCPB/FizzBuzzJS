class FizzBuzz {

  _isDivisibleBy(num, divisor){
    return num % divisor === 0
  }

  play(num){
    if(this._isDivisibleBy(num, 15))
      return "fizzbuzz";
    else if(this._isDivisibleBy(num, 3))
      return "fizz";
    else if(this._isDivisibleBy(num, 5))
      return "buzz";
    else
      return num;
}
}