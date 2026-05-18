import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { hero } from '../../content/siteContent';
import { scrollToSection } from '../../utils/scrollToSection';
import Section from '../ui/Section';
import profilePic from '../../assets/profile-pic.png';

export default function HeroSection() {
  return (
    <Section
      sx={{
        pt: { xs: 8, md: 12 },
        pb: { xs: 7, md: 10 },
        textAlign: 'center',
      }}
    >
      <Stack spacing={3} alignItems="center" sx={{ maxWidth: 720, mx: 'auto' }}>
        <Avatar
          src={profilePic}
          alt="Ulas Temel"
          sx={{
            width: { xs: 120, md: 150 },
            height: { xs: 120, md: 150 },
            border: 4,
            borderColor: 'primary.main',
            boxShadow: '0 12px 40px rgba(37, 99, 235, 0.25)',
          }}
        />
        <Box>
          <Typography variant="h1" component="h1" gutterBottom>
            {hero.title}
          </Typography>
          <Typography
            variant="h2"
            component="p"
            sx={{
              fontWeight: 400,
              fontSize: { xs: '1.1rem', sm: '1.35rem', md: '1.5rem' },
              color: 'text.secondary',
              lineHeight: 1.6,
            }}
          >
            {hero.tagline}
          </Typography>
        </Box>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ pt: 1 }}>
          <Button
            variant="contained"
            size="large"
            onClick={() => scrollToSection('projects')}
          >
            View Projects
          </Button>
          <Button
            variant="outlined"
            size="large"
            onClick={() => scrollToSection('contact')}
            sx={{
              borderWidth: 2,
              '&:hover': { borderWidth: 2 },
            }}
          >
            Say Hello
          </Button>
        </Stack>
      </Stack>
    </Section>
  );
}
