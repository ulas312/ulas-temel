import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { otherProjects } from '../../content/siteContent';
import SectionHeading from '../ui/SectionHeading';
import ProjectCard from '../ui/ProjectCard';
import { sectionPy } from '../../theme/theme';

export default function OtherBuildsSection() {
  return (
    <Box
      component="section"
      sx={{ py: sectionPy, bgcolor: 'background.paper', pb: { xs: 8, md: 10 } }}
    >
      <Container maxWidth="lg">
        <SectionHeading
          title="Other Builds & Experiments"
          subtitle="Active experiments and product ideas — direction and product thinking, not full case studies."
        />
        <Grid container spacing={3}>
          {otherProjects.map((project) => (
            <Grid item xs={12} md={4} key={project.name}>
              <ProjectCard project={project} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
