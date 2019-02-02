//SELECT one db to work with
//For SQL
// const sqlDb = require('../../db/sql');
//For Mongo
const mongoDb = require('../../db/mongodb')

var Movie = mongoDb.mongoose.model('Movie', mongoDb.movieSchema)

module.exports.movie = Movie