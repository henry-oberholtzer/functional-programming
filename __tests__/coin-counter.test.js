import { coinCounter, hundredsPlace }from "../src/js/coin-counter";

describe('coinCounter', () => {
    test('Should take a number input and return a string', () => {
        expect(typeof coinCounter(5)).toBe("string");
    });
    
    test('Should terminate if NaN is recieved', () => {
        expect(coinCounter("hello")).toEqual();
    });

    test('Should take a cent input and return the pennies', () => {
        expect(coinCounter(hundredsPlace(0.04))).toEqual("Pennies: 4");
    });

    test('Should return the nickels as well as pennies', () => {
        expect(coinCounter(hundredsPlace(0.09))).toEqual("Pennies: 4, Nickels: 1");
    });
});