import Image from 'next/image'

import SectionTitle from '../../UI/SectionTitle'
import ButtonLink from '../../UI/ButtonLink'

import BanknoteIcon from '../../../../public/icons/banknote.svg'
import BulbIcon from '../../../../public/icons/bulb.svg'

import styles from './SpecializationBox.module.css'

const SpecializationBox = () => {
    return (
        <div className={styles.box}>
            <SectionTitle>Our specialties</SectionTitle>
            <div className={styles.content}>
                <p className={styles.contentText}>
                    At our reputable law firm, we specialize in a variety of legal fields, covering family law, civil
                    law, real estate, criminal law, business law, labor law and many other areas. Regardless of the
                    nature of your case, our experienced expert team of attorneys is ready to provide you with
                    comprehensive legal assistance, focusing on achieving the best results and protecting your
                    interests.
                </p>
                <div className={styles.contentItems}>
                    <div className={styles.contentItem}>
                        <Image src={BanknoteIcon} alt="" />
                        <h4>More than 25 million turnover</h4>
                        <p>
                            We provide services to both small entrepreneurs, individuals and huge companies and
                            corporations.
                        </p>
                    </div>
                    <div className={styles.contentItem}>
                        <Image src={BulbIcon} alt="" />
                        <h4>Irreplaceable in their craft</h4>
                        <p>
                            A team of more than forty prominent and leading experts on various types of law is at the
                            fingertips of each client.
                        </p>
                    </div>
                </div>
                <ButtonLink linkUrl="/services" ariaLabel="Go to services site" center={true}>
                    More about services &rarr;
                </ButtonLink>
            </div>
        </div>
    )
}

export default SpecializationBox
