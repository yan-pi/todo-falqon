import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Task } from "../types/task";
import TaskDeleteButton from "./TaskDeleteButton";

const TaskList: React.FC = () => {
  const tasks = useSelector((state: RootState) => state.task.tasks);

  return (
    <div>
      <h2>Lista de Tarefas</h2>
      <ul>
        {tasks.map((task: Task) => (
          <li key={task.id}>
            {task.id.split(".")[1].substring(0, 3)}
            {task.title}
            <TaskDeleteButton taskId={task.id} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;


