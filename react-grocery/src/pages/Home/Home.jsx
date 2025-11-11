
import Hero from '../../components/Home/Hero/Hero'
import Navbar from '../../components/common/Navbar/Navbar'
import Products from '../../components/Home/Products/Products'
import Values from '../../components/Home/Values/Values'
import Category from '../../components/Home/Category/Category'
import Discount from '../../components/Home/Discount/Discount'
import Process from '../../components/Home/Process/Process'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Category />
      <Values />
      <Products />
      <Discount />
      <Process />
    </div>
  )
}

export default Home
