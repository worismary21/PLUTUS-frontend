
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import SignUp from './pages/signUp/SignUp';
import Verify from "./pages/verify/Verify";
import "./App.css"


function App() {

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
       <Route path='/signup' element={<SignUp/>}/>
       <Route path="/verify" element={<Verify />} />
      </Routes>
     </BrowserRouter> 
     </>

)}

export default App

