import {Router} from 'express';
import db from '../db';

const router = Router();

//GET /api/users 
router.get('/:userid?', async (req, res, next) => {
    // const id = Number(req.params.id);
    // if (id) {}
    try {
        const userid = req.params.userid;
        
        const dbRes = await db.users.one(userid);
        res.json(dbRes); 
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'ya code sucks' });
    }
});

router.post('/', async (req, res, next) => {
    try {
        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password;

        const dbRes = await db.users.insert(name, email, password);

        res.send(dbRes);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'ya code sucks' });
    }
});

// router.put('/:id', async (req, res) => {
//     const id = Number(req.params.id);
//     const editUser = { ...req.body };
//     try {
//         res.json({ id, msg: 'put test', testUser: editUser });
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ msg: 'ya code sucks' });
//     }
// });

// router.delete('/:id', async (req, res) => {
//     const id = Number(req.params.id);
//     try {
//         res.json({ id, msg: 'delete test' });
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ msg: 'ya code sucks' });
//     }
// });


export default router;