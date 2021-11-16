import { ILevel } from '@/src/interfaces/initialState'
import { useDispatch, useSelector } from 'react-redux'
import {types } from 'src/types'
import styles from './styles.module.scss'

const LevelPage = () => {

    const dispatch = useDispatch()
    
    const{levels, user} = useSelector((state: any ) => state.user)

    const handleSelectLevel = (level: number) =>{
        dispatch({type: types.SET_LEVEL, payload: level })
    }

    return (
        <div className={styles.levelsPage}>
           <div className={styles.levelsPageContainer}>
           <h2>
                Welcome {user}!
                Unlock the next one with the password you get after complete the previous opened one
            </h2>
            <div className={styles.levelsContainer}>
                {
                    levels?.map((level:ILevel)=>(
                        <button 
                        disabled={level.isLocked}
                        className={styles.levelsContainerLevel}
                        onClick={()=> handleSelectLevel(level.level)}
                        key={level.id}>
                            {level.level}
                        </button>
                    ))
                }
            </div>
           </div>
            
        </div>
    )
}

export default LevelPage
