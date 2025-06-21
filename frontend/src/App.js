import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import axios from "axios";

import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    axios.get("http://localhost:4000/")
      .then(response => {
        setMessage(response.data);
        setError(""); // Clear any previous errors
      })
      .catch(error => {
        console.error(error);
        setError("Failed to fetch data");
      });
  }, []);

  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
              <Route 
                path="/" 
                element={<Home message={message} error={error} />} 
              />
          </Routes>
          {error && <div className="error">{error}</div>} {/* Display error message */}
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
