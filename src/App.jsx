import Login from "./pages/Login"
import Slug from "./Slug"

function App() {
  return (
    <div className="bg-[#E5E9F8]">
      <Login />
      <Routes>
        <Route path="/forgot" element={<Slug />} />
      </Routes>
    </div>
  )
}

export default App
