
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom' 
import Login from './pages/Login/Login'
import Home from './pages/Home/Home'
import BookDetail from './pages/BookDetail/BookDetail'
import Dashboard from './pages/Dashboard/Dashboard'
import Register from './pages/Register/Register'
import AddBook from './pages/AddBook/AddBook'
import { AuthProvider } from './contexts/AuthContext'
import { PrivateRoute } from './routes/PrivateRoute'
import  MyBooks  from './pages/MyBooks/MyBooks.tsx'
import EditBook from './pages/EditBook/EditBook.tsx'
import About from './pages/AboutUs/AboutUs.tsx'

function App() {

  return (
    <AuthProvider>
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/books/:id" element={<PrivateRoute><BookDetail></BookDetail></PrivateRoute>} />
        <Route path='/addBook' element={<PrivateRoute><AddBook></AddBook></PrivateRoute>} />
        <Route path='/mybooks' element={<PrivateRoute><MyBooks></MyBooks></PrivateRoute>} />
        <Route path="/book/edit/:id" element={<PrivateRoute><EditBook /></PrivateRoute>} />
        <Route path="/aboutUs" element={<About />} />
      </Routes>
    </Router>
    </AuthProvider>
  )
}

export default App
