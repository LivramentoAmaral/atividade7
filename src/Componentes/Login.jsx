// src/components/Login.js

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Login = () => {  


  return (
    <div className="login-container">
      <h1>Login</h1>
      <TextField
        label="Username"
        type='text'
        
      />
      <br />
      <br />
      <TextField
        label="Password"
        type="password"
        display="flex"
        justifyContent="center"
        width="100%"
       
      />
       <br /> <br />
      <Button variant="contained" wi color="primary"  display = "flex"
      justifyContent="center"  width="100%"fullWidth
      onClick={() => {
        window.location.href = '/home';

    }

    } >
        Login
      </Button>
    </div>
  );
};

export default Login;
