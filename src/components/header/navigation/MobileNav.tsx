'use client'

import { useState } from 'react'
import Link from 'next/link'
import { createPortal } from 'react-dom'

import styles from './MobileNav.module.css'

const MobileNav = () => {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

    const changeModalStatus = () => {
        setIsMobileNavOpen((prevValue) => !prevValue)
    }

    return (
        <>
            <button className={styles.burger} aria-label="Open mobile navigation" onClick={changeModalStatus}>
                <div className={styles.burgerBar}></div>
                <div className={styles.burgerBar}></div>
                <div className={styles.burgerBar}></div>
            </button>
            {isMobileNavOpen &&
                createPortal(
                    <>
                        <button
                            className={`${styles.burgerX} ${isMobileNavOpen ? styles.active : ''}`}
                            aria-label="Close mobile navigation"
                            onClick={changeModalStatus}
                        >
                            <div className={styles.burgerBar}></div>
                            <div className={styles.burgerBar}></div>
                            <div className={styles.burgerBar}></div>
                        </button>
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
                                <Link
                                    href="/team"
                                    onClick={() => setIsMobileNavOpen(false)}
                                    aria-label="Go to team page"
                                >
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
                                <Link
                                    href="/contact"
                                    onClick={() => setIsMobileNavOpen(false)}
                                    aria-label="Go to contact page"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </>,
                    document.body,
                )}
        </>
    )
}

export default MobileNav
