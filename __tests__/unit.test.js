// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
// test valid phone numbers
test('tests 858-123-4567 as a phone number', () => {
    expect(functions.isPhoneNumber('858-123-4567')).toBe(true);
});
test('tests (858)-123-4567 as a phone number', () => {
    expect(functions.isPhoneNumber('(858)-123-4567')).toBe(true);
});
test('tests (858)1234567 as a phone number', () => {
    expect(functions.isPhoneNumber('(858)1234567')).toBe(false);
});
test('tests 8581234567 as a phone number', () => {
    expect(functions.isPhoneNumber('8581234567')).toBe(false);
});

// test valid emails
test('tests cse110@gmail.com as a valid email', () => {
    expect(functions.isEmail('cse110@gmail.com')).toBe(true);
});
test('tests a@yahoo.com as a valid email', () => {
    expect(functions.isEmail('a@yahoo.com')).toBe(true);
});
test('tests cse110 as a valid email', () => {
    expect(functions.isEmail('cse110')).toBe(false);
});
test('tests @gmail.com as a valid email', () => {
    expect(functions.isEmail('@gmail.com')).toBe(false);
});

// test valid passwords
test('tests abcdef', () => {
    expect(functions.isStrongPassword('abcdef')).toBe(true);
    
});
test('tests A_123456', () => {
    expect(functions.isStrongPassword('A_123456')).toBe(true);
    
});
test('tests A*', () => {
    expect(functions.isStrongPassword('A*')).toBe(false);
    
});
test('tests 1abcdef', () => {
    expect(functions.isStrongPassword('1abcdef')).toBe(false);
    
});

// test valid dates
test('tests 1/11/2023', () => {
    expect(functions.isDate('1/11/2023')).toBe(true);
    
});
test('tests 01/11/2023', () => {
    expect(functions.isDate('01/11/2023')).toBe(true);
    
});
test('tests 1-11-2023', () => {
    expect(functions.isDate('1-11-2023')).toBe(false);
    
});
test('tests 2023/1/11', () => {
    expect(functions.isDate('2023/1/11')).toBe(false);
    
});

// test valid hex codes
test('tests #6bf640', () => {
    expect(functions.isHexColor('#6bf640')).toBe(true);
    
});
test('tests 000', () => {
    expect(functions.isHexColor('000')).toBe(true);
    
});
test('tests #3333', () => {
    expect(functions.isHexColor('#3333')).toBe(false);
    
});
test('tests blue', () => {
    expect(functions.isHexColor('blue')).toBe(false);
    
});