// 

const mongoose = require('mongoose');
if(process.env.MONGODB_URI){
  mongoose.connect(process.env.MONGODB_URI)
} else{
  mongoose.connect('mongodb://localhost:27017/badmovies', { useNewUrlParser: true });
}

const db = mongoose.connection;

mongoose.Promise = Promise;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
  console.log('Connected to db...');
})

var movieSchema = new mongoose.Schema({
  id : {type: number, unique: true}, 
  title: string,
  genreID : number, 
  popularity : number
})

module.exports.db = db
module.exports.movieSchema = movieSchema