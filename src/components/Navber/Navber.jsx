import logo from '../../../public/logo.jpg'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../../provider/AuthProvider';
import { useContext } from 'react';

const Navber = () => {

    // const { user, logOut } = useContext(AuthContext);


    // const handleSingOut = () => {
    //     logOut()
    //         .then()
    //         .catch()
    // }


    const navber = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/addProduct">Add Product</NavLink></li>
        <li><NavLink to="/myCard">My Card</NavLink></li>
        <li><Link to="/login">Login</Link>  </li>
        {/* 
        {
            user ?
                <button onClick={handleSingOut} className='btn btn-secondary'>Sign Out</button>
                :
                <Link to="/login"><button className='Navber-end btn btn-secondary '>Login</button>
                </Link>
        }

        {user && <p className='pt-4 mx-4'>{user.displayName}</p>}
        {user && <img src={user.photoURL} className='w-12 h-12 rounded-full' alt="" />} */}

    </>


    return (
        <div>
            <div className="navbar text-white h-14 bg-gradient-to-r from-cyan-500 to-sky-500 rounded-t-lg mt-6">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                            {navber}
                        </ul>
                    </div>
                    <img className=' w-12 h-12 rounded-full ' src={logo} alt="" />
                    <a className="btn btn-ghost normal-case text-xl font-dancing text-white ">TechWizHub</a>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navber}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navber