import { Merriweather } from 'next/font/google'

import Footer from '../components/footer/Footer'

import '../styles/globals.css'

const merriweather = Merriweather({
    subsets: ['latin'],
    weight: ['300', '400', '700', '900'],
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
        <html lang="en" className={merriweather.className}>
            <body>
                {children}
                <Footer />
            </body>
        </html>
    )
}
