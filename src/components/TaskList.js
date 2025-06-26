import React, { useState } from "react";

function TaskList({ tasks, deleteTask, updateTask }) {
  const [editTaskId, setEditTaskId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");

  const startEdit = (task) => {
    setEditTaskId(task.id);
    setEditTitle(task.title);
    setEditDescription(task.description);
  };

  const cancelEdit = () => {
    setEditTaskId(null);
    setEditTitle("");
    setEditDescription("");
  };

  const saveEdit = (id) => {
    if (!editTitle.trim()) return alert("El título es obligatorio");
    updateTask(id, { title: editTitle, description: editDescription });
    cancelEdit();
  };

  if (tasks.length === 0) {
    return <p>No hay tareas creadas.</p>;
  }

  return (
    <ul className="list-group">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="list-group-item d-flex justify-content-between align-items-start"
        >
          {editTaskId === task.id ? (
            <div className="flex-grow-1 me-3">
              <input
                type="text"
                className="form-control mb-2"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
              />
              <textarea
                className="form-control"
                value={editDescription}
                onChange={(e) => setEditDescription(e.target.value)}
              />
            </div>
          ) : (
            <div className="flex-grow-1 me-3">
              <h5>{task.title}</h5>
              <p>{task.description}</p>
            </div>
          )}

          {editTaskId === task.id ? (
            <div>
              <button
                className="btn btn-success btn-sm me-2"
                onClick={() => saveEdit(task.id)}
              >
                Guardar
              </button>
              <button className="btn btn-secondary btn-sm" onClick={cancelEdit}>
                Cancelar
              </button>
            </div>
          ) : (
            <div>
              <button
                className="btn btn-primary btn-sm me-2"
                onClick={() => startEdit(task)}
              >
                Editar
              </button>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => deleteTask(task.id)}
              >
                Eliminar
              </button>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
