import { Query } from "../index";

// CRUD OPERATION 

const one = (userid: string) => Query("SELECT * FROM users WHERE users.id = ?", [userid]);


const insert = (name: string, email: string, password: string) => Query(`
    insert into users (name, email, password)
    values (?, ?, ?)
`, [name, email, password]);



export default {
    one,
    insert
}