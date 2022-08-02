// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import InputAdornment from '@mui/material/InputAdornment'

// ** Icons Imports
import Phone from 'mdi-material-ui/Phone'
import EmailOutline from 'mdi-material-ui/EmailOutline'
import AccountOutline from 'mdi-material-ui/AccountOutline'
import MessageOutline from 'mdi-material-ui/MessageOutline'
import { FormControl, InputLabel, MenuItem } from '@mui/material'
import Select  from '@mui/material/Select'
import { useQuery } from '@apollo/client';
import { LISTE_CATEGORIE, LISTE_QUARTIER } from '../../../graphql/filtre';
import { useState } from 'react'
import { useRouter } from 'next/router'

const FormFiltre = () => {

  const router = useRouter()

  const result=useQuery(LISTE_CATEGORIE);
  const result1=useQuery(LISTE_QUARTIER);

  const categories=result?.data?.categories?.data
  const quartiers=result1?.data?.quartiers?.data

    // ** State
    const [values, setValues] = useState({
      categorie:"",
      terrasse:"",
      chambre:"",
      meuble:"",
      positionnement:"",
      quartier:"",
      prix:"",
      placard:"",

    })
  
    const handleChange = prop => event => {
      setValues({ ...values, [prop]: event.target.value })
      
    }

  const filter_maison=(event)=>{
    event.preventDefault();



    router.push('/maison-louer-filtre?categorie='+values.categorie+
    '&terrasse='+values.terrasse+
    '&chambre='+values.chambre+
    '&meuble='+values.meuble+
    '&positionnement='+values.positionnement+
    '&quartier='+values.quartier+'&prix='+values.prix+'&placard='+values.placard);

    console.log(values);
  }

  return (
    <Card style={{borderTop: "10px solid #9358fd"}}>
      <CardHeader title='Votre filtre ici' titleTypographyProps={{ variant: 'h6' }} />
      <CardContent>
        <form onSubmit={e => e.preventDefault()}>
          <Grid container spacing={5}>

            <Grid item xs={12} sm={3}>
              <FormControl fullWidth>
                <InputLabel id='form-layouts-separator-select-label'>Catégories</InputLabel>
                <Select
                  label='categorie'
                  defaultValue=''
                  id='form-layouts-separator-select'
                  labelId='form-layouts-separator-select-label'
                  onChange={handleChange('categorie')}
                >
                  {
                    categories?.map((categorie,index)=>(
                      <MenuItem value={categorie.id} key={"select_categorie_filtre"+index}>{categorie?.attributes?.libelle}</MenuItem>
                    ))
                  }
                 
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={3}>
              <FormControl fullWidth>
                <InputLabel id='form-layouts-separator-select-label'>Terrasse</InputLabel>
                <Select
                  label='Terrasse'
                  defaultValue=''
                  id='form-layouts-separator-select'
                  labelId='form-layouts-separator-select-label'
                  onChange={handleChange('terrasse')}
                >
                  <MenuItem value='Avec'>Avec terrasse</MenuItem>
                  <MenuItem value='Sans'>Sans terasse</MenuItem>
                  
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={3}>
              <TextField fullWidth type='number' onChange={handleChange('chambre')} label='Nombre de chambre' placeholder='' />
            </Grid>

            <Grid item xs={12} sm={3}>
              <FormControl fullWidth>
                <InputLabel id='form-layouts-separator-select-label'>Placard</InputLabel>
                <Select
                  label='Placard'
                  defaultValue=''
                  id='form-layouts-separator-select'
                  labelId='form-layouts-separator-select-label'
                  onChange={handleChange('placard')}
                >
                  <MenuItem value='OUI'>OUI </MenuItem>
                  <MenuItem value='NON'>NON</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={3}>
              <FormControl fullWidth>
                <InputLabel id='form-layouts-separator-select-label'>Meublé</InputLabel>
                <Select
                  label='Meublé'
                  defaultValue=''
                  id='form-layouts-separator-select'
                  labelId='form-layouts-separator-select-label'
                  onChange={handleChange('meuble')}
                >
                  <MenuItem value='OUI'>OUI </MenuItem>
                  <MenuItem value='NON'>NON</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={3}>
              <FormControl fullWidth>
                <InputLabel id='form-layouts-separator-select-label' >Positionnement</InputLabel>
                <Select
                  label='Positionnement'
                  defaultValue=''
                  id='form-layouts-separator-select'
                  labelId='form-layouts-separator-select-label'
                  onChange={handleChange('positionnement')}
                >
                  <MenuItem value='Bordure'>En bordure de route </MenuItem>
                  <MenuItem value='Proche'>Proche de la route</MenuItem>
                  <MenuItem value='Loin'>Loin de la route</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={3}>
              <FormControl fullWidth>
                <InputLabel id='form-layouts-separator-select-label'>Quartier</InputLabel>
                <Select
                  label='Quartier'
                  defaultValue=''
                  id='form-layouts-separator-select'
                  labelId='form-layouts-separator-select-label'
                  onChange={handleChange('quartier')}
                >
                  {
                    quartiers?.map((quartier,index)=>(
                      <MenuItem value={quartier.id} key={"select_quartier_filtre"+index}>{quartier?.attributes?.libelle}</MenuItem>
                    ))
                  }
                  
                  
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField fullWidth type='number' onChange={handleChange('prix')} label='Budget max en Frcfa' placeholder='' />
            </Grid>

            <Grid item xs={12}>
              <Button type='submit' variant='contained' size='large' onClick={filter_maison}>
                Filtrer
              </Button>
              
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  )
}

export default FormFiltre
