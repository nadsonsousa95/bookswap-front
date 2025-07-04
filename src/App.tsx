
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom' 
import Login from './pages/Login/Login'
import Home from './pages/Home/Home'
import BookDetail from './pages/BookDetail/BookDetail'
import Dashboard from './pages/Dashboard/Dashboard'
import Register from './pages/Register/Register'
import AddBook from './pages/AddBook/AddBook'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
          
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/books/:id" element={<BookDetail></BookDetail>} />
        <Route path='/addBook' element={<AddBook></AddBook>} />


      </Routes>
    </Router>
  )
}

export default App
