import Image from 'next/image'

import CompetencesBox from './CompetencesBox'

import IntroductionPhoto from '../../../../public/photos/homepagefigure.jpg'

import styles from './IntroductionSection.module.css'

const IntroductionSection = () => {
    return (
        <section className={styles.section} id="firstsection">
            <div className={styles.wrapper}>
                <CompetencesBox />
                <div className={styles.imageBox}>
                    <Image src={IntroductionPhoto} alt="Photo of goddess venus holding scales standing on the desk" />
                    <div className={styles.imageShadow} />
                </div>
            </div>
        </section>
    )
}

export default IntroductionSection
