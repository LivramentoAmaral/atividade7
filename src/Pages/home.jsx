import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Pagination from '@mui/material/Pagination';



import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';



import casa1 from '../assets/casa1.jpg';
import casa2 from '../assets/casa2.jpg';
import casa3 from '../assets/casa3.jpeg';
import casa4 from '../assets/casa1.jpg';
import casa5 from '../assets/casa2.jpg';
import casa6 from '../assets/casa3.jpeg';
import AppBarComponent from '../Componentes/AppBarComponent';
import DrawerComponent from '../Componentes/DrawerComponent';
import MediaCard from '../Componentes/MediaCard';

const list_casa = [
    {
      id: 1,
      title: 'Casa 1',
      description: 'Casa 1',
      image: casa1,
    },
    {
      id: 2,
      title: 'Casa 2',
      description: 'Casa 2',
      image: casa2,
    },
    {
      id: 3,
      title: 'Casa 3',
      description: 'Casa 3',
      image: casa3,
    },
    {
      id: 4,
      title: 'Casa 4',
      description: 'Casa 4',
      image: casa4,
    },
    {
      id: 5,
      title: 'Casa 5',
      description: 'Casa 5',
      image: casa5,
    },
    {
      id: 6,
      title: 'Casa 6',
      description: 'Casa 6',
      image: casa6,
    },
  ];
  
  export default function Dashboard() {
    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
      setOpen(!open);
    };
  
    return (
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBarComponent open={open} toggleDrawer={toggleDrawer} />
        <DrawerComponent open={open} toggleDrawer={toggleDrawer} />
        <Box
          component="main"
          sx={{
            backgroundColor:"#212529",
            height: '100vh',
            overflow: 'auto',
            width: '100%',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* <Grid item xs={4} md={4} lg={4}>
                
              </Grid> */}
              {
                list_casa.map((item) => (
                  <Grid item xs={4} md={4} lg={4}>
                    <MediaCard item={item} />
                  </Grid>
                ))
              }
            </Grid>
            <Box component="span" sx={
              {
                p: 2,
                display: 'flex',
                justifyContent: 'center',
                mt: 4,
              }
            }>
              <Pagination count={10} variant="outlined" shape="rounded" />
            </Box>
          </Container>
        </Box>
      </Box>
    );
  }