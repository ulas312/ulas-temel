import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export default function SectionHeading({
  title,
  subtitle,
  align = 'center',
}: SectionHeadingProps) {
  return (
    <Box
      sx={{
        mb: { xs: 4, md: 6 },
        textAlign: align,
        maxWidth: align === 'center' ? 640 : 'none',
        mx: align === 'center' ? 'auto' : 0,
      }}
    >
      <Typography
        variant="h2"
        component="h2"
        sx={{ color: 'text.primary', mb: subtitle ? 1.5 : 0 }}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography variant="body1" sx={{ maxWidth: 520, mx: align === 'center' ? 'auto' : 0 }}>
          {subtitle}
        </Typography>
      )}
    </Box>
  );
}
