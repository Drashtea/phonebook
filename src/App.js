import logo from "./logo.svg";
import "./App.css";
import { Dialer } from "./Components/Dialer";
import { Login } from "./Components/Login";
import { Table } from "./Components/Table";
import { Route } from "react-router";
import { Routes } from "react-router";
import { SideNavbar } from "./Components/SideNavbar";
import { BrowserRouter } from "react-router-dom";
import { Group } from "./Components/Group";
import { Editmodal } from "./Components/Editmodal";
import { Phonebook } from "./Components/Phonebook";
function App() {
  return (
    // <Editmodal />
    // <Login />
    <BrowserRouter>
      <SideNavbar />
      <Routes>
        <Route path="/dial" element={<Dialer />}></Route>
        <Route path="/group" element={<Group />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/local" element={<Table />}></Route>
        <Route path="/phone" element={<Phonebook />}></Route>
        <Route path="/edit" element={<Editmodal />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
