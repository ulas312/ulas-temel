import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { about } from '../../content/siteContent';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import { proseMaxWidth } from '../../theme/theme';

export default function AboutSection() {
  return (
    <Section alt centered>
      <SectionHeading title={about.title} />
      <Stack spacing={3} sx={{ maxWidth: proseMaxWidth, mx: 'auto', textAlign: 'left', width: '100%' }}>
        {about.paragraphs.map((paragraph) => (
          <Typography key={paragraph.slice(0, 40)} variant="body1">
            {paragraph}
          </Typography>
        ))}
      </Stack>
    </Section>
  );
}
