import React, { FC, lazy, Suspense } from 'react'
import Favicon from 'react-favicon'
import DocumentTitle from 'react-document-title'

import NotionLoader from 'components/ui/loaders/NotionLoader'
import PageDecorPanel from 'components/DecorPanel'
import IPage from 'models/page/IPage'
import { NOTION_LOGO_URL } from 'utils/constants'

const NotionTemplate = lazy(
  () => import('components/Workspace/Templates/Notion')
)
const NotionsListTemplate = lazy(
  () => import('components/Workspace/Templates/NotionsList')
)

const NotionContent: FC<IPage> = page => (
  <DocumentTitle title={page.title}>
    <>
      <PageDecorPanel {...page} />
      <Suspense fallback={<NotionLoader />}>
        {page.template === 'NotionsList' ? (
          <NotionsListTemplate />
        ) : (
          <NotionTemplate />
        )}
      </Suspense>
      <Favicon url={page.iconUrl ? page.iconUrl : NOTION_LOGO_URL} />
    </>
  </DocumentTitle>
)

export default NotionContent
