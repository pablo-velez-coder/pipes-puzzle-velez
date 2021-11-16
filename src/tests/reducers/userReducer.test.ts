import userReducer, { initialState } from "src/redux/reducers/userReducer";
import { types } from "src/types";

describe('Tests in userReducer',()=>{
    test('should return the default state', () => {
        const action = {type: 'ANYTHING'}
      const state = userReducer(initialState, action )
      expect(state).toEqual(initialState)
    });

    test('should update user when dispatching a name', () => {
        const name = 'Pablo'
        const dispatchingName = { type: types.SAVE_USER, payload: name}
        const state = userReducer(initialState, dispatchingName)
        expect(state.user).toBe(name)
    });

    test('should update level state when setting level', () => {
        const level = 1
        const dispatchinglevel = { type: types.SET_LEVEL, payload: level}
        const state = userReducer(initialState, dispatchinglevel)
        expect(state.levelSelected).toBe(level)
    });

    test('should add one move when dispatching add move', () => {
        const dispatchingMove = {type: types.ADD_MOVE}
        const state = userReducer(initialState,dispatchingMove)
        expect(state.moves).toBe(1)
    });
    
    test('should clean moves when dispatching clean moves', () => {
        const dispatchingMove = {type: types.ADD_MOVE}
        const dispatchingCleanMoves = {type: types.CLEAN_MOVES}
        userReducer(initialState,dispatchingMove)
        const stateTwo = userReducer(initialState,dispatchingCleanMoves)
        expect(stateTwo.moves).toBe(0)
    }); 
    
})