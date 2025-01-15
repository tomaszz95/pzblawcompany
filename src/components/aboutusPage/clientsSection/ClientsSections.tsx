import SectionTitle from '../../../components/UI/SectionTitle'

import clientsOpinions from '../../../constants/clientsOpinions'
import ClientOpinion from './ClientOpinion'

import styles from './ClientsSection.module.css'

const ClientsSection = () => {
    return (
        <section className={styles.section}>
            <div className={styles.wrapper}>
                <div className={styles.box}>
                    <SectionTitle center={true}>What our customers are saying?</SectionTitle>
                    <div className={styles.content}>
                        {clientsOpinions.map((client) => (
                            <ClientOpinion
                                key={client.name}
                                name={client.name}
                                photo={client.photo}
                                opinion={client.opinion}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ClientsSection
