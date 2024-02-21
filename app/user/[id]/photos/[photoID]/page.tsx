import React from 'react'

interface Props {
  params: { id: number; photoID: number }
}
const PhotoDetailPage = ({ params: { id, photoID } }: Props) => {
  return <div>PhotoDetailPage: {`user id ${id} and photo id ${photoID}`}</div>
}

export default PhotoDetailPage
