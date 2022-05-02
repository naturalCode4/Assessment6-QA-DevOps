const {shuffleArray} = require('./utils')

let someArray = [1,2,3,4,5,6]

const checkTenShuffleArraysForEquality = arr => {
    for (let i=0; i<10; i++) {
        if (shuffleArray(arr) == arr) {
            return false
        }
    }
    return true
}

describe('shuffleArray should', () => {
    
    it('returns an array', () => {
        expect(Array.isArray(shuffleArray(someArray))).toBe(true);
    });

    it('returns an array of the same length', () => {
        expect(shuffleArray(someArray)).toHaveLength(someArray.length)
    });
    
    it('returns a different array', () => {
        expect(shuffleArray(someArray).join.not.toEqual(someArray.join()))
    })

    test('more precisely that it returns a different array (by checking for a different array 10 times)', () => {
        expect(checkTenShuffleArraysForEquality(someArray)).toBe(false)
    })

})