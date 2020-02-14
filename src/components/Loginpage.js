import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import '../components-css/Loginpage.css'
import Headline from '../NYT_images/headline.png'

class Loginpage extends Component {
  render() {
    return(
      <div>
        <header class="login-header">
          <img className="pic-height" src={Headline} alt="HTML map" border="0" usemap="#html4"/>
              <map name="html4">
                  <area shape="rect" coords="5,9,383,55" href="#" alt="Homepage Link" target="_self"/>
              </map>
        </header>
        <div className="main">
            <div className="prompt">Log in to your account</div>
            <div><button name="google" className="styled-a">Continue with Google</button></div>
            <div><button name="facebook" className="styled-2">Continue with Facebook</button></div>
            <div className="or-email">Or use your email</div>
            <form className="discount" action="index.html" method="post">
                <label htmlFor="email" className="email-label">Email Address</label>
                <input type="text" className="email" name="email" />
                <div className="error-1">Please enter your username or email address</div>
                <label htmlFor="password" className="password-label">Password</label>
                <input type="password" className="password" name="password" />
                <div className="error-2">Please enter a password</div>
                <div className="flex">
                  <div>
                      <input type="checkbox" className="remember" name="remember" />
                      <label htmlFor="remember">Remember me</label>
                  </div>
                  <div className="forgot"><a href="#" target="_self">Forgot your password?</a></div>
                </div>
                <div className="error-3">The email address and password you entered don't match any NYTimes account. Please try again.</div>
                
                  <button type="button" className="styled-3" value="Log In">Log In</button>

                <div className="sign-up">Don't have a Times account? <a href="#" target="_self" className="create">Create one</a></div>
            </form>
        </div>
      </div>
    )
  }
}


export default Loginpage
