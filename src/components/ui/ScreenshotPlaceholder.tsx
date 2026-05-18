import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';

interface ScreenshotPlaceholderProps {
  label?: string;
}

export default function ScreenshotPlaceholder({
  label = 'Add Winly screenshot here',
}: ScreenshotPlaceholderProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: { xs: 220, md: 320 },
        borderRadius: 2,
        border: '2px dashed',
        borderColor: 'divider',
        bgcolor: 'action.hover',
        p: 3,
        textAlign: 'center',
      }}
    >
      <ImageOutlinedIcon sx={{ fontSize: 48, color: 'text.secondary', mb: 1 }} />
      <Typography variant="body2" color="text.secondary">
        {label}
      </Typography>
    </Box>
  );
}
