// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// ** Icons Imports
import ChevronUp from 'mdi-material-ui/ChevronUp'
import ChevronDown from 'mdi-material-ui/ChevronDown'
import DotsVertical from 'mdi-material-ui/DotsVertical'

const data = [
  {
    sales: '894k',
    trendDir: 'up',
    subtitle: 'USA',
    title: '$8,656k',
    avatarText: 'US',
    trendNumber: '25.8%',
    avatarColor: 'success',
    trend: <ChevronUp sx={{ color: 'success.main', fontWeight: 600 }} />
  }
 
]

const CardDetailInfoMaison = (props) => {

    
    const maison=props.maison;
    const categories=maison?.categories?.data;

    console.log(categories)

  return (
    <Card>
      <CardHeader
        title={props.title}
        titleTypographyProps={{ sx: { lineHeight: '1.2 !important', letterSpacing: '0.31px !important' } }}
        action={
          <IconButton size='small' aria-label='settings' className='card-more-options' sx={{ color: 'text.secondary' }}>
            <DotsVertical />
          </IconButton>
        }
      />
      <CardContent sx={{ pt: theme => `${theme.spacing(2)} !important` }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
            <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <Box sx={{ marginRight: 2, display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ display: 'flex' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                     Publié le
                    </Box>
                  </Box>
                  
                </Box>

                <Box sx={{ display: 'flex', textAlign: 'end', flexDirection: 'column' }}>
                  <Typography sx={{ fontWeight: 600, fontSize: '0.875rem', lineHeight: 1.72, letterSpacing: '0.22px' }}>
                   {maison?.date_publication}
                  </Typography>
                 
                </Box>
              </Box>
            </Box>
           
            <p style={{borderBottom:"1px solid #f4f5fa",margin:"0px"}}></p>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
           
              
              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <Box sx={{ marginRight: 2, display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ display: 'flex' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                     Quartier
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                     Ville
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                     Adresse
                    </Box>
                  </Box>
                 
                </Box>

                <Box sx={{ display: 'flex', textAlign: 'end', flexDirection: 'column' }}>
                  <Typography sx={{ fontWeight: 600, fontSize: '0.875rem', lineHeight: 1.72, letterSpacing: '0.22px' }}>
                   {maison?.quartier?.data?.attributes?.libelle}
                  </Typography>
                  <Typography  sx={{ fontWeight: 600, fontSize: '0.875rem', lineHeight: 1.72, letterSpacing: '0.22px' }}>
                    {maison?.quartier?.data?.attributes?.ville?.data?.attributes?.libelle}
                  </Typography>
                  <Typography  sx={{ fontWeight: 600, fontSize: '0.875rem', lineHeight: 1.72, letterSpacing: '0.22px' }}>
                    {maison?.adresse}
                  </Typography>
                </Box>
              </Box>
            </Box>
           
            <p style={{borderBottom:"1px solid #f4f5fa",margin:"0px"}}></p>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              

              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <Box sx={{ marginRight: 2, display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ display: 'flex' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                     Type d'immo.
                    </Box>
                  </Box>
                  
                </Box>

                <Box sx={{ display: 'flex', textAlign: 'end', flexDirection: 'column' }}>
                    <Typography sx={{ fontWeight: 600, fontSize: '0.875rem', lineHeight: 1.72, letterSpacing: '0.22px' }}>
                        {
                            categories?.map((categorie,index)=>(
                                <Box sx={{ display: 'flex' }} key={"categorie_detail_maison"+index}>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        {categorie.attributes.libelle}
                                    </Box>
                                </Box>
                            ))
                        }
                    </Typography>
                </Box>
              </Box>
            </Box>

            <p style={{borderBottom:"1px solid #f4f5fa",margin:"0px"}}></p>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              

              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <Box sx={{ marginRight: 2, display: 'flex', flexDirection: 'column' }}>
                   
                    <Box sx={{ marginRight: 2, display: 'flex', flexDirection: 'column' }}>
                        <Box sx={{ display: 'flex' }} >
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                Chambre
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ marginRight: 2, display: 'flex', flexDirection: 'column' }}>
                        <Box sx={{ display: 'flex' }} >
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                Terrasse
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ marginRight: 2, display: 'flex', flexDirection: 'column' }}>
                        <Box sx={{ display: 'flex' }} >
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                Placard
                            </Box>
                        </Box>
                    </Box>

                    <Box sx={{ marginRight: 2, display: 'flex', flexDirection: 'column' }}>
                        <Box sx={{ display: 'flex' }} >
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                Meublé
                            </Box>
                        </Box>
                    </Box>
                </Box>

                
                

                <Box sx={{ display: 'flex', textAlign: 'end', flexDirection: 'column' }}>
                    <Typography  sx={{ fontWeight: 600, fontSize: '0.875rem', lineHeight: 1.72, letterSpacing: '0.22px' }}>
                        {maison?.chambre}
                    </Typography>
                    <Typography  sx={{ fontWeight: 600, fontSize: '0.875rem', lineHeight: 1.72, letterSpacing: '0.22px' }}>
                        {maison?.terrasse}
                    </Typography>
                    <Typography  sx={{ fontWeight: 600, fontSize: '0.875rem', lineHeight: 1.72, letterSpacing: '0.22px' }}>
                        {maison?.placard}
                    </Typography>
                    <Typography  sx={{ fontWeight: 600, fontSize: '0.875rem', lineHeight: 1.72, letterSpacing: '0.22px' }}>
                        {maison?.meuble}
                    </Typography>
                  
                </Box>
              </Box>
            </Box>
      </CardContent>
    </Card>
  )
}

export default CardDetailInfoMaison
