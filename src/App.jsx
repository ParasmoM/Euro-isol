import { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import PageHome from './pages/home/PageHome'
import PageContact from './pages/contact/PageContact';
import PageCatalog from './pages/catalog/PageCatalog';
import { PageAbout } from './pages/about/PageAbout';
import ProductDetailView from './pages/catalog/partials/ProductDetailView';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import dataBase from './data/infoData.json';
import { LanguageContext, LanguageProvider } from './context/LanguageContext';
import PageLegal from './pages/mention/PageLegal';

function App() {
    const data = dataBase;

    return (
        <LanguageProvider>
            <AppContent data={data} />
        </LanguageProvider>
    );
}

function AppContent({ data }) {
    const { currentLang } = useContext(LanguageContext);
    const routes = [
        { path: '/', element: <PageHome data={data["pageHome"]} lang={currentLang} /> },
        { path: '/home', element: <PageHome data={data["pageHome"]} lang={currentLang} /> },
        { path: '/contact', element: <PageContact /> },
        { path: '/catalog', element: <PageCatalog /> },
        { path: '/about', element: <PageAbout data={data["pageAbout"]} lang={currentLang} /> },
        { path: '/detail', element: <ProductDetailView /> },
        { path: '/legal-notice', element: <PageLegal data={data["legalNotice"]} lang={currentLang} /> },
    ];

    return (
        <Router>
            <header className="header">
                <Header data={data["header"]} />
            </header>

            <Routes>
                {routes.map((route, index) => (
                    <Route key={index} path={route.path} element={route.element} />
                ))}
            </Routes>

            <footer className='footer'>
                <Footer data={data} lang={currentLang} />
            </footer>
        </Router>
    );
}

export default App
