import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import Navbar from '../components/navbar/Navbar';
import Footer from "../components/shared/Footer";
import Hero from '../components/Hero/Hero';

export default function Home() {
    const { t } = useTranslation();

    return (
        <>
            <Helmet>
                <title>{t('home.meta.title')}</title>
                <meta name="description" content={t('home.meta.description')} />
                <meta name="keywords" content={t('home.meta.keywords')} />
                <html lang={t('home.meta.lang')} />
            </Helmet>
            <div className="bg-gradient-to-b from-blue-50 to-indigo-50">
                <Navbar />
                <Hero />
                <div className="items-center justify-center"></div>
                <Footer />
            </div>
        </>
    );
}