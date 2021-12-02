import {Router} from 'express';
import db from '../db';

const router = Router();

router.get('/:id?', async (req, res) => {
    const id = Number(req.params.id);
    try {
        if (id) {
            const product = await db.userproducts.one(id);
            res.json(product)
        } else {
            res.json({ id, msg: 'get all test' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'ya code sucks' });
    }
});



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