import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../store/taskSlice";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const TaskForm: React.FC = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addTask({ id: Math.random().toString(), title, description }));
    setTitle("");
    setDescription("");
  };

  return (
    <div className="flex items-center">
      <form onSubmit={handleSubmit} className="flex  gap-2">
        <Input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button size="sm" className="text font-bold" type="submit">
          Add Task
        </Button>
      </form>
    </div>
  );
};

export default TaskForm;
