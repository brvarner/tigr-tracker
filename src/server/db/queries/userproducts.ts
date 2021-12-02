import { Query } from "../index";



const insert = (productid: number, userid: number) => Query(`
    insert into user_products (productid, userid)
    values (?, ?)
`, [productid, userid]);





export default {
    insert
}