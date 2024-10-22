import { useRef, useState } from "react";
import Header from "./Header";
import { validateData } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const toggleForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleButtonClick = () => {
    const validationMessage = validateData(
      emailRef.current.value,
      passwordRef.current.value
    );
    setErrorMessage(validationMessage);

    if(validationMessage) return

    if (!isSignInForm) {
      //Sign up Logic
      createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    } else {
      // Sign in logic
      signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/7c0e18aa-2c95-474d-802e-7f30e75dcca4/web/NP-en-20241014-TRIFECTA-perspective_3d3d9a46-d36b-4896-8c37-44f9d3c9e185_large.jpg"
          alt="BackGround"
        />
      </div>
      <form
        className="bg-opacity-80 absolute bg-gray-950 w-1/3 h-2/3 my-20 mx-auto right-0 left-0 rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <h2 className="text-3xl font-bold text-white mx-10 mt-12 mb-6">
          {isSignInForm ? "Sign In" : "Sign up"}
        </h2>
        {!isSignInForm && (
          <input
            ref={nameRef}
            className="w-3/4 p-3 my-3 mx-10 rounded-sm bg-gray-900 text-white outline outline-offset-2 outline-1 outline-white"
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          className="w-3/4 p-3 my-3 mx-10 rounded-sm bg-gray-900 text-white outline outline-offset-2 outline-1 outline-white"
          type="text"
          placeholder="Email or Phone number"
          ref={emailRef}
        />
        <input
          className="w-3/4 p-3 my-3 mx-10 rounded-sm bg-gray-900 outline outline-offset-2 outline-1 outline-white text-white"
          type="password"
          placeholder="Password"
          ref={passwordRef}
        />
        <p className="text-red-600 mx-10 font-bold text-lg">{errorMessage}</p>
        <button
          onClick={handleButtonClick}
          className="w-3/4 p-3 my-5 mx-10 rounded-md text-white font-semibold bg-red-600 text-lg hover:bg-red-800"
        >
          {isSignInForm ? "Sign In" : "Sign up"}
        </button>
        <p className="text-white mx-10 mt-10" onClick={toggleForm}>
          {isSignInForm ? (
            <>
              New to Netflix?{" "}
              <span className="cursor-pointer hover:underline">
                Sign up now
              </span>
            </>
          ) : (
            <>
              Already a User?{" "}
              <span className="cursor-pointer hover:underline">
                Sign in now
              </span>
            </>
          )}
        </p>
      </form>
    </div>
  );
};
export default Login;
