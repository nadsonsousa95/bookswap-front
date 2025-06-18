
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom' 
import Login from './pages/Login/Login'
import Home from './pages/Home/Home'

import Dashboard from './pages/Dashboard/Dashboard'
import Register from './pages/Register/Register'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
          
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

      </Routes>
    </Router>
  )
}

export default App
