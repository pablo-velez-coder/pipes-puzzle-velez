import { types } from "src/types";

describe('Test in types',()=>{
    test('should return the correct types', () => {
        expect(types).toEqual({
            SAVE_USER : 'SAVE_USER',
            SET_LEVEL : 'SET_LEVEL',
            ADD_MOVE : 'ADD_MOVE',
            CLEAN_MOVES : 'CLEAN_MOVES'
       })
    });
    
})