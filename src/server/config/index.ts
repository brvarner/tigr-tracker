import * as dotenv from 'dotenv';

const envFound = dotenv.config()

if(!envFound){
    throw new Error('Cannot find a .env file!')
}

export default{
   mysql: {
       user: process.env.DB_USER,
       password: process.env.DB_PASS,
       host: process.env.DB_HOST,
       database: process.env.DB_SCHEMA,
       port: process.env.DB_PORT
   }
}