import Grid from '@mui/material/Grid';
import BuildCircleOutlinedIcon from '@mui/icons-material/BuildCircleOutlined';
import BugReportOutlinedIcon from '@mui/icons-material/BugReportOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import { pillars } from '../../content/siteContent';
import Section from '../ui/Section';
import PillarCard, { Pillar } from '../ui/PillarCard';

const icons = [
  <BuildCircleOutlinedIcon key="build" sx={{ fontSize: 40 }} />,
  <BugReportOutlinedIcon key="qa" sx={{ fontSize: 40 }} />,
  <CodeOutlinedIcon key="code" sx={{ fontSize: 40 }} />,
];

export default function SkillsSection() {
  const pillarData: Pillar[] = pillars.map((p, i) => ({
    ...p,
    icon: icons[i],
  }));

  return (
    <Section>
      <Grid container spacing={3}>
        {pillarData.map((pillar) => (
          <Grid item xs={12} md={4} key={pillar.title}>
            <PillarCard pillar={pillar} />
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}
