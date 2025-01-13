import Image from 'next/image'

import SpecializationBox from './SpecializationBox'

import SpecializationPhoto from '../../../../public/photos/homepagedocuments.jpg'

import styles from './SpecializationSection.module.css'

const SpecializationSection = () => {
    return (
        <section className={styles.section}>
            <div className={styles.wrapper}>
                <div className={styles.imageBox}>
                    <Image
                        src={SpecializationPhoto}
                        alt="Photo of a stack of documents lying on a desk in a lawyer's room"
                    />
                    <div className={styles.imageShadow} />
                </div>
                <SpecializationBox />
            </div>
        </section>
    )
}

export default SpecializationSection
