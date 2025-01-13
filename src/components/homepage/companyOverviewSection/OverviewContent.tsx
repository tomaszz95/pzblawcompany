import styles from './OverviewContent.module.css'

const OverviewContent = () => {
    return (
        <div className={styles.content}>
            <div className={styles.textBox}>
                <div className={styles.textItem}>
                    <h3>Effectiveness</h3>
                    <p>
                        Our team is committed to achieving the best possible results for your case, regardless of its
                        complexity.
                    </p>
                </div>
                <div className={styles.textItem}>
                    <h3>A personalized approach</h3>
                    <p>Each case is treated individually, with full commitment and understanding of your needs.</p>
                </div>
                <div className={styles.textItem}>
                    <h3>Transparency</h3>
                    <p>
                        We provide a set of clear and understandable information at every stage of the process, giving
                        you peace of mind and confidence
                    </p>
                </div>
            </div>
        </div>
    )
}

export default OverviewContent
