import React, { FC, useContext, useEffect, useRef } from 'react'

import MainLayout from 'layouts/Main'
import WorkspaceScrollContext from 'context/WorkspaceScroll'
import Content from './WorkspaceContent.styles'

const WorkspaceContent: FC<{ children: JSX.Element }> = ({ children }) => {
  const scrollContext = useContext(WorkspaceScrollContext)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    scrollContext.contentRef = ref
  }, [scrollContext.contentRef])

  return (
    <MainLayout>
      <Content ref={ref}>{children}</Content>
    </MainLayout>
  )
}

export default WorkspaceContent
