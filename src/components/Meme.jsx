import { useState, useRef } from 'react';
import memesData from '../data/memesData';
import { useId } from 'react';
import { saveAs } from 'file-saver';

export default function Meme(props) {
  const { darkMode } = props;
  const id = useId();
  const [memes, setMemes] = useState({
    topText: "",
    bottomText: "",
    url: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemesImages] = useState(memesData);
  const imageRef = useRef(null);

  async function imageUrl(e) {
    const memeArray = allMemesImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memeArray.length);
    const url = memeArray[randomNumber].url;

    setMemes((prevMeme) => ({
      ...prevMeme,
      url: url,
    }));
    e.preventDefault();
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setMemes((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  const handleDownload = () => {
    fetch(memes.url) // Fetch the image from the URL
      .then((response) => response.blob()) // Convert the response to a Blob
      .then((blob) => {
        saveAs(blob, `${memes.url}`); // Save the Blob using FileSaver.js
      });
  };

  return (
    <main>
      <form onSubmit={handleSubmit} className="form">
        <div>
          <label htmlFor={id + "--topText"} className="form-label" style={{ color: darkMode ? "white" : "black" }}>
            Top Text
          </label>
          <input
            id={id + "--topText"}
            type="text"
            placeholder="Top Text"
            className="form-input"
            value={memes.topText}
            name='topText'
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor={id+"--bottomText"} className="form-label" style={{ color: darkMode ? "white" : "black" }}>
            Bottom Text
          </label>
          <input
            id={id+"--bottomText"}
            type="text"
            placeholder="Bottom Text"
            className="form-input"
            value={memes.bottomText}
            name={"bottomText"}
            onChange={handleChange}
          />
        </div>
        <button
          className="form-button"
          onClick={imageUrl}
          aria-label="Get a new meme image"
          style={{ color: darkMode ? "black" : "white", background: darkMode ? "white" : "#672280" }}
        >
          Get a new meme image
        </button>
      </form>
      <div className='download-container'>
        <h5 className='download-h1' style={{ color: darkMode ? "black" : "white", background: darkMode ? "white" : "#672280" }}>Create your meme and download</h5>
        <button onClick={handleDownload} className='download-button' style={{ color: darkMode ? "black" : "white", background: darkMode ? "white" : "#672280" }}>Download Meme</button>
      </div>
      <div className="image-container" ref={imageRef}>
        <img src={memes.url} alt="" className="meme-image" />
        <h2 className="meme--text top">{memes.topText}</h2>
        <h2 className="meme--text bottom">{memes.bottomText}</h2>
      </div>
    </main>
  );
}

import PropTypes from "prop-types";

Meme.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};

