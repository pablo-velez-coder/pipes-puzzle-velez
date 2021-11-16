import { types} from 'src/types'
import { AnyAction } from 'redux'
import { levelsInitialArray } from 'src/constants'
import { IState } from 'src/interfaces/initialState'

export const initialState = {
    user: null,
    levelSelected: null,
    levels: levelsInitialArray,
    moves: 0,
}

const userReducer = (state= initialState, action: AnyAction):IState => {
    switch(action.type){
        case types.SAVE_USER:
            return {
                ...state,
                user: action.payload
            }
        case types.SET_LEVEL:
            return {
                ...state,
                levelSelected: action.payload
            }
        case types.ADD_MOVE:
            return {
                ...state,
                moves: state.moves + 1
            }
        case types.CLEAN_MOVES:
            return {
                ...state,
                moves: 0
            }
        default:
            return state
    }
}

export default userReducer