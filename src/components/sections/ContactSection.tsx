import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { contact, siteMeta } from '../../content/siteContent';
import SectionHeading from '../ui/SectionHeading';
import EmailForm from '../common/EmailForm';
import { sectionPy } from '../../theme/theme';

export default function ContactSection() {
  return (
    <Box component="section" sx={{ py: sectionPy }}>
      <Container maxWidth="lg">
        <SectionHeading title={contact.title} subtitle={contact.copy} />
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          sx={{ mb: 5 }}
        >
          <Button
            variant="contained"
            size="large"
            startIcon={<EmailOutlinedIcon />}
            href={`mailto:${siteMeta.email}`}
          >
            Email me
          </Button>
          <Button
            variant="outlined"
            size="large"
            startIcon={<LinkedInIcon />}
            href={siteMeta.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </Button>
          <Button
            variant="outlined"
            size="large"
            startIcon={<GitHubIcon />}
            href={siteMeta.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Button>
        </Stack>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
          {siteMeta.location}
        </Typography>
        <EmailForm />
      </Container>
    </Box>
  );
}
