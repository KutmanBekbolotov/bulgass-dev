import { LanguageProvider } from './language-config/LanguageContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import MainSection from './components/MainSection';
import Footer from './components/Footer';
import AboutUs from './pages/About';
import Blog from './pages/Blog';
import DevelopmentPage from './pages/Development';

const App = () => {
  return (
    <LanguageProvider>
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<MainSection />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/development" element={<DevelopmentPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
    </LanguageProvider>

  );
};

export default App;
