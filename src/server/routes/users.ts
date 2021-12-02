import {Router} from 'express';
import db from '../db';

const router = Router();

//GET /api/users 
router.get('/:id?', async (req, res) => {
    const id = Number(req.params.id);
    try {
        if (id) {
            res.json({ id, msg: 'get one test' });
        } else {
            res.json({ id, msg: 'get all test' });
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