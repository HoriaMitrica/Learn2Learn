import { About } from "./components/About"
import { Articles } from "./components/Articles"
import { Contact } from "./components/Contact"
import { Courses } from "./components/Courses"
import { Landing } from "./components/Landing"
import { MediaAparitions } from "./components/MediaAparitions"
import { Navbar } from "./components/Navbar"
import { Offers } from "./components/Offers"

function App() {

  return (
    <>
    <Navbar/>
    <Landing/>
    <About/>
    <MediaAparitions/>
    <Articles/>
    <Courses/>
    <Offers/>
    <Contact/>
    </>
  )
}

export default App
