module.exports = function divide(dividend, divisor) {
    if (divisor === 0) {
      throw new Error('Division by zero.');
    }
    return dividend / divisor;
  }


  /*const divide =  (dividend, divisor) => {
    if (divisor === 0) {
      throw new Error('Division by zero.');
    }
    return dividend / divisor;
  };

  export default divide;*/
