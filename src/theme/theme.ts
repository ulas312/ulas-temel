import { createTheme } from '@mui/material/styles';

export type ColorMode = 'light' | 'dark';

const getDesignTokens = (mode: ColorMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          primary: {
            main: '#0D7377',
            light: '#14A3A8',
            dark: '#095456',
          },
          secondary: {
            main: '#1A2332',
          },
          background: {
            default: '#F7F6F3',
            paper: '#FFFFFF',
          },
          text: {
            primary: '#1A2332',
            secondary: '#4A5568',
          },
          divider: 'rgba(26, 35, 50, 0.08)',
        }
      : {
          primary: {
            main: '#14A3A8',
            light: '#4ECDC4',
            dark: '#0D7377',
          },
          secondary: {
            main: '#E8E6E1',
          },
          background: {
            default: '#121820',
            paper: '#1A2332',
          },
          text: {
            primary: '#F7F6F3',
            secondary: '#A0AEC0',
          },
          divider: 'rgba(247, 246, 243, 0.12)',
        }),
  },
  typography: {
    fontFamily: '"Plus Jakarta Sans", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '2.5rem',
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
      '@media (min-width:900px)': {
        fontSize: '3rem',
      },
    },
    h2: {
      fontWeight: 700,
      fontSize: '1.75rem',
      lineHeight: 1.25,
      letterSpacing: '-0.01em',
      '@media (min-width:900px)': {
        fontSize: '2.25rem',
      },
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.35rem',
      lineHeight: 1.3,
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.15rem',
    },
    body1: {
      fontSize: '1.05rem',
      lineHeight: 1.7,
    },
    body2: {
      fontSize: '0.95rem',
      lineHeight: 1.65,
    },
  },
  shape: {
    borderRadius: 14,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          borderRadius: 10,
          padding: '10px 22px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          border: '1px solid',
          borderColor:
            mode === 'light'
              ? 'rgba(26, 35, 50, 0.08)'
              : 'rgba(247, 246, 243, 0.08)',
          boxShadow:
            mode === 'light'
              ? '0 4px 24px rgba(26, 35, 50, 0.06)'
              : '0 4px 24px rgba(0, 0, 0, 0.25)',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 500,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  },
});

export const createAppTheme = (mode: ColorMode) =>
  createTheme(getDesignTokens(mode));

export const cardSx = {
  p: { xs: 2.5, md: 3.5 },
};

export const sectionPy = { xs: 8, md: 12 };
