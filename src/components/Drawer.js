
import React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import WorkIcon from '@mui/icons-material/Work';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import CloseIcon from '@mui/icons-material/Close';

export default function Drawer({
  onSelect,
  activeSection = 'home',
  width = 300,
  mobileOpen = false,
  onClose,
  isMobile = false,
  profile = {
    name: 'harsha p',
    role: 'Frontend Developer',
    avatarUrl: '',
  },
  links = [
    { id: 'home', label: 'Home', icon: <HomeIcon /> },
  { id: 'about', label: 'About', icon: <InfoIcon /> },
  { id: 'projects', label: 'Projects', icon: <WorkIcon /> },
   { id: 'contact', label: 'Contact', icon: <ContactSupportIcon /> },

  ],
  socials = [
    { id: 'github', icon: <GitHubIcon />, href: 'https://github.com/harsha497c' },
    { id: 'linkedin', icon: <LinkedInIcon />, href: 'www.linkedin.com/in/harsha-p-2247aa374' },
    { id: 'email', icon: <MailOutlineIcon />, href: 'mailto:harsha497cs@gmail.com' },
  ],
  palette = {
    headerBg: 'transparent',
    headerText: 'inherit',
    itemActiveBg: 'action.selected',
    itemText: 'text.primary',
    itemIcon: 'text.secondary',
    divider: 'divider',
    footerText: 'text.secondary',
  },
}) {
    const handleSelect = (id) => () => {
    onSelect && onSelect(id);
    
    // Update URL hash
    window.history.pushState(null, null, `#${id}`);
    
    // Smooth scroll to the respective section
    setTimeout(() => {
      const section = document.querySelector(`[data-section="${id}"]`);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <Box sx={{ 
      width: isMobile ? '100%' : width, 
      height: '100vh', 
      borderRight: isMobile ? 0 : 1, 
      borderColor: 'divider', 
      bgcolor: '#F8F8F8',
      position: 'fixed',
      top: 0,
      left: isMobile ? (mobileOpen ? 0 : '-100%') : 0,
      zIndex: 1200,
      overflow: 'hidden',
      transition: isMobile ? 'left 0.3s ease-in-out' : 'none',
      boxShadow: isMobile ? 3 : 0
    }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        {/* Header */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            px: 2,
            py: 2.5,
            bgcolor: palette.headerBg,
            color: palette.headerText,
          }}
        >
                                <Avatar
            src={profile.avatarUrl || '/IMG_20250323_232827.jpg'}
            alt={profile.name}
            sx={{ 
              width: 56, 
              height: 56, 
              bgcolor: 'transparent', 
              fontWeight: 600,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              border: '2px solid rgba(255, 255, 255, 0.2)',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
            }}
          >
            {(!profile.avatarUrl && profile.name) ? profile.name.slice(0, 1) : null}
          </Avatar>
          <Box sx={{ minWidth: 0, flex: 1 }}>
            <Typography variant="subtitle1" noWrap sx={{ fontWeight: 700 }}>
              {profile.name}
            </Typography>
            <Typography variant="body2" noWrap color="text.secondary">
              {profile.role}
            </Typography>
          </Box>
          {isMobile && (
            <IconButton
              onClick={onClose}
              sx={{ color: 'inherit' }}
            >
              <CloseIcon />
            </IconButton>
          )}
        </Box>
        


        <Divider sx={{ borderColor: palette.divider }} />

        {/* Navigation */}
        <Box sx={{ flex: 1, overflowY: 'auto' }}>
          <List sx={{ py: 0 }}>
            {links.map((item) => (
              <ListItem key={item.id} disablePadding>
                <ListItemButton 
                  onClick={handleSelect(item.id)}
                  sx={{
                    bgcolor: activeSection === item.id ? 'primary.main' : 'transparent',
                    color: activeSection === item.id ? 'white' : palette.itemText,
                    '&:hover': {
                      bgcolor: activeSection === item.id ? 'primary.dark' : 'action.hover',
                    },
                    transition: 'all 0.3s ease',
                    borderRadius: 1,
                    mx: 1,
                    mb: 0.5
                  }}
                >
                  {item.icon ? (
                    <ListItemIcon sx={{ 
                      color: activeSection === item.id ? 'white' : palette.itemIcon 
                    }}>
                      {item.icon}
                    </ListItemIcon>
                  ) : null}
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{ 
                      sx: { 
                        color: activeSection === item.id ? 'white' : palette.itemText, 
                        fontWeight: activeSection === item.id ? 700 : 500 
                      } 
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>

        <Divider sx={{ borderColor: palette.divider }} />

        {/* Footer / Socials */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: 2, py: 1.5 }}>
          <Typography variant="caption" color={palette.footerText}>
            © {new Date().getFullYear()} {profile.name}
          </Typography>
          <Box sx={{ display: 'flex', gap: 1 }}>
            {socials.map((s) => (
              <IconButton
                key={s.id}
                size="small"
                color="inherit"
                component="a"
                href={s.href}
                target={s.href?.startsWith('http') ? '_blank' : undefined}
                rel={s.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={s.id}
              >
                {s.icon}
              </IconButton>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}