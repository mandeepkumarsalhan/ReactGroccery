
import Hero from '../../components/Home/Hero/Hero'
import Navbar from '../../components/common/Navbar/Navbar'
import Products from '../../components/Home/Products/Products'
import Values from '../../components/Home/Values/Values'
import Category from '../../components/Home/Category/Category'

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
