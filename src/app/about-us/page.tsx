import Header from '../../components/header/Header'
import DescriptionSection from '../../components/aboutusPage/descriptionSection/DescriptionSection'
import BrandSection from '../../components/aboutusPage/brandSection/BrandSection'
import ClientsSection from '../../components/aboutusPage/clientsSection/ClientsSections'
import CheckusSection from '../../components/aboutusPage/checkusSection/CheckusSection'

export const metadata = {
    title: 'PZB Law Company | About us',
    description:
        'Providing exceptional legal services across various practice areas, including corporate law, family law, real estate, and litigation. Our team of experienced attorneys is dedicated to delivering tailored solutions with professionalism and integrity.',
}

const AboutusPage = () => {
    return (
        <main>
            <Header text="Get to know our law company!" site="aboutus" buttonText="More about us" />
            <DescriptionSection />
            <BrandSection />
            <ClientsSection />
            <CheckusSection />
        </main>
    )
}

export default AboutusPage
