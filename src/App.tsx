import Layout from './components/layout/Layout';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import SkillsSection from './components/sections/SkillsSection';
import FeaturedProjectSection from './components/sections/FeaturedProjectSection';
import OtherBuildsSection from './components/sections/OtherBuildsSection';
import QASection from './components/sections/QASection';
import ContactSection from './components/sections/ContactSection';
import { ColorModeProvider } from './theme/ColorModeContext';

function App() {
  return (
    <ColorModeProvider>
      <Layout header={<Header />} footer={<Footer />}>
        <div id="hero">
          <HeroSection />
        </div>
        <div id="about">
          <AboutSection />
        </div>
        <div id="skills">
          <SkillsSection />
        </div>
        <div id="projects">
          <FeaturedProjectSection />
          <OtherBuildsSection />
        </div>
        <div id="qa">
          <QASection />
        </div>
        <div id="contact">
          <ContactSection />
        </div>
      </Layout>
    </ColorModeProvider>
  );
}

export default App;
