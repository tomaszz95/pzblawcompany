import styles from './SectionTitle.module.css'

type ComponentType = {
    children: React.ReactNode
    reverse?: boolean
    center?: boolean
}

const SectionTitle = ({ children, reverse, center }: ComponentType) => {
    return (
        <div className={`${styles.titleBox} ${center ? styles.center : ''}`}>
            <h2 className={`${styles.title} ${reverse ? styles.reverse : ''}`}>{children}</h2>
            <div className={styles.underline}></div>
        </div>
    )
}

export default SectionTitle
