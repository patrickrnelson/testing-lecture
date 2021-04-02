const sum = require('./sum.js');

describe('the sum function', () => {
  test('should add two numbers together and return sum', () => {
    // this is where test code goes
    const result = sum(80, 10);
  
    expect(result).toBe(90);
  });
  
  test('should add positive to negative', () => {
    const result = sum(83, -6);
  
    expect(result).toBe(77);
  });
  
  test('should add two negative numbers', () => {
    const result = sum(-83, -6);
  
    expect(result).toBe(-89);
  });
  
  test('should fail if only one argument', () => {
    expect(() => {
      sum(83);
    }).toThrow("You're missing an argument");
  });
  
  test('should convert number strings to numbers', () => {
    const result = sum("83", "6");
  
    expect(result).toBe(89);
  });
})





