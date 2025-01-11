import Link from 'next/link'

import styles from './DesktopNav.module.css'

const DesktopNav = () => {
    return (
        <ul className={styles.desktopNav}>
            <li className={styles.desktopLink}>
                <Link href="/" aria-label="Homepage link">
                    Homepage
                </Link>
            </li>
            <li className={styles.desktopLink}>
                <Link href="/about-us" aria-label="Go to about us page">
                    About us
                </Link>
            </li>
            <li className={styles.desktopLink}>
                <Link href="/team" aria-label="Go to team page">
                    Team
                </Link>
            </li>
            <li className={styles.desktopLink}>
                <Link href="/services" aria-label="Go to services page">
                    Services
                </Link>
            </li>
            <li className={styles.desktopLink}>
                <Link href="/contact" aria-label="Go to contact page">
                    Contact
                </Link>
            </li>
        </ul>
    )
}

export default DesktopNav
