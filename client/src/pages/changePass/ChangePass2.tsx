/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState} from 'react'
import change from "./ChangePass.module.css"
import picture from "./images/logo.png"
// import { changePasswordConfirm } from "../../api/api"
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';





function ChangePass2() {

const [passwords, setPasswords] = useState("")
const [cPassword, setCPassword] = useState("")
const notify = () => toast("Wow so easy!");

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const handleInputChange = (e: any) => {
     e.preventDefault()
     setPasswords({
          ...passwords,
          [e.target.name]: e.target.value,
          
     })

}

const handleRegister = async (e) => {
     e.preventDefault()
     if(passwords !== cPassword){
          alert("Passwords do not match")
     }else{
          const changePasswordResponse = await changePasswordConfirm(passwords)
          console.log("changpasword", changePasswordResponse)
     }
}
  return (
    <>
          <div className={change.changePassword}>
          <div className={change.leftside}> 
          <img src={picture}/>
          <h5>Plutus is personal finance, made simple.</h5>
          <p>All your accounts, cards, savings, and investments in one place</p>
          </div>
          <div className={change.rightSide}>
               <div className='logo'>
                    <h2>Plutus</h2>
                    <p>Online Banking</p>
               </div>
               <div className={change.content}>
                    <h2>Change Password</h2>
                    <h5>Enter your details</h5>
                    <form onSubmit={handleRegister}>
                         <input type='password' placeholder='Old Password' name='oldPassword' required onChange={handleInputChange} ></input>
                         <input type='password' placeholder='New Password' name='newPassword'  required onChange={handleInputChange} ></input>
                         <input type='password' placeholder='Confirm Password' name='confirmPassword' required onChange={handleInputChange} ></input>
                         {/* <Link to="/changePassword"> */}
                              <button >Submit</button>
                              <ToastContainer />
                         {/* </Link> */}
                    </form>
               </div>
          </div>

     </div>


    </>
  )
}


export default ChangePass2
