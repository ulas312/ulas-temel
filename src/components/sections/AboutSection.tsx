import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { about } from '../../content/siteContent';
import SectionHeading from '../ui/SectionHeading';
import { sectionPy } from '../../theme/theme';

export default function AboutSection() {
  return (
    <Box component="section" sx={{ py: sectionPy, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <SectionHeading title="About" />
        <Grid container spacing={4}>
          <Grid item xs={12} md={7}>
            <Stack spacing={2}>
              {about.paragraphs.map((paragraph) => (
                <Typography key={paragraph.slice(0, 40)} variant="body1" color="text.secondary">
                  {paragraph}
                </Typography>
              ))}
            </Stack>
          </Grid>
          <Grid item xs={12} md={5}>
            <List disablePadding>
              {about.keyPoints.map((point) => (
                <ListItem key={point} disableGutters sx={{ py: 0.75 }}>
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    <CheckCircleOutlineIcon color="primary" fontSize="small" />
                  </ListItemIcon>
                  <ListItemText
                    primary={point}
                    primaryTypographyProps={{ variant: 'body1' }}
                  />
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
