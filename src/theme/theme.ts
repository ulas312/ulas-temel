import { createTheme } from '@mui/material/styles';

export type ColorMode = 'light' | 'dark';

const blue = {
  main: '#2563EB',
  light: '#3B82F6',
  dark: '#1D4ED8',
  soft: '#EFF6FF',
};

const getDesignTokens = (mode: ColorMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          primary: blue,
          secondary: { main: '#0F172A' },
          background: {
            default: '#FFFFFF',
            paper: '#FFFFFF',
          },
          text: {
            primary: '#0F172A',
            secondary: '#475569',
          },
          divider: '#E2E8F0',
        }
      : {
          primary: { main: '#60A5FA', light: '#93C5FD', dark: '#2563EB' },
          secondary: { main: '#F8FAFC' },
          background: {
            default: '#0B1220',
            paper: '#111827',
          },
          text: {
            primary: '#F8FAFC',
            secondary: '#94A3B8',
          },
          divider: '#1E293B',
        }),
  },
  typography: {
    fontFamily: '"Nunito Sans", "Plus Jakarta Sans", "Helvetica", sans-serif',
    h1: {
      fontWeight: 800,
      fontSize: '2rem',
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
      color: mode === 'light' ? '#0F172A' : '#F8FAFC',
      '@media (min-width:600px)': { fontSize: '2.75rem' },
      '@media (min-width:900px)': { fontSize: '3.25rem' },
    },
    h2: {
      fontWeight: 800,
      fontSize: '1.5rem',
      lineHeight: 1.25,
      '@media (min-width:600px)': { fontSize: '2rem' },
    },
    h3: {
      fontWeight: 700,
      fontSize: '1.25rem',
      lineHeight: 1.35,
    },
    h4: {
      fontWeight: 700,
      fontSize: '1.05rem',
    },
    body1: {
      fontSize: '1.0625rem',
      lineHeight: 1.75,
      color: mode === 'light' ? '#475569' : '#94A3B8',
    },
    body2: {
      fontSize: '0.9375rem',
      lineHeight: 1.65,
    },
  },
  shape: { borderRadius: 8 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 700,
          borderRadius: 999,
          padding: '12px 28px',
          boxShadow: 'none',
          '&:hover': { boxShadow: 'none' },
        },
        contained: {
          '&:hover': {
            backgroundColor: blue.dark,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          border: '1px solid',
          borderColor: mode === 'light' ? '#E2E8F0' : '#1E293B',
          boxShadow: 'none',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: { fontWeight: 600, borderRadius: 6 },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: { backgroundImage: 'none', boxShadow: 'none' },
      },
    },
  },
});

export const createAppTheme = (mode: ColorMode) =>
  createTheme(getDesignTokens(mode));

export const sectionPy = { xs: 7, sm: 9, md: 11 };

export const containerPx = { xs: 2.5, sm: 3 };

/** Main page width — lg (~1200px) on desktop; full width on mobile */
export const layoutMaxWidth = 'lg' as const;

/** Readable text blocks scale up on large screens only */
export const proseMaxWidth = {
  xs: '100%',
  md: 640,
  lg: 820,
  xl: 920,
};

export const contentMaxWidth = {
  xs: '100%',
  lg: 900,
  xl: 1000,
};

export const sectionBand = {
  alt: (mode: ColorMode) =>
    mode === 'light' ? '#F8FAFC' : '#0F172A',
};

export const cardSx = {
  p: { xs: 3, md: 4 },
  height: '100%',
};
