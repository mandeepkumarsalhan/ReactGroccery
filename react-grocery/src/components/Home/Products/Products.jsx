
import { useState } from "react"
import Heading from "../../common/SectionHeading/Heading"
import ProductList from "../../common/ProductList/ProductList";
import Button from "../../common/Button/Button";
import { FaHeart, FaPlus } from 'react-icons/fa'

const Products = () => {
    const categories = ['All', 'Fruits', 'Vegetables', 'Dairy', 'SeaFood'];
    const [activeTab, setActiveTab] = useState('All');
    let filteredItems = activeTab === 'All' ? ProductList : ProductList.filter(item => item.category === activeTab);
    /* Product list card render */
    const renderCards = filteredItems.slice(0, 8).map(item => (
        <div key={item.id} className='bg-zinc-100 p-5 rounded-xl'>
            {/* Card Icons */}
            <div className='flex justify-between'>
                <span className='text-3xl text-zinc-300 cursor-pointer'>
                    <FaHeart />
                </span>
                <button className='bg-gradient-to-b from-orange-400 to-orange-500 text-white text-xl py-3 px-3 rounded-lg cursor-pointer'>
                    <FaPlus />
                </button>
            </div>
            {/* Card image */}
            <div className='w-full h-50'>
                <img src={item.image} alt={item.name} className='w-full h-full object-contain' />
            </div>
            {/* Card content */}
            <div className='text-center'>
                <h3 className='text-2xl font-semibold'>{item.name}</h3>
                <p className='text-2xl font-bold mt-4 mb-3'>${item.price.toFixed(2)}</p>
                <Button content="Shop Now" />
            </div>
        </div>
    ));

    return (
        <section>
            <div className="max-w[1400px] mx-auto px-10 py-20">
                <Heading highlight="Our" heading="Products" />
                {/* Tabs */}
                <div className="flex flex-wrap gap-3 justify-center mt-10">
                    {categories.map(category => {
                        return (
                            <button key={category} className={`cursor-pointer px-5 py-2 text-lg rounded-lg
                            ${activeTab === category ? 'bg-gradient-to-b from-orange-400 to-orange-500 text-white' : 'bg-zinc-100'}`}
                                onClick={() => setActiveTab(category)}>
                                {category}
                            </button>
                        )
                    })}
                </div>
                {/* Product Listing */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-9 mt-20">
                    {renderCards}
                </div>
                <div className="mt-15 mx-auto w-fit">
                    <Button content="View All" />
                </div>
            </div>
        </section>
    )
}

export default Products
