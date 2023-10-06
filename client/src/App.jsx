import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import SignUP from './pages/SignUP'
import SignIn from './pages/SignIn'
import About from './pages/About'
import Profile from './pages/Profile'
import Header from './components/Header'
function App() {
  return (
  <BrowserRouter>
  <Header/>
  <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/sign-in' element={<SignIn/>}></Route>
    <Route path='/sign-up' element={<SignUP/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/profile' element={<Profile/>}></Route>
  </Routes>
</BrowserRouter>
  )
}
export default App
