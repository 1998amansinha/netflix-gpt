import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  // State variables for email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toggleForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    console.log("Email:", email);  // Log the email state
    console.log("Password:", password);  // Log the password state
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
      <div className="absolute bg-gray-950 opacity-80 w-1/3 h-2/3 my-20 mx-auto right-0 left-0 rounded-lg">
        <form className="mx-8 bg-opacity-80" onSubmit={(e) => e.preventDefault()}>
          <h2 className="text-3xl font-bold text-white mx-10 mt-12 mb-6">
            {isSignInForm ? "Sign In" : "Sign up"}
          </h2>
          {!isSignInForm && (
            <input
              className="w-3/4 p-3 my-3 mx-10 rounded-sm bg-gray-900 text-white outline outline-offset-2 outline-1 outline-white"
              type="text"
              placeholder="Full Name"
            />
          )}
          <input
            className="w-3/4 p-3 my-3 mx-10 rounded-sm bg-gray-900 text-white outline outline-offset-2 outline-1 outline-white"
            type="text"
            placeholder="Email or Phone number"
            value={email}  // Controlled input: value bound to state
            onChange={(e) => setEmail(e.target.value)}  // Update state on change
          />
          <input
            className="w-3/4 p-3 my-3 mx-10 rounded-sm bg-gray-900 outline outline-offset-2 outline-1 outline-white text-white"
            type="password"
            placeholder="Password"
            value={password}  // Controlled input: value bound to state
            onChange={(e) => setPassword(e.target.value)}  // Update state on change
          />
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
    </div>
  );
};

export default Login;
