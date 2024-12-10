import { testArray } from "./mike"


test('Should return undefined', () => {

    let arr = [
        [0, 1, 3, 4, 5],
        [0,1,2,3,4, 5]
    ]

    expect(testArray(arr, 2, 3)).toBe('works')


})
