
import styles from './Button.module.css';

type ButtonsProps = {
    label: string
    onClick?: () => void
    variant?: 'primary' | 'secondary' | 'danger' 
}

export function Button({ label, onClick, variant = 'primary',}: ButtonsProps) {
    return (
        <button 
        onClick={onClick}    
        className={styles[variant]}
        >
            {label}    
        </button>

    )
}