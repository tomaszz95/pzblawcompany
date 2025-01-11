'use client'

import { useState } from 'react'

import Link from 'next/link'

import styles from './MobileNav.module.css'

const MobileNav = () => {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

    const changeModalStatus = () => {
        setIsMobileNavOpen((prevValue) => !prevValue)
    }

    return (
        <>
            <button
                className={`${styles.burger} ${isMobileNavOpen ? styles.active : ''}`}
                aria-label="Open mobile navigation"
                onClick={changeModalStatus}
            >
                <div className={styles.burgerBar}></div>
                <div className={styles.burgerBar}></div>
                <div className={styles.burgerBar}></div>
            </button>
            {isMobileNavOpen && (
                <ul className={styles.mobileNav}>
                    <li className={styles.mobileLink}>
                        <Link href="/" onClick={() => setIsMobileNavOpen(false)} aria-label="Homepage link">
                            Homepage
                        </Link>
                    </li>
                    <li className={styles.mobileLink}>
                        <Link
                            href="/about-us"
                            onClick={() => setIsMobileNavOpen(false)}
                            aria-label="Go to about us page"
                        >
                            About us
                        </Link>
                    </li>
                    <li className={styles.mobileLink}>
                        <Link href="/team" onClick={() => setIsMobileNavOpen(false)} aria-label="Go to team page">
                            Team
                        </Link>
                    </li>
                    <li className={styles.mobileLink}>
                        <Link
                            href="/services"
                            onClick={() => setIsMobileNavOpen(false)}
                            aria-label="Go to services page"
                        >
                            Services
                        </Link>
                    </li>
                    <li className={styles.mobileLink}>
                        <Link href="/contact" onClick={() => setIsMobileNavOpen(false)} aria-label="Go to contact page">
                            Contact
                        </Link>
                    </li>
                </ul>
            )}
        </>
    )
}

export default MobileNav
