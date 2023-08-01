import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ChangePass from './pages/changePass/ChangePass'
import ChangePass2 from './pages/changePass/ChangePass2'
import Error404 from './pages/error404/Error404'
import './App.css'

function App() {


  return <>
    <div className="App">
     <Router>
          <Routes>
               <Route path="/changePassword" element={<ChangePass />}/>
               <Route path='*' element={<Error404 />}/>
               <Route path='/changePasswordConfirm' element={<ChangePass2 />}/>  
          </Routes>
     </Router>
       
    </div>
  </>
}

export default App
