import Loader from '../loader'
import Modal from '../modal'
import styles from './styles.module.scss'

const HelpModal = ({isVisible, onClose,helpText}) => {

    return (
        <Modal isVisible={isVisible} onClose={onClose}>
       <div className={styles.helpModal}>
       <h1>Help</h1>
        <div className={styles.helpModalContainer}>
       {helpText ? <p>{helpText}</p> : <Loader />}
        </div>
       </div>
    </Modal>
    )
}

export default HelpModal
