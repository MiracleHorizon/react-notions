import React from 'react'
import ContentLoader from 'react-content-loader'

import useTypedSelector from 'hooks/useTypedSelector'
import { NOTIONS_LIST_VIEWS } from 'utils/constants/app'
import Wrapper from './PageViewsPanelLoader.styles'

const PageViewsPanelLoader = () => {
  const { theme } = useTypedSelector(s => s.app.themeState)

  return (
    <Wrapper>
      {NOTIONS_LIST_VIEWS.map(view => (
        <ContentLoader
          key={view.title}
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
