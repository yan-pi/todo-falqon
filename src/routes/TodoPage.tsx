import TaskList from "@/components/TaskList";
import TaskForm from "@/components/TaskForm";

export function TodoPage() {
  return (
     <div className="container mx-auto px-4 py-j">
      <div className="mb-6">
        <h1 className="text-3xl font-bold justify-center">Todo Falqon</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Create, read, update, and delete your todos.
        </p>
      </div>
      <div className="flex justify-between items-center mb-6">
        <TaskForm />
      </div>
      <div className="justify-center w-full px-48">
        <TaskList />
      </div>
    </div>
  );
}

