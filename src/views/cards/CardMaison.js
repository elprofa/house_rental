// ** React Imports
import { useState } from 'react'

import Link from 'next/link'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Collapse from '@mui/material/Collapse'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'

// ** Icons Imports
import ChevronUp from 'mdi-material-ui/ChevronUp'
import ChevronDown from 'mdi-material-ui/ChevronDown'
import DemoCarousel from './caroussel_maison'
import { styled, useTheme } from '@mui/material/styles'

const LinkStyled = styled('a')(({ theme }) => ({
    textDecoration: 'none',
    color: "#333"
}))

const CardMaison = (props) => {
  // ** State
  const [collapse, setCollapse] = useState(false)

  const handleClick = () => {
    setCollapse(!collapse)
  }

  return (
    <Card>
      {/* <CardMedia sx={{ height: '14.5625rem' }} image={props.image} /> */}
      <DemoCarousel image={props.image} legend={props.prix} />
      <CardContent>
        <Typography variant='h6' sx={{ marginBottom: 2,lineHeight: "25px" }}>
           
            <Link passHref href={'/pages/detail/'+props.id}>
                <LinkStyled >{props.libelle.substring(0, 35)+"..."}</LinkStyled>
            </Link>
            
        </Typography>
        <Typography variant='body2'>
            <p className="element_detail_maison">
                <span  style={{float:"left"}} className="span_categorie">{props.categorie}</span>
                <span  style={{float:"right"}} className="span_quartier">{props.quartier}</span>
            </p>
        </Typography>
      </CardContent>
      <CardActions className='card-action-dense'>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
         
          {collapse ?  <Button onClick={handleClick} style={{background: "#f4f5fa"}}>Moins {"<<<"}</Button> :  <Button onClick={handleClick} style={{background: "#f4f5fa"}}>Plus {">>>"}</Button>}
          <IconButton size='small' onClick={handleClick}>
            {collapse ? <ChevronUp sx={{ fontSize: '1.875rem' }} /> : <ChevronDown sx={{ fontSize: '1.875rem' }} />}
          </IconButton>
        </Box>
      </CardActions>
      <Collapse in={collapse}>
        <Divider sx={{ margin: 0 }} />
        <CardContent>
          <Typography variant='body2'>
           {props.description}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  )
}

export default CardMaison
