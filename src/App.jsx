
import './App.css'
import Banner from './components/Banner'
import Exploring from './components/Exploring'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Pricing from './components/Pricing'
import RatingTab from './components/RatingTab'
import Steps from './components/Steps'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Banner />
      <RatingTab />

      <Steps />
      <Pricing />
      <Exploring />
      <Footer />

    </>
  )
}

export default App
