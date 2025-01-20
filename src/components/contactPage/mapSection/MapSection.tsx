import styles from './MapSection.module.css'

const MapSection = () => {
    return (
        <section className={styles.section}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4018.32389381542!2d-73.98875528770783!3d40.748866235237394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a90897ddaf%3A0x5fd95bb4ffa32d23!2s20%20W%2034th%20St.%2C%20New%20York%2C%20NY%2010118%2C%20Stany%20Zjednoczone!5e1!3m2!1spl!2spl!4v1737395286021!5m2!1spl!2spl"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className={styles.googleMap}
                title="Mapa z googlemaps z lokalizacją firmy"
            />
        </section>
    )
}

export default MapSection
