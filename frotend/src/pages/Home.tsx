// Importamos el useSelector del react-redux
import { useSelector } from 'react-redux'
// Importamos lo que necesitamos para el tipo del selector()
import { RootState } from '../store/index'
// Importamos las acciones que están en el fichero authSlice.ts
import { authActions } from '../store/authSlice';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2'
import Button from '@mui/material/Button'
import {useNavigate } from 'react-router-dom'
 import { useDispatch} from 'react-redux'
function Home() {
  // Almacenamos en la variable userData lo que obtenemos del store usando el hook useSelector
  const userData = useSelector((state: RootState) => state.authenticator)
  // Comprobamos por la consola qué obtenemos del store
  console.log(userData)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const salir = (e: any) => {
      dispatch(authActions.logout())
      navigate('/') 
  }
     
  
  return (
    <>
    <Grid container  sx={{ justifyContent: 'center', alignItems: 'center' }}>
      <Typography variant='h2' color='primary'> Home de Pablo Azael: Soy el usuario {userData.userName} y tengo el rol de {userData.userRol}</Typography>
      <Button variant='outlined' size='large' onClick={salir}>Salir</Button>
      </Grid>
    </>
  )
}


export default Home