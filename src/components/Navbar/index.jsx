import React from 'react'
import { LuMenu } from "react-icons/lu";
import SlideBar from '../Slidebar';
import { Link } from 'react-router';

const Navbar = () => {
    return (
        <header className='border-b border-[#f1f1f1] flex p-3 fixed w-full bg-white z-10 items-center'>
            <div className='navInfo flex gap-3 items-center text-[30px]'>
                <div className="drawer">
                    <input id="drawerNav" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content block xl:hidden">
                        {/* Page content here */}
                        {/* <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Open drawer</label> */}
                        <label htmlFor="drawerNav" className="drawer-button"><LuMenu /></label>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="drawerNav" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                            {/* Sidebar content here */}
                            <SlideBar />
                        </ul>
                    </div>
                </div>
                <Link to='/'>Sb.studio</Link>
            </div>
            {/* Phan ben phai */}
            <div className='navRight ml-auto'>
                <fieldset className="fieldset">
                    <input type="text" className="input" placeholder="Tìm kiếm..." />
                </fieldset>
            </div>
        </header>
    )
}

export default Navbar