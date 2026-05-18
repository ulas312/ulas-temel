import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { siteMeta } from '../../content/siteContent';
import { containerPx, layoutMaxWidth } from '../../theme/theme';
import { useColorMode } from '../../theme/ColorModeContext';
import { sectionBand } from '../../theme/theme';

export default function Footer() {
  const { mode } = useColorMode();

  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        bgcolor: sectionBand.alt(mode),
        borderTop: 1,
        borderColor: 'divider',
        textAlign: 'center',
      }}
    >
      <Container maxWidth={layoutMaxWidth} sx={{ px: containerPx }}>
        <Typography variant="body2" color="text.secondary">
          {siteMeta.name} · Building useful software, one experiment at a time.
        </Typography>
      </Container>
    </Box>
  );
}
