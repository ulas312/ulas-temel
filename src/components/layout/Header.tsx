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
import { navLinks, siteMeta } from '../../content/siteContent';
import { scrollToSection } from '../../utils/scrollToSection';
import { containerPx } from '../../theme/theme';

export default function Header() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [elevated, setElevated] = useState(false);

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
      elevation={0}
      sx={{
        bgcolor: elevated ? 'background.paper' : 'transparent',
        color: 'text.primary',
        borderBottom: elevated ? 1 : 0,
        borderColor: 'divider',
        transition: 'background-color 0.2s ease, border-color 0.2s ease',
      }}
    >
      <Container maxWidth="md" sx={{ px: containerPx }}>
        <Toolbar disableGutters sx={{ minHeight: { xs: 56, md: 72 }, gap: 2 }}>
          <Typography
            component="button"
            onClick={() => scrollToSection('hero')}
            sx={{
              flexGrow: 1,
              fontWeight: 800,
              fontSize: { xs: '1rem', md: '1.125rem' },
              border: 'none',
              background: 'none',
              cursor: 'pointer',
              color: 'text.primary',
              fontFamily: 'inherit',
              p: 0,
              textAlign: 'left',
            }}
          >
            {siteMeta.name}
          </Typography>

          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            sx={{ display: { xs: 'none', md: 'flex' } }}
          >
            {navLinks.map((link) => (
              <Button
                key={link.sectionId}
                color="inherit"
                onClick={() => handleNav(link.sectionId)}
                sx={{ fontWeight: 600, color: 'text.secondary' }}
              >
                {link.label}
              </Button>
            ))}
          </Stack>

          <Button
            variant="contained"
            onClick={() => scrollToSection('contact')}
            sx={{ display: { xs: 'none', sm: 'inline-flex' } }}
          >
            Say Hello
          </Button>

          <IconButton
            sx={{ display: { md: 'none' } }}
            aria-label="Open menu"
            onClick={(e) => setAnchorEl(e.currentTarget)}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>

      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => setAnchorEl(null)}>
        {navLinks.map((link) => (
          <MenuItem key={link.sectionId} onClick={() => handleNav(link.sectionId)}>
            {link.label}
          </MenuItem>
        ))}
        <MenuItem onClick={() => handleNav('contact')}>Say Hello</MenuItem>
      </Menu>
    </AppBar>
  );
}
