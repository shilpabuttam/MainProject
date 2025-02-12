import { useEffect, useState } from "react";

export default function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [deadline, setDeadline] = useState("");

  const employees = ["Third Party Company","Employe"];

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const response = await fetch("http://localhost:5000/tasks");
    const data = await response.json();
    setTasks(data);
  };

  const addTask = async () => {
    if (!title || !assignedTo || !deadline) return;
    await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, assignedTo, deadline })
    });
    setTitle("");
    setAssignedTo("");
    setDeadline("");
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE"
    });
    fetchTasks();
  };

  return (
    <div className="p-4 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Task Manager</h1>
      <div className="mb-4 space-y-2">
        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 w-full"
          
        />
        <select
          value={assignedTo}
          onChange={(e) => setAssignedTo(e.target.value)}
          className="border p-2 w-full"
        >
          <option value="">Select Employee</option>
          {employees.map((employee) => (
            <option key={employee} value={employee}>{employee}</option>
          ))}
        </select>
        <input
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          min={new Date().toISOString().split("T")[0]}
          className="border p-2 w-full"
        />
        <button onClick={addTask} className="bg-blue-500 text-white p-2 w-full">Add Task</button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task._id} className="border p-2 flex justify-between items-center mb-2">
            <div>
              <p className="font-bold">{task.title}</p>
              <p className="text-sm">Assigned to: {task.assignedTo}</p>
              <p className="text-sm">Deadline: {new Date(task.deadline).toLocaleDateString()}</p>
            </div>
            <button onClick={() => deleteTask(task._id)} className="bg-red-500 text-white p-1">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
