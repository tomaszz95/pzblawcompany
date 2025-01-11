import Header from '../components/header/Header'

export const metadata = {
    title: 'PZB Law Firm | Homepage',
    description:
        'Providing exceptional legal services across various practice areas, including corporate law, family law, real estate, and litigation. Our team of experienced attorneys is dedicated to delivering tailored solutions with professionalism and integrity.',
}

const Homepage = () => {
    return (
        <main>
            <Header text="We got solution for your problem!" site="homepage" buttonText="More informations" />
        </main>
    )
}

export default Homepage
