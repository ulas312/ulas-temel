import Chip from '@mui/material/Chip';
import { ProjectStatus } from '../../content/siteContent';

const labels: Record<ProjectStatus, string> = {
  live: 'Live',
  prototype: 'Prototype',
  concept: 'Concept',
  in_progress: 'In progress',
};

const colors: Record<
  ProjectStatus,
  'success' | 'warning' | 'info' | 'default'
> = {
  live: 'success',
  prototype: 'warning',
  concept: 'info',
  in_progress: 'default',
};

interface StatusChipProps {
  status: ProjectStatus;
  size?: 'small' | 'medium';
}

export default function StatusChip({ status, size = 'small' }: StatusChipProps) {
  return (
    <Chip
      label={labels[status]}
      color={colors[status]}
      size={size}
      variant="outlined"
    />
  );
}
