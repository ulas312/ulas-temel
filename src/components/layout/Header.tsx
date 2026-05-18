import { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import MenuIcon from '@mui/icons-material/Menu';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { navLinks, siteMeta } from '../../content/siteContent';
import { scrollToSection } from '../../utils/scrollToSection';
import { useColorMode } from '../../theme/ColorModeContext';

export default function Header() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [elevated, setElevated] = useState(false);
  const { mode, toggleColorMode } = useColorMode();

  useEffect(() => {
    const onScroll = () => setElevated(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (sectionId: string) => {
    scrollToSection(sectionId);
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="sticky"
      elevation={elevated ? 2 : 0}
      sx={{
        bgcolor: 'background.paper',
        color: 'text.primary',
        borderBottom: elevated ? 0 : 1,
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: { xs: 56, md: 64 }, gap: 1 }}>
          <Typography
            component="button"
            variant="h4"
            onClick={() => scrollToSection('hero')}
            sx={{
              flexGrow: { xs: 1, md: 0 },
              mr: { md: 4 },
              fontWeight: 700,
              fontSize: { xs: '1.1rem', md: '1.25rem' },
              border: 'none',
              background: 'none',
              cursor: 'pointer',
              color: 'text.primary',
              fontFamily: 'inherit',
              p: 0,
            }}
          >
            {siteMeta.name}
          </Typography>

          <Stack
            direction="row"
            alignItems="center"
            spacing={0.5}
            sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1 }}
          >
            {navLinks.map((link) => (
              <Button
                key={link.sectionId}
                color="inherit"
                onClick={() => handleNav(link.sectionId)}
              >
                {link.label}
              </Button>
            ))}
          </Stack>

          <Stack direction="row" alignItems="center" spacing={0.25}>
            <IconButton
              href={siteMeta.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              color="inherit"
              size="small"
              sx={{ display: { xs: 'none', sm: 'inline-flex' } }}
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              href={siteMeta.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              color="inherit"
              size="small"
              sx={{ display: { xs: 'none', sm: 'inline-flex' } }}
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              href={`mailto:${siteMeta.email}`}
              aria-label="Email"
              color="inherit"
              size="small"
              sx={{ display: { xs: 'none', sm: 'inline-flex' } }}
            >
              <EmailOutlinedIcon />
            </IconButton>
            <IconButton
              onClick={toggleColorMode}
              aria-label="Toggle dark mode"
              color="inherit"
              size="small"
            >
              {mode === 'light' ? (
                <DarkModeOutlinedIcon />
              ) : (
                <LightModeOutlinedIcon />
              )}
            </IconButton>
            <IconButton
              sx={{ display: { md: 'none' } }}
              aria-label="Open menu"
              onClick={(e) => setAnchorEl(e.currentTarget)}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Stack>
        </Toolbar>
      </Container>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        {navLinks.map((link) => (
          <MenuItem key={link.sectionId} onClick={() => handleNav(link.sectionId)}>
            {link.label}
          </MenuItem>
        ))}
        <MenuItem
          component="a"
          href={siteMeta.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </MenuItem>
        <MenuItem
          component="a"
          href={siteMeta.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </MenuItem>
        <MenuItem component="a" href={`mailto:${siteMeta.email}`}>
          Email
        </MenuItem>
      </Menu>
    </AppBar>
  );
}
