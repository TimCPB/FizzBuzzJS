describe("FizzBuzz", function() {
  // var fizzBuzz;

  // beforeEach(function() {
  //   var fizzBuzz = new FizzBuzz();
  // });

  it("returns 1 when given 1", function(){
    expect(fizzBuzz(1)).toEqual(1);
  })

  it("returns 2 when given 2", function() {
    expect(fizzBuzz(2)).toEqual(2);
  })

  it("returns 'fizz' when given 3", function() {
    expect(fizzBuzz(3)).toEqual("fizz");
  })

  it("returns buzz when given 5", function() {
    expect(fizzBuzz(5)).toEqual("buzz");
  })

  it("returns 'fizz' when given 9", function() {
    expect(fizzBuzz(9)).toEqual("fizz");
  })

  it("returns buzz when given 10", function() {
    expect(fizzBuzz(10)).toEqual("buzz");
  })

  it("returns 'fizzbuzz' when given 15", function() {
    expect(fizzBuzz(15)).toEqual("fizzbuzz");
  })
});