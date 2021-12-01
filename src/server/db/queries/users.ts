import { Query } from "../index";

// CRUD OPERATION 

const all = () => Query ('SELECT * FROM users');

export default {
    all
}