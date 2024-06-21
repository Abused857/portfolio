import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink
        to="/"
        className="w-16 h-16 rounded-lg bg-white items-center justify-center flex font-bold shadow-lg"
      >
        <p className="text-3xl magenta-gradient_text">GC</p>
      </NavLink>
      <nav className="flex text-3xl gap-7 font-medium">
        <NavLink to="/about" className={({ isActive }) => isActive ? 'magenta-gradient_text' : 'text-black'}>
          About
        </NavLink>
        <NavLink to="/projects" className={({ isActive }) => isActive ? 'magenta-gradient_text' : 'text-black'}>
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
