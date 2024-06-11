// import { Outlet } from "react-router-dom";
import "./App.css";
import NavbarX from "./components/NavbarX";
import NavbarY from "./components/NavbarY";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="h-screen flex flex-col">
      <NavbarX />
      <div className="flex h-full">
        <NavbarY />
        <Profile />
      </div>
    </div>
  );
}

export default App;
