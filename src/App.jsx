import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PageTransition from './components/shared/PageTransition'; 
import Contact from './pages/Contact';
import About from './pages/About';
import Philosophy from './pages/Philosophy'
import CompanyInfo from './pages/CompanyInfo';
import CeoGreeting from './pages/CeoGreeting';
import Service from './pages/Service';
import Teams from './pages/Teams';
import Student from './pages/Student';
import CompanyContact from './pages/CompanyContact';
import TranslationService from './pages/TranslationService';

export default function App() {
    return (
            <Router>
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
                    path="/about"
                    element={
                        <PageTransition>
                            <About />
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
            </Routes>
        </Router>
       
    );
}