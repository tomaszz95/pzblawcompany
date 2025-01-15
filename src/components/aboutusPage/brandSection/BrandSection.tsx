import Image from 'next/image'

import SectionTitle from '../../../components/UI/SectionTitle'

import JeepBrand from '../../../../public/photos/jeepbrand.png'
import HuluBrand from '../../../../public/photos/hulubrand.png'
import XfinityBrand from '../../../../public/photos/xfinitybrand.png'
import IkeaBrand from '../../../../public/photos/ikeabrand.png'
import YeezusBrand from '../../../../public/photos/yeezusbrand.png'

import styles from './BrandSection.module.css'

const BrandSection = () => {
    return (
        <section className={styles.section}>
            <div className={styles.shadow} />
            <div className={styles.wrapper}>
                <SectionTitle reverse={true} center={true}>
                    Shareholders and customers
                </SectionTitle>
                <div className={styles.content}>
                    <p>
                        Our associates are not only experienced lawyers, but also partners in solving your legal issues.
                        Thanks to their commitment and knowledge, we can provide comprehensive and effective assistance
                        at every stage of the process. Our greatest asset is our satisfied clients, whose successes
                        testify to our reliability and professionalism. Join the ranks of our clients and see why you
                        should trust our law firm.
                    </p>
                    <div className={styles.brands}>
                        <Image src={JeepBrand} alt="Jeep brand logo" />
                        <Image src={HuluBrand} alt="Hulu brand logo" />
                        <Image src={XfinityBrand} alt="Xfinity brand logo" />
                        <Image src={IkeaBrand} alt="Ikea brand logo" />
                        <Image src={YeezusBrand} alt="Yeezus brand logo" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BrandSection
