import React from "react";
import "./Landing.css";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const provider = new GoogleAuthProvider();

  const auth = getAuth(app);

  const navigate = useNavigate();

  async function handleSignIn() {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user.displayName);
        navigate("/clientdashboard");
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        // const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(error);
        // ...
      });
  }


  async function handleSignInDoc() {

    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log(user.displayName)
    navigate("/docverify")
  // localStorage.setItem(user: user.displayName)
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    // const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.log(error)
    // ...
  });



  }


  return (
    <div className="calm">
      <div className="heading">
        <h1>⚕️calm.</h1>
      </div>

      <div className="subs">
        <h3>
          Empowering Telemedicine,
          <br /> Real-time Health Data for Enhanced Diagnosis.
        </h3>
      </div>
      <div className="senti">
        <p>Where patient care meets cutting edge technology.</p>
      </div>
      <div className="signin">
        <button className="login-btn" onClick={handleSignIn}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu1PJmT_THldF0n5APcmt9p10utgu6KSw4cH2fQ5Xhpw&s" alt="" />
          <p>Sign in as client.</p>
          
        </button>
      </div>



      <div className="signasdoc">
        <div className="qn">
        <h4>Are you a Doctor ?</h4>
        <h2>Level up your medical practice.Join our Telemedicine revolution!</h2>
        </div>
        <button className="gsingn" onClick={handleSignInDoc}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu1PJmT_THldF0n5APcmt9p10utgu6KSw4cH2fQ5Xhpw&s" alt="" />
          <p>Sign In with google</p>
        </button>
      </div>

    </div>
  );
};

export default Landing;
