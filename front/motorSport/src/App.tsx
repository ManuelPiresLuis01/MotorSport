import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom"
import Login from "./page/auth/login"
import Dashboard from "./page/dashboard/dashboard"
import Register from "./page/register"
import Sale from "./page/sale/sale"
import Settings from "./page/settings/settings"
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login/>} />
         <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/sale" element={<Sale/>} />
        <Route path="/settings" element={<Settings/>} />
        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
