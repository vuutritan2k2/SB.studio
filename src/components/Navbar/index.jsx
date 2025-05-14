import React from 'react'
import { LuMenu } from "react-icons/lu";

const Navbar = () => {
    return (
        <header className='border-b border-[#f1f1f1] flex p-3 fixed w-full bg-white z-10'>
            <div className='navInfo flex gap-3 items-center text-[20px]'>
                <LuMenu />
                <p>Sb.studio</p>
            </div>
            {/* Phan ben phai */}
            <div className='navRight ml-auto'>
                <button>Login</button>
            </div>
        </header>
    )
}

export default Navbar