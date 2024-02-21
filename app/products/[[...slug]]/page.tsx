import React from 'react'

interface Props {
  params: { slug: string[] }
  searchParams: { sortOrder: string }
}

const ProductDetailPage = ({ params: { slug }, searchParams: { sortOrder } }: Props) => {
  return (
    <div>
      ProductDetailPage: {sortOrder}
      {/* {slug.map((page) => (
        <li key={page}>{page} </li>
      ))} */}
    </div>
  )
}

export default ProductDetailPage
