import { Query } from "../index";

const one = (productid: number) => Query(`
    SELECT * from user_products
    inner join users on users.id = userid
    inner join products on products.id = productid
    WHERE productid = ?
`, [productid]);

const insert = (productid: number, userid: number) => Query(`
    insert into user_products (productid, userid)
    values (?, ?)
`, [productid, userid]);





export default {
    one,
    insert
}