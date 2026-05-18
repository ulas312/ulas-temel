import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { skillGroups } from '../../content/siteContent';
import SectionHeading from '../ui/SectionHeading';
import SkillChips from '../ui/SkillChips';
import { cardSx, sectionPy } from '../../theme/theme';

export default function SkillsSection() {
  return (
    <Box component="section" sx={{ py: sectionPy, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <SectionHeading
          title="Skills & Tools"
          subtitle="Grouped by area — tools I use to build and ship reliable products."
        />
        <Grid container spacing={3}>
          {skillGroups.map((group) => (
            <Grid item xs={12} sm={6} key={group.title}>
              <Card sx={{ height: '100%', ...cardSx }}>
                <CardContent sx={{ p: 0, '&:last-child': { pb: 0 } }}>
                  <Typography variant="h4" gutterBottom>
                    {group.title}
                  </Typography>
                  <SkillChips skills={group.skills} />
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
