import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { qa } from '../../content/siteContent';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import { proseMaxWidth } from '../../theme/theme';

export default function QASection() {
  return (
    <Section alt centered>
      <SectionHeading title={qa.title} subtitle={qa.copy} />
      <Box sx={{ maxWidth: proseMaxWidth, width: '100%', mx: 'auto', textAlign: 'left' }}>
        <List disablePadding>
          {qa.highlights.map((item) => (
            <ListItem key={item} disableGutters sx={{ py: 0.75, alignItems: 'flex-start' }}>
              <ListItemIcon sx={{ minWidth: 28, mt: 0.75 }}>
                <FiberManualRecordIcon sx={{ fontSize: 8 }} color="primary" />
              </ListItemIcon>
              <ListItemText primary={item} primaryTypographyProps={{ variant: 'body1' }} />
            </ListItem>
          ))}
        </List>
        <Typography
          variant="body1"
          sx={{
            mt: 4,
            fontStyle: 'italic',
            textAlign: 'center',
            color: 'primary.main',
            fontWeight: 600,
          }}
        >
          “{qa.quote}”
        </Typography>
      </Box>
    </Section>
  );
}
