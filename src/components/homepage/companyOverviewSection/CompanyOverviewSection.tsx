import OverviewData from './OverviewData'
import OverviewContent from './OverviewContent'
import SectionTitle from '../../UI/SectionTitle'

import styles from './CompanyOverviewSection.module.css'

const CompanyOverviewSection = () => {
    return (
        <section className={styles.section}>
            <div className={styles.shadow} />
            <div className={styles.wrapper}>
                <SectionTitle reverse={true}>Why our law compay?</SectionTitle>
                <div className={styles.dataContainer}>
                    <OverviewContent />
                    <OverviewData />
                </div>
            </div>
        </section>
    )
}

export default CompanyOverviewSection
