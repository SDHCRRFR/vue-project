import * as dotenv from 'dotenv'
import * as mysql from 'mysql2/promise'

dotenv.config();



const connect = mysql.createPool({
	host: process.env.DB_HOST,
	database: process.env.DB_NAME,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	namedPlaceholders: true,
	port: 3306
});

console.log("DB_HOST:", process.env.DB_HOST);
console.log("DB_NAME:", process.env.DB_NAME);
console.log("DB_USER:", process.env.DB_USER);
console.log("DB_PASSWORD:", process.env.DB_PASSWORD ? "OK" : "MISSING");

export default connect;