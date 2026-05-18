import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import CheckIcon from '@mui/icons-material/Check';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { winly } from '../../content/siteContent';
import SectionHeading from '../ui/SectionHeading';
import SkillChips from '../ui/SkillChips';
import StatusChip from '../ui/StatusChip';
import ScreenshotPlaceholder from '../ui/ScreenshotPlaceholder';
import { sectionPy } from '../../theme/theme';

export default function FeaturedProjectSection() {
  const linkEntries = [
    winly.links.website,
    winly.links.chromeStore,
    winly.links.github,
  ];

  return (
    <Box component="section" sx={{ py: sectionPy }}>
      <Container maxWidth="lg">
        <SectionHeading
          title="Featured Project"
          subtitle={winly.tagline}
        />
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="flex-start">
          <Grid item xs={12} md={6}>
            <Stack spacing={3}>
              <Stack direction="row" alignItems="center" spacing={2}>
                <Typography variant="h2" component="h3">
                  {winly.name}
                </Typography>
                <StatusChip status={winly.status} size="medium" />
              </Stack>
              <Typography variant="body1" color="text.secondary">
                {winly.description}
              </Typography>
              <Box>
                <Typography variant="h4" gutterBottom>
                  Key features
                </Typography>
                <List dense disablePadding>
                  {winly.features.map((feature) => (
                    <ListItem key={feature} disableGutters sx={{ py: 0.5 }}>
                      <ListItemIcon sx={{ minWidth: 32 }}>
                        <CheckIcon color="primary" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary={feature} />
                    </ListItem>
                  ))}
                </List>
              </Box>
              <Box>
                <Typography variant="h4" gutterBottom sx={{ mb: 1.5 }}>
                  Tech
                </Typography>
                <SkillChips skills={winly.tech} />
              </Box>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} flexWrap="wrap">
                {linkEntries.map((link) => (
                  <Button
                    key={link.label}
                    variant="outlined"
                    endIcon={!link.isPlaceholder ? <OpenInNewIcon /> : undefined}
                    disabled={link.isPlaceholder || !link.href}
                    href={link.isPlaceholder ? undefined : link.href}
                    target={link.isPlaceholder ? undefined : '_blank'}
                    rel={link.isPlaceholder ? undefined : 'noopener noreferrer'}
                    component={link.isPlaceholder ? 'button' : 'a'}
                    aria-label={
                      link.isPlaceholder
                        ? `${link.label} — link coming soon`
                        : link.label
                    }
                  >
                    {link.isPlaceholder ? `${link.label} (coming soon)` : link.label}
                  </Button>
                ))}
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <ScreenshotPlaceholder />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
