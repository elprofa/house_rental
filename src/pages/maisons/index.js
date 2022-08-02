// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
// ** Demo Components Imports

import { useQuery } from '@apollo/client'
import gql from 'graphql-tag'
import { useEffect, useState } from 'react'
import CardMaison from 'src/views/cards/CardMaison'
import CardMaisonPub from 'src/views/cards/card_maison_pub'
import {LISTE_MAISON} from '../../../graphql/maison-louer'
import TableMaison from 'src/views/tables/tables_maisons'


const CardBasic = () => {

    const result = useQuery(LISTE_MAISON,{
        variables:{
            limit:4,
            start:0
        }
    });

    const result1 = useQuery(LISTE_MAISON,{
        variables:{
            limit:4,
            start:4
        }
    });


    const maisons=result?.data?.maisons?.data;
    const maisons1=result1?.data?.maisons?.data;

    console.log(maisons);

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sx={{ paddingBottom: 4 }}>
        <Typography variant='h5'>Mes maisons</Typography>
      </Grid>
        
      <Grid item xs={12} md={12} className="section_image_maison_pub" style={{paddingTop:"25px"}}>
      <Grid item xs={12}>
        <Card>
            <CardHeader title='Table des maisons' titleTypographyProps={{ variant: 'h6' }} />
            <TableMaison />
            </Card>
        </Grid>
      </Grid>
    
      
    </Grid>
  )
}

export default CardBasic
