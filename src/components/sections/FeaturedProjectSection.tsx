import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { winly } from '../../content/siteContent';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import SkillChips from '../ui/SkillChips';
import StatusChip from '../ui/StatusChip';
import { cardSx } from '../../theme/theme';

export default function FeaturedProjectSection() {
  const linkEntries = [
    winly.links.website,
    winly.links.chromeStore,
    winly.links.github,
  ];

  return (
    <Section centered>
      <SectionHeading
        title="Featured Project"
        subtitle="A practical Chrome extension I built to solve my own browser workflow — now a live product."
      />
      <Card sx={{ ...cardSx, maxWidth: 720, mx: 'auto', textAlign: 'left' }}>
        <CardContent sx={{ p: 0, '&:last-child': { pb: 0 } }}>
          <Stack spacing={2.5}>
            <Stack direction="row" alignItems="center" spacing={2} flexWrap="wrap">
              <Typography variant="h3" component="h3" sx={{ color: 'text.primary' }}>
                {winly.name}
              </Typography>
              <StatusChip status={winly.status} />
            </Stack>
            <Typography variant="body1">{winly.tagline}</Typography>
            <Typography variant="body1">{winly.description}</Typography>
            <Box>
              <Typography variant="h4" sx={{ color: 'text.primary', mb: 1 }}>
                Tech
              </Typography>
              <SkillChips skills={winly.tech} />
            </Box>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
              {linkEntries.map((link) => (
                <Button
                  key={link.label}
                  variant="contained"
                  size="medium"
                  disabled={link.isPlaceholder || !link.href}
                  href={link.isPlaceholder ? undefined : link.href}
                  target={link.isPlaceholder ? undefined : '_blank'}
                  rel={link.isPlaceholder ? undefined : 'noopener noreferrer'}
                  component={link.isPlaceholder ? 'button' : 'a'}
                  endIcon={!link.isPlaceholder ? <OpenInNewIcon /> : undefined}
                  sx={{ flex: { sm: 1 } }}
                >
                  {link.isPlaceholder ? `${link.label} (soon)` : link.label}
                </Button>
              ))}
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </Section>
  );
}
