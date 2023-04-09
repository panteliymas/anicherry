import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import bodyParser from 'body-parser';
import * as controller from '../controllers/index.js';
const router = express.Router();

router.get("/", controller.get);

router.get('/policy', (req, res) => {
    res.send('policy')
});


export default router;