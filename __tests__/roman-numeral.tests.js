import { romanNumeral } from "../src/js/roman-numeral";

describe('romanNumeral', () => {
    test('Should take a number and return a string', () => {
        expect(typeof romanNumeral(1)).toBe('string');
    });

    test('Should reject a number over 3999', () => {
        expect(romanNumeral(4000)).toEqual('Invalid Input');
        expect(romanNumeral("Et Tu Brutus?")).toEqual('Invalid Input');
    });

    test('Should take a number and return the thousands place in roman numerals', () => {
        expect(romanNumeral(1000)).toEqual('M');
        expect(romanNumeral(2000)).toEqual('MM');
        expect(romanNumeral(3000)).toEqual('MMM');
    });

    test('Should take a number and return the hundreds place in roman numerals', () => {
        expect(romanNumeral(1100)).toEqual('MC');
        expect(romanNumeral(200)).toEqual('CC');
        expect(romanNumeral(300)).toEqual('CCC');
        expect(romanNumeral(400)).toEqual('CD');
        expect(romanNumeral(500)).toEqual('D');
        expect(romanNumeral(600)).toEqual('DC');
        expect(romanNumeral(700)).toEqual('DCC');
        expect(romanNumeral(800)).toEqual('DCCC');
        expect(romanNumeral(900)).toEqual('CM');
    });

    test('Should take a number and return the tens place in roman numerals', () => {
        expect(romanNumeral(1110)).toEqual('MCX');
        expect(romanNumeral(20)).toEqual('XX');
        expect(romanNumeral(30)).toEqual('XXX');
        expect(romanNumeral(40)).toEqual('XL');
        expect(romanNumeral(50)).toEqual('L');
        expect(romanNumeral(60)).toEqual('LX');
        expect(romanNumeral(70)).toEqual('LXX');
        expect(romanNumeral(80)).toEqual('LXXX');
        expect(romanNumeral(90)).toEqual('XC');
    });

    test('Should take a number and return the ones place in roman numerals', () => {
        expect(romanNumeral(1111)).toEqual('MCXI');
        expect(romanNumeral(2)).toEqual('II');
        expect(romanNumeral(3)).toEqual('III');
        expect(romanNumeral(4)).toEqual('IV');
        expect(romanNumeral(5)).toEqual('V');
        expect(romanNumeral(6)).toEqual('VI');
        expect(romanNumeral(7)).toEqual('VII');
        expect(romanNumeral(8)).toEqual('VIII');
        expect(romanNumeral(9)).toEqual('IX');
    });
});