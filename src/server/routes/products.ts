import { Router } from "express";
import db from '../db';


const router = Router();


router.get('/:id?', async (req, res) => {
    const id = Number(req.params.id);
    try {
        if (id) {
            const [product] = await db.products.one(id); 
            res.json(product)
        } else {
            const products = await db.products.all();
            console.log(products);
            res.json(products)
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'ya code sucks' });
    }
});

router.post('/', async (req, res) => {
    const newUser = { ...req.body };
    try {
        res.json({ msg: 'post test', userTest: newUser });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'ya code sucks' });
    }
});

router.put('/:id', async (req, res) => {
    const id = Number(req.params.id);
    const editUser = { ...req.body };
    try {
        res.json({ id, msg: 'put test', testUser: editUser });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'ya code sucks' });
    }
});

router.delete('/:id', async (req, res) => {
    const id = Number(req.params.id);
    try {
        res.json({ id, msg: 'delete test' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'ya code sucks' });
    }
});

export default router;