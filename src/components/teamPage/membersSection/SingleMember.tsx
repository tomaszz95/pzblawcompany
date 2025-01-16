import Image, { StaticImageData } from 'next/image'

import styles from './SingleMember.module.css'

type ComponentType = {
    name: string
    image: StaticImageData
    position: string
    description: string
}

const SingleMember = ({ name, image, position, description }: ComponentType) => {
    return (
        <div className={styles.box}>
            <Image src={image} alt={`Photo of ${name}`} />
            <span>{position}</span>
            <h3>{name}</h3>
            <p>{description}</p>
        </div>
    )
}

export default SingleMember
