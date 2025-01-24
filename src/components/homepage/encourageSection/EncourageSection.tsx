import SectionTitle from '../../../components/UI/SectionTitle'
import ButtonLink from '../../../components/UI/ButtonLink'

import styles from './EncourageSection.module.css'

const EncourageSection = () => {
    return (
        <section className={styles.section}>
            <div className={styles.shadow} />
            <div className={styles.wrapper}>
                <SectionTitle reverse={true} center={true}>
                    We are at your service today!
                </SectionTitle>
                <div className={styles.content}>
                    <p>
                        Choose professional legal assistance you can count on. Our team of attorneys is ready to meet
                        your needs. Don&apos;t hesitate - contact us now and give us a chance to resolve your legal
                        issues. Put your trust in our experienced law firm so you can look to the future with
                        confidence.
                    </p>
                    <ButtonLink linkUrl="/contact" ariaLabel="Go to contact site" center={true} reverse={true}>
                        Contact us &rarr;
                    </ButtonLink>
                </div>
            </div>
        </section>
    )
}

export default EncourageSection
