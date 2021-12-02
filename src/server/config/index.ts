import * as dotenv from 'dotenv';

const envFound = dotenv.config()

if(!envFound){
    throw new Error('Cannot find a .env file!')
}

export default{
   
}
