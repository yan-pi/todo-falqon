import TaskForm from "@/components/TaskForm";
import TaskList from "@/components/TaskList";

export function TodoPage() {
  return (
    <div>
      <TaskList />
      <TaskForm/>
    </div>
  );
}
