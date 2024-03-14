import express from 'express';
import { getMeteors } from '../controllers/meteors.controller.js';

const router = express.Router();

// Receive information about asteroids close to Earth
router.get('/', getMeteors);

export default router;
