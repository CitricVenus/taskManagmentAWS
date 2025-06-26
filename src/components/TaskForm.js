import React, { useState, useEffect } from "react";

function TaskForm({ addTask, taskToEdit, clearEdit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Cuando cambie taskToEdit, cargar datos en el formulario para editar
  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setDescription(taskToEdit.description);
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return alert("El título es obligatorio");

    if (taskToEdit) {
      addTask({ ...taskToEdit, title, description });
      clearEdit();
    } else {
      addTask({ title, description });
    }

    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-3">
        <label className="form-label">Título</label>
        <input
          type="text"
          className="form-control"
          placeholder="Título de la tarea"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Descripción</label>
        <textarea
          className="form-control"
          placeholder="Descripción (opcional)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        {taskToEdit ? "Actualizar Tarea" : "Agregar Tarea"}
      </button>

      {taskToEdit && (
        <button
          type="button"
          className="btn btn-secondary ms-2"
          onClick={clearEdit}
        >
          Cancelar
        </button>
      )}
    </form>
  );
}

export default TaskForm;
