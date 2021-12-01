import {Router} from 'express';
import db from '../db';

const router = Router();

//GET /api/users 
router.get('/', async (req, res, next) => {
    res.json({MSG: 'test blogs get'});
    
    
    // try {
    //     const users = await db.users.all()
    //     res.json(users);
    // } catch (error) {
    //     console.log(error);
    //     res.status(500).json({ msg: 'awww looks like your code sucks!', error });
    //     //, error sends e to postman so can read it    
    // }
});






export default router;