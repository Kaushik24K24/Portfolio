import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
    return (
        <>
            <div className=' h-screen w-10 mr-5 pt-[160px] '>
                {/* /* <div className='flex p-3 gap-3'>
                    <div>

                        <img src="https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630" alt="" width={50} height={50} className='overflow-hidden rounded-full' />
                    </div>
                    <div>

                        <h2 className='text-white '>Protfolio</h2>
                    </div>
                </div>
                <div className=' text-white p-3 gap-9'> */ }
                    <ul className='grid grid-rows-5 gap-5 place-content-center '>


                        <li>
                            <NavLink to="/" className={({ isActive }) => ` ${isActive ? "text-yellow-400" : "text-white"} rounded-full h-18 w-18 `}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-home"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg></NavLink>
                        </li>
                        <li> <NavLink to="/Aboutus" className={({ isActive }) => ` ${isActive ? "text-yellow-400" : "text-white"} rounded-full h-18 w-18 `}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-user-round"><path d="M18 20a6 6 0 0 0-12 0"/><circle cx="12" cy="10" r="4"/><circle cx="12" cy="12" r="10"/></svg></NavLink></li>

                        <li> <NavLink to="/Skills" className={({ isActive }) => ` ${isActive ? "text-yellow-400" : "text-white"} rounded-full h-18 w-18 `}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg></NavLink></li>

                        {/* <li> <NavLink to="/Project" className={({ isActive }) => ` ${isActive ? "text-yellow-400" : "text-white"} rounded-full h-18 w-18 `}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-home"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg></NavLink></li> */}
                        <li> <NavLink to="/Contact" className={({ isActive }) => ` ${isActive ? "text-yellow-400" : "text-white"} rounded-full h-18 w-18 `}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg></NavLink></li>

                    </ul>
                </div>

            
        </>
    )
}

export default Header
