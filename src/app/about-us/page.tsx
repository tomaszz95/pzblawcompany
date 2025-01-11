import Header from '../../components/header/Header'

export const metadata = {
    title: 'PZB Law Firm | About us',
    description:
        'Providing exceptional legal services across various practice areas, including corporate law, family law, real estate, and litigation. Our team of experienced attorneys is dedicated to delivering tailored solutions with professionalism and integrity.',
}

const AboutusPage = () => {
    return (
        <main>
            <Header text="Get to know our law company!" site="aboutus" buttonText="More about us" />
        </main>
    )
}

export default AboutusPage
