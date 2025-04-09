import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import PageTransition from './components/PageTransition'; 
import Contact from './pages/Contact';
import About from './pages/About';

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
                    path="/projects"
                    element={
                        <PageTransition>
                            <Projects />
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
    );
}