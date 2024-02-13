import Header from './components/Header';
import Meme from './components/Meme';
import { useState, useEffect } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Update body background color when dark mode changes
    document.body.style.backgroundColor = darkMode ? "#161719" : "white";
  }, [darkMode]); // Run this effect whenever darkMode changes

  function darkModeSetting() {
    setDarkMode(!darkMode);
  }

  return (
    <div>
      <Header darkMode={darkMode} darkModeSetting={darkModeSetting} />
      <Meme darkMode={darkMode} darkModeSetting={darkModeSetting} />
    </div>
  );
}

export default App;
