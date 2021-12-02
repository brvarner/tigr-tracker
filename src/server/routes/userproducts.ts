import {Router} from 'express';
import db from '../db';

const router = Router();


router.post('/', async (req, res, next) => {
    try {
        const productid = req.body.productid;
        const userid = req.body.userid;
        

        const dbRes = await db.userproducts.insert(productid, userid);

        res.send(dbRes);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'ya code sucks' });
    }
});

export default router;