import Header from '../../components/header/Header'

export const metadata = {
    title: 'PZB Law Firm | Services',
    description:
        'Providing exceptional legal services across various practice areas, including corporate law, family law, real estate, and litigation. Our team of experienced attorneys is dedicated to delivering tailored solutions with professionalism and integrity.',
}

const ServicesPage = () => {
    return (
        <main>
            <Header text="The scope of services provided" site="services" buttonText="More about services" />
        </main>
    )
}

export default ServicesPage
