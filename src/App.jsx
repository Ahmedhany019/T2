import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./Component/Navbar"
import Home from "./pages/Home"
import CategoriesPage from "./pages/CategoriesPage"
import Footer from "./Component/Footer"
import NewsLetter from "./Component/NewsLetter"
import Contact from "./pages/Contact"

function App() {
  
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/categories' element={<CategoriesPage/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <NewsLetter />
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
