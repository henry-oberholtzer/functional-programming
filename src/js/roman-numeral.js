const toNumerals = (thousands) => {
    return (hundreds) => {
        return (tens) => {
            return (ones) => {
                return `${thousands}${hundreds}${tens}${ones}`;
            };
        };
    };
};

const thousandsPlace = (number) => {
    const array = ["", "M", "MM", "MMM"]
    return array[Math.floor(number / 1000)];
};

const hundredsPlace = (number) => {
    const array = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    return array[Math.floor((number % 1000) / 100)];
};

const tensPlace = (number) => {
    const array = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    return array[Math.floor(((number % 1000) % 100) / 10)];
};

const onesPlace = (number) => {
    const array = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    return array[Math.floor((((number % 1000) % 100) % 10) / 1)];
};

const inputCheck = (number) => {
    return (number > 3999 || isNaN(number)) ? false : true;
};

export const romanNumeral = (number) => {
    return inputCheck(number) ? toNumerals(thousandsPlace(number))(hundredsPlace(number))(tensPlace(number))(onesPlace(number)) : 'Invalid Input';
};