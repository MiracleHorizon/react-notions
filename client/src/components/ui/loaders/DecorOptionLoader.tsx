import React from 'react'
import ContentLoader from 'react-content-loader'
import useTypedSelector from 'hooks/useTypedSelector'

const DecorOptionLoader = () => {
  const { theme } = useTypedSelector(s => s.app.themeState)

  return (
    <ContentLoader
      viewBox='0 0 110 28'
      cursor='pointer'
      speed={1.7}
      width={110}
      height={28}
      style={{ marginRight: '3px' }}
      backgroundColor={theme.colors['bg-el-hover-primary']}
      foregroundColor={theme.colors['bg-el-active-primary']}
    >
      <rect x='0' y='0' rx='3' ry='3' width='110' height='28' />
    </ContentLoader>
  )
}

export default DecorOptionLoader
