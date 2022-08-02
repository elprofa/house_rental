// ** MUI Imports
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import MAISON_BY_USER from "../../../graphql/table"
import { useQuery } from '@apollo/client'
import { useEffect, useState } from 'react'
import Button from '@mui/material/Button'


const createData = (libelle, prix, ville, quartier, date,action) => {
  return { libelle, prix, ville, quartier, date,action }
}




const TableMaison = () => {

    const [username, setUsername] = useState("");
    const [id, setId] = useState("");

    useEffect(() => {
        setUsername(JSON.parse(localStorage.getItem('username')));
        setId(JSON.parse(localStorage.getItem('id')));
    });

    console.log(id);

    const result = useQuery(MAISON_BY_USER,{
        variables:{
           id:id
        }
    });
    const rows = []
    if(result.data){

        const maisons=result.data?.maisons?.data;
        

        maisons.map((maison,index)=>(
            rows.push(
                createData(
                    maison?.attributes?.libelle, 
                    maison?.attributes?.prix+" Frcfa", 
                    maison?.attributes?.quartier?.data?.attributes?.ville?.data?.attributes?.libelle, 
                    maison?.attributes?.quartier?.data?.attributes?.libelle,
                    maison?.attributes?.date_publication,
                    <Button variant='contained' size='large' >Afficher</Button>)
            )
        ))
        
    }
   
    console.log(result);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label='Table des maisons'>
        <TableHead>
          <TableRow>
            <TableCell align='left'>Libellé de la maison</TableCell>
            <TableCell align='center'>Prix</TableCell>
            <TableCell align='center'>Ville</TableCell>
            <TableCell align='center'>Quartier</TableCell>
            <TableCell align='center'>Publié(e) le </TableCell>
            <TableCell align='center'>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow
              key={row.name}
              sx={{
                '&:last-of-type td, &:last-of-type th': {
                  border: 0
                }
              }}
            >
              <TableCell component='th' scope='row' align='left'>
                {row.libelle}
              </TableCell>
              <TableCell align='center'>{row.prix}</TableCell>
              <TableCell align='center'>{row.ville}</TableCell>
              <TableCell align='center'>{row.quartier}</TableCell>
              <TableCell align='center'>{row.date}</TableCell>
              <TableCell align='center'>{row.action}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableMaison
