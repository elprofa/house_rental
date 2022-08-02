import React from 'react'
import {useEffect} from 'react'
import { useRouter } from 'next/router'


function Logout() {
    const router=useRouter();

    useEffect(() => {
    localStorage.removeItem('id');
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    localStorage.removeItem('jwt');
    localStorage.removeItem('id_role');
    localStorage.removeItem('name_role');
    
    router.push('/pages/login');

    });

  return (
    <div>Deconnexion reussie</div>
  )
}

export default Logout