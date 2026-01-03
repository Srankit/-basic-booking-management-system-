import { Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact "
import BookingForm from "./components/BookingForm"


const App = () => {
  return (
  <>
  <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking" element={<BookingForm />} />
        </Routes>
  </>
  )
}

export default App