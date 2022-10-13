import axios from 'axios';
import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { logo } from '../../assets';
import './auth.css';


const Login = (props) => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    // const [message, setMessage] = useState("")

    let handleSubmit = async (e) => {
        e.preventDefault();

        const baseURL = "http://bills9ja.herokuapp.com/login/";

        try {
            let response = await axios.post(baseURL, {
                username, password
            })
            console.log(response.data)
            console.log(response.status)
        } catch (error) {
            console.log(error)
        }
    }

  return (
<div class="account-pages .mt-5 .mb-5 .pt-5">
    <div class=".container">
        <div class="row justify-content-center">
            <div class=".col-md-5">
                <div class="card bg-pattern">

                    <div class="card-body p-4">
                        
                        <div class="text-center w-75 m-auto">
                            
                            
                            <button>
                                <span><img src={logo} alt="Logo" height="50px" /></span>
                            </button>
                            
                                
                            <p class="text-muted mb-2 mt-3">Login to your account.</p>
                        </div>

                        {/*  Display error and messages */}
                        <div> 
                        
                        
                        
                        </div>   
                        {/*-- End Display error and messages */}                                                                 
                        
                        <form onSubmit={handleSubmit} method="POST"><input type="hidden" name="csrfmiddlewaretoken" value="mesV4IdkTQXsuSm79ioQMoBuB6h1gAi6h6pYnO498sLUUl5puxhGaG6FgfvwXjeu" />

                            <div class="row">
                                <div class="col-md-12 pt-3">
                                    <div class="form-group">
                                        <label for="id_username">Username</label>
                                        <input onChange={(e) => setUsername(e.target.value)} type="text" name={username} autofocus="" placeholder="Enter username here" class="form-control" required="" id="id_username" />
                                    </div>
                                </div>

                                <div class="col-md-12 pt-3">
                                    <div class="form-group">
                                        <label for="id_password">Password</label>
                                        <input onChange={(e) => setPassword(e.target.value)} type="password" name={password} placeholder="Enter password here" class="form-control" required="" id="id_password" />
                                    </div>
                                </div>
                            </div>

                            {/* <div>{message ? <p>{message}</p>: null}</div> */}

                            <div class="form-group mb-0 text-center pt-4 col-12">
                                <div class="col-sm-12"><button class="_3ApY6Q53at btn btn-block btn-coloured-heavy" type="submit">SIGN IN</button></div>
                            </div>

                        </form>

                        <div class="row mt-3">
                            <div class="col-12 text-center mb-3">
                                <p class="text-center">
                                    <button class="text-black ml-"><Link to="/forgotpassword"><b>Forgot your password?</b></Link></button>
                                </p>
                            </div> {/*-- end col */}

                            <div class="col-12 text-center">
                                <p class="">Don't have an account?  <button class="text-black ml-1"><Link to='/register'><b>Create Account</b></Link></button></p>
                            </div> {/*-- end col */}
                        </div>
                        {/*-- end row */}

                    </div> {/*-- end card-body */}
                </div>
                {/*-- end card */}

                

            </div> {/*-- end col */}
        </div>
        {/*-- end row */}
    </div>
    {/*-- end container */}
</div>
  );
}

export default Login;