import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LogOutButton = () => {
    const {logout, isAuthenticated} = useAuth0()
  return (
    isAuthenticated && (

        <button onClick={() =>logout()} className="border rounded-2xl w-full my-5 py-2 bg-black hover:bg-indigo-500 text-white">
            Sign Out
          </button>
        )
  )
}

export default LogOutButton