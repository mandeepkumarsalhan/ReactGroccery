import { GoHeartFill } from "react-icons/go";
import { HiShoppingBag } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
const Navbar = () => {
  return (
   <header>
        <nav className="max-w-[1620px] mx-auto px-10 h-[14vh]  flex justify-between items-center">
            {/* Logo */}
            <a href="#" className="text-3xl font-bold">
                Anan<span className="text-orange-500 uppercase">d</span>a
            </a>
            {/* Desktop Menu */}
            <ul className="flex items-center gap-x-15">
                <li><a href="#" className="font-semibold tracking-wider text-orange-500 hover:text-zinc-800">Home</a></li>
                <li><a href="#" className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500">About Us</a></li>
                <li><a href="#" className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500">Process</a></li>
                <li><a href="#" className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500">Contact Us</a></li>
            </ul>
            {/* Nav Action */}
            <div className="flex items-center gap-x-5">
                {/* Input Field */}
                <div className="flex  p-1 border-2 border-orange-500 rounded-full">
                    <input type="text" name="text" id="text" placeholder="Search..." autoComplete="off"/>
                    <button><IoSearch /></button>
                </div>
                <a href="#" className="text-zinc-800 text-2xl">
                    <GoHeartFill />
                </a>
                 <a href="#" className="text-zinc-800 text-2xl">
                    <HiShoppingBag />
                </a>
            </div>
        </nav>

   </header>
  )
}

export default Navbar
