import express from 'express';
import asyncHandler from 'express-async-handler';

import { getChat, postChat } from '../controllers/chat.js';

const router = express.Router();

router.get('/chat/:id', asyncHandler(getChat));
router.post('/chat', asyncHandler(postChat));

export default router;
