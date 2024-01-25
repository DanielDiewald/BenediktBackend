import express from 'express';
import asyncHandler from 'express-async-handler';

import {
  getChat,
  postChat,
  postPeople,
  getPeople,
} from '../controllers/chat.js';

const router = express.Router();

router.get('/chat/:id', asyncHandler(getChat));
router.post('/chat', asyncHandler(postChat));
router.post('/person', asyncHandler(postPeople));
router.get('/chat/people/:id', asyncHandler(getPeople));

export default router;
