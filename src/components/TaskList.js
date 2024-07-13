import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from '../redux/taskSlice';
import Task from './Task';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  return (
    <ul>
      {tasks.map((task) => (
        <Task key={task.id} task={task} deleteTask={() => dispatch(deleteTask(task.id))} />
      ))}
    </ul>
  );
};

export default TaskList;