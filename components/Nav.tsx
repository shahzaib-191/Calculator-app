import { FaWpbeginner } from "react-icons/fa";

import Link from 'next/link';
import React from 'react';

function Nav() {
  return (
    <nav className='fixed top-0 p-5 w-full overflow-hidden flex justify-between items-center'>
      <h1 className={`text-2xl font-[500]`}>SSB Calculator</h1>
      <Link href={"https://shahzaib-website.vercel.app/"} target='_blank' className={`text-2xl hover:text-violet-300`}>
        <FaWpbeginner/>
      </Link>
    </nav>
  )
}

export default Nav