import { Router } from "express";
//import db from '../../db';


const router = Router();


//router.use();

router.get('/', async (req, res) => {
    try {

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'ya code sucks'});
    }
});



export default router;