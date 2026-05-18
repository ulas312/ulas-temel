import { ReactNode } from 'react';
import Box from '@mui/material/Box';

interface LayoutProps {
  header: ReactNode;
  children: ReactNode;
}

export default function Layout({ header, children }: LayoutProps) {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      {header}
      <Box component="main">{children}</Box>
    </Box>
  );
}
