import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';

interface SkillChipsProps {
  skills: string[];
}

export default function SkillChips({ skills }: SkillChipsProps) {
  return (
    <Stack direction="row" flexWrap="wrap" gap={1}>
      {skills.map((skill) => (
        <Chip key={skill} label={skill} size="small" variant="outlined" />
      ))}
    </Stack>
  );
}
