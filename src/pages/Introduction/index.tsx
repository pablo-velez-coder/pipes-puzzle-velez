import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { types } from 'src/types'
import { formattingName } from 'src/utils/arrangingMap'
import styles from './styles.module.scss'

const Introduction = () => {

    const [name, setName] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = (e : React.SyntheticEvent) =>{
        e.preventDefault();
        dispatch({
            type: types.SAVE_USER,
            payload: formattingName(name)
        })
    }

    return (
        <div className={styles.introductionPage}>
          <div className={styles.introductionPageContainer}>
          <h1 className="title">Pipes Puzzle</h1>
            <p className="input-name">To begin, tell us your name!</p>
            <form
            onSubmit={handleSubmit}
            >
                <input 
                placeholder='name'
                name="name"
                value={name}
                onChange={e=> setName(e.target.value)}
                />
                <button 
                data-id="submit-button"
                disabled={name.length === 0}
                type='submit'>
                    Go!
                </button>
            </form>
          </div>
        </div>
    )
}

export default Introduction
