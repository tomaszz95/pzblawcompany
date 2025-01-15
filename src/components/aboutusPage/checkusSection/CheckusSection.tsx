import ButtonLink from '../../../components/UI/ButtonLink'
import SectionTitle from '../../../components/UI/SectionTitle'

import styles from './CheckusSection.module.css'

const CheckusSection = () => {
    return (
        <section className={styles.section}>
            <div className={styles.shadow} />
            <div className={styles.wrapper}>
                <SectionTitle reverse={true} center={true}>
                    Check out the services we provide
                </SectionTitle>
                <div className={styles.content}>
                    <p>
                        We provide comprehensive legal assistance in a variety of areas, including family law, criminal
                        law, real estate and many others. Our experienced team of attorneys specializes in providing
                        legal support at every stage, guaranteeing clients professionalism and efficiency. Take
                        advantage of our proven services to ensure that your rights are in the best hands.
                    </p>
                    <ButtonLink linkUrl="/services" ariaLabel="Go to services site" center={true} reverse={true}>
                        Check our services
                    </ButtonLink>
                </div>
            </div>
        </section>
    )
}

export default CheckusSection
