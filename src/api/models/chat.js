import { query, pool } from '../../db/index.js';

const dbGetChat = async (id) => {
  const { rows } = await query('SELECT * FROM chat WHERE chat_id=$1', [id]);
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

export { dbGetChat, dbPostChat };
