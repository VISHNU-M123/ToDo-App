import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTask, toggleTaskCompletion } from '../redux/taskSlice';

const Task = ({ task, deleteTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTask, setNewTask] = useState(task.text);
  const dispatch = useDispatch();

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    dispatch(editTask({ id: task.id, text: newTask }));
    setIsEditing(false);
  };

  const handleToggleCompletion = () => {
    dispatch(toggleTaskCompletion(task.id));
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleToggleCompletion}
      />
      {isEditing ? (
        <>
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button className="save" onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.text}
          </span>
          <button className="edit" onClick={handleEdit}>Edit</button>
        </>
      )}
      <button className="delete" onClick={deleteTask}>Delete</button>
    </li>
  );
};

export default Task;
