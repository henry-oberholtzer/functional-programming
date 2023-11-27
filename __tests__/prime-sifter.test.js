describe('numberArray'), () => {
    test('Should return an array of numbers 2 through n', () => {
        expect(numberArray(13)).toEqual([2, 3, 4, 5, 6, 7 , 8, 9, 10, 11, 12, 13]);
    });
};

describe('primeSift'), () => {
    test('Should filter array to numbers that do not result in 0 for i % 2', () => {
        expect(primeSift(numberArray(13))).toEqual([2, 3, 5, 7, 9, 11, 13]);
    });

    test('Should call itself with the returned array, and filter for numbers that result in 0 for i % 3', () => {
        expect(primeSift([2, 3, 5, 7, 9, 11, 13])).toEqual([2, 3, 5, 11, 13]);
    });

    test('Should terminate when it reaches itself', () => {
        expect(primeSift(13)).toEqual([2, 3, 5, 11, 13]);
    });
};