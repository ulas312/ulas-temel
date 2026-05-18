import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { qa } from '../../content/siteContent';
import SectionHeading from '../ui/SectionHeading';
import { sectionPy } from '../../theme/theme';

export default function QASection() {
  return (
    <Box component="section" sx={{ py: sectionPy }}>
      <Container maxWidth="lg">
        <SectionHeading title={qa.title} />
        <Grid container spacing={4}>
          <Grid item xs={12} md={7}>
            <Typography variant="body1" color="text.secondary" paragraph>
              {qa.copy}
            </Typography>
            <List disablePadding>
              {qa.highlights.map((item) => (
                <ListItem key={item} disableGutters sx={{ py: 0.75, alignItems: 'flex-start' }}>
                  <ListItemIcon sx={{ minWidth: 28, mt: 0.75 }}>
                    <FiberManualRecordIcon sx={{ fontSize: 8 }} color="primary" />
                  </ListItemIcon>
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item xs={12} md={5}>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                borderRadius: 2,
                border: 1,
                borderColor: 'divider',
                bgcolor: 'background.paper',
                position: 'relative',
              }}
            >
              <FormatQuoteIcon
                sx={{
                  position: 'absolute',
                  top: 16,
                  left: 16,
                  fontSize: 32,
                  color: 'primary.main',
                  opacity: 0.4,
                }}
              />
              <Typography
                variant="body1"
                sx={{ pl: 2, fontStyle: 'italic', color: 'text.secondary' }}
              >
                {qa.quote}
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
