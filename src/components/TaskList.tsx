import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { Task } from "../types/task";
import TaskDeleteButton from "./TaskDeleteButton";
import { updateTask } from "../store/taskSlice";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { EditIcon } from "./shared/EditIcon";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const TaskList: React.FC = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state: RootState) => state.task.tasks);
  const [editMode, setEditMode] = useState<string | null>(null);
  const [editedTitle, setEditedTitle] = useState<string>("");
  const [editedDescription, setEditedDescription] = useState<string>("");

  const handleEditClick = (taskId: string) => {
    const taskToEdit = tasks.find((task) => task.id === taskId);
    if (taskToEdit) {
      setEditedTitle(taskToEdit.title);
      setEditedDescription(taskToEdit.description);
      setEditMode(taskId);
    }
  };

  const handleSaveEdit = () => {
    if (editMode) {
      dispatch(
        updateTask({
          id: editMode,
          title: editedTitle,
          description: editedDescription,
        })
      );
      setEditMode(null);
    }
  };

  return (
    <div className="flex gap-3 flex-col">
      {tasks.map((task: Task) => (
        <Card key={task.id}>
          <CardHeader>
            {editMode === task.id ? (
              <>
                <Input
                  className="text-3xl font-bold"
                  type="text"
                  value={editedTitle}
                  onChange={(e) => setEditedTitle(e.target.value)}
                />
                <Input
                  type="text"
                  className="text-"
                  value={editedDescription}
                  onChange={(e) => setEditedDescription(e.target.value)}
                />
                <Button onClick={handleSaveEdit}>Save</Button>
              </>
            ) : (
              <>
                <CardTitle>{task.title}</CardTitle>
                <CardDescription>{task.description}</CardDescription>
              </>
            )}
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <span className="text-gray-500 dark:text-gray-400">
                #{task.id.split(".")[1].substring(0, 3)}
              </span>
              <div className="flex flex-row gap-4">
                {editMode !== task.id && (
                  <Button size="sm" onClick={() => handleEditClick(task.id)}><EditIcon/></Button>
                )}
                <TaskDeleteButton taskId={task.id} />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default TaskList;
