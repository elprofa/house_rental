import gql from "graphql-tag";

export const LISTE_MAISON=gql`
    query LISTE_MAISON($limit:Int!,$start:Int!)
    { 
        maisons (pagination:{limit:$limit, start:$start}){ 
            data {
                id
                attributes
                { 
                    libelle
                    slug 
                    description
                    date_publication
                    categories
                    { 
                        data{ 
                        id 
                        attributes{ 
                            libelle
                            slug
                        }
                    }
                    }
                    quartier
                    { 
                        data
                            { 
                        id
                        attributes
                        { 
                            libelle
                        slug
                        ville {
                            data{ 
                                id
                            attributes
                            { 
                                libelle
                                slug
                                
                            }
                            }
                        }
                        }
                        }
                    }
                    adresse
                    prix
                    photo { 
                        data
                        { 
                            id
                            attributes{ 
                                    name
                                url
                                previewUrl
                            }
                        }
                    }
                }
            }
        }
    }
`;

export const LISTE_MAISON_PUB=gql`
    query LISTE_MAISON_PUB
    { 
        maisons (pagination:{limit:1},filters:{pub:{eq:true}}){ 
            data {
                id
                attributes
                { 
                    libelle
                    slug 
                    description
                    date_publication
                    categories
                    { 
                        data{ 
                        id 
                        attributes{ 
                            libelle
                            slug
                        }
                    }
                    }
                    quartier
                    { 
                        data
                            { 
                        id
                        attributes
                        { 
                            libelle
                        slug
                        ville {
                            data{ 
                                id
                                attributes
                                { 
                                    libelle
                                    slug
                                    
                                }
                            }
                        }
                        }
                        }
                    }
                    adresse
                    prix
                    photo { 
                        data
                        { 
                            id
                            attributes{ 
                                    name
                                url
                                previewUrl
                            }
                        }
                    }
                }
            }
        }
    }
`;

export const DETAIL_MAISON=gql`

    query DETAIL_MAISON ($id:ID!){ 
        maison (id:$id){ 
            data {
                    id
                    attributes
                    { 
                        users_permissions_user{ 
                            data{ 
                            attributes
                            { 
                                username
                            email
                            }
                        }
                    }
                    charge
                    libelle
                    slug 
                    description
                    date_publication
                    meuble
                    chambre
                    placard
                    terrasse
                    categories
                    { 
                        data{ 
                        id 
                        attributes{ 
                            libelle
                            slug
                        }
                    }
                    }
                    quartier
                    { 
                        data
                            { 
                        id
                        attributes
                        { 
                            libelle
                        slug
                        ville {
                            data{ 
                                id
                                attributes
                                { 
                                    libelle
                                    slug
                                    
                                }
                            }
                        }
                        }
                        }
                    }
                    adresse
                    prix
                    photo { 
                        data
                        { 
                            id
                            attributes{ 
                                    name
                                url
                                previewUrl
                            }
                        }
                    }
                }
            }
        }
    }

`;

export const MAISON_BY_CATEGORIE=gql`

    query MAISON_BY_CATEGORIE ($id:ID!){ 
        maisons (filters:{
    categories:{
      id:{eq:$id}
    }
  }
  pagination:{limit:12}
  ){ 
            data {
                    id
                    attributes
                    { 
                        users_permissions_user{ 
                            data{ 
                            attributes
                            { 
                                username
                            email
                            }
                        }
                    }
                    charge
                    libelle
                    slug 
                    description
                    date_publication
                    meuble
                    chambre
                    placard
                    terrasse
                    categories
                    { 
                        data{ 
                        id 
                        attributes{ 
                            libelle
                            slug
                        }
                    }
                    }
                    quartier
                    { 
                        data
                            { 
                        id
                        attributes
                        { 
                            libelle
                        slug
                        ville {
                            data{ 
                                id
                                attributes
                                { 
                                    libelle
                                    slug
                                    
                                }
                            }
                        }
                        }
                        }
                    }
                    adresse
                    prix
                    photo { 
                        data
                        { 
                            id
                            attributes{ 
                                    name
                                url
                                previewUrl
                            }
                        }
                    }
                }
            }
        }
    }

`;

export const CREATION_MAISON=gql`
    mutation CREATION_MAISON (
        $libelle:String!
        $prix:String!
        $charge:ENUM_MAISON_CHARGE
        $route:ENUM_MAISON_ROUTE
        $description:String
        $categorie:[ID]
        $quartier:ID
        $chambre:Int
        $placard:ENUM_MAISON_PLACARD
        $terrasse:ENUM_MAISON_TERRASSE
        $meuble:ENUM_MAISON_MEUBLE
        $adresse:String
        $user:ID!
        
    ){ 
        createMaison(data:{
        libelle:$libelle,
        prix:$prix,
        charge:$charge,
        route:$route,
        description:$description,
        categories:$categorie,
        quartier:$quartier,
        chambre:$chambre,
        placard:$placard,
        terrasse:$terrasse,
        meuble:$meuble,
        adresse:$adresse
        users_permissions_user:$user
        }){ 
                data{ 
                id
            }
        }
    }
  `;