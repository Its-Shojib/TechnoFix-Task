import { TbWorld } from "react-icons/tb";
import { FaArrowRightLong } from "react-icons/fa6";

const Navbar = () => {
    let lists = <>
        <li>
            <details>
                <summary>Products</summary>
                <ul className="p-2">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                </ul>
            </details>
        </li>
        <li>
            <details>
                <summary>Solutions</summary>
                <ul className="p-2">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                </ul>
            </details>
        </li>
        <li>
            <details>
                <summary>Resources</summary>
                <ul className="p-2">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                </ul>
            </details>
        </li>
        <li className="cursor-pointer">Enterprise</li>
        <li className="cursor-pointer">Pricing</li>
    </>


    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {lists}
                    </ul>
                </div>
                <a className="btn btn-ghost text-2xl">Miro</a>
                <div className="hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 flex items-center gap-2 font-medium">
                        {lists}
                    </ul>
                </div>
            </div>

            <div className="navbar-end">
                <p className="flex item-center gap-2 justify-center px-4"><TbWorld className="text-2xl" /> EN</p>
                <ul className="menu menu-horizontal flex items-center gap-3 font-medium px-3">
                    <li>Contact</li>
                    <li>Sales</li>
                    <li>Login</li>
                </ul>
                <a href="#">
                    <button className="text-white bg-[#4262FF] rounded-full px-4 py-2">
                        Sign up free <FaArrowRightLong className="inline" />
                    </button>
                </a>
            </div>
        </div>
    );
};

export default Navbar;