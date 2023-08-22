import ChangePass from './pages/changePass/ChangePass'
import ChangePass2 from './pages/changePass/ChangePass2'
import Error404 from './pages/error404/Error404'
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Verify from "./pages/verify/Verify";
import "./App.css"
import SignUp from './pages/signUp/signUp';
import Login from './pages/login/login'
import { RoutesDashBoard } from './pages/Dashboard/Routes';
import Loggin from './pages/onboarding/Loggin';
import Signupp from './pages/onboarding/Signupp';
import Homepage from './pages/homepage/Homepage';
import { useEffect, useState } from 'react';
import DashboardHome from './pages/Dashboard/HomeDashBoard/DashboardHome';
import Protected from './components/Protected';

function App() {    
     const [isSignedIn, setIsSignedIn] = useState(false)
     const verify = localStorage.getItem("verify")
     console.log( typeof isSignedIn)

  const signin = () => {
     if(verify ){
          setIsSignedIn(true)
     }else setIsSignedIn(false)
  }

  useEffect (()=>{
     signin()
  },[])

  return (
    <>
     <BrowserRouter>
          <ToastContainer
          theme="dark"
          position="top-right"
          autoClose={3000}
          closeOnClick     
          pauseOnHover={false}      
          />
          <Routes>
               <Route path='*' element={<Error404 />}/>
               <Route path='/' element={<Homepage /> } />
               <Route path='/signup' element={<SignUp />}/>
               <Route path="/login" element={<Login /> } />
               <Route path='/changePasswordConfirm' element={<ChangePass2 /> }/>  
               <Route path="/verify" element={<Protected isSignedIn={isSignedIn}> <Verify /> </Protected>} />
               <Route path="/changePassword" element={<Protected isSignedIn={isSignedIn}><ChangePass /> </Protected>}/>
               <Route path='/dashboard/*' element={<Protected isSignedIn={isSignedIn}> <RoutesDashBoard /> </Protected>} />
               <Route path='/dashboardhome' element={<Protected isSignedIn={isSignedIn}> <DashboardHome /> </Protected>} />
          </Routes>
     </BrowserRouter> 
     </>

)}

export default App

