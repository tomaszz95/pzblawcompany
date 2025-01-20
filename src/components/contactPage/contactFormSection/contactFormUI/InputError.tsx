import Image from 'next/image'

import CircleIcon from '../../../../../public/icons/circle.png'

import styles from './InputError.module.css'

type ComponentType = {
    children: React.ReactNode
}

const InputError = ({ children }: ComponentType) => {
    return (
        <div className={styles.errorBox}>
            <Image src={CircleIcon} alt="" />
            <p>{children}</p>
        </div>
    )
}

export default InputError
