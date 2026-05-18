import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { contact, siteMeta } from '../../content/siteContent';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import EmailForm from '../common/EmailForm';

export default function ContactSection() {
  return (
    <Section centered>
      <SectionHeading title={contact.title} subtitle={contact.copy} />
      <Stack spacing={2} alignItems="center">
        <Button
          variant="contained"
          size="large"
          startIcon={<EmailOutlinedIcon />}
          href={`mailto:${siteMeta.email}`}
        >
          {contact.cta}
        </Button>
        <Typography variant="body2" color="text.secondary">
          {siteMeta.location}
        </Typography>
        {siteMeta.showEmailForm && (
          <Stack sx={{ mt: 4, width: '100%', maxWidth: 480 }}>
            <EmailForm />
          </Stack>
        )}
      </Stack>
    </Section>
  );
}
