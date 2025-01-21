import FooterInformations from './FooterInformations'

import styles from './Footer.module.css'

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
