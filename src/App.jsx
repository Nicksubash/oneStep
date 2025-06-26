import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PageTransition from './components/shared/PageTransition'; 
import Contact from './pages/Contact';
import Philosophy from './pages/Philosophy'
import CompanyInfo from './pages/CompanyInfo';
import CeoGreeting from './pages/CeoGreeting';
import Service from './pages/Service';
import Teams from './pages/Teams';
import Student from './pages/Student';
import CompanyContact from './pages/CompanyContact';
import TranslationService from './pages/TranslationService';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Privacy from './pages/Privacy';
import '@fortawesome/fontawesome-free/css/all.min.css';
import FAQPage from './pages/FAQPage';
import RecruitmentPage from './pages/RecruitmentPage';
import News from './pages/News';
import LineContact from './components/shared/LineContact';


export default function App() {
    return (
            <Router>
            <LineContact />
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
            </Routes>
        </Router>
       
    );
}