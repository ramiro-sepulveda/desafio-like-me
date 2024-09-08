import { pool } from "./db.js";

const getPosts = async () => {
  const consulta = "SELECT * FROM POSTS";
  const result = await pool.query(consulta);
  return result.rows;
};

const addPosts = async (titulo, img, descripcion) => {
  const consulta = "INSERT INTO posts values (DEFAULT, $1, $2, $3)";
  const values = [titulo, img, descripcion];
  const result = await pool.query(consulta, values);
  return result.rows; //Es necesaria esta linea?
};

const deletePosts = async (id) => {
  const consulta = "DELETE FROM posts WHERE id=$1";
  const values = [id];
  const result = await pool.query(consulta, values);
  console.log("Informacion del id " + id + " ha sido eleminada");
  return result.rows; //Es necesaria esta linea?
};

export { getPosts, addPosts, deletePosts };
