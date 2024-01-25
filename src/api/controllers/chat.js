import validator from 'is-my-json-valid';
import { dbGetChat, dbPostChat } from '../models/chat.js';

const validate = validator({
  required: true,
  type: 'object',
  properties: {
    id: {
      required: true,
      type: 'number',
    },
  },
});

const getChat = async (req, res) => {
  const { id } = req.params;
  const chat = await dbGetChat(id);
  if (!chat) return res.status(404).send('Ressource not found');
  return res.status(200).json(chat);
};

const postChat = async (req, res) => {
  const chat = await dbPostChat(req.body);
  return res.status(201).json(chat);
};

export { getChat, postChat };
