import Image from 'next/image'
import Link from 'next/link'

import CompanyLogo from '../../../public/photos/logo.png'
import FacebookLogo from '../../../public/icons/facebook.svg'
import TwitterLogo from '../../../public/icons/twitter.svg'
import InstagramLogo from '../../../public/icons/instagram.svg'

import styles from './FooterInformationsContent.module.css'

const FooterInformationsContent = () => {
    return (
        <div className={styles.informationsContent}>
            <div className={styles.companyLogoBox}>
                <Image src={CompanyLogo} alt="PZB Law Company logo" />
                <span>PZB Law Company</span>
            </div>
            <p>
                For 15 years, we have been fighting for the welfare of our customers, ensuring their satisfaction and
                enjoyment.
            </p>
            <div className={styles.iconsBox}>
                <Link
                    href="https://www.facebook.com"
                    aria-label="Link to Law Company Facebook"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image src={FacebookLogo} alt="Facebook logo" />
                </Link>
                <Link
                    href="https://x.com"
                    aria-label="Link to Law Company Twitter"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image src={TwitterLogo} alt="Twitter logo" />
                </Link>
                <Link
                    href="https://www.instagram.com"
                    aria-label="Link to Law Company Instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image src={InstagramLogo} alt="Instagram logo" />
                </Link>
            </div>
        </div>
    )
}

export default FooterInformationsContent
