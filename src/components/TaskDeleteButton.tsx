import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask } from "../store/taskReducer";

interface TaskDeleteButtonProps {
  taskId: string;
}

const TaskDeleteButton: React.FC<TaskDeleteButtonProps> = ({ taskId }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(taskId));
  };

  return <button onClick={handleDelete}>Delete Task</button>;
};

export default TaskDeleteButton;
