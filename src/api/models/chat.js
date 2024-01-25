import { query, pool } from '../../db/index.js';

const dbGetChat = async (id) => {
  const { rows } = await query('SELECT * FROM chat WHERE chat_id=$1', [id]);
  return rows;
};

const dbGetPeople = async (id) => {
  const { rows } = await query('SELECT * FROM people WHERE chat_id=$1', [id]);
  return rows;
};

const dbPostChat = async ({
  months,
  m_count,
  m_total,
  m_img,
  m_video,
  m_audio,
  m_data,
}) => {
  const client = await pool.connect();

  try {
    const { rows } = await client.query(
      'INSERT INTO chat(months, m_count, m_total, m_img, m_video, m_audio, m_data) VALUES ($1, $2, $3, $4, $5, $6, $7) returning *',
      [months, m_count, m_total, m_img, m_video, m_audio, m_data]
    );
    return rows;
  } catch (error) {}
};

const dbPostPerson = async ({ name, pm_count, chat_id }) => {
  const client = await pool.connect();
  try {
    const { rows } = await client.query(
      'INSERT INTO people(name, pm_count, chat_id) VALUES ($1, $2, $3) returning *',
      [name, pm_count, chat_id]
    );
    return rows;
  } catch (error) {}
};

export { dbGetChat, dbPostChat, dbPostPerson, dbGetPeople };
