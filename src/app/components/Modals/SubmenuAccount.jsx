import React from 'react'
import Link from 'next/link'
import { User, House, Heart } from 'lucide-react'

const SubmenuAccount = ({ showSubmenu, setShowSubmenu }) => {
    return (
        <div onMouseLeave={(e) => { e.stopPropagation(), setShowSubmenu(!showSubmenu) }} className='absolute top-3/4 border rounded-xl bg-white z-10'>
            <ul className=''>
                {/* It comes dynamic */}
                <li className='p-4 px-8 border-b text-black-800'>
                    <button className='text-md leading-5 flex gap-x-2'><User className='size-5' /> SignUp / Login</button>
                </li>
                <li className='p-4 px-8 border-b text-black-800'>
                    <Link href={"/"}>
                        <button className='text-md leading-5 flex gap-x-2'><House className='size-5' />Dashboard</button>
                    </Link>
                </li>
                <li className='p-4 px-8 border-b text-black-800'>
                    <Link href={"/"}>
                        <button className='text-md leading-5 flex gap-x-2'><Heart className='size-5' />Wishlist</button>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default SubmenuAccount