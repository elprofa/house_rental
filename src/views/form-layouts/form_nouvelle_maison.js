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
import { useMutation, useQuery } from '@apollo/client';
import { LISTE_CATEGORIE, LISTE_QUARTIER } from '../../../graphql/filtre';
import { CREATION_MAISON } from '../../../graphql/maison-louer';
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const FormNouvelleMaison = () => {

  const router = useRouter();

  const [id, setId] = useState("");

  useEffect(() => {

    if((localStorage.getItem("jwt")) || (localStorage.getItem("jwt")!==null))
    {
      setId(localStorage.getItem("id").replace(/^"|"$/g, ''));
    }
    
  });

  const result=useQuery(LISTE_CATEGORIE);
  const result1=useQuery(LISTE_QUARTIER);


  const categories=result?.data?.categories?.data
  const quartiers=result1?.data?.quartiers?.data

  // ** State
  const [values, setValues] = useState({
    libelle: "",
    prix: "",
    charge: "",
    route: "",
    description:"" ,
    categorie: "",
    quartier: "",
    chambre: "",
    placard: "",
    terrasse: "",
    meuble: "",
    adresse:"" ,
    user: id

  });

  
  const creation_nouvelle_maison=useMutation(CREATION_MAISON,{
    variables:{
        "libelle": values.charge,
        "prix": values.prix,
        "charge": values.charge,
        "route": values.route,
        "description": values.description,
        "categorie": parseInt(values.categorie),
        "quartier": parseInt(values.quartier),
        "chambre": parseInt(values.chambre),
        "placard": values.placard,
        "terrasse": values.terrasse,
        "meuble": values.meuble,
        "adresse": values.adresse,
        "user": parseInt(id)
    }
})


    const handleChange = prop => event => {
      setValues({ ...values, [prop]: event.target.value })
      
    }

  const add_maison=async (event)=>{
    event.preventDefault();
    values.user=id;

    const response= await creation_nouvelle_maison[0]();

  }

  return (
    <Card style={{borderTop: "10px solid #9358fd"}}>
       <CardHeader title='(*) Infos obligatoires' titleTypographyProps={{ variant: 'h6' }} />
      <CardContent>
        <form onSubmit={e => e.preventDefault()}>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={12}>
              <TextField fullWidth type='text' onChange={handleChange('libelle')} label='libelle' placeholder='' />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField fullWidth type='number' onChange={handleChange('prix')} label='Prix' placeholder='' />
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <InputLabel id='form-layouts-separator-select-label'>Charge</InputLabel>
                <Select
                  label='Charge'
                  defaultValue=''
                  id='form-layouts-separator-select'
                  labelId='form-layouts-separator-select-label'
                  onChange={handleChange('charge')}
                >
                  <MenuItem value='Sans_charge'>Sans charge</MenuItem>
                  <MenuItem value='Avec_charge'>Avec charge</MenuItem>
                  
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <InputLabel id='form-layouts-separator-select-label' >La route</InputLabel>
                <Select
                  label='Positionnement'
                  defaultValue=''
                  id='form-layouts-separator-select'
                  labelId='form-layouts-separator-select-label'
                  onChange={handleChange('route')}
                >
                  <MenuItem value='Bordure'>En bordure de route </MenuItem>
                  <MenuItem value='Proche'>Proche de la route</MenuItem>
                  <MenuItem value='Loin'>Loin de la route</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={12}>
                <TextField
                    fullWidth
                    multiline
                    minRows={3}
                    label='Description'
                    placeholder='Bio...'
                    sx={{ '& .MuiOutlinedInput-root': { alignItems: 'baseline' } }}
                />
            </Grid>
            
            <Grid item xs={6} sm={6}>
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

            <Grid item xs={6} sm={6}>
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
            <Grid item xs={12} sm={12}>
              <TextField fullWidth type='text' onChange={handleChange('adresse')} label='Adresse' placeholder='' />
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


            <Grid item xs={12}>
              <Button type='submit' variant='contained' size='large' onClick={add_maison}>
                Ajouter
              </Button>
              
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  )
}

export default FormNouvelleMaison
