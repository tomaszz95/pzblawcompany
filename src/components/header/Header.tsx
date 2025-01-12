import Navigation from './navigation/Navigation'
import ButtonLink from '../UI/ButtonLink'

import styles from './Header.module.css'

type ComponentType = {
    text: string
    buttonText: string
    site: string
}

const Header = ({ text, site, buttonText }: ComponentType) => {
    const siteImage =
        site === 'homepage'
            ? styles.homepage
            : site === 'services'
              ? styles.services
              : site === 'contact'
                ? styles.contact
                : site === 'team'
                  ? styles.team
                  : styles.aboutus

    return (
        <header className={styles.header}>
            <div className={`${styles.image} ${siteImage}`}>
                <div className={styles.shadow} />
                <nav className={styles.nav}>
                    <Navigation />
                </nav>
                <div className={styles.text}>
                    <p>PZB Law Company in New York</p>
                    <h1 className={styles.heading}>{text}</h1>
                    <ButtonLink linkUrl="#firstsection" ariaLabel="Click to see more informations" reverse={true}>
                        {buttonText} &darr;
                    </ButtonLink>
                </div>
            </div>
        </header>
    )
}

export default Header
