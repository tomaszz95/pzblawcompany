import Image from 'next/image'

import SectionTitle from '../../../components/UI/SectionTitle'
import ButtonLink from '../../../components/UI/ButtonLink'

import HourglassIcon from '../../../../public/icons/hourglass.svg'
import BriefcaseIcon from '../../../../public/icons/briefcase.svg'

import styles from './CompetencesBox.module.css'

const CompetencesBox = () => {
    return (
        <div className={styles.box}>
            <SectionTitle>Passion, Professionalism, Dedication</SectionTitle>
            <div className={styles.content}>
                <p className={styles.contentText}>
                    At our law firm, the work doesn&apos;t end with the filing of documents or court hearings. It is
                    dedication, passion and a relentless pursuit of the best results for our clients that drive us every
                    day. Regardless of the scale of the problem, we take on every case with full commitment and
                    determination, ready to face even the most difficult challenges.
                </p>
                <div className={styles.contentItems}>
                    <div className={styles.contentItem}>
                        <Image src={HourglassIcon} alt="" />
                        <h4>15 Years of Experience</h4>
                        <p>
                            For the past fifteen years, we have been constantly concerned with the welfare and
                            satisfaction of our customers.
                        </p>
                    </div>
                    <div className={styles.contentItem}>
                        <Image src={BriefcaseIcon} alt="" />
                        <h4>Focus on success</h4>
                        <p>
                            Interests realized in the best possible way and customer satisfaction with our services are
                            of paramount importance to us.
                        </p>
                    </div>
                </div>
                <ButtonLink linkUrl="/about-us" ariaLabel="Go to about us site" center={true}>
                    More about us &rarr;
                </ButtonLink>
            </div>
        </div>
    )
}

export default CompetencesBox
