
import React from 'react';
import { 
  Box, 
  Container, 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Card, 
  CardContent,
  Avatar,
  Chip
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Dashboard, Analytics, Settings, Notifications } from '@mui/icons-material';

const HomePage = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const stats = [
    { title: 'Total Projects', value: '12', icon: <Dashboard />, color: 'primary' },
    { title: 'Active Users', value: '1,234', icon: <Analytics />, color: 'success' },
    { title: 'Notifications', value: '5', icon: <Notifications />, color: 'warning' },
    { title: 'Settings', value: '8', icon: <Settings />, color: 'info' },
  ];

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>
          <Box display="flex" alignItems="center" gap={2}>
            <Avatar sx={{ width: 32, height: 32 }}>
              {user?.name?.charAt(0).toUpperCase()}
            </Avatar>
            <Typography variant="body1">
              {user?.name}
            </Typography>
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Box mb={4}>
          <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
            Welcome back, {user?.name}! 👋
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Here's what's happening with your account today.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {stats.map((stat, index) => (
            <Grid xs={12} sm={6} md={3} key={index}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Box display="flex" alignItems="center" justifyContent="space-between">
                    <Box>
                      <Typography color="text.secondary" gutterBottom variant="body2">
                        {stat.title}
                      </Typography>
                      <Typography variant="h4" component="div" sx={{ fontWeight: 'bold' }}>
                        {stat.value}
                      </Typography>
                    </Box>
                    <Chip 
                      icon={stat.icon} 
                      label="" 
                      color={stat.color as any}
                      variant="outlined"
                      sx={{ '& .MuiChip-icon': { fontSize: 28 } }}
                    />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Grid container spacing={3} sx={{ mt: 3 }}>
          <Grid xs={12} md={8}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="h2" gutterBottom>
                  Recent Activity
                </Typography>
                <Box>
                  {[
                    'Project "Website Redesign" was updated',
                    'New team member joined your organization',
                    'Monthly report is ready for review',
                    'System maintenance scheduled for this weekend'
                  ].map((activity, index) => (
                    <Box key={index} py={1} borderBottom={index < 3 ? 1 : 0} borderColor="divider">
                      <Typography variant="body2">
                        {activity}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="h2" gutterBottom>
                  Quick Actions
                </Typography>
                <Box display="flex" flexDirection="column" gap={2}>
                  <Button variant="outlined" fullWidth>
                    Create New Project
                  </Button>
                  <Button variant="outlined" fullWidth>
                    Invite Team Member
                  </Button>
                  <Button variant="outlined" fullWidth>
                    View Reports
                  </Button>
                  <Button variant="outlined" fullWidth>
                    Account Settings
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HomePage;
