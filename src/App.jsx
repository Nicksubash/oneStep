import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import PageTransition from './components/PageTransition'; 
import Weather from './pages/Weather';
import Dictionary from './pages/Dictionary';
import Todo from './pages/Todo';
import Content from './pages/Content';
import Contact from './pages/Contact';
import About from './pages/About';
import WebProjects from './pages/WebProjects';
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
                    path="/About"
                    element={
                        <PageTransition>
                            <About />
                        </PageTransition>
                    }
                />
                <Route
                    path="/Weather"
                    element={
                        <PageTransition>
                            <Weather />
                        </PageTransition>
                    }
                />
                <Route path="/Dictionary" 
                element={ 
                    <PageTransition>
                        <Dictionary/>
                    </PageTransition>
                }
                />

                <Route path='/Todo'
                element ={
                    <PageTransition>
                        <Todo/>
                    </PageTransition>
                }
                />

                <Route path='/Content'
                element={ 
                    <PageTransition>
                        <Content/>
                    </PageTransition>
                }/>
                <Route path="/Contact"
                element={
                    <Contact/>
                } />

                <Route path='/WebProjects'
                element={
                    <WebProjects/>
                }>

                </Route>
                
            </Routes>
        </Router>
    );
}
