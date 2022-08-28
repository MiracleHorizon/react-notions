import React, { FC, lazy, memo, Suspense } from 'react'
import Favicon from 'react-favicon'
import DocumentTitle from 'react-document-title'

import PageDecorPanel from 'components/PagePanels/Decor'
import NotionLoader from 'components/ui/loaders/Notion'
import PageViewsPanelLoader from 'components/ui/loaders/PageViewsPanel'
import handleImageUrl from 'utils/helpers/handleImageUrl'
import { NOTION_LOGO_URL } from 'utils/constants/app'
import IPage from 'models/page/IPage'

const PageViewsPanel = lazy(() => import('components/PagePanels/Views'))
const NotionTemplate = lazy(() => import('components/PageTemplates/Notion'))
const NotionsDatabaseTemplate = lazy(() => import('components/PageTemplates/NotionsDatabase'))

const TemplateContent: FC<IPage> = memo(page => (
  <DocumentTitle title={page.title ? page.title : 'React Notions'}>
    <>
      <PageDecorPanel {...page} />
      {page.template === 'NotionsDatabase' && (
        <Suspense fallback={<PageViewsPanelLoader />}>
          <PageViewsPanel />
        </Suspense>
      )}
      <Suspense fallback={<NotionLoader />}>
        {page.template === 'NotionsDatabase' ? (
          <NotionsDatabaseTemplate />
        ) : (
          <NotionTemplate />
        )}
      </Suspense>
      <Favicon
        url={page.iconUrl ? handleImageUrl(page.iconUrl) : NOTION_LOGO_URL}
      />
    </>
  </DocumentTitle>
))

export default TemplateContent
