// import TaskForm from "@/components/TaskForm";
// import TaskList from "@/components/TaskList";

// export function TodoPage() {
//   return (
//     <div>
//       <TaskList />
//       <TaskForm/>
//     </div>
//   );
// }
import TaskList from "@/components/TaskList";
import TaskForm from "@/components/TaskForm";

export function TodoPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Todo Falqon</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Create, read, update, and delete your todos.
        </p>
      </div>
      <div className="flex justify-between items-center mb-6">
        <TaskForm />
      </div>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <TaskList />
      </div>
    </div>
  );
}
