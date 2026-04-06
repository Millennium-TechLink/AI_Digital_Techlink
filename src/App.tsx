import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition';
import Home from './pages/Home';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import About from './pages/About';
import Industries from './pages/Industries';
import IndustryDetail from './pages/IndustryDetail';
import Blog from './pages/Blog';
import CaseStudies from './pages/CaseStudies';
import Whitepapers from './pages/Whitepapers';
import Webinars from './pages/Webinars';
import Insights from './pages/Insights';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CookiePolicy from './pages/CookiePolicy';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const location = useLocation();
  const isCMSRoute = location.pathname === '/signin' || location.pathname === '/dashboard';

  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      {!isCMSRoute && <Navbar />}
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageTransition>
                  <Home />
                </PageTransition>
              }
            />
            <Route
              path="/services"
              element={
                <PageTransition>
                  <Services />
                </PageTransition>
              }
            />
            <Route
              path="/services/:slug"
              element={
                <PageTransition>
                  <ServiceDetail />
                </PageTransition>
              }
            />
            <Route
              path="/products"
              element={
                <PageTransition>
                  <ProductsPage />
                </PageTransition>
              }
            />
            <Route
              path="/products/:productSlug"
              element={
                <PageTransition>
                  <ProductDetailPage />
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
              path="/industries"
              element={
                <PageTransition>
                  <Industries />
                </PageTransition>
              }
            />
            <Route
              path="/industries/:slug"
              element={
                <PageTransition>
                  <IndustryDetail />
                </PageTransition>
              }
            />
            <Route
              path="/blog"
              element={
                <PageTransition>
                  <Blog />
                </PageTransition>
              }
            />
            <Route
              path="/case-studies"
              element={
                <PageTransition>
                  <CaseStudies />
                </PageTransition>
              }
            />
            <Route
              path="/whitepapers"
              element={
                <PageTransition>
                  <Whitepapers />
                </PageTransition>
              }
            />
            <Route
              path="/webinars"
              element={
                <PageTransition>
                  <Webinars />
                </PageTransition>
              }
            />
            <Route
              path="/insights"
              element={
                <PageTransition>
                  <Insights />
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
              path="/privacy-policy"
              element={
                <PageTransition>
                  <PrivacyPolicy />
                </PageTransition>
              }
            />
            <Route
              path="/terms-of-service"
              element={
                <PageTransition>
                  <TermsOfService />
                </PageTransition>
              }
            />
            <Route
              path="/cookie-policy"
              element={
                <PageTransition>
                  <CookiePolicy />
                </PageTransition>
              }
            />
            <Route
              path="/signin"
              element={<SignIn />}
            />
            <Route
              path="/dashboard"
              element={<Dashboard />}
            />
          </Routes>
        </AnimatePresence>
      </main>
      {!isCMSRoute && <Footer />}
    </div>
  );
}

export default App;

