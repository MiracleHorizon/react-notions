import React from 'react'
import ContentLoader from 'react-content-loader'
import useTypedSelector from 'hooks/useTypedSelector'

const HiddenTasksListsLoader = () => {
  const { theme } = useTypedSelector(state => state.app)

  return (
    <ContentLoader
      speed={1.5}
      width={220}
      height={300}
      viewBox='0 0 220 300'
      backgroundColor={theme.colors['bg-el-hover-primary']}
      foregroundColor={theme.colors['bg-el-active-primary']}
    >
      <rect x='4' y='4' rx='3' ry='3' width='95' height='20' />
      <rect x='4' y='28' rx='3' ry='3' width='205' height='30' />
      <rect x='4' y='62' rx='3' ry='3' width='205' height='30' />
      <rect x='4' y='96' rx='3' ry='3' width='205' height='30' />
      <rect x='4' y='130' rx='3' ry='3' width='205' height='30' />
      <rect x='4' y='164' rx='3' ry='3' width='205' height='30' />
      <rect x="163" y="4" rx="3" ry="3" width="46" height="20" />
    </ContentLoader>
  )
}

export default HiddenTasksListsLoader
