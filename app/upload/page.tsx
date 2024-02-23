'use client'
import React, { useState } from 'react'
import { CldUploadWidget, CldImage } from 'next-cloudinary'
import { sources } from 'next/dist/compiled/webpack/webpack'

interface CldResult {
  public_id: string
}

const UploadPage = () => {
  const [publicId, setPublicId] = useState('')
  return (
    <>
      {publicId && <CldImage src={publicId} width={270} height={180} alt='Test Image' />}
      <CldUploadWidget
        uploadPreset='albn5x0j'
        options={{ sources: ['local'], maxFiles: 5, multiple: false, styles: {} }}
        onUpload={(result, widget) => {
          if (result.event !== 'success') return
          const info = result.info as CldResult
          setPublicId(info.public_id)
        }}>
        {({ open }) => (
          <button className='btn btn-primary' onClick={() => open()}>
            Upload
          </button>
        )}
      </CldUploadWidget>
    </>
  )
}

export default UploadPage
