import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Stack from '@mui/material/Stack';
import { OtherProject } from '../../content/siteContent';
import StatusChip from './StatusChip';
import SkillChips from './SkillChips';
import { cardSx } from '../../theme/theme';

interface ProjectCardProps {
  project: OtherProject;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card sx={{ height: '100%', ...cardSx }}>
      <CardContent sx={{ p: 0, '&:last-child': { pb: 0 } }}>
        <Stack spacing={2} sx={{ height: '100%' }}>
          <Stack direction="row" alignItems="center" justifyContent="space-between" gap={1}>
            <Typography variant="h3" component="h3">
              {project.name}
            </Typography>
            <StatusChip status={project.status} />
          </Stack>
          <Typography variant="body2" color="text.secondary" sx={{ flexGrow: 1 }}>
            {project.description}
          </Typography>
          <SkillChips skills={project.tech} />
          {project.cta && (
            <Tooltip title={project.cta.tooltip ?? ''} disableHoverListener={!project.cta.tooltip}>
              <span>
                <Button
                  variant="outlined"
                  size="small"
                  disabled={project.cta.disabled}
                  fullWidth
                >
                  {project.cta.label}
                </Button>
              </span>
            </Tooltip>
          )}
        </Stack>
      </CardContent>
    </Card>
  );
}
