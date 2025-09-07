import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "🏍️ Bike Website – CSS Microproject",
      description: "This project is a front-end web application designed as part of the MSBTE Diploma curriculum for Information Technology (5th Semester). It showcases a fictional bike showroom website, built to demonstrate core web development skills using HTML, CSS, and JavaScript.",
      image: "/bike-website.jpg", // You can add a bike website screenshot here
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      highlights: [
        "Multi-page Design: Includes home, models, gallery, and contact pages",
        "Custom CSS Styling: Clean layout, hover effects, and responsive elements",
        "Image Gallery: Showcases various bike models",
        "Contact Form: Simple form for user inquiries",
        "Minimal JavaScript: Used for dynamic features on two pages",
        "Educational Purpose: Built for academic submission under MSBTE guidelines"
      ],
      githubUrl: "https://github.com/harsha497cs/bike-website",
      liveUrl: "http://127.0.0.1:5500/home.html"
    }
  ];

  return (
    <Box component="section" sx={{ py: { xs: 3, md: 4 } }}>
      <Container maxWidth="lg">
        <Typography variant="h4" sx={{ fontWeight: 800, mb: 3, textAlign: 'center' }}>
          Projects
        </Typography>
        
        <Grid container spacing={4}>
          {projects.map((project) => (
            <Grid item xs={12} md={6} key={project.id}>
              <Card sx={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                boxShadow: 3,
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: 6
                }
              }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={project.image}
                  alt={project.title}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: '#1a237e' }}>
                    {project.title}
                  </Typography>
                  
                  <Typography variant="body1" sx={{ mb: 2, color: 'text.secondary', lineHeight: 1.6 }}>
                    {project.description}
                  </Typography>

                  <Box sx={{ mb: 2 }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                      Technologies Used:
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {project.technologies.map((tech, index) => (
                        <Chip 
                          key={index}
                          label={tech} 
                          size="small" 
                          sx={{ 
                            bgcolor: '#42a5f5', 
                            color: 'white',
                            fontWeight: 500
                          }} 
                        />
                      ))}
                    </Box>
                  </Box>

                  <Box sx={{ mb: 3 }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                      Highlights:
                    </Typography>
                    <Box component="ul" sx={{ pl: 2, m: 0 }}>
                      {project.highlights.map((highlight, index) => (
                        <Typography 
                          key={index}
                          component="li" 
                          variant="body2" 
                          sx={{ 
                            mb: 0.5, 
                            color: 'text.secondary',
                            fontSize: '0.9rem'
                          }}
                        >
                          {highlight}
                        </Typography>
                      ))}
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', gap: 2, mt: 'auto' }}>
                    <Button
                      variant="contained"
                      startIcon={<GitHubIcon />}
                      href={project.githubUrl}
                      target="_blank"
                      sx={{ 
                        bgcolor: '#42a5f5',
                        '&:hover': { bgcolor: '#1976d2' }
                      }}
                    >
                      View Code
                    </Button>
                    {project.liveUrl && (
                      <Button
                        variant="outlined"
                        startIcon={<LaunchIcon />}
                        href={project.liveUrl}
                        target="_blank"
                        sx={{ 
                          borderColor: '#42a5f5',
                          color: '#42a5f5',
                          '&:hover': { 
                            borderColor: '#1976d2',
                            color: '#1976d2',
                            bgcolor: 'rgba(66, 165, 245, 0.04)'
                          }
                        }}
                      >
                        Live Demo
                      </Button>
                    )}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
