import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <header className="header">
      <NavLink to="/" className="w-10 h-10 rounded-lg bg-red-100 items-center justify-center flex font-bold shadow-md">
      <p className="green-gradient_text">HEY</p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink to="/about" className= {({ isActive }) => isActive ? 'text-red-500' : 'text-black-800'}>
        About
        </NavLink>
        <NavLink to="/projects" className= {({ isActive }) => isActive ? 'text-red-500' : 'text-black-800'}>
          Projects
        </NavLink>
        <NavLink to="/contact" className= {({ isActive }) => isActive ? 'text-red-500' : 'text-black-800'}>
          Contact
        </NavLink>
      </nav>
    </header>
  )
}

export default Navbar