import Link from 'next/link'

import FooterInformationsContent from './FooterInformationsContent'

import styles from './FooterInformations.module.css'

const FooterInformations = () => {
    return (
        <div className={styles.informationsBox}>
            <FooterInformationsContent />
            <div className={styles.informationsBoxMenu}>
                <div className={styles.menuBox}>
                    <div className={styles.footerTitle}>
                        <h4>Menu</h4>
                        <div />
                    </div>
                    <div className={styles.footerList}>
                        <Link href="/" aria-label="Go to homepage">
                            Homepage
                        </Link>
                        <Link href="/about-us" aria-label="Go to about us page">
                            About us
                        </Link>
                        <Link href="/team" aria-label="Go to team page">
                            Team
                        </Link>
                        <Link href="/services" aria-label="Go to services page">
                            Services
                        </Link>
                        <Link href="/contact" aria-label="Go to contact page">
                            Contact
                        </Link>
                    </div>
                </div>
                <div className={styles.companyAddress}>
                    <div className={styles.footerTitle}>
                        <h4>Address</h4>
                        <div />
                    </div>
                    <div className={styles.footerList}>
                        <span>PZB Law Company</span>
                        <span>20 W 34th St.</span>
                        <span>New York, NY 10001</span>
                        <span>United States</span>
                    </div>
                </div>
                <div className={styles.contactData}>
                    <div className={styles.footerTitle}>
                        <h4>Contact</h4>
                        <div />
                    </div>
                    <div className={styles.footerList}>
                        <p className={styles.footerListItem}>
                            <span>Email CEO:</span>{' '}
                            <Link href="mailto:pzblaw@gmail.com" aria-label="Email to PZB Law Company CEO">
                                pzblaw@gmail.com
                            </Link>
                        </p>
                        <p className={styles.footerListItem}>
                            <span>Email office:</span>{' '}
                            <Link href="mailto:pzblawoffice@gmail.com" aria-label="Email to PZB Law Company office">
                                pzblawoffice@gmail.com
                            </Link>
                        </p>
                        <p className={styles.footerListItem}>
                            <span>Phone CEO:</span>{' '}
                            <Link href="tel:123 456 789" aria-label="Phone to PZB Law Company CEO">
                                123 456 789
                            </Link>
                        </p>
                        <p className={styles.footerListItem}>
                            <span>Phone office:</span>{' '}
                            <Link href="tel:123 456 788" aria-label="Phone to PZB Law Company office">
                                123 456 788
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterInformations
