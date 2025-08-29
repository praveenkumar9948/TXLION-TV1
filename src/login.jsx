// import React from "react";
// import "./login.css"; // Make sure to import your CSS file

// const App = () => {
//   return (
//     <div className="app">
//       <div className="background">
//         <div className="floating-circle"></div>
//         <div className="floating-circle"></div>
//       </div>
//       <div className="login-container">
//         <div className="logo">
//           <h1>TxLion <span>TV</span></h1>
//         </div>
//         <h2>Welcome Back</h2>
//         <form>
//           <div className="input-box">
//             <input type="text" required />
//             <label>Username</label>
//           </div>
//           <div className="input-box">
//             <input type="password" required />
//             <label>Password</label>
//           </div>
//           <button type="submit" className="login-button">Login</button>
//           <p className="message">Don't have an account? <a href="#">Sign up</a></p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default App;


import React from "react";
import "./login.css";

const App = () => {
  return (
    <div className="app">
      <div className="background">
        <div className="floating-circle"></div>
        <div className="floating-circle"></div>
      </div>
     <div className="login_container_center">
       <div className="login-container">
        <div className="logo">
          <h1>TxLion <span>TV</span></h1>
        </div>
        <h2>Welcome Back</h2>
        <form>
          <div className="input-box">
            <input type="text" required placeholder=" " />
            <label>Username</label>
          </div>
          <div className="input-box">
            <input type="password" required placeholder=" " />
            <label>Password</label>
          </div>
          <button type="submit" className="login-button">Login</button>
          <p className="message">Don't have an account? <a href="#">Sign up</a></p>
        </form>
      </div>
     </div>
    </div>
  );
};

export default App;
