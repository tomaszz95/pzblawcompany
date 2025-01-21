import Header from '../components/header/Header'

export const metadata = {
    title: 'PZB Law Firm | Not Found',
    description:
        'Świadczymy najwyższej jakości usługi geodezyjne - mapy, inwentaryzacje, wytyczenia, podziały. Oferujemy atrakcyjne ceny, rzetelność i pełny profesjonalizm.',
}

const NotFoundPage = () => {
    return (
        <main>
            <Header text="Ops... This site doesn't exist..." site="notfound" buttonText="Go to homepage" />
        </main>
    )
}

export default NotFoundPage
