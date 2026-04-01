
import { useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import Cart from './components/Cart'
import Exploring from './components/Exploring'
import Footer from './components/Footer'
import Models from './components/Models'
import Navbar from './components/Navbar'
import Pricing from './components/Pricing'
import RatingTab from './components/RatingTab'
import Steps from './components/Steps'


const getModels = async () => {
  const res = await fetch("/models.json")
  return res.json()
}

const modelPromise = getModels()

function App() {
  const [activeTab, setActiveTab] = useState("products")
  const [carts, setCarts] = useState([])
  console.log(carts)



  return (
    <>
      <Navbar />
      <Banner />
      <RatingTab />

      <div className="text-center pb-4 mt-10 bg-transparent">
        <h2 className="text-4xl font-bold">Premium Digital Tools</h2>
        <p className="text-base text-gray-400 mt-2">
          Choose from our curated collection of premium digital products designed
          to boost your productivity and creativity.
        </p>
      </div>

      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box justify-center bg-transparent">
        <input onClick={() => setActiveTab("products")} type="radio" name="my_tabs_1" className="tab rounded-full w-20" aria-label="Products" defaultChecked />
        <input onClick={() => setActiveTab("carts")} type="radio" name="my_tabs_1" className="tab rounded-full w-20" aria-label="Carts" />

      </div>

      {activeTab === "products" && <Models modelPromise={modelPromise} carts={carts} setCarts={setCarts} />}
      {activeTab === "carts" && <Cart carts={carts} />}

      <Steps />
      <Pricing />
      <Exploring />
      <Footer />

    </>
  )
}

export default App
