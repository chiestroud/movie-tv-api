import React, { useState } from 'react';
import ResultsCard from '../components/ResultsCard';
import { searchShows } from '../helpers/data/tvmoviedata';

export default function AddShow() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const onChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
    searchShows(e.target.value).then((data) => setResults(data.results));
  };

  return (
    <div className='add-show'>
      <div className='container'>
        <div className='input-wrapper'>
          <input
            type='text'
            placeholder='Search'
            value={query}
            onChange={onChange}
          />
          {results.length > 0 && (
            <ul className='results'>
              {results.map((show) => (
                <li className='list' key={show.id}>
                  <ResultsCard show={show} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
