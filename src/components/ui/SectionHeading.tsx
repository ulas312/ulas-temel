import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export default function SectionHeading({
  title,
  subtitle,
  align = 'left',
}: SectionHeadingProps) {
  return (
    <Box sx={{ mb: { xs: 4, md: 5 }, textAlign: align }}>
      <Typography variant="h2" component="h2" gutterBottom>
        {title}
      </Typography>
      {subtitle && (
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ maxWidth: align === 'center' ? 640 : 720, mx: align === 'center' ? 'auto' : 0 }}
        >
          {subtitle}
        </Typography>
      )}
      <Divider sx={{ mt: 3, maxWidth: 80 }} />
    </Box>
  );
}
