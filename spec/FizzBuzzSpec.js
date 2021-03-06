describe("FizzBuzz.play", function() {
  var fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });

  it("returns 1 when given 1", function(){
    expect(fizzBuzz.play(1)).toEqual(1);
  })

  it("returns 2 when given 2", function() {
    expect(fizzBuzz.play(2)).toEqual(2);
  })

  it("returns 'fizz' when given 3", function() {
    expect(fizzBuzz.play(3)).toEqual("fizz");
  })

  it("returns buzz when given 5", function() {
    expect(fizzBuzz.play(5)).toEqual("buzz");
  })

  it("returns 'fizz' when given 9", function() {
    expect(fizzBuzz.play(9)).toEqual("fizz");
  })

  it("returns buzz when given 10", function() {
    expect(fizzBuzz.play(10)).toEqual("buzz");
  })

  it("returns 'fizzbuzz' when given 15", function() {
    expect(fizzBuzz.play(15)).toEqual("fizzbuzz");
  })

  it("uses the _isDivisibleBy function to return a boolean value", function() {
    expect(fizzBuzz._isDivisibleBy(12, 3)).toEqual(true)
    expect(fizzBuzz._isDivisibleBy(20, 3)).toEqual(false)
  })

});

