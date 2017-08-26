const { Pool, Client } = require('pg')
require('dotenv').config()



// clients will also use environment variables
// for connection information
let env = process.env
//console.log(env)
const pool= new Pool({
  user: env.DB_USER,
  host: env.DB_HOST,
  database: env.DB_NAME,
  password: env.DB_PWD,
  port: env.DB_PORT,
})
module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback)
  }
}