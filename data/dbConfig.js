const knex = require('knex')
const config = require('../knexfile.js')

// must pass in a config object
module.exports = knex(config.development)