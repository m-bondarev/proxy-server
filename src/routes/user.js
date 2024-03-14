import express from 'express';
import { postUser } from '../controllers/user.controller.js';

const router = express.Router();

// Process user data
router.post('/', postUser);

export default router;
