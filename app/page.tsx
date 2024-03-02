import Link from 'next/link'

import ProductCard from './components/ProductCard/ProductCard'
import { getServerSession } from 'next-auth'
import { authOption } from './api/auth/[...nextauth]/route'


export default async function Home() {

  const session = await getServerSession(authOption)

  return (
    <>
      <main>Hello {session?.user?.name}</main>
      <Link href='/user'>User Page</Link>
      <ProductCard />
    </>
  )
}
