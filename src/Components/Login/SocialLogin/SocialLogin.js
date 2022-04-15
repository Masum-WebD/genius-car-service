import React from "react";
import google from "../../../images/social/google.png";
import facebook from "../../../images/social/facebook.png";
import github from "../../../images/social/github.png";

const SocialLogin = () => {
  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-primary w-50 "></div>
        <p className="mt-3 px-2">Or</p>
        <div style={{ height: "1px" }} className="bg-primary w-50 "></div>
      </div>
      <div>
        <button className="btn btn-info w-50 d-block mx-auto my-2 p-2 fs-5 ">
          <img src={google} alt="" />
          <span className="mx-2">Google Sign in</span>
        </button>
        <button className="btn btn-info w-50 d-block mx-auto my-2 p-2 fs-5 ">
          <img style={{width:'30px', height:'30px'}} src={facebook} alt="" />
          <span className="mx-2">Facebook Sign in</span>
        </button>
        <button className="btn btn-info w-50 d-block mx-auto my-2 p-2 fs-5 ">
          <img src={github} alt="" />
          <span className="mx-2">Github Sign in</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
