import InputError from './InputError'

import styles from './Input.module.css'

type ComponentType = {
    id: string
    label: string
    type: string
    value: string
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    onBlur: (e: React.FocusEvent<HTMLInputElement>) => void
    hasError: boolean
    errorText: string
}

const Input = ({ label, id, type, value, hasError, onChange, onBlur, errorText }: ComponentType) => {
    return (
        <>
            <input
                id={id}
                placeholder={label}
                type={type}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                className={`${styles.input} ${hasError ? styles.error : ''}`}
            />
            {hasError && <InputError>{errorText}</InputError>}
        </>
    )
}

export default Input
