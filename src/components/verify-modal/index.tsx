
import Loader from '../loader'
import Modal from '../modal'
import styles from './styles.module.scss'

const VerifyModal = ({isVisible, onClose, verifyText}) => {

   return (
        <Modal 
        className={styles.modal}
        isVisible={isVisible} onClose={onClose}>
       <div className={styles.verifyModal}>
       <h1>Verifying</h1>
        <div className={styles.verifyModalContainer}>
          {verifyText ? <p>{verifyText}</p>: <Loader />}
        </div>
       </div>
    </Modal>
    )
}

export default VerifyModal
