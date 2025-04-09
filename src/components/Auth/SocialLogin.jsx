import React from "react";
const SocialLogin =()=>{
    return(
        <div className="social-login">
           <p className="social-login-text">Or sign in with</p>
           <div className="social-login-buttons">
            <button type="button" className="social-login-button google"> Google </button>
            <button type="button" className="social-login-button google"> Facebook </button>
            <button type="button" className="social-login-button google"> X </button>
            </div>
        </div>
    )
}
export default  SocialLogin;