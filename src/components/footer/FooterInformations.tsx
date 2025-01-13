import Link from 'next/link'

import styles from './FooterInformations.module.css'

const FooterInformations = () => {
    return (
        <div className={styles.textData}>
            <div className={styles.companyData}>
                <p>ASGeodezja Spółka z Ograniczoną Odpowiedzialnością</p>
                <p>Właściciel: Jan Kowalski</p>
                <p>NIP: 123456789981</p>
                <p>REGON: 12345663</p>
            </div>
            <div className={styles.addressData}>
                <p>ul. Spokojna 23</p>
                <p>00-000 Warszawa</p>
                <Link href="tel:123 456 789" aria-label="Telefon komórkowy do firmy ASGeodezja">
                    123 456 789
                </Link>
                <Link href="mailto:asgeodezja@gmail.com" aria-label="Email do firmy ASGeodezja">
                    asgeodezja@gmail.com
                </Link>
            </div>
        </div>
    )
}

export default FooterInformations
