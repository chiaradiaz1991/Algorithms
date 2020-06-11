
const palindrome = (string) => {
  let stringSplit = string.split('');
  let stringReverse = stringSplit.reverse();
  let stringJoin = stringReverse.join('');

  if (string === stringJoin) {
    return 'is palindrome';
  } else {
    return 'is not palindrome'
  }
}


console.log(palindrome('eye'))

module.exports = {
  palindrome
};