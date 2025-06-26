// src/App.js
import React, { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const API = process.env.REACT_APP_API_URL; // <-- .env

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  /* ---------- Leer tareas al montar ---------- */
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`${API}/tasks`);
        const data = await res.json();

        // data.body es string JSON → parsea para obtener array real
        const tasksArray = JSON.parse(data.body);

        setTasks(tasksArray);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  /* ---------- Crear tarea ---------- */
  const addTask = async (task) => {
    setLoading(true);
    const newTask = { id: Date.now().toString(), ...task };

    try {
      const res = await fetch(`${API}/tasks`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTask),
      });
      if (!res.ok) throw new Error("Error creando tarea");
      const saved = await res.json();
      setTasks((prev) => [...prev, saved]);
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  /* ---------- Actualizar tarea ---------- */
  const updateTask = async (id, updated) => {
    setLoading(true);
    try {
      const res = await fetch(`${API}/tasks/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updated),
      });
      if (!res.ok) throw new Error("Error actualizando tarea");

      const data = await res.json();
      setTasks((prev) => prev.map((t) => (t.id === id ? data : t)));
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  /* ---------- Eliminar tarea ---------- */
  const deleteTask = async (id) => {
    setLoading(true);
    try {
      const res = await fetch(`${API}/tasks/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Error eliminando tarea");
      setTasks((prev) => prev.filter((t) => t.id !== id));
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  /* ---------- Render ---------- */
  return (
    <div className="container mt-4">
      <h1 className="mb-4">Simple Task Manager</h1>

      <TaskForm addTask={addTask} />

      {loading ? (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "200px" }}
        >
          <div
            className="spinner-border text-primary"
            role="status"
            aria-label="Loading"
          >
            <span className="visually-hidden">Cargando...</span>
          </div>
        </div>
      ) : (
        <TaskList
          tasks={tasks}
          updateTask={updateTask}
          deleteTask={deleteTask}
        />
      )}
    </div>
  );
}

export default App;
