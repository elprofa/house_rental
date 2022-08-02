import gql from "graphql-tag";

 const MAISON_BY_USER=gql`

    query MAISON_BY_USER ($id:ID!){ 
        maisons (filters:{users_permissions_user:{id:{eq:$id}}}){ 
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

export default MAISON_BY_USER;