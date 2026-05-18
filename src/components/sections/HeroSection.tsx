import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { hero } from '../../content/siteContent';
import { scrollToSection } from '../../utils/scrollToSection';
import StatusChip from '../ui/StatusChip';
import { cardSx, sectionPy } from '../../theme/theme';

export default function HeroSection() {
  const { previewCard } = hero;

  return (
    <Box component="section" sx={{ py: sectionPy, pt: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
          <Grid item xs={12} md={7}>
            <Stack spacing={3}>
              <Typography variant="h1" component="h1">
                {hero.headline}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {hero.subheading}
              </Typography>
              <Stack direction="row" flexWrap="wrap" gap={1}>
                {hero.roles.map((role) => (
                  <Chip key={role} label={role} size="small" color="primary" variant="outlined" />
                ))}
              </Stack>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
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
                >
                  Get in Touch
                </Button>
              </Stack>
              <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic' }}>
                {hero.winlyNote}
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} md={5}>
            <Card sx={cardSx}>
              <CardContent sx={{ p: 0, '&:last-child': { pb: 0 } }}>
                <Stack spacing={2}>
                  <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <Typography variant="h3">{previewCard.name}</Typography>
                    <StatusChip status={previewCard.status} />
                  </Stack>
                  <Chip label={previewCard.type} size="small" color="primary" />
                  <Stack direction="row" flexWrap="wrap" gap={1}>
                    {previewCard.tags.map((tag) => (
                      <Chip key={tag} label={tag} size="small" variant="outlined" />
                    ))}
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
