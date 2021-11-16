import { ReactNode, useRef } from 'react'
import { useOnClickOutside } from 'src/custom-hooks/useClickOutside'
import styles from './styles.module.scss'

interface ModalProps{
    children: ReactNode;
    isVisible:boolean;
    onClose?: Function;
    className?:string;
}

const Modal: React.FC<ModalProps> = ({isVisible,onClose, children, className}) => {

    const modalRef = useRef()
    useOnClickOutside(modalRef, onClose)
    
    if(!isVisible) return null
    return (
       <div className={styles.backdrop}>
        <div 
        ref={modalRef}
        className={`${styles.modal} ${className}`}>
          {children}  
        </div>
       </div>
    )
}

export default Modal
