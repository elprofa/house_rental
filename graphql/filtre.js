import gql from "graphql-tag";

export const LISTE_CATEGORIE=gql`
    query{ 
        categories{ 
        data
            { 
                id
                attributes{ 
                    libelle
                    slug
                }
            }
        }
    }
`;
export const LISTE_QUARTIER=gql`
    query{ 
        quartiers{ 
        data
            { 
                id
                attributes{ 
                    libelle
                    slug
                }
            }
        }
    }
`;

export const LISTE_MAISON_FILTRE=gql`
    query LISTE_MAISON_FILTRE
    { 
        maisons{ 
            data {
                id
                attributes
                { 
                    libelle
                    slug 
                    description
                    date_publication
                    meuble
                    terrasse
                    chambre
                    placard
                    route
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

export const LISTE_MAISON_FILTRE_CATEGORIE=gql`
    query LISTE_MAISON_FILTRE_CATEGORIE(
        $categories:ID!
    )
    { 
        maisons (filters:{ 
            categories:{id:{eq:$categories}}
        }){ 
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