const { palindrome } = require('./palindrome');

const stringVar = 'eye';

test('palindrome function is defined', () => {
    expect(palindrome).toBeDefined();
});


test('palindrome', () => {
  expect(palindrome(stringVar)).toBe('is palindrome')
});

