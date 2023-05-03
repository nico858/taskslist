const getConnection = require("../db");


const getAllTasks = async (req, res, next) => {
  const pool = await getConnection();
  try {
    const allTasks = await pool.query("SELECT * FROM task");
    res.json(allTasks.rows);
  } catch (error) {
    next(error);
  }
};

const getTask = async (req, res, next) => {
    const pool = await getConnection();
    try {
        const { id } = req.params;
        const task = await pool.query("SELECT * FROM task WHERE id = $1", [id]);
    
        if (task.rows.length === 0) {
            res.status(404).json({ message: "Task not found" });
        }
    
        res.json(task.rows[0]);
    } catch (error) {
        next(error);
    }
};

const createTask = async (req, res, next) => {
  const pool = await getConnection();
  const { title, description } = req.body;

  try {
    const result = await pool.query(
      "INSERT INTO task (title, description) VALUES ($1, $2) RETURNING *",
      [title, description]
    );
    res.send(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

const updateTask = async (req, res, next) => {
  const pool = await getConnection();
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    const result = await pool.query('UPDATE task SET title = $1, description = $2 WHERE id = $3 RETURNING *', [title, description, id]);

    if (result.rows.length === 0) {
        res.satatus(404).json({ message: `Task ${id} not found` });
    }
    res.json(result.rows[0]);

  } catch (error) {
    next(error);
  }
};

const deleteTask = async (req, res, next) => {
  const pool = await getConnection();
    try {
        const { id } = req.params;
        const result = await pool.query('DELETE FROM task WHERE id = $1', [id]);
    
        if (result.rowCount === 0) {
            res.satatus(404).json({ message: `Task ${id} not found` });
        }
        res.json(`Task ${id} deleted successfully`);
    
      } catch (error) {
        next(error);
      }
};

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
};
