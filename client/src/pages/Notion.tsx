import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { useReadLocalStorage } from 'usehooks-ts'
import DocumentTitle from 'react-document-title'
import Favicon from 'react-favicon'

import MainLayout from 'layouts/Main'
import PageDecorPanel from 'components/DecorPanel'
import NotionContent from 'components/Workspace/Templates/NotionContent'
import NotionPageLoader from 'components/ui/loaders/NotionPageLoader'
import useAuth from 'hooks/useAuth'
import useActions from 'hooks/useActions'
import useTypedSelector from 'hooks/useTypedSelector'
import { useGetOnePageQuery } from 'store/slices/pages/pages.api'
import { TLastPage } from 'types'

const NotionPage = () => {
  const { setCurrentPage, closeRightSidebar } = useActions()
  const { page } = useTypedSelector(state => state.pages)
  const { user } = useAuth()

  const navigate = useNavigate()
  const { pathname } = useLocation()
  const query = pathname.split('/').pop()
  const { data, isLoading, isSuccess, isError } = useGetOnePageQuery(query!)
  const lastPage = useReadLocalStorage('lastPage') as TLastPage

  useEffect(() => {
    if (isSuccess) {
      setCurrentPage(data)

      if (data.template === 'NotionsList') closeRightSidebar()
    }

    if (isError) navigate(`/workspace/${lastPage ? lastPage._id : ''}`)

    return () => {
      if (data) window.localStorage.setItem('lastPage', data._id)
    }
  }, [data, navigate, isSuccess, isError, lastPage])

  if (page && user && user.uid !== page.author) return null

  return (
    <MainLayout>
      <>
        {isSuccess && page && (
          <DocumentTitle title={page.title}>
            <>
              <PageDecorPanel {...page} />
              <NotionContent template={page.template} />
              {page.iconUrl && <Favicon url={page.iconUrl} />}
            </>
          </DocumentTitle>
        )}
        {isLoading && <NotionPageLoader />}
      </>
    </MainLayout>
  )
}

export default NotionPage
