import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getShows = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/shows.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const searchShows = (input) => new Promise((resolve, reject) => {
  axios.get(`https://api.themoviedb.org/3/search/multi?api_key=${firebaseConfig.tmdbapi}&language=en-US&query=${input}&page=1&include_adult=false`)
    .then((response) => resolve(response.data))
    .catch((err) => reject(err));
});

const searchShowsById = (id) => new Promise((resolve, reject) => {
  axios.get(`http://api.themoviedb.org/3/movie/${id}?api_key=${firebaseConfig.tmdbapi}`)
    .then((response) => resolve(response.data))
    .catch((err) => reject(err));
});

const addShows = (show) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/shows/json`, show)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/shows/${response.data.name}.json`, body)
        .then(() => {
          getShows().then((showsArray) => resolve(showsArray));
        });
    }).catch((err) => reject(err));
});

export {
  searchShows, getShows, addShows, searchShowsById
};
