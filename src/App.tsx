import { Outlet } from "react-router-dom";
import PrivateRoute from "./components/shared/PrivateRoute";
import { TodoPage } from "./routes/TodoPage";

function App() {
  return (
    <>
      <Outlet />
      <PrivateRoute path="/todo" element={<TodoPage />} />
    </>
  );
}

export default App;


