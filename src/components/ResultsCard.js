import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'reactstrap';

export default function ResultsCard({ show }) {
  async function onClick(e) {
    const data = e.target.id;
    console.warn(data);
  }

  return (
    <section className='result-card'>
      <Card>
      <div className='poster-wrapper'>
        {show.poster_path ? (
          <img src={`https://image.tmdb.org/t/p/w200${show.poster_path}`} alt={`${show.title}Poster `}/>
        ) : (
          <div className='filler-poster'></div>
        )}
      </div>
      <div className='info'>
        <div className='header'>
          <h3 className='title'>{show.title}</h3>
          <h4 className='release-data'>{show.release_date}</h4>
        </div>
        <div className='controls'>
            <Button color='info' className='btn' id={show.title} onClick={onClick}>Save Show</Button>
        </div>
        </div>
      </Card>
    </section>
  );
}

ResultsCard.propTypes = {
  show: PropTypes.any
};
