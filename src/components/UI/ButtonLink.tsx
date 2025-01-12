import Link from 'next/link'

import styles from './ButtonLink.module.css'

type ComponentType = {
    children: React.ReactNode
    linkUrl: string
    ariaLabel: string
    center?: boolean
    reverse?: boolean
}

const ButtonLink = ({ linkUrl, ariaLabel, center, reverse, children }: ComponentType) => {
    return (
        <Link
            href={linkUrl}
            aria-label={ariaLabel}
            className={`${styles.button} ${center ? styles.center : ''} ${reverse ? styles.reverse : ''}`}
        >
            {children}
        </Link>
    )
}

export default ButtonLink
