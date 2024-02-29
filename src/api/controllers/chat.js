import validator from 'is-my-json-valid';
import {
  dbGetChat,
  dbPostChat,
  dbPostPerson,
  dbGetPeople,
  dbDelChat,
} from '../models/chat.js';

const validate = validator({
  required: true,
  type: 'object',
  properties: {
    m_total: {
      required: true,
      type: 'number',
    },
    m_img: {
      required: true,
      type: 'number',
    },
    m_video: {
      required: true,
      type: 'number',
    },
    m_audio: {
      required: true,
      type: 'number',
    },
    m_data: {
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

const delChat = async (req, res) => {
  const { id } = req.params;
  const chat = await dbDelChat(id);
  if (!chat) return res.status(404).send('Ressource not found');
  await dbDelChat(id);
  return res.status(200).end();
};

const getPeople = async (req, res) => {
  const { id } = req.params;
  const People = await dbGetPeople(id);
  if (!People) return res.status(404).send('Ressource not found');
  return res.status(200).json(People);
};

const postChat = async (req, res) => {
  const chat = await dbPostChat(req.body);
  return res.status(201).json(chat);
};

const postPeople = async (req, res) => {
  const person = await dbPostPerson(req.body);
  return res.status(201).json(person);
};

export { getChat, postChat, postPeople, getPeople, delChat };
