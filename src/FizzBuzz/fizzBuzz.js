
const fizzBuzz = (val) => {
  let result;
  for (let i = 0; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result += 'fizzbuzz ';
    } else if (i % 3 === 0) {
      result +=  'fizz '
    } else if (i % 5 === 0) {
      result +=  'buzz ';
    }
  }
  console.log({result})
  return result;
}


module.exports = {
  fizzBuzz
};