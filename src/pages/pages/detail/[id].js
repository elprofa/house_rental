import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client';
import { DETAIL_MAISON, MAISON_BY_CATEGORIE } from 'graphql/maison-louer';
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts';
import Grid from '@mui/material/Grid'

import CardPhotoMaisonProfil from 'src/views/cards/CardPhotoMaisonProfil';
import CardDetailInfoMaison from 'src/views/cards/card_detail_info_maison';

import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import IconButton from '@mui/material/IconButton'
import ChevronUp from 'mdi-material-ui/ChevronUp'
import ChevronDown from 'mdi-material-ui/ChevronDown'
import DotsVertical from 'mdi-material-ui/DotsVertical'
import { styled, useTheme } from '@mui/material/styles'
import CardAuteurMaison from 'src/views/cards/card_auteur_maison';
import CardMaison from 'src/views/cards/CardMaison';
import Button from '@mui/material/Button'

const TriangleImg = styled('img')({
    right: 0,
    bottom: 0,
    height: 170,
    position: 'absolute'
  })


function DetailMaison(props) {
    const theme = useTheme()
    const imageSrc = theme.palette.mode === 'light' ? 'triangle-light.png' : 'triangle-dark.png'
  
    const router = useRouter()

    console.log(router.query)

    let id=router.query.id;

    const resultat=useQuery(DETAIL_MAISON,{
        variables:{
            id:id
        }
    });



    const maison=resultat.data?.maison?.data?.attributes;
    const images=maison?.photo?.data;
    const categories=maison?.categories?.data;
    const auteur=resultat.data?.maison?.data?.attributes?.users_permissions_user?.data?.attribute;

   const [idCat, setIdCat] = useState(0);

    useEffect(() => {
         const id_categorie=maison?.categories?.data[0]?.id;

         setIdCat(id_categorie)
    });

    

    const resultat_cat=useQuery(MAISON_BY_CATEGORIE,{
        variables:{
            id:idCat
        }
    });
    
    const homes=resultat_cat?.data?.maisons?.data;
 return (
    <ApexChartWrapper>
        <Grid container spacing={6}>
            <Grid item xs={12} md={8} className="card_maison_profil">
                <CardPhotoMaisonProfil title={maison?.libelle} image={images} prix={maison?.prix} />
            </Grid>
            <Grid item xs={12} md={4} >
                <CardDetailInfoMaison 
                maison={maison}
                adresse={maison?.adresse}
                charge={maison?.charge}
                quartier={maison?.quartier?.data?.attributes?.libelle}
                ville={maison?.quartier?.data?.attributes?.ville?.data?.attributes?.libelle}
                categories={categories}
                title={maison?.libelle}/>
                <br/>
                <div className="colonne_info_comple_maison">
                    <Button
                    fullWidth
                    size='large'
                    variant='contained'
                    sx={{ fontSize: "28px",textTransform: "capitalize"
                    } }
                    >
                        {maison?.prix + " Frcfa"}
                    </Button>
                </div>
                <br/>
                <div className="colonne_info_comple_maison1">
                    
                    <Card>
                        <CardHeader
                            title="Condition"
                            titleTypographyProps={{ sx: { lineHeight: '1.2 !important', letterSpacing: '0.31px !important' } }}
                            action={
                            <IconButton size='small' aria-label='settings' className='card-more-options' sx={{ color: 'text.secondary' }}>
                                <DotsVertical />
                            </IconButton>
                            }
                        />
                            <CardContent sx={{ pt: theme => `${theme.spacing(2)} !important` }}>
                                {maison?.condition}
                                
                            </CardContent>
                            
                        </Card>

                </div>
            </Grid>
            <Grid item xs={12} md={8} >
                <div className="">
                    <Card>
                        <CardHeader
                            title="Description"
                            titleTypographyProps={{ sx: { lineHeight: '1.2 !important', letterSpacing: '0.31px !important' } }}
                            action={
                            <IconButton size='small' aria-label='settings' className='card-more-options' sx={{ color: 'text.secondary' }}>
                                <DotsVertical />
                            </IconButton>
                            }
                        />
                        <CardContent sx={{ pt: theme => `${theme.spacing(2)} !important` }}>
                            {maison?.description}
                        </CardContent>
                    </Card>
                </div>
            </Grid>
            <Grid item xs={12} md={4} >
                <div className="colonne_info_comple_maison2">
                    <CardAuteurMaison auteur={auteur} />
                </div>
            </Grid>

            <Grid  xs={12} md={8} >
               
            </Grid>
            
            <Grid item xs={12} md={4} >
                <Button
                fullWidth
                size='large'
                variant='contained'
                sx={{ marginBottom: 7 }}
                >
                partager
                </Button>
            </Grid>

            <Grid xs={12} md={12} ></Grid>
            
            {
                homes?.map((home,index)=>(
                    <Grid item xs={12} sm={6} md={3} key={"card_maison_louer_by_categorie"+index}>
                        <CardMaison 
                            id={home.id}
                            slug={home.attributes.slug}
                            quartier={home.attributes.quartier?.data.attributes.libelle}
                            categorie={home.attributes.categories?.data[0]?.attributes.libelle}
                            prix={home.attributes.prix} 
                            image={home.attributes.photo?.data} 
                            libelle={home.attributes.libelle} 
                            description={home.attributes.description} />
                    </Grid>
                ))
            }
            
    </Grid>
</ApexChartWrapper>
 )
}

export default DetailMaison