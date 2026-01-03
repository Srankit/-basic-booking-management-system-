import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-stone-600 text-white rounded-sm px-6 py-3">
      <div className="flex items-center justify-between">
        
        <h1 className="text-xl font-bold">JustWravel</h1>

        <ul className="flex items-center gap-6 list-none font-bold">
          

  <li><Link to="/">Home</Link></li>
  <li><Link to="/about">About</Link></li>
  <li><Link to="/contact">Contact</Link></li>
  <li><Link to="/booking">Booking</Link></li>
 
</ul>
      </div>
    </nav>
  );
};

export default NavBar;
