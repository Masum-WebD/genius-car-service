import React from "react";
import google from "../../../images/social/google.png";
import facebook from "../../../images/social/facebook.png";
import github from "../../../images/social/github.png";
import { useSignInWithGithub, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate=useNavigate()
    
    let errorMessage;
    if (error || error1) {
        errorMessage=
          <div>
            <p style={{color: 'red'}}>Error: {error?.message} {error?.message}</p>
          </div>
       
      }
      if(loading ){
        return <Loading></Loading>
    }
    if (user || user1) {
       navigate('/home')
      }
  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-primary w-50 "></div>
        <p className="mt-3 px-2">Or</p>
        <div style={{ height: "1px" }} className="bg-primary w-50 "></div>
      </div>
      {errorMessage}
      <div>
        <button onClick={() => signInWithGoogle()} className="btn btn-info w-50 d-block mx-auto my-2 p-2 fs-5 ">
          <img src={google} alt="" />
          <span className="mx-2">Google Sign in</span>
        </button>
        <button className="btn btn-info w-50 d-block mx-auto my-2 p-2 fs-5 ">
          <img style={{width:'30px', height:'30px'}} src={facebook} alt="" />
          <span className="mx-2">Facebook Sign in</span>
        </button>
        <button onClick={() => signInWithGithub()}className="btn btn-info w-50 d-block mx-auto my-2 p-2 fs-5 ">
          <img src={github} alt="" />
          <span className="mx-2">Github Sign in</span>
        </button>

      </div>
      {errorMessage}
    </div>
  );
};

export default SocialLogin;
