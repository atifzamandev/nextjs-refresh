import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <div className='flex bg-violet-300 p-5'>
      <Link href='/' className='mr-5'>
        Next JS
      </Link>
      <Link href='/user' className='mr-5'>User</Link>
      <Link href='/admin'className='mr-5'>Admin</Link>
    </div>
  )
}

export default NavBar
