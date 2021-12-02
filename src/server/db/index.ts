import * as mysql from 'mysql';
import config from '../config';

const pool = mysql.createPool(config.mysql);


export const Query = <T = any>(query: string, values?: Array<string | number>) => {
    return new Promise<T>((resolve, reject) => {
        
        const sql = mysql.format(query, values);
        //console.log(sql); DEBUG
        
        pool.query(sql, (err,results) =>{
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
};

//  why import and export import this obj as .blog and .all availabl. that way dont have to import
// each indv table or query into a file can ref this db/index.ts file for kiss. import in routes>blogs.ts



import userproducts from './queries/userproducts';
import users from './queries/users';      

export default {
    users,
    userproducts
}