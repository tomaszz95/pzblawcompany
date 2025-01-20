import Image, { StaticImageData } from 'next/image'

import QuoteIcon from '../../../../public/icons/quote.svg'

import styles from './ClientOpinion.module.css'

type ComponentType = {
    name: string
    opinion: string
    photo: StaticImageData
}

const ClientOpinion = ({ name, opinion, photo }: ComponentType) => {
    return (
        <div className={styles.opinionBox}>
            <Image src={QuoteIcon} alt="" />
            <p>&quot;{opinion}&quot;</p>
            <div className={styles.opinionContent}>
                <Image src={photo} alt={`${name} photo`} />
                <span>{name}</span>
            </div>
        </div>
    )
}

export default ClientOpinion
