import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask } from "../store/taskSlice";
import { DeleteIcon } from "./shared/DeleteIcon";

interface TaskDeleteButtonProps {
  taskId: string;
}

const TaskDeleteButton: React.FC<TaskDeleteButtonProps> = ({ taskId }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(taskId));
  };

  return (
    <button onClick={handleDelete}>
      <DeleteIcon />
    </button>
  );
};

export default TaskDeleteButton;
