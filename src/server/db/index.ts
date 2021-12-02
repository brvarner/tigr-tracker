import * as mysql from 'mysql';
import config from '../config';

const pool = mysql.createPool(config.mysql);


export const Query = <T = any>(query: string, values?: Array<string | number>) => {
    return new Promise<T>((resolve, reject) => {
        
        const sql = mysql.format(query, values);
        
        pool.query(sql, (err,results) =>{
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
};



import userproducts from './queries/userproducts';
import users from './queries/users';      

export default {
    users,
    userproducts
}