
import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  Card, 
  CardContent,
  AppBar,
  Toolbar,
  Grid
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Dashboard, Security, Speed } from '@mui/icons-material';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <AppBar position="static" elevation={0} sx={{ background: 'white', color: 'black' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
            MyApp
          </Typography>
          <Button color="inherit" onClick={() => navigate('/login')} sx={{ mr: 1 }}>
            Login
          </Button>
          <Button variant="contained" onClick={() => navigate('/register')}>
            Sign Up
          </Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg">
        <Box sx={{ py: 8 }}>
          <Box textAlign="center" mb={6}>
            <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
              Welcome to Your Future
            </Typography>
            <Typography variant="h5" color="text.secondary" paragraph sx={{ mb: 4 }}>
              Experience the next generation of web applications with our modern, 
              secure, and lightning-fast platform
            </Typography>
            <Box sx={{ mt: 4 }}>
              <Button 
                variant="contained" 
                size="large" 
                onClick={() => navigate('/register')}
                sx={{ mr: 2, px: 4, py: 1.5 }}
              >
                Get Started
              </Button>
              <Button 
                variant="outlined" 
                size="large" 
                onClick={() => navigate('/login')}
                sx={{ px: 4, py: 1.5 }}
              >
                Sign In
              </Button>
            </Box>
          </Box>

          <Grid container spacing={4} sx={{ mt: 6 }}>
            <Grid xs={12} md={4}>
              <Card sx={{ height: '100%', textAlign: 'center', p: 2 }}>
                <CardContent>
                  <Dashboard sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                  <Typography variant="h5" component="h2" gutterBottom>
                    Intuitive Dashboard
                  </Typography>
                  <Typography color="text.secondary">
                    Manage everything from one beautiful, easy-to-use dashboard
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={12} md={4}>
              <Card sx={{ height: '100%', textAlign: 'center', p: 2 }}>
                <CardContent>
                  <Security sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                  <Typography variant="h5" component="h2" gutterBottom>
                    Secure & Reliable
                  </Typography>
                  <Typography color="text.secondary">
                    Enterprise-grade security with 99.9% uptime guarantee
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={12} md={4}>
              <Card sx={{ height: '100%', textAlign: 'center', p: 2 }}>
                <CardContent>
                  <Speed sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                  <Typography variant="h5" component="h2" gutterBottom>
                    Lightning Fast
                  </Typography>
                  <Typography color="text.secondary">
                    Optimized performance for the best user experience
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default LandingPage;
