import { Playfair_Display } from 'next/font/google'

import Navigation from '../components/navigation/Navigation'
import Footer from '../components/footer/Footer'

import '../styles/globals.css'

const playfair = Playfair_Display({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700', '900'],
    style: ['normal', 'italic'],
})

export const metadata = {
    title: 'ASGeodezja | Usługi geodezyjne',
    description:
        'Świadczymy najwyższej jakości usługi geodezyjne - mapy, inwentaryzacje, wytyczenia, podziały. Oferujemy atrakcyjne ceny, rzetelność i pełny profesjonalizm.',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" className={playfair.className}>
            <body>
                <Navigation />
                {children}
                <Footer />
            </body>
        </html>
    )
}
