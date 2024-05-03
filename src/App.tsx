import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="flex justify-center items-center">
        <h1 className="font-bold m-4 text-2xl">Falqon Todo</h1>
      </div>
      <Outlet />
    </>
  );
}

export default App;


