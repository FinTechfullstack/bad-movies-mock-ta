const movieModel = require('../models/movieModel.js');
// const apiHelpers = require('../helpers/apiHelpers.js');
const { API_KEY } = require('../../config.js');
const axios = require('axios');

//Return requests to the client
module.exports = {
  getSearch: (req, res) => {
    // get the search genre     

    // https://www.themoviedb.org/account/signup
    // get your API KEY

    // use this endpoint to search for movies by genres, you will need an API key

    // https://api.themoviedb.org/3/discover/movie

    // and sort them by horrible votes using the search parameters in the API
    let genre = req.body.id;
    console.log(genre)
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.asc&with_genres=${genre}`)
      .then ((response) => res.send(response))
      .catch((err) => console.log(err))
    },
  getGenres: (req, res) => {
    // make an axios request to get the list of official genres
    
    // use this endpoint, which will also require your API key: https://api.themoviedb.org/3/genre/movie/list
    
    // send back
    axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`)
        .then (({data}) => res.send(data.genres))
        .catch ((err) => console.error(err))
  },
  saveMovie: (req, res) => {
    return req.body.map({

    })
  },
  deleteMovie: (req, res) => {

  }
}