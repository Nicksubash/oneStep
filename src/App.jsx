import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageTransition from './components/shared/PageTransition';
import LineContact from './components/shared/LineContact';
import LoadingSpinner from './components/shared/LoadingSpinner';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Lazy loaded components
const Home = lazy(() => import('./pages/Home'));
const Contact = lazy(() => import('./pages/Contact'));
const Philosophy = lazy(() => import('./pages/Philosophy'));
const CompanyInfo = lazy(() => import('./pages/CompanyInfo'));
const CeoGreeting = lazy(() => import('./pages/CeoGreeting'));
const Service = lazy(() => import('./pages/Service'));
const Teams = lazy(() => import('./pages/Teams'));
const Student = lazy(() => import('./pages/Student'));
const CompanyContact = lazy(() => import('./pages/CompanyContact'));
const TranslationService = lazy(() => import('./pages/TranslationService'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const Privacy = lazy(() => import('./pages/Privacy'));
const FAQPage = lazy(() => import('./pages/FAQPage'));
const RecruitmentPage = lazy(() => import('./pages/RecruitmentPage'));
const News = lazy(() => import('./pages/News'));
const VisaSupport = lazy(() => import('./pages/VisaSupport'));
const FoodHospitality = lazy(() => import('./pages/FoodHospitality'));
const NotFound = lazy(() => import('./pages/NotFound'));


export default function App() {
    return (
        <Router>
            <LineContact />
            <Suspense fallback={<LoadingSpinner />}>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <PageTransition>
                                <Home />
                            </PageTransition>
                        }
                    />
                    <Route
                        path="/contact"
                        element={
                            <PageTransition>
                                <Contact />
                            </PageTransition>
                        }
                    />
                    <Route
                        path="/philosophy"
                        element={
                            <PageTransition>
                                <Philosophy />
                            </PageTransition>
                        }
                    />
                    <Route
                        path="/company"
                        element={
                            <PageTransition>
                                <CompanyInfo />
                            </PageTransition>
                        }
                    />
                    <Route
                        path="/greeting"
                        element={
                            <PageTransition>
                                <CeoGreeting />
                            </PageTransition>
                        }
                    />
                    <Route
                        path="/services"
                        element={
                            <PageTransition>
                                <Service />
                            </PageTransition>
                        }
                    />
                    <Route
                        path="/teams"
                        element={
                            <PageTransition>
                                <Teams />
                            </PageTransition>
                        }
                    />
                    <Route
                        path="/company-contact"
                        element={
                            <PageTransition>
                                <CompanyContact />
                            </PageTransition>
                        }
                    />
                    <Route
                        path="/students"
                        element={
                            <PageTransition>
                                <Student />
                            </PageTransition>
                        }
                    />
                    <Route
                        path="/translation"
                        element={
                            <PageTransition>
                                <TranslationService />
                            </PageTransition>
                        }
                    />
                    <Route
                        path="/privacy_policy"
                        element={
                            <PageTransition>
                                <PrivacyPolicy />
                            </PageTransition>
                        }
                    />
                    <Route
                        path="/privacy"
                        element={
                            <PageTransition>
                                <Privacy />
                            </PageTransition>
                        }
                    />
                    <Route
                        path="/faq"
                        element={
                            <PageTransition>
                                <FAQPage />
                            </PageTransition>
                        }
                    />
                    <Route
                        path="/recruitment"
                        element={
                            <PageTransition>
                                <RecruitmentPage />
                            </PageTransition>
                        }
                    />
                    <Route
                        path="/news"
                        element={
                            <PageTransition>
                                <News />
                            </PageTransition>
                        }
                    />
                    <Route
                        path="/visa-support"
                        element={
                            <PageTransition>
                                <VisaSupport />
                            </PageTransition>
                        }
                    />
                    <Route
                        path="/food-hospitality"
                        element={
                            <PageTransition>
                                <FoodHospitality />
                            </PageTransition>
                        }
                    />
                    {/* Fallback route */}
                    <Route
                        path="*"
                        element={
                            <PageTransition>
                                <NotFound />
                            </PageTransition>
                        }
                    />
                </Routes>
            </Suspense>
        </Router>

    );
}