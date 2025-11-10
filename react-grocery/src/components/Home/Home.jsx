import Category from '../Category/Category'
import Hero from '../Hero/Hero'
import Navbar from '../Navbar/Navbar'
import Products from '../Products/Products'
import Values from '../Values/Values'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Category />
      <Values />
      <Products />
    </div>
  )
}

export default Home
