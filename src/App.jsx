import "./App.css";

import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";

export const App = () => {
  return (
    <>
      <Navbar />
      <main className="container p-5 m-auto">
        <Outlet />
      </main>
    </>
  );
}
