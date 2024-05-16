import { Routes, Route } from "react-router-dom"
import ForgotPass from "./pages/Auth/ForgotPass"
import Login from "./pages/Auth/Login"
import MainDashboard from "./pages/Dashoard/MainDashboard"
import Sidebar from "./component/Sidebar"
import Dashboard from "./pages/Dashoard/pages/Dashboard"

function App() {
  return (
    <div className="bg-[#E5E9F8]">
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<MainDashboard />}/>
        <Route path='/login' element={<Login />} />
        <Route path='/forgotpass' element={<ForgotPass />}/>
      </Routes>
    </div>
  )
}

export default App
