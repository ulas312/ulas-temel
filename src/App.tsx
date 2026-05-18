import Box from '@mui/material/Box';
import Layout from './components/layout/Layout';
import Header from './components/layout/Header';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import FeaturedProjectSection from './components/sections/FeaturedProjectSection';
import OtherBuildsSection from './components/sections/OtherBuildsSection';
import QASection from './components/sections/QASection';
import SkillsSection from './components/sections/SkillsSection';
import ContactSection from './components/sections/ContactSection';
import { ColorModeProvider } from './theme/ColorModeContext';

function App() {
  return (
    <ColorModeProvider>
      <Layout header={<Header />}>
        <Box id="hero">
          <HeroSection />
        </Box>
        <Box id="about">
          <AboutSection />
        </Box>
        <Box id="projects">
          <FeaturedProjectSection />
          <OtherBuildsSection />
        </Box>
        <Box id="qa">
          <QASection />
        </Box>
        <Box id="skills">
          <SkillsSection />
        </Box>
        <Box id="contact">
          <ContactSection />
        </Box>
      </Layout>
    </ColorModeProvider>
  );
}

export default App;
