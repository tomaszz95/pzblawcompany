import Image from 'next/image'

import SectionTitle from '../../../components/UI/SectionTitle'
import ButtonLink from '../../../components/UI/ButtonLink'

import StairsPhoto from '../../../../public/photos/aboutusstairs.jpg'

import styles from './DescriptionSection.module.css'

const DescriptionSection = () => {
    return (
        <section className={styles.section} id="firstsection">
            <div className={styles.wrapper}>
                <div className={styles.box}>
                    <SectionTitle>We have been in business for over 15 years!</SectionTitle>
                    <div className={styles.content}>
                        <p className={styles.contentText}>
                            Our reputable law firm has been in existence for 15 years and has held a leading position in
                            the Warsaw market since its inception. We proudly provide quality legal services based on
                            our extensive experience and ongoing passion for helping our clients. We are recognized as a
                            leader in the industry due to our reliability, professionalism and efficiency in solving
                            even the most difficult legal cases. Our law firm is constantly evolving, adapting to
                            changing client needs and new legal challenges. When you choose our law firm, you are
                            choosing a guarantee of the highest quality legal service you can trust, and a partner who
                            always stands by your side.
                        </p>

                        <ButtonLink linkUrl="/team" ariaLabel="Go to team site" center={true}>
                            Meet our team
                        </ButtonLink>
                    </div>
                </div>
                <div className={styles.imageBox}>
                    <Image
                        src={StairsPhoto}
                        alt="Photo of a large number of white stairs in Gothic style, with a beautiful building in the background"
                    />
                    <div className={styles.imageShadow} />
                </div>
            </div>
        </section>
    )
}

export default DescriptionSection
