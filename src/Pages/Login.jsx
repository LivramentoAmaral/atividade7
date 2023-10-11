// src/pages/Home.js

import { Container } from '@mui/material';
import Login from '../Componentes/Login';


const PageLogin= () => {
 
  return (
    <Container
        sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
        }}
    >

    <div className="home-container">
    
        <Login/>
    
    </div>
    </Container>
  );
};

export default PageLogin;
