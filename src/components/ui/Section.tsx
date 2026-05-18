import { ReactNode } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { sectionPy, containerPx, sectionBand, layoutMaxWidth } from '../../theme/theme';
import { useColorMode } from '../../theme/ColorModeContext';

interface SectionProps {
  children: ReactNode;
  id?: string;
  alt?: boolean;
  centered?: boolean;
  sx?: object;
}

export default function Section({
  children,
  id,
  alt = false,
  centered = false,
  sx,
}: SectionProps) {
  const { mode } = useColorMode();

  return (
    <Box
      component="section"
      id={id}
      sx={{
        py: sectionPy,
        bgcolor: alt ? sectionBand.alt(mode) : 'background.default',
        scrollMarginTop: { xs: '4.5rem', md: '5rem' },
        textAlign: centered ? 'center' : 'left',
        ...sx,
      }}
    >
      <Container
        maxWidth={layoutMaxWidth}
        sx={{
          px: containerPx,
          ...(centered && {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }),
        }}
      >
        {children}
      </Container>
    </Box>
  );
}
