import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Router";

function App() {
  return (
    <div className="bg-[#F3F7F2]">
     <RouterProvider router={router} />
    </div>
  );
}

export default App;
