import styles from './styles.module.scss'

interface ButtonProps{
    text?:string;
    children?: React.ReactNode;
    onClick: () => void;
    className?: string;
    disabled?:boolean;
}

const Button: React.FC<ButtonProps> = ({text,children,disabled=false,className,onClick,...rest}) => {
    return (
        <button
        {...rest}
        disabled={disabled}
        onClick={onClick}
        className={`${styles.button} ${className} ${disabled && styles.disabled}`}>
            {children}
        </button>
    )
}

export default Button
