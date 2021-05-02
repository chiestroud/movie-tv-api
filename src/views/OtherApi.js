import React from 'react';
import joke from '../assets/joke3.png';
import weather from '../assets/tokyo.png';
import lyrics from '../assets/lyrics.png';
import quotes from '../assets/quotes.png';

export default function OtherApi() {
  return (
    <section className='api-container'>
      <article className='api-card'>
        <h1>Joke Generator</h1>
        <img className='img-container' src={joke} alt='joke-api' />
        <div>
          <a href='https://cs-joke-generator.netlify.app' target='_blank' rel="noreferrer">Link to Deployed Page</a>
        </div>
      </article>
      <article>
        <h1>Weather API</h1>
        <img className='img-container' src={weather} alt='weather-api' />
        <div className='link-container'>
          <a href='https://cs-open-weather.netlify.app' target='_blank' rel="noreferrer">Link to Deployed Page</a>
        </div>
      </article>
      <article>
        <h1>Lyrics Generator</h1>
        <img className='img-container' src={lyrics} alt='song-api' />
        <div className='link-container'>
          <a href='https://cs-lyrics-generator.netlify.app' target='_blank' rel="noreferrer">Link to Deployed Page</a>
        </div>
      </article>
      <article>
        <h1>LOTR API</h1>
        <img className='img-container' src={quotes} alt='lotr-api' />
        <div className='link-container'>
          <a href='https://cs-lotr-api.netlify.app' target='_blank' rel="noreferrer">Link to Deployed Page</a>
        </div>
      </article>
    </section>
  );
}
