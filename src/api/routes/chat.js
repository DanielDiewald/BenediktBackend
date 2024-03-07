import express from 'express';
import asyncHandler from 'express-async-handler';

import {
  getChat,
  postChat,
  postPeople,
  getPeople,
  delChat,
  incrementChatViews,
} from '../controllers/chat.js';

const router = express.Router();

router.get('/chat/:id', asyncHandler(getChat));
router.delete('/chat/:id', asyncHandler(delChat));
router.post('/chat', asyncHandler(postChat));
router.post('/person', asyncHandler(postPeople));
router.get('/chat/people/:id', asyncHandler(getPeople));
router.patch('/chat/:id', asyncHandler(incrementChatViews));

export default router;
