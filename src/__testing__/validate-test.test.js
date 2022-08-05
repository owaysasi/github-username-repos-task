const validateText = require('./../pages/first-task/first-task');

test('validate username', () => {
    expect(validateText('h')).toBe('Fill with 3 characters or above!')
    expect(validateText('')).toBe('Fill the Username field!')
    expect(validateText(' ')).toBe('Fill with real name!')
    expect(validateText('mar')).toBe(true)
})