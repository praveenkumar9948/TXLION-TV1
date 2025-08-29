// import React, { useState } from "react";
// import "./index.css"; // Make sure you have a styles.css with the provided CSS

// const App = () => {
//   const [menuActive, setMenuActive] = useState(false);

//   const toggleMenu = () => {
//     setMenuActive(!menuActive);
//   };

//   return (
//     <div className="app">
//       {/* Navbar */}
//       <header className="navbar">
//         <div className="logo">Txlion TV</div>
//         <div className="search-bar">
//           <input type="text" placeholder="Search..." />
//           <button>🔍</button>
//         </div>
//         <div className="profile">
//           <a href="login.html">
//             <img src="https://via.placeholder.com/40 " alt="Login" />
//           </a>
//         </div>
//         <div className="live-viewers">
//           <span>🔴 <span id="viewer-count">1,234</span> Watching</span>
//         </div>
//         <div className="ibar"></div>
//         <div className={`hidden ${menuActive ? "active" : ""}`}>
//           <div className="toggle-btn" onClick={toggleMenu}>
//             <span></span>
//             <span></span>
//             <span></span>
//           </div>
//           <ul>
//             <li><a href="#">Login</a></li>
//             <li><a href="index.html">Home</a></li>
//             <li><a href="#">Short</a></li>
//             <li><a href="#">Subscription</a></li>
//             <li><a href="#">Watch Later</a></li>
//             <li><a href="#">History</a></li>
//             <li><a href="#">Download</a></li>
//             <li><a href="#">Playlist</a></li>
//             <li><a href="#">Settings</a></li>
//             <li className="search-bar">
//               <input type="text" placeholder="Search..." />
//               <button type="button">Search</button>
//             </li>
//           </ul>
//         </div>
        
//       </header>

//       {/* Option Bar */}
//       <nav className="option-bar">
//         <a href="#news">News</a>
//         <a href="#entertainment">Entertainment</a>
//         <a href="#sports">Sports</a>
//         <a href="#games">Games</a>
//         <a href="#channels">Channels</a>
//       </nav>

//       {/* Main Content */}
//       <main className="main-content">
//         <div className="video-grid">
//           {/* Txlion News Boxes */}
//           {[...Array(6)].map((_, i) => (
//             <div key={i} className="video-box">
//               <a href="video.html?videoId=dQw4w9WgXcQ">
//                 <iframe
//                   src="https://www.youtube.com/embed/dQw4w9WgXcQ "
//                   title="YouTube video player"
//                   allowFullScreen
//                 ></iframe>
//                 <div className="video-info">
//                   <h4>Txlion News</h4>
//                   <p>Stay updated with the latest headlines.</p>
//                 </div>
//               </a>
//             </div>
//           ))}

//           {/* Sports Highlights Boxes */}
//           {[...Array(10)].map((_, i) => (
//             <div key={i + 6} className="video-box">
//               <a href="video.html?videoId=3JZ_D3ELwOQ">
//                 <iframe
//                   src="https://www.youtube.com/embed/3JZ_D3ELwOQ "
//                   title="YouTube video player"
//                   allowFullScreen
//                 ></iframe>
//                 <div className="video-info">
//                   <h4>Sports Highlights</h4>
//                   <p>Catch the most thrilling sports moments.</p>
//                 </div>
//               </a>
//             </div>
//           ))}
//         </div>
//       </main>

//       {/* Footer */}
//       <footer className="footer">
//         <div>© 2024 Txlion TV. All rights reserved.</div>
//         <div className="social-media">
//           <a href="#">Twitter</a>
//           <a href="#">Facebook</a>
//           <a href="#">Instagram</a>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default App;





import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./index.css";
import Login from "./login";

const Home = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div className="app">
      {/* Navbar */}
      <header className="navbar">
        <div className="logo">Txlion TV</div>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button>🔍</button>
        </div>
        <div className="profile">
          <Link to="/login">
            <img src="https://via.placeholder.com/40" alt="Login" />
          </Link>
        </div>
        <div className="live-viewers">
          <span>🔴 <span id="viewer-count">1,234</span> Watching</span>
        </div>
        <div className="ibar"></div>
        <div className={`hidden ${menuActive ? "active" : ""}`}>
          <div className="toggle-btn" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/">Home</Link></li>
            <li><a href="#">Short</a></li>
            <li><a href="#">Subscription</a></li>
            <li><a href="#">Watch Later</a></li>
            <li><a href="#">History</a></li>
            <li><a href="#">Download</a></li>
            <li><a href="#">Playlist</a></li>
            <li><a href="#">Settings</a></li>
            <li className="search-bar">
              <input type="text" placeholder="Search..." />
              <button type="button">Search</button>
            </li>
          </ul>
        </div>
      </header>

      {/* Option Bar */}
      <nav className="option-bar">
        <a href="#news">News</a>
        <a href="#entertainment">Entertainment</a>
        <a href="#sports">Sports</a>
        <a href="#games">Games</a>
        <a href="#channels">Channels</a>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        <div className="video-grid">
          {[...Array(10)].map((_, i) => (
            <div key={`news-${i}`} className="video-box">
              <a href="video.html?videoId=dQw4w9WgXcQ">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title={`Txlion News ${i + 1}`}
                  allowFullScreen
                ></iframe>
                <div className="video-info">
                  <h4>Txlion News {i + 1}</h4>
                  <p>Stay updated with the latest headlines.</p>
                </div>
              </a>
            </div>
          ))}
        
         {[...Array(10)].map((_, i) => (
            <div key={`news-${i}`} className="video-box">
              <a href="video.html?videoId=dQw4w9WgXcQ">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title={`Txlion News ${i + 1}`}
                  allowFullScreen
                ></iframe>
                <div className="video-info">
                  <h4>Txlion News {i + 1}</h4>
                  <p>Stay updated with the latest headlines.</p>
                </div>
              </a>
            </div>
          ))}


          {[...Array(10)].map((_, i) => (
            <div key={`sports-${i + 10}`} className="video-box">
              <a href="video.html?videoId=3JZ_D3ELwOQ">
                <iframe
                  src="https://www.youtube.com/embed/3JZ_D3ELwOQ"
                  title={`Sports Highlights ${i + 1}`}
                  allowFullScreen
                ></iframe>
                <div className="video-info">
                  <h4>Sports Highlights {i + 1}</h4>
                  <p>Catch the most thrilling sports moments.</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div>© 2024 Txlion TV. All rights reserved.</div>
        <div className="social-media">
          <a href="#">Twitter</a>
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
        </div>
      </footer>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;