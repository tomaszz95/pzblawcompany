import SectionTitle from '../../../components/UI/SectionTitle'
import ButtonLink from '../../../components/UI/ButtonLink'

import styles from './ConsultationSection.module.css'

const ConsultationSection = () => {
    return (
        <section className={styles.section}>
            <div className={styles.shadow} />
            <div className={styles.wrapper}>
                <SectionTitle reverse={true} center={true}>
                    Sign up for your first free consultation
                </SectionTitle>
                <div className={styles.content}>
                    <p>
                        Don&apos;t wait any longer - take advantage of our free consultation and start the process of
                        resolving your legal issues now. Our team is waiting to provide you with professional and
                        effective assistance.
                    </p>
                    <ButtonLink linkUrl="/contact" ariaLabel="Go to contact site" center={true} reverse={true}>
                        Make an appointment
                    </ButtonLink>
                </div>
            </div>
        </section>
    )
}

export default ConsultationSection
