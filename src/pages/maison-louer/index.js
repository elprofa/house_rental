// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Demo Components Imports
import CardUser from 'src/views/cards/CardUser'
import CardImgTop from 'src/views/cards/CardImgTop'
import CardMobile from 'src/views/cards/CardMobile'
import CardSupport from 'src/views/cards/CardSupport'
import CardTwitter from 'src/views/cards/CardTwitter'
import CardFacebook from 'src/views/cards/CardFacebook'
import CardLinkedIn from 'src/views/cards/CardLinkedIn'
import CardAppleWatch from 'src/views/cards/CardAppleWatch'
import CardMembership from 'src/views/cards/CardMembership'
import CardInfluencer from 'src/views/cards/CardInfluencer'
import CardNavigation from 'src/views/cards/CardNavigation'
import CardWithCollapse from 'src/views/cards/CardWithCollapse'
import CardVerticalRatings from 'src/views/cards/CardVerticalRatings'
import CardNavigationCenter from 'src/views/cards/CardNavigationCenter'
import CardHorizontalRatings from 'src/views/cards/CardHorizontalRatings'
import FormFiltre from 'src/views/form-layouts/form_filtre'
import { useQuery } from '@apollo/client'
import gql from 'graphql-tag'
import { useEffect, useState } from 'react'
import CardMaison from 'src/views/cards/CardMaison'
import CardMaisonPub from 'src/views/cards/card_maison_pub'
import {LISTE_MAISON} from '../../../graphql/maison-louer'


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
        <Typography variant='h5'>Maison à louer</Typography>
      </Grid>
        <Grid item xs={12} md={12}>
          <FormFiltre />
        </Grid>  

        {
            maisons?.map((maison,index)=>(
                <Grid item xs={12} sm={6} md={3} key={"card_maison_louer"+index}>
                    <CardMaison 
                        id={maison.id}
                        slug={maison.attributes.slug}
                        quartier={maison.attributes.quartier?.data.attributes.libelle}
                        categorie={maison.attributes.categories?.data[0]?.attributes.libelle}
                        prix={maison.attributes.prix} 
                        image={maison.attributes.photo?.data} 
                        libelle={maison.attributes.libelle} 
                        description={maison.attributes.description} />
                </Grid>
            ))
        }

      <Grid item xs={12} md={12} className="section_image_maison_pub" style={{paddingTop:"25px"}}>
        <CardMaisonPub />
      </Grid>
    
      {
            maisons1?.map((maison,index)=>(
                <Grid item xs={12} sm={6} md={3} key={"card_maison_louer"+index}>
                    <CardMaison 
                        id={maison.id}
                        quartier={maison.attributes.quartier?.data.attributes.libelle}
                        categorie={maison.attributes.categories?.data[0]?.attributes.libelle}
                        prix={maison.attributes.prix} 
                        image={maison.attributes.photo?.data} 
                        libelle={maison.attributes.libelle} 
                        description={maison.attributes.description} />
                </Grid>
            ))
        }
      
      
    </Grid>
  )
}

export default CardBasic
