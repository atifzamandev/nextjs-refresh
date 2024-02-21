import React, { Suspense } from 'react'
import UsersTable from './UsersTable'
import Link from 'next/link'

interface Props {
  searchParams: { sortOrder: string }
}
const UserPage = ({ searchParams: { sortOrder } }: Props) => {
  return (
    <>
      <h1>List of users</h1>
      <Link href='/user/new' className='btn'>
        New User
      </Link>

      <UsersTable sortOrder={sortOrder} />
    </>
  )
}

export default UserPage
