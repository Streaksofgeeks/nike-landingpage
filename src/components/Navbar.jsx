import React from 'react'
import Logo from "../assets/logo.png"
import { FaHamburger, FaRegUserCircle } from 'react-icons/fa'
import { MdOutlineShoppingBag } from 'react-icons/md'
import { motion } from 'framer-motion'

const NavbarMenu = [
  {
    id: 1,
    title: "New Release",
    link: "/",
    delay: "0.2",
  },
  {
    id: 2,
    title: "Men",
    link: "#",
    delay: "0.4",
  },
  {
    id: 2,
    title: "Women",
    link: "#",
    delay: "0.6",
  },
  {
    id: 2,
    title: "Kids",
    link: "#",
    delay: "0.8",
  },
  {
    id: 2,
    title: "Customise",
    link: "#",
    delay: "1",
  },
]

const slideRight = (delay) => ({
  hidden: {
    opacity: 0,
    x: -100,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: delay,
    },
  },
});

const Navbar = () => {
  return (
    <nav className=" bg-primary text-white " >
      <div className="container py-6 flex justify-between items-center ">
        {/* logo section */}
        <motion.div
          variants={slideRight(0.1)}
          initial="hidden"
          animate="show">
          <img src={Logo} alt="logo" className='w-[100px]' />
        </motion.div>
        {/* Menu section */}
        <div className=' hidden md:block'>
          <ul className='flex items-center gap-x-8 '>
            {NavbarMenu.map((item) => {
              return (
                <motion.li
                  variants={slideRight(item.delay)}
                  initial="hidden"
                  animate="show"
                  key={item.id}>
                  <a href={item.link} className="inline-block py-2 px-4 uppercase font-barlow font-semibold hover:scale-105 duration-300">{item.title}</a>
                </motion.li>
              )
            })}
          </ul>

        </div>
        {/* Icon section */}
        <div className='hidden md:block'>
          <div className='flex items-center gap-5 text-2xl cursor-pointer '>
            <motion.div variants={slideRight(1.2)}
              initial="hidden"
              animate="show"
              className='hover:scale-110 duration-300'>
              <FaRegUserCircle />
            </motion.div>
            <motion.div
              variants={slideRight(1.4)}
              initial="hidden"
              animate="show"

              className='relative'>
              <MdOutlineShoppingBag className='hover:scale-110 duration-300 relative' />
              <div className='absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 text-xs text-center'>
                2
              </div>
            </motion.div>
          </div>
        </div>
        {/* Mobile Hamburger section */}
        <div className='md:hidden cursor-pointer'>
          <FaHamburger />

        </div>
      </div>
    </nav >
  )
}

export default Navbar
