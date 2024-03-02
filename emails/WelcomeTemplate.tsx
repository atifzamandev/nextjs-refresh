import React, { CSSProperties } from 'react'
import { Html, Body, Container, Text, Link, Preview, Tailwind } from '@react-email/components'

interface Props {
  name: string
}
const WelcomeTemplate = ({ name }: Props) => {
  return (
    <Html>
      <Preview>Welcome Abroad!</Preview>
      <Tailwind>
        <Body key={name} className='bg-gray-300'>
          <Container>
            <Text className='text-3xl'>Hello {name}</Text>
            <Link href='https://www.google.com/'>www.google.com/</Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

export default WelcomeTemplate

const body: CSSProperties = {
  background: '#f0f0f0',
}

const heading: CSSProperties = {
  fontSize: 32,
}
