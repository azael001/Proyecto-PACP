import Box from "@mui/material/Box";
import { useState } from "react";
import Grid from "@mui/material/Grid2";
import TextField from "@mui/material/TextField";
import Button  from '@mui/material/Button';
import Typography  from "@mui/material/Typography";
import LockIcon from '@mui/icons-material/Lock';
import AlertTitle from '@mui/material/AlertTitle';
import Alert from '@mui/material/Alert'
 import {useNavigate } from 'react-router-dom'
 import { useDispatch} from 'react-redux'
 import { authActions} from  '../store/authSlice';
function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  async function isVerifiedUser () { 
  fetch(`http://localhost:3030/login?user=${data.user}&password=${data.password}`)
  .then(response => response.json())
  .then (response => {
  console.log('Lo que nos llega de la base de datos: ')
  console.log(response.data)
  if (response.data.length !== 0){
    dispatch(authActions.login({
      name: data.user,
      rol: response.data.rol
    }))
    navigate('/home') 
  } else{
    setShowError(true)
    }
   })
   }
   

    const [data, setData] = useState({
      user: "",
      password: "",
      
    });
    const [showError, setShowError] = useState(false); 
    const handleSubmit = (e : any) => {
      
      e.preventDefault();
      console.log(data)
    };
    const loginUser = (e: any) => {
      setData({
        ...data,
        user: e.target.value,
      });
    };
    const loginPass = (e: any) => {
      setData({
        ...data,
        password: e.target.value,
      });
    };
  
    return (
 
      <Grid container
        justifyContent="center"  
        alignItems="center"     
        style={{ minHeight: '100vh' }} 
      >
      
      <Box component ='form'
        onSubmit={handleSubmit}
        sx={{
          display: 'block',
          alignItems: 'center',
         
          width:800,
          height:300,
          border: '1px solid #ddd', 
        }}>
          <Grid container spacing={{xs:0.5,sm:1, md:1.5 ,xl:2}}>
            <Grid size={12}>
              <Typography variant="h5" sx={{textAlign:"center", mt:3,mb:2}}>
                Sistema de acceso
              </Typography>
            </Grid>
            <Grid size={12} sx={{ textAlign: 'center' }}>
             <LockIcon fontSize="large">

             </LockIcon>
            </Grid>
              <Grid size={12}>
              <TextField
                required
                label="Nombre"
                variant="outlined"
                fullWidth
                value={data.user}
                onChange={loginUser}
              />
              </Grid>
              <Grid size={12}>
              <TextField
                required
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                value={data.password}
                onChange={loginPass}
              />
              </Grid>
              <Grid size={12}>
              <Button
              variant="outlined"
              type="submit"
              sx={{backgroundColor:"primary.main",color:"white"}}
              fullWidth
              onClick={isVerifiedUser}>
                Acceder
              </Button>
              {showError && (
              <Alert severity="error">
               <AlertTitle>Error</AlertTitle>
                La contraseña es incorrecta
              </Alert>
               )}
              </Grid>
            </Grid>
        </Box>
    </Grid>
    )
  }
  export default Login