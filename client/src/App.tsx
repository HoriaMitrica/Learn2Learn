import { About } from "./components/About"
import { Articles } from "./components/Articles"
import { Contact } from "./components/Contact"
import { Courses } from "./components/Courses"
import { Landing } from "./components/Landing"
import { MediaAparitions } from "./components/MediaAparitions"
import { Navbar } from "./components/Navbar"
import { Offer } from "./components/Offer"

function App() {

  return (
    <>
    <Navbar/>
    <Landing/>
    <About/>
    <MediaAparitions/>
    <Articles/>
    <Courses/>
    <Offer/>
    <Contact/>
    </>
  )
}

export default App
