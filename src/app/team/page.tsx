import Header from '../../components/header/Header'

export const metadata = {
    title: 'PZB Law Firm | Team',
    description:
        'Providing exceptional legal services across various practice areas, including corporate law, family law, real estate, and litigation. Our team of experienced attorneys is dedicated to delivering tailored solutions with professionalism and integrity.',
}

const TeamPage = () => {
    return (
        <main>
            <Header text="Meet our professional team!" site="team" buttonText="More about members" />
        </main>
    )
}

export default TeamPage
