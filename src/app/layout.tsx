import { Merriweather } from 'next/font/google'

import Footer from '../components/footer/Footer'

import '../styles/globals.css'

const merriweather = Merriweather({
    subsets: ['latin'],
    weight: ['300', '400', '700', '900'],
    style: ['normal', 'italic'],
})

export const metadata = {
    title: 'PZB Law Company | Homepage',
    description:
        'Providing exceptional legal services across various practice areas, including corporate law, family law, real estate, and litigation. Our team of experienced attorneys is dedicated to delivering tailored solutions with professionalism and integrity.',
}
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" className={merriweather.className}>
            <body>
                {children}
                <Footer />
            </body>
        </html>
    )
}
