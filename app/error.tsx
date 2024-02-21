'use client'
import React from 'react'

interface Props {
  error: Error
  reset: () => void
}
const ErrorPage = ({ error, reset }: Props) => {
  console.log('Error: ', error)
  return (
    <>
      <div>There is some error</div>
      <button className='btn' onClick={() => reset()}>
        Retry
      </button>
    </>
  )
}

export default ErrorPage
