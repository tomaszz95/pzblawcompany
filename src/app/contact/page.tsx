import Header from '../../components/header/Header'
import ContactFormSection from '../../components/contactPage/contactFormSection/ContactFormSection'
import MapSection from '../../components/contactPage/mapSection/MapSection'

export const metadata = {
    title: 'PZB Law Company | Contact',
    description:
        'Providing exceptional legal services across various practice areas, including corporate law, family law, real estate, and litigation. Our team of experienced attorneys is dedicated to delivering tailored solutions with professionalism and integrity.',
}

const ContactPage = () => {
    return (
        <main>
            <Header text="Get in touch with us" site="contact" buttonText="Email us directly" />
            <ContactFormSection />
            <MapSection />
        </main>
    )
}

export default ContactPage
