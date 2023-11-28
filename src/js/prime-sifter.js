export const numberArray = (number) => {
    const array = [];
    for (let i = 2; i <= number; i++) {
        array.push(i);
    }
    return array;
};

export const isPrime = (num) => {
    for (let i = 2; i < num; i++) {
        if ((num % i) === 0) {
            return false;
        }
    }
    return true;
};

export const primeSift = (array) => {
    for (let i = 0; i < array.length; i++) {
        if (isPrime(array[i]) === false) {
            const index = array.indexOf(array[i]);
            array.splice(index, 1);
            return primeSift(array);
        } 
    }
    return array;
};

export const primeRecursive = (array) => {
    for (let i = 0; i < array.length; i++) {
        return primeRecursive(array.filter(isPrime(i)));
    }
};

const anotherPrimeFunction = (num) => {
    const arrModulus = (num) => {
        return (index) => {
            if (num % index === 0 && num !== index) {
                return false;
            } else {
                return true;
            }
        };
    };
    const arrayEliminate = (array) => {
        return (index) => {
            if (index === num) {
                return array;
            } else {
                const newArray = array.filter((arrayNum) => arrModulus(arrayNum)(index));
                return arrayEliminate(newArray)(index++);
            }
        };
    };
    const numberArray = (number) => {
        const array = [];
        for (let i = 2; i <= number; i++) {
            array.push(i);
        }
        return array;
    };
    return arrayEliminate(numberArray(num))(2);
};