import { useState } from 'react';
import memesData from '../data/memesData';
export default function Meme() {
  const [url, setUrl] = useState("");

  async function ImageUrl(e) {
    const memeArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memeArray.length);
    const url = memeArray[randomNumber].url;

    setUrl(url);
    e.preventDefault();
  }

  return (
    <main>
      <form action="" className="form">
        <div>
          <label htmlFor="topText" className="form-label">
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
          <label htmlFor="bottomText" className="form-label">
            Bottom Text
          </label>
          <input
            id="bottomText"
            type="text"
            placeholder="Bottom Text"
            className="form-input"
          />
        </div> 
        <button className="form-button" onClick={ImageUrl}>
          Get a new meme image
        </button>

        <div>
        </div>
      </form>
      <img src={url} alt="" className='meme-image' />
    </main>
  );
}
 