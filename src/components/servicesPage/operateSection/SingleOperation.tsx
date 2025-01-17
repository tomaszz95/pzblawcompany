import Image, { StaticImageData } from 'next/image'

import styles from './SingleOperation.module.css'

type ComponentType = {
    title: string
    icon: StaticImageData
    description: string
}

const SingleOperation = ({ title, icon, description }: ComponentType) => {
    return (
        <div className={styles.box}>
            <Image src={icon} alt="" />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}

export default SingleOperation
