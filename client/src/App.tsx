
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import SignUp from './pages/signUp/SignUp';


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
      </Routes>
     </BrowserRouter> 
    </>
  )
}

export default App
