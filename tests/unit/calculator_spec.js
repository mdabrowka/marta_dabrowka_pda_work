var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('it should save number 5', function() {
    calculator.numberClick(5)
    result = calculator.runningTotal;
    assert.equal(result, 5);
  })

  it('it should save a 3 digit number', function() {
    calculator.numberClick(5)
    calculator.numberClick(0)
    calculator.numberClick(5)
    result = calculator.runningTotal;
    assert.equal(result, 505)
  })


});
