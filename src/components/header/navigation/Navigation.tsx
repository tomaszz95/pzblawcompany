import Link from 'next/link'
import Image from 'next/image'

import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'

import Logo from '../../../../public/photos/logo.png'

import styles from './Navigation.module.css'

const Navigation = () => {
    return (
        <div className={styles.container}>
            <Link href="/" aria-label="Link to homepage">
                <Image src={Logo} alt="PZB Law Company Logo" priority />
            </Link>
            <MobileNav />
            <DesktopNav />
        </div>
    )
}
export default Navigation
