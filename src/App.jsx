import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PageTransition from './components/PageTransition'; 
import Contact from './pages/Contact';
import About from './pages/About';
import { AuthProvider } from './services/authContext/AuthContext';

export default function App() {
    return (
        <AuthProvider>
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
            </Routes>
        </Router>
        </AuthProvider>
       
    );
}