import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>TechLink - Your Partner in Digital Transformation</title>
        <meta 
          name="description" 
          content="We provide expert cloud, data, and digital experience solutions to accelerate your business growth, enhance efficiency, and foster innovation." 
        />
        <meta property="og:title" content="TechLink - Your Partner in Digital Transformation" />
        <meta property="og:description" content="Expert cloud, data, and digital experience solutions for your business." />
        <meta property="og:type" content="website" />
      </Helmet>
      <Hero />
      <Services />
      <Features />
      <Testimonials />
      <CTA />
    </>
  );
};

export default Home;

