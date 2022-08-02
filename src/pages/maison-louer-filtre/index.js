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
import { useRouter } from 'next/router'
import { LISTE_MAISON_FILTRE, LISTE_MAISON_FILTRE_CATEGORIE } from 'graphql/filtre'

const MaisonLouerFiltre = () => {

    const router = useRouter()

    

    const [categorie, setcategorie] = useState("");
    const [chambre, setchambre] = useState("");
    const [placard, setplacard] = useState("");
    const [meuble, setmeuble] = useState("");
    const [quartier, setquartier] = useState("");
    const [prix, setprix] = useState("");
    const [positionnement, setpositionnement] = useState("");
    const [terrasse, setterrasse] = useState("");

    useEffect(() => {

        setcategorie(router.query.categorie);
        setchambre(router.query.chambre);
        setplacard(router.query.placard);
        setmeuble(router.query.meuble);
        setquartier(router.query.quartier);
        setprix(router.query.prix);
        setpositionnement(router.query.positionnement);
        setterrasse(router.query.terrasse);
   });
    
   
   const result=useQuery(LISTE_MAISON_FILTRE);

   console.log(router.query)

    const maisons=result?.data?.maisons?.data;

    let body = [];

    var i;
   
    if(result?.data?.maisons!=='undefined')
    {

      
        
        for (i = 0; i < maisons?.length; i++) {

            let bool_filtre=true;
            
            // --------------------------categorie-------------------------------
            let filtre_categorie=0;
            if(categorie!="")
            {
                filtre_categorie=2;
            }
            if(parseInt(categorie)==maisons[i]?.attributes?.categories?.data[0]?.id)
            {
                filtre_categorie=1;
            }
            if(filtre_categorie==2){ //categorie precisée mais pas identique avec ce qu'il ya dans la base
                bool_filtre=false;
            }
            // ---------------------------------------------------------------------


            // -------------------------------Chambre-------------------------------

                let filtre_chambre=0;
                if(chambre!="")
                {
                    filtre_chambre=2;
                }
                if(parseInt(chambre)==maisons[i]?.attributes?.chambre)
                {
                    filtre_chambre=1;
                }
                if(filtre_chambre==2){ //categorie precisée mais pas identique avec ce qu'il ya dans la base
                    bool_filtre=false;
                }

            // ---------------------------------------------------------------------

            // -------------------------------Placard-------------------------------

            let filtre_placard=0;
            if(placard!="")
            {
                filtre_placard=2;
            }
            if(placard==maisons[i]?.attributes?.placard)
            {
                filtre_placard=1;
            }
            if(filtre_placard==2){ //categorie precisée mais pas identique avec ce qu'il ya dans la base
                bool_filtre=false;
            }

        // ---------------------------------------------------------------------

        // -------------------------------Terrasse-------------------------------

        let filtre_terrasse=0;
        if(terrasse!="")
        {
            filtre_terrasse=2;
        }
        if(terrasse==maisons[i]?.attributes?.terrasse)
        {
            filtre_terrasse=1;
        }
        if(filtre_terrasse==2){ //categorie precisée mais pas identique avec ce qu'il ya dans la base
            bool_filtre=false;
        }        
    // ---------------------------------------------------------------------

    // -------------------------------Meuble-------------------------------

        let filtre_meuble=0;
        if(meuble!="")
        {
            filtre_meuble=2;
        }
        if(meuble==maisons[i]?.attributes?.meuble)
        {
            filtre_meuble=1;
            
        }
        if(filtre_meuble==2){ //categorie precisée mais pas identique avec ce qu'il ya dans la base
            bool_filtre=false;
        }        

    // ---------------------------------------------------------------------

    // -------------------------------Quartier-------------------------------

    let filtre_quartier=0;
    if(quartier!="")
    {
        filtre_quartier=2;
    }
    if(quartier==maisons[i]?.attributes?.quartier?.data?.id)
    {
        filtre_quartier=1;
    }
    if(filtre_quartier==2){ //categorie precisée mais pas identique avec ce qu'il ya dans la base
        bool_filtre=false;
    }        

// ---------------------------------------------------------------------


    
    // -------------------------------Positionnement-------------------------------

    let filtre_route=0;
    if(positionnement!="")
    {
        filtre_route=2;
    }
    if(positionnement==maisons[i]?.attributes?.route)
    {
        filtre_route=1;
    }
    if(filtre_route==2){ //categorie precisée mais pas identique avec ce qu'il ya dans la base
        bool_filtre=false;
    }        

// ---------------------------------------------------------------------

    // -------------------------------Prix-------------------------------

    let filtre_prix=0;
    if(prix!="")
    {
        filtre_prix=2;
    }
    const a=maisons[i]?.attributes?.prix;
    if(parseInt(prix)>=parseInt(a))
    {
        filtre_prix=1;
    }
    if(filtre_prix==2){ //categorie precisée mais pas identique avec ce qu'il ya dans la base
        bool_filtre=false;
    }        

    console.log(parseInt(prix))
    console.log(parseInt(maisons[i]?.attributes?.prix))
// ---------------------------------------------------------------------
      
            
        if(bool_filtre==true){
            body.push(
                maisons[i]
            );
        }
    }
    }
   
    console.log(body)

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sx={{ paddingBottom: 4 }}>
        <Typography variant='h5'>Maison à louer</Typography>
      </Grid>
        <Grid item xs={12} md={12}>
          <FormFiltre />
        </Grid>  

        {
            body?.map((body,index)=>(
                <Grid item xs={12} sm={6} md={3} key={"card_maison_louer"+index}>
                    <CardMaison 
                        id={body.id}
                        slug={body.attributes.slug}
                        quartier={body.attributes.quartier?.data.attributes.libelle}
                        categorie={body.attributes.categories?.data[0]?.attributes.libelle}
                        prix={body.attributes.prix} 
                        image={body.attributes.photo?.data} 
                        libelle={body.attributes.libelle} 
                        description={body.attributes.description} />
                </Grid>
            ))
        }

      
    </Grid>
  )
}

export default MaisonLouerFiltre
