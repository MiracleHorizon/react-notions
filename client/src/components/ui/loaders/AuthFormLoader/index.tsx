import React from 'react'
import ContentLoader from 'react-content-loader'
import Container from './AuthFormLoader.styles'

const AuthFormLoader = () => (
  <Container>
    <ContentLoader
      speed={1.5}
      width={310}
      height={355}
      viewBox='0 0 310 355'
      backgroundColor='rgba(55, 53, 47, 0.08)'
      foregroundColor='rgba(55, 53, 47, 0.16)'
    >
      <rect x='0' y='2' rx='4' ry='4' width='310' height='36' />
      <rect x='0' y='49' rx='4' ry='4' width='310' height='36' />
      <rect x='0' y='103' rx='0' ry='0' width='310' height='1' />
      <rect x='0' y='121' rx='1' ry='1' width='60' height='14' />
      <rect x='0' y='137' rx='3' ry='3' width='310' height='30' />
      <rect x='0' y='173' rx='1' ry='1' width='60' height='14' />
      <rect x='0' y='189' rx='3' ry='3' width='310' height='30' />
      <rect x='0' y='227' rx='3' ry='3' width='310' height='31' />
    </ContentLoader>
  </Container>
)

export default AuthFormLoader
