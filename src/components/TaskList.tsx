import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Task } from "../types/task";
import TaskDeleteButton from "./TaskDeleteButton";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";

const TaskList: React.FC = () => {
  const tasks = useSelector((state: RootState) => state.task.tasks);

  return (
    <div>
      {tasks.map((task: Task) => (
       <Card key={task.id} >
        <CardHeader>
          <CardTitle>{task.title}</CardTitle>
          <CardDescription>
            {task.description}
            {task.id.split(".")[1].substring(0, 3)}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center">
            <span className="text-gray-500 dark:text-gray-400">#1234</span>
            <TaskDeleteButton taskId={task.id} />
          </div>
        </CardContent>
      </Card>
      ))}
    </div>
  );
};

export default TaskList;
