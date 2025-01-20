import SectionTitle from '../../../components/UI/SectionTitle'
import ContactForm from './ContactForm'

import styles from './ContactFormSection.module.css'

const ContactFormSection = () => {
    return (
        <section className={styles.section} id="firstsection">
            <div className={styles.wrapper}>
                <div className={styles.box}>
                    <SectionTitle center={true}>Write to us!</SectionTitle>
                    <ContactForm />
                </div>
            </div>
        </section>
    )
}

export default ContactFormSection
