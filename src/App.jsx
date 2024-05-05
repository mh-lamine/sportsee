import { Outlet } from "react-router-dom";
import "./App.css";
import NavbarX from "./components/NavbarX";
import NavbarY from "./components/NavbarY";

function App() {
  return (
    <div className="h-screen">
      <NavbarX />
      <div className="flex h-full">
        <NavbarY />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
