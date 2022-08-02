// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'

// ** Icons Imports
import TrendingUp from 'mdi-material-ui/TrendingUp'
import StarOutline from 'mdi-material-ui/StarOutline'
import AccountOutline from 'mdi-material-ui/AccountOutline'
import LockOpenOutline from 'mdi-material-ui/LockOpenOutline'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/client'
import DemoCarousel from './caroussel_maison'
import {LISTE_MAISON_PUB} from '../../../graphql/maison-louer'
import Link from 'next/link'

import { useTheme } from '@mui/material/styles'

const LinkStyled = styled('a')(({ theme }) => ({
    textDecoration: 'none',
    color: "#333"
  }))

// Styled Box component
const StyledBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}))

const CardMaisonPub = () => {

    const resultat=useQuery(LISTE_MAISON_PUB);

    console.log(resultat);

    const maisons=resultat?.data?.maisons?.data

  return (
    <>
        {
            maisons?.map((maison,index)=>(
                <Card key={"card_maison_pub"+index}>
                    <Grid container spacing={6}>
                        <Grid item xs={12} sm={7}>
                        <CardContent sx={{ padding: theme => `${theme.spacing(3.25, 5.75, 6.25)} !important` }}>
                            <Typography variant='h6' sx={{ marginBottom: 3.5 }}>
                            
                                <Link passHref href={'/pages/detail/'+maison?.id}>
                                    <LinkStyled >{maison.attributes?.libelle}</LinkStyled>
                                </Link>
                            </Typography>
                            <Typography variant='body2'>
                            {maison.attributes?.description}
                            </Typography>
                            <Divider sx={{ marginTop: 6.5, marginBottom: 6.75 }} />
                            <Grid container spacing={4}>
                            <Grid item xs={12} sm={5}>
                                <StyledBox>
                                <Box sx={{ mb: 6.75, display: 'flex', alignItems: 'center' }}>
                                    <StarOutline sx={{ color: 'primary.main', marginRight: 2.75 }} fontSize='small' />
                                    <Typography variant='body2'>Dans le quartier: <b>{maison.attributes?.quartier?.data?.attributes?.libelle}</b> </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <StarOutline sx={{ color: 'primary.main', marginRight: 2.75 }} fontSize='small' />
                                    <Typography variant='body2'>Type d'immo.:<b>{maison.attributes?.categories?.data[0]?.attributes?.libelle}</b></Typography>
                                </Box>
                                </StyledBox>
                            </Grid>
                            <Grid item xs={12} sm={7}>
                                <Box sx={{ mb: 6.75, display: 'flex', alignItems: 'center' }}>
                                <StarOutline sx={{ color: 'primary.main', marginRight: 2.75 }} fontSize='small' />
                                <Typography variant='body2'>Publié le : <b>{maison.attributes?.date_publication}</b></Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <TrendingUp sx={{ color: 'primary.main', marginRight: 2.75 }} fontSize='small' />
                                <Typography variant='body2'>Prix: <b>{maison.attributes?.prix}</b> Frcfa </Typography>
                                </Box>
                            </Grid>
                            </Grid>
                        </CardContent>
                        </Grid>
                        <Grid
                        item
                        sm={5}
                        xs={12}
                        sx={{ paddingTop: ['0 !important', '1.5rem !important'], paddingLeft: ['1.5rem !important', '0 !important'] }}
                        >
                            <CardContent
                                sx={{
                                height: '100%',
                                display: 'flex',
                                textAlign: 'center',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: 'action.hover',
                                padding: theme => `${theme.spacing(18, 5, 16)} !important`
                                }}
                            >
                                <Box>
                                    <DemoCarousel image={ maison.attributes?.photo?.data } legend={maison.attributes?.prix} className=".section_image_maison_pub" />
                                </Box>
                            </CardContent>
                        </Grid>
                    </Grid>
                </Card>
            ))
        }
    </>
  )
}

export default CardMaisonPub
