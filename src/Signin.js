// import React, { useState } from "react";
// import { signInWithFirebase } from "./firebase";
// import { useNavigate } from "react-router-dom";

// function SignIn() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const navigate = useNavigate();

//   const handleSignIn = async (e) => {
//     e.preventDefault();

//     try {
//       const user = await signInWithFirebase(email, password);

//       // If authentication is successful, set success message
//       setSuccessMessage("Sign-in successful!");

//       // Clear the success message after 3 seconds
//       setTimeout(() => {
//         setSuccessMessage("");
//       }, 3000);

//       // Redirect to the dashboard page upon successful sign-in
//       navigate("/dashboard");
//     } catch (error) {
//       console.error(error);
//       // Handle authentication errors here
//       // ...

//       // Set error message
//       setErrorMessage("Sign-in failed. Please check your credentials.");

//       // Clear the error message after 3 seconds
//       setTimeout(() => {
//         setErrorMessage("");
//       }, 3000);
//     }
//   };

//   return (
//     <div>
//       <h2>Sign In</h2>
//       <form onSubmit={handleSignIn}>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit">Sign In</button>
//       </form>
//       {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
//       {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
//     </div>
//   );
// }

// export default SignIn;






import React, { useState } from "react";
import { signInWithFirebase } from "./firebase";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const user = await signInWithFirebase(email, password);

      // If authentication is successful, set success message
      setSuccessMessage("Sign-in successful!");

      // Clear the success message after 3 seconds
      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);

      // Redirect to the dashboard page upon successful sign-in
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      // Handle authentication errors here
      // ...

      // Set error message
      setErrorMessage("Sign-in failed. Please check your credentials.");

      // Clear the error message after 3 seconds
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
    }
  };

  return (
    <div className="signin-container">
      <h2 className="signin-heading">Sign In</h2>
      <form onSubmit={handleSignIn} className="signin-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="signin-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="signin-input"
        />
        <button type="submit" className="signin-button">
          Sign In
        </button>
      </form>
      {successMessage && (
        <p className="signin-message" style={{ color: "green" }}>
          {successMessage}
        </p>
      )}
      {errorMessage && (
        <p className="signin-message" style={{ color: "red" }}>
          {errorMessage}
        </p>
      )}
    </div>
  );
}


export default SignIn;
