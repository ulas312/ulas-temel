import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import winlyScreenshot from '../../assets/winly-extension-ui.png';
import { winly } from '../../content/siteContent';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import SkillChips from '../ui/SkillChips';
import StatusChip from '../ui/StatusChip';
import { cardSx, contentMaxWidth } from '../../theme/theme';

export default function FeaturedProjectSection() {
  const linkEntries = [
    winly.links.website,
    winly.links.chromeStore,
  ];

  return (
    <Section centered>
      <SectionHeading
        title="Featured Project"
        subtitle="A practical Chrome extension I built to solve my own browser workflow — now a live product."
      />
      <Card sx={{ ...cardSx, maxWidth: contentMaxWidth, width: '100%', mx: 'auto', textAlign: 'left' }}>
        <CardContent sx={{ p: 0, '&:last-child': { pb: 0 } }}>
          <Grid container spacing={{ xs: 3, md: 4 }} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src={winlyScreenshot}
                alt="Winly Chrome extension interface showing saved browser sessions"
                sx={{
                  display: 'block',
                  width: '100%',
                  maxWidth: { xs: '100%', md: 520 },
                  mx: 'auto',
                  borderRadius: 2,
                  border: 1,
                  borderColor: 'divider',
                  boxShadow: '0 18px 45px rgba(15, 23, 42, 0.12)',
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
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
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      component="a"
                      endIcon={<OpenInNewIcon />}
                      sx={{ flex: { sm: 1 } }}
                    >
                      {link.label}
                    </Button>
                  ))}
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Section>
  );
}
