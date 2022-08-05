import React, { FC } from 'react'
import Loadable from 'react-loadable'
import { TPageTemplate } from 'models/page/IPage'

const NotionTemplate = Loadable({
  loader: () => import('components/Workspace/Templates/Notion'),
  loading: () => <>Loading notions list...</>,
})

const NotionsListTemplate = Loadable({
  loader: () => import('components/Workspace/Templates/NotionsList'),
  loading: () => <>Loading notions list...</>,
})

const NotionContent: FC<{ template: TPageTemplate }> = ({ template }) => (
  <>
    {template === 'NotionsList' ? <NotionsListTemplate /> : <NotionTemplate />}
  </>
)

export default NotionContent
