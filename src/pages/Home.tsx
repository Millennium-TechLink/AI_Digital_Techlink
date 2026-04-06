import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import Services from '../components/Services';
import LabSearchSection from '../components/LabSearchSection';
import Features from '../components/Features';
// import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>TechLink - Explore the right labs near you</title>
        <meta 
          name="description" 
          content="We provide expert design verification & validation and pre-compliance testing services to ensure reliability, enhance product quality, and accelerate your development lifecycle." 
        />
        <meta property="og:title" content="TechLink - Explore the right labs near you" />
        <meta property="og:description" content="Expert design verification & validation and pre-compliance testing services for your business." />
        <meta property="og:type" content="website" />
      </Helmet>
      <Hero />
      <Services />
      <LabSearchSection />
      <Features />
      {/* <Testimonials /> */}
      <CTA />
    </>
  );
};

export default Home;

