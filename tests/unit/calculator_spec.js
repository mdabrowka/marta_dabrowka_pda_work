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

  // it('should save a negative number', function() {
  //   calculator.operatorClick('-')
  //   calculator.numberClick(5)
  //   result = calculator.runningTotal;
  //   assert.equal(result, (-5))
  // })

  it('should clear the slate with a clearClick', function() {
    calculator.runningTotal = 100
    calculator.clearClick()
    result = calculator.runningTotal
    assert.equal(result, 0)
  })

  it('should end with 5 when 2 and 3 are added', function() {
    calculator.numberClick(2)
    calculator.operatorClick('+')
    calculator.numberClick(3)
    calculator.operatorClick('=')
    result = calculator.runningTotal
    assert.equal(result, 5)
  })

  it('should subtract 5 - 1 and return 4', function() {
    calculator.numberClick(5)
    calculator.operatorClick('-')
    calculator.numberClick(1)
    calculator.operatorClick('=')
    result = calculator.runningTotal
    assert.equal(result, 4)
  })

  it('should multiply 5 * 5 and return 25', function(){
    calculator.numberClick(5)
    calculator.operatorClick('*')
    calculator.numberClick(5)
    calculator.operatorClick('=')
    result = calculator.runningTotal
    assert.equal(result, 25)
  })

  it('should divide 30 by 6 and return 5', function(){
    calculator.numberClick(3)
    calculator.numberClick(0)
    calculator.operatorClick('/')
    calculator.numberClick(6)
    calculator.operatorClick('=')
    result = calculator.runningTotal
    assert.equal(result, 5)
  })


});
