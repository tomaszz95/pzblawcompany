import InputError from './InputError'

import styles from './TextArea.module.css'

type ComponentType = {
    label: string
    id: string
    value: string
    hasError: boolean
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
    onBlur: (e: React.FocusEvent<HTMLTextAreaElement>) => void
    errorText: string
}

const TextArea = ({ label, id, value, hasError, onChange, onBlur, errorText }: ComponentType) => {
    return (
        <>
            <textarea
                maxLength={1000}
                id={id}
                placeholder={label}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                className={`${styles.textarea} ${hasError ? styles.error : ''}`}
            />
            {hasError && <InputError>{errorText}</InputError>}
        </>
    )
}

export default TextArea
