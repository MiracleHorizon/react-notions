import React from 'react'
import * as Error from './DefaultRedError.styles'

const DefaultRedError = ({ title }: { title: string }) => (
  <Error.Container data-el='red-error'>
    <Error.Title>{title}</Error.Title>
  </Error.Container>
)

export default DefaultRedError
