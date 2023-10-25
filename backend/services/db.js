import * as dotenv from 'dotenv'
import * as mysql from 'mysql2/promise'

dotenv.config();

const connect = mysql.createPool({
	host: process.env.DB_HOST,
	database: process.env.DB_NAME,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	namedPlaceholders: true,
});

export default connect;

// const connect = await mysql.createConnection({
//     host: process.env.DB_HOST, 
//     database: process.env.DB_NAME, 
//     user: process.env.DB_USER, 
//     password: process.env.DB_PASSWORD, 
//     namedPlaceholders: true

// })



// export default connect;