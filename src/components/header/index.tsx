import { useDispatch, useSelector } from 'react-redux'
import { types } from 'src/types'
import styles from './styles.module.scss'

const Header = () => {

    const {user, moves, levelSelected} = useSelector((state:any )=> state.user)
    const dispatch = useDispatch()
    
    const handleUnlogin = () =>{
        dispatch({type:types.SAVE_USER, payload:null})
        dispatch({type:types.SET_LEVEL, payload:null})
        dispatch({type:types.CLEAN_MOVES})
    }

    return (
        <div className={styles.header}>
            <div className={styles.headerLeft}>
            <h1
            onClick={handleUnlogin}
            >Evolution</h1>  
            </div>
            <div className={styles.headerRight}>
                <p>Player: {user}</p>
                <p>Level:{levelSelected}</p>
                <p>Moves:{moves}</p>
            </div>
        </div>
    )
}

export default Header
