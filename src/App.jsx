import { BrowserRouter, RouterProvider } from "react-router-dom"
import { 
  About, 
  Contact, 
  Experience, 
  Feedbacks, 
  Footer, 
  Preview, 
  Navbar, 
  Tech, 
  Works } from "./components";

import StarsCanvas from "./components/canvas/Stars"
import Resume from "./components/Resume"


function App() {
  return (
      <BrowserRouter>
        <div className="relative z-0 bg-primary overflow-x-hidden">

          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar/>
            <Preview/>
          </div>

          <About/>

          
          <Experience/>
          <Tech/>
          <Works/>

          {/* <Feedbacks/> */}

          <div className="relative z-0">
            <Contact/>
            <StarsCanvas/>
          </div>

          <Resume/>

        </div>

        <Footer/>

      </BrowserRouter>
  )
}

export default App
