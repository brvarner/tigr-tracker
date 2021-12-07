import { Query } from "../index";

const one = (id: number) => Query(`
    SELECT * from products
    WHERE id = ?
`, [id]);

const all = () => Query(`
    SELECT * from products
    `, []);

// WHERE productid = ?


const insert = (productid: number, userid: number) => Query(`
    insert into user_products (productid, userid)
    values (?, ?)
`, [productid, userid]);





export default {
    one,
    all
}