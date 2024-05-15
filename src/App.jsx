import { Routes, Route } from "react-router-dom"
import ForgotPass from "./pages/Auth/ForgotPass"
import Login from "./pages/Auth/Login"
import MainDashboard from "./pages/Dashoard/MainDashboard"
import Sidebar from "./component/Sidebar"

function App() {
  return (
    <div className="bg-[#E5E9F8] h-[100vh]">
      <Routes>
        <Route path='/' element={<MainDashboard />} />
        <Route path='/forgotpass' element={<ForgotPass />}/>
      </Routes>
    </div>
  )
}

export default App
