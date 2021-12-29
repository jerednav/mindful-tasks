import { BrowserRouter, Route, Routes } from "react-router-dom";

//styles
import "./App.css";

//pages and components
import Dashboard from "./pages/Dashboard/Dashboard";
import Create from "./pages/Create/Create";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Project from "./pages/Project/Project";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <div class='container'>
          <Navbar />
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/create' element={<Create />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/project' element={<Project />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
