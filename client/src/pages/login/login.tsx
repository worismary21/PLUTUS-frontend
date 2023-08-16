/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import  { useState } from "react";
import log from "./login.module.css";
import Plutosimage1 from "./imagesforlogin/Plutosimage1.png";
import { loginUser } from "../../redux/action";
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom'
// import { useDispatch } from "react-redux";
// import axios from "axios";

interface LoginData{
  email:'',
  password:''
}

function Login() {
  const [formData, setFormData] = useState<LoginData>({
    email:'',
    password:''
  })

  const [error] = useState('')

  const [loading] = useState(false)

  const handleChange = (e:any) => {
    const {name, value} = e.target
    setFormData({
      ...formData, [name]:value
    })
  }

  console.log('form',formData)

  const dispatch = useDispatch() as unknown as any

  const handleSubmit = (e:any) => {
    e.preventDefault()
    dispatch(loginUser(formData))
  }

  return (
    <>
      <>
        {/* <Link to="/Home" className="Home">
          
        </Link> */}
      </>
      <div className={log.main1} >
        <div className={log.c1}>
          <img src={Plutosimage1} className={log.pluto} alt="Plutos image" />
         <div className={log.left_text}>
         <h3 >Plutus is personal <br/> finance, made simple.</h3>
          <p>
            All your accounts, cards, savings, and investments in <br/> one place.
          </p>
         </div>
    
        </div>
        <div className={log.form}>
            <div className={log.logo}>
                <h1 > Plutus </h1>
                <p > Online Banking</p>
              
            </div>
           
          <form onSubmit={handleSubmit}>
          <p className={log.text7}> Log in </p>
            <div className={log.mb_1}>
              <label className={log.form1}>Email</label>
              <br></br>
              <input
                className={log.form2}
                type="email"
                name="email"
                placeholder="plutus@gmail.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className={log.mb_2}>
              <label className={log.form3}>Password</label>
              <br></br>
              <input
                className={log.form4}
                name="password"
                type="password"
                placeholder="***********"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            {/* <Link to="/dashBoard"> */}
            <button
            type = "submit" 
            className={log.btn1}>
                Login
                </button>
            {/* </Link> */}
                {error &&(
                    <div>{error}</div>
                )}
            <p className={log.text8}>Forgot your password?</p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;


  //this below with the dispatch variable means i want to input some data into some reducer or slice
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const payload = {
//     accountnumber,
//     password,
//   };
//   //the set... will be used to update the variable name.
// const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     //this prevents the site from reloading
//     e.preventDefault();

//     const user_login = axios.post("", payload);
//     console.log(user_login);

//     if (user_login.statusCode === 200) {
//       dispatch(
//         login({
//           accountnumber: accountnumber,
//           password: password,
//           loggedIn: true,
//         })
//       );
//       navigate("/");
//     }
//   };
