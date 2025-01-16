import ConsultationSection from '@/components/teamPage/consultationSection/ConsultationSection'
import Header from '../../components/header/Header'
import MembersSection from '../../components/teamPage/membersSection/MembersSection'

export const metadata = {
    title: 'PZB Law Company | Team',
    description:
        'Providing exceptional legal services across various practice areas, including corporate law, family law, real estate, and litigation. Our team of experienced attorneys is dedicated to delivering tailored solutions with professionalism and integrity.',
}

const TeamPage = () => {
    return (
        <main>
            <Header text="Meet our professional team!" site="team" buttonText="More about members" />
            <MembersSection />
            <ConsultationSection />
        </main>
    )
}

export default TeamPage
