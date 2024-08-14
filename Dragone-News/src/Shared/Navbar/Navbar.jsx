import { Link, NavLink } from "react-router-dom";



const Navbar = () => {
    const links= <>
    <li><NavLink>Home</NavLink></li>
    <li><NavLink>Item</NavLink></li>
    <li><NavLink>Carrier</NavLink></li>
    
   
    </>
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
      
      </div>
    
    </div>
  
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
    <div>

    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
        </div>
    </div>
    <Link className="btn">Button</Link>
    
  </div>
</div>
    );
};

export default Navbar;