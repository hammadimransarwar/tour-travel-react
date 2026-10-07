import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import DestinationPlaces from './components/DestinationPlace'
import ChooseUs from './components/ChooseUs'
import Footer from './components/Footer'
import ContactUs from './components/ContactUs'
function App() {
  return (<> 
    <Navbar />
    <Hero />
    <DestinationPlaces />
    <ChooseUs/>
    <ContactUs/>
    <Footer/>
  </>)
}
export default App
