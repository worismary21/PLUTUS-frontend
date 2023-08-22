import React, { useEffect } from 'react'

function LogOut() {

     localStorage.setItem("token", "");
     localStorage.setItem("role", "");
     localStorage.setItem("email", "")
     localStorage.setItem("id", "")

     useEffect(()=>{
          setTimeout(() => {
               window.location.href = "/login";
             },2000);
     }, [])


  return (
     <div> </div>
  )
}

export default LogOut
