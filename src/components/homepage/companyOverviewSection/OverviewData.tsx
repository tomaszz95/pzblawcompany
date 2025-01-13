import ButtonLink from '../../UI/ButtonLink'

import styles from './OverviewData.module.css'

const OverviewData = () => {
    return (
        <div className={styles.content}>
            <div className={styles.boxContainer}>
                <div className={styles.singleBox}>
                    <h3>800+</h3>
                    <span>Satisfied customers</span>
                </div>
                <div className={styles.singleBox}>
                    <h3>40+</h3>
                    <span>Professional attorneys</span>
                </div>
                <div className={styles.singleBox}>
                    <h3>15 years</h3>
                    <span>In the Market</span>
                </div>
                <div className={styles.singleBox}>
                    <h3>98%</h3>
                    <span>Total cases won</span>
                </div>
            </div>
            <ButtonLink linkUrl="/team" ariaLabel="Go to team site" center={true} reverse={true}>
                Meet our team &rarr;
            </ButtonLink>
        </div>
    )
}

export default OverviewData
