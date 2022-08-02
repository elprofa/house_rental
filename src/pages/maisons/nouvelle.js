import React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import FormNouvelleMaison from 'src/views/form-layouts/form_nouvelle_maison'
// ** Demo Components Imports
function NouvelleMaison() {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sx={{ paddingBottom: 4 }}>
        <Typography variant='h5'>Nouvelle maison</Typography>
      </Grid>
        
      <Grid item xs={12} md={12} className="section_image_maison_pub" style={{paddingTop:"25px"}}>
      <Grid item xs={12}>
        <Card>
           

              <FormNouvelleMaison/>

            </Card>
        </Grid>
      </Grid>
    
      
    </Grid>
  )
}

export default NouvelleMaison