import React from 'react'
import ContentLoader from 'react-content-loader'

import { views } from 'components/ViewsPanel'
import useTypedSelector from 'hooks/useTypedSelector'
import Wrapper from './PageViewsPanelLoader.styles'

const PageViewsPanelLoader = () => {
  const { theme } = useTypedSelector(state => state.app)

  return (
    <Wrapper>
      {views.map((_, i) => (
        <ContentLoader
          key={i}
          viewBox='0 0 70 28'
          speed={1.8}
          style={{ marginRight: '2px' }}
          width={70}
          height={28}
          backgroundColor={theme.colors['bg-el-hover-primary']}
          foregroundColor={theme.colors['bg-el-active-primary']}
        >
          <rect x='0' y='0' rx='3' ry='3' width='70' height='28' />
        </ContentLoader>
      ))}
    </Wrapper>
  )
}

export default PageViewsPanelLoader
