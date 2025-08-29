import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';

export default function Contact({ onPhone, onEmail, onLinkedIn }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setSnackbar({
        open: true,
        message: 'Please fill in all fields',
        severity: 'error'
      });
      return;
    }

    if (!formData.email.includes('@')) {
      setSnackbar({
        open: true,
        message: 'Please enter a valid email address',
        severity: 'error'
      });
      return;
    }

    setLoading(true);

    try {
      // Using a reliable email service (Web3Forms - free tier)
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'YOUR_ACCESS_KEY', // You'll get this from Web3Forms
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to: 'nischalk762@gmail.com'
        })
      });

      if (response.ok) {
        setSnackbar({
          open: true,
          message: 'Message sent successfully! I\'ll get back to you soon.',
          severity: 'success'
        });
        
        // Clear form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      
      setSnackbar({
        open: true,
        message: 'Failed to send message. Please try again later or contact me directly at nischalk762@gmail.com',
        severity: 'error'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar(prev => ({ ...prev, open: false }));
  };

  return (
    <Box component="section" sx={{ py: { xs: 3, md: 4 }, position: 'relative' }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h3" sx={{ fontWeight: 800, color: '#1a237e', mb: 1 }}>
            Contact
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
            Contact me for any queries or you can write us, we will get back to you in 48 hours.
          </Typography>
        </Box>

        {/* Two Column Layout */}
        <Grid container spacing={4} sx={{ minHeight: '70vh' }}>
          {/* Left Column - Contact Information */}
          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%', boxShadow: 2, display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ p: 3, flex: 1, display: 'flex', flexDirection: 'column' }}>
                <Stack spacing={2.5} sx={{ flex: 1 }}>
                  {/* Location */}
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box sx={{ 
                      width: 40, 
                      height: 40, 
                      borderRadius: '50%', 
                      bgcolor: '#42a5f5', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center' 
                    }}>
                      <LocationOnIcon sx={{ color: 'white' }} />
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#424242' }}>
                        Location:
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                      kanchipura post, Mathodu Hobil, hosadurga Taluk, Chitradurga-577533
                      </Typography>
                    </Box>
                  </Box>

                  {/* Email */}
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box sx={{ 
                      width: 40, 
                      height: 40, 
                      borderRadius: '50%', 
                      bgcolor: '#42a5f5', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center' 
                    }}>
                      <EmailIcon sx={{ color: 'white' }} />
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#424242' }}>
                        Email:
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        harsha497cs@gmail.com
                      </Typography>
                    </Box>
                  </Box>

                  {/* Phone */}
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box sx={{ 
                      width: 40, 
                      height: 40, 
                      borderRadius: '50%', 
                      bgcolor: '#42a5f5', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center' 
                    }}>
                      <PhoneIcon sx={{ color: 'white' }} />
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#424242' }}>
                        Call:
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        +91 9880339147
                      </Typography>
                    </Box>
                  </Box>

                  {/* WhatsApp */}
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box sx={{ 
                      width: 40, 
                      height: 40, 
                      borderRadius: '50%', 
                      bgcolor: '#42a5f5', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center' 
                    }}>
                      <WhatsAppIcon sx={{ color: 'white' }} />
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#424242' }}>
                        WhatsApp:
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <Button 
                          variant="text" 
                          sx={{ p: 0, minWidth: 'auto', textTransform: 'none' }}
                          onClick={() => window.open('https://wa.me/9880339147', '_blank')}
                        >
                          click here
                        </Button>
                      </Typography>
                    </Box>
                  </Box>

                  {/* Embedded Google Maps */}
                  <Box sx={{ 
                    flex: 1,
                    borderRadius: 1,
                    overflow: 'hidden',
                    border: '1px solidrgb(98, 18, 203)',
                    minHeight: 250,
                    mt: 2
                  }}>
                    <iframe
                      width="100%"
                      src="https://www.google.com/maps?q=Kanchipura,+Karnataka+577533&output=embed"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Location Map - Kanchipura, Karnataka"
                    />
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </Grid>

          {/* Right Column - Contact Form */}
          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%', boxShadow: 2, display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ p: 3, flex: 1, display: 'flex', flexDirection: 'column' }}>
                <form onSubmit={handleSubmit}>
                  <Stack spacing={2.5} sx={{ flex: 1, justifyContent: 'space-between' }}>
                    <Box>
                      <TextField
                        fullWidth
                        label="Your Name"
                        variant="outlined"
                        size="medium"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        sx={{ mb: 1.5 }}
                      />
                      <TextField
                        fullWidth
                        label="Your Email"
                        variant="outlined"
                        size="medium"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        sx={{ mb: 1.5 }}
                      />
                      <TextField
                        fullWidth
                        label="Subject"
                        variant="outlined"
                        size="medium"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        sx={{ mb: 1.5 }}
                      />
                      <TextField
                        fullWidth
                        label="Message"
                        variant="outlined"
                        size="medium"
                        multiline
                        rows={5}
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        sx={{ mb: 1.5 }}
                      />
                    </Box>
                    <Button 
                      type="submit"
                      variant="contained" 
                      size="large"
                      disabled={loading}
                      sx={{ 
                        bgcolor: '#42a5f5',
                        '&:hover': { bgcolor: '#1976d2' }
                      }}
                    >
                      {loading ? (
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <CircularProgress size={20} color="inherit" />
                          Sending...
                        </Box>
                      ) : (
                        'Send Message'
                      )}
                    </Button>
                  </Stack>
                </form>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Scroll to Top Button */}
      <Fab
        color="primary"
        size="small"
        onClick={scrollToTop}
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
          bgcolor: '#42a5f5'
        }}
      >
        <KeyboardArrowUpIcon />
      </Fab>

      {/* Snackbar for notifications */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}
