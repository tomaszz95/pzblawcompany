import SectionTitle from '../../UI/SectionTitle'
import SingleOperation from './SingleOperation'
import ButtonLink from '../../UI/ButtonLink'

import operateList from '../../../constants/operateList'

import styles from './OperateSection.module.css'

const OperateSection = () => {
    return (
        <section className={styles.section}>
            <div className={styles.shadow} />
            <div className={styles.wrapper}>
                <SectionTitle reverse={true} center={true}>
                    How we operate?
                </SectionTitle>
                <div className={styles.content}>
                    {operateList.map((operation) => (
                        <SingleOperation
                            key={operation.title}
                            title={operation.title}
                            icon={operation.icon}
                            description={operation.description}
                        />
                    ))}
                </div>
                <ButtonLink linkUrl="/contact" ariaLabel="Go to contact site" center={true} reverse={true}>
                    Contact us now!
                </ButtonLink>
            </div>
        </section>
    )
}

export default OperateSection
