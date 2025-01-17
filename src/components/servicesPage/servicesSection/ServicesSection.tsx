import SectionTitle from '../../../components/UI/SectionTitle'
import SingleService from './SingleService'

import servicesList from '../../../constants/servicesList'

import styles from './ServicesSection.module.css'

const ServicesSection = () => {
    return (
        <section className={styles.section} id="firstsection">
            <div className={styles.wrapper}>
                <div className={styles.box}>
                    <SectionTitle center={true}>What do we do?</SectionTitle>
                    <div className={styles.content}>
                        {servicesList.map((service) => (
                            <SingleService
                                key={service.title}
                                title={service.title}
                                icon={service.icon}
                                description={service.description}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServicesSection
