import { useState } from 'react';
import memesData from '../data/memesData';
export default function Meme(props) {
  const { darkMode } = props;

  const [memes, setMeme] = useState({
    topText: "",
    bottomText: "",
    url: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemesImages] = useState(memesData);

  async function ImageUrl(e) {
    const memeArray = allMemesImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memeArray.length);
    const url = memeArray[randomNumber].url;

    setMeme((prevMeme) => ({
      ...prevMeme,
      url: url,
    }));
    e.preventDefault();
  }


  return (
    <main>
     
      <form action="" className="form">
        <div>
          <label htmlFor="topText" className="form-label" style={{ color: darkMode? "white" : "#672280" }}>
            Top Text
          </label>
          <input
            id="topText"
            type="text"
            placeholder="Top Text"
            className="form-input"
          />
        </div>
        <div>
          <label htmlFor="bottomText" className="form-label" style={{ color: darkMode? "white" : "black" }}>
            Bottom Text
          </label>
          <input
            id="bottomText"
            type="text"
            placeholder="Bottom Text"
            className="form-input"
          />
        </div>
        <button
          className="form-button"
          onClick={ImageUrl}
          aria-label="Get a new meme image"
          style={{ color: darkMode? "black" : "white", background: darkMode? "white" : "#672280" }}
        >
          Get a new meme image
        </button>
      </form>
      <div className="image-container">
        <img src={memes.url} alt="" className="meme-image" />
      </div>
    </main>
  );
}



import PropTypes from "prop-types";

Meme.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};
