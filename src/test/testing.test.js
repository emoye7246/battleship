import { addHit, hits } from "./mike";


test('Should return False', () => {

    let arrayMe = [0, 1 , 2]
    expect(hits(arrayMe)).toBe(3);


})
