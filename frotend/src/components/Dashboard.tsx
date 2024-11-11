import { useSelector } from 'react-redux'
import { RootState } from '../store/index'
import {useNavigate } from 'react-router-dom'
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { Button } from '@mui/material';
function Dashboard() {

 
  const userData = useSelector((state: RootState) => state.authenticator)
  const navigate = useNavigate()
  interface itemtype {
    id?: number
    nombre: string
    marca: string
    tipo: string
    precio: number
   }
   const itemInitialState: itemtype = {
    nombre: ' ',
    marca: ' ',
    tipo: ' ',
    precio: 0
   }
   const [item, setItem] = useState(itemInitialState)   
   const precio = parseFloat(item.precio.toString());
    const handleSubmit = (e:any) => {
      e.preventDefault()
     //Para que no mande el formulario, sino que haga lo que yo le diga
     console.log(item)
     fetch(`http://localhost:3030/addItem?nombre=${item.nombre}&marca=${item.marca}&tipo=${item.tipo}&precio=${item.precio}`)
     .then(response => response.json())
     .then (response => {
     console.log('Lo que nos llega de la base de datos: ')
     console.log(response.data)
     if (response.data.length > 0){
       alert('Datos insertados con éxito')
     } else{
       alert('No se han insertado bien')
       }
      })
   };
   const handleChangeName = (e:any) => {
    setItem({
      ...item,
      nombre: e.target.value,
    });
  };
  const handleChangeMarca = (e:any) => {
    setItem({
      ...item,
      marca: e.target.value,
    });
  };

  const handleChangeTipo = (e:any) => {
    setItem({
      ...item,
      tipo: e.target.value,
    });
  };

  const handleChangePrecio = (e:any) => {
    setItem({
      ...item,
      precio: parseFloat(e.target.value),
    });
  };





  return (
   
        <Box component="form" sx={{width:1}} onSubmit={handleSubmit}>
          <Grid container sx={{mt:2, justifyContent:'center'}} >
            
            <Grid size={{xs:6,md:4 ,xl:3}}>
              <TextField
                required
                label="Nombre"
                variant="outlined"
                fullWidth
                value={item.nombre}
                onChange={handleChangeName}
              />
            </Grid>
            <Grid size={{xs:6,md:4 ,xl:3}}>
              <TextField
                label="Marca"
                variant="outlined"
                fullWidth
                required 
                value={item.marca}
                onChange={handleChangeMarca}
              />
            </Grid>
            <Grid size={{xs:6,md:4 ,xl:3}}>
              <TextField
                label="Tipo"
                variant="outlined"
                fullWidth
                required 
                value={item.tipo}
                onChange={handleChangeTipo}
              />
            </Grid>
            <Grid size={{xs:6,md:4 ,xl:3}}>
              <TextField
                required
                label="precio"
                variant="outlined"
                type="number"
                fullWidth
                value={item.precio}
                onChange={handleChangePrecio}
              />
             </Grid>
             <Grid size={{xs:6,md:4 ,xl:12 }} ></Grid>
             <Button variant='contained' sx={{mt:2,width:0.6}} type='submit' >+Insertar Datos</Button>
        </Grid>
        </Box>
  );
}

export default Dashboard