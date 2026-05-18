import Grid from '@mui/material/Grid';
import { otherProjects } from '../../content/siteContent';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import ProjectCard from '../ui/ProjectCard';

export default function OtherBuildsSection() {
  return (
    <Section alt centered>
      <SectionHeading
        title="Other Builds & Experiments"
        subtitle="Product ideas and prototypes — direction and thinking, not full case studies."
      />
      <Grid container spacing={3} sx={{ maxWidth: 960, mx: 'auto' }}>
        {otherProjects.map((project) => (
          <Grid item xs={12} sm={6} lg={4} key={project.name}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}
