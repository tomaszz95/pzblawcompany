import styles from './Footer.module.css'
import FooterInformations from './FooterInformations'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className={styles.footer}>
            <FooterInformations />
            <div className={styles.copyright}>
                <p>© PZB Law Company 2010-{currentYear}</p>
            </div>
        </footer>
    )
}

export default Footer
