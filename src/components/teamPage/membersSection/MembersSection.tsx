import SectionTitle from '../../../components/UI/SectionTitle'
import SingleMember from './SingleMember'

import membersList from '../../../constants/membersList'

import styles from './MembersSection.module.css'

const MembersSection = () => {
    return (
        <section className={styles.section} id="firstsection">
            <div className={styles.wrapper}>
                <div className={styles.box}>
                    <SectionTitle center={true}>Meet our team!</SectionTitle>
                    <div className={styles.content}>
                        {membersList.map((member) => (
                            <SingleMember
                                key={member.name}
                                name={member.name}
                                image={member.image}
                                position={member.position}
                                description={member.description}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MembersSection
