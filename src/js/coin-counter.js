export const hundredsPlace = (number) => number * 100;

export const coinCounter = (number) => {
    if (isNaN(number)) {
        return;
    } 
    if (number < 5) {
        console.log(`Pennies: ${number}`);
        return "OK";
    } else if (number < 10) {
        console.log(`Nickels: ${(Math.floor(number / 5))}`);
        return coinCounter(number % 5);
    } else if (number < 25) {
        console.log(`Dimes: ${(Math.floor(number / 10))}`);
        return coinCounter(number % 10);
    } else if (number < 100) {
        console.log(`Quarters: ${(Math.floor(number / 25))}`);
        return coinCounter(number % 25);
    } else if (number > 99) {
        console.log(`Dollars: ${(Math.floor(number / 100))}`);
        return coinCounter(number % 100);
    }
};

export const coinCounter = (number) => {
    const change = {
        value: number,
        pennies: hundredsPlace(number)
    }
    const coinDivider = (change) => {
        if (isNaN(change.value)) {
            return;
        } 
        if (change.pennies < 5) {
            return change;
        } else if (change.pennies < 10) {
            change.pennies = (change.pennies % 5);
            change.nickels = Math.floor(number / 5);
            return coinDivider(change)
        } else if (number < 25) {
            console.log(`Dimes: ${(Math.floor(number / 10))}`);
            return coinCounter(number % 10);
        } else if (number < 100) {
            console.log(`Quarters: ${(Math.floor(number / 25))}`);
            return coinCounter(number % 25);
        } else if (number > 99) {
            console.log(`Dollars: ${(Math.floor(number / 100))}`);
            return coinCounter(number % 100);
        }
    }
};

export const coinCounter = (number) => {
    if (isNaN(number)) {
        return;
    } 
    if (number < 5) {
        const pennies = (`Pennies: ${number}`);
        return dollars, quarters, dimes, nickels, pennies;
    } else if (number < 10) {
        const nickels = (`Nickels: ${(Math.floor(number / 5))}`);
        return nickels, coinCounter(number % 5);
    } else if (number < 25) {
        const dimes = (`Dimes: ${(Math.floor(number / 10))}`);
        return dimes, coinCounter(number % 10);
    } else if (number < 100) {
        const quarters = (`Quarters: ${(Math.floor(number / 25))}`);
        return quarters, coinCounter(number % 25);
    } else if (number > 99) {
        const dollars = (`Dollars: ${(Math.floor(number / 100))}`);
        return dollars, coinCounter(number % 100);
    }
};

