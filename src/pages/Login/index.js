import React, {useState} from 'react'
import './login.css'
import {} from 'react-icons'
import { MdEmail , MdLock} from "react-icons/md";
import { HiEye, HiEyeOff } from "react-icons/hi";

function Login() {
   const [password, setPassword] = useState("")
   const [show, setShow] = useState(false) 
   
   const handleClick = (e) => {
      e.preventDefault()
      setShow(!show);
   }

    return (
        <div className="tela-login">
            <div className="login-logo">
                <img
                    src="https://image.flaticon.com/icons/png/128/3580/3580168.png"
                    alt="Login App"
                />
           </div>
           
           <div className="login-right">
            <h1>Access the Store</h1>

            <div className="Email">
               <MdEmail />
               <input
                  type="text"
                  placeholder="Type your e-mail"
               />
            </div>

            <div className="Password">
               <MdLock />
               <input
                  placeholder="Type your password"
                  type={show ? "text" : "password"}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
               />    
               <div className="login-eye">
                  {show ? (
                    <HiEyeOff
                    size={20}
                    onClick={handleClick}
                    />
                  ) :( 
                     <HiEye
                    size={20}
                    onClick={handleClick}
                    />
                  )}
                  </div>   
            </div>

            <button type="submit">
               Login 
            </button>

            <h4>I do not an account</h4>

            <button type="submit">
               Sign Up
            </button>
         </div>
      </div>
   )
}

export default Login
