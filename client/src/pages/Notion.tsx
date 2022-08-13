import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { useReadLocalStorage } from 'usehooks-ts'

import WorkspaceContent from 'components/Workspace/Content'
import TemplateContent from 'components/Workspace/Templates/TemplateContent'
import NotionPageLoader from 'components/ui/loaders/NotionPage'
import useAuth from 'hooks/useAuth'
import useActions from 'hooks/useActions'
import { useGetOnePageQuery } from 'store/slices/pages/pages.api'
import { TLastPage } from 'types'

const NotionPage = () => {
  const { user } = useAuth()
  const lastPage = useReadLocalStorage('lastPage') as TLastPage
  const { setCurrentPage } = useActions()

  const navigate = useNavigate()
  const { pathname } = useLocation()
  const query = pathname.split('/').pop()
  const { data, isLoading, isSuccess, isError } = useGetOnePageQuery(query!)

  useEffect(() => {
    if (isSuccess) setCurrentPage(data)
    if (isError) navigate(`/workspace/${lastPage ? lastPage._id : ''}`)

    return () => {
      if (data) window.localStorage.setItem('lastPage', data._id)
    }
  }, [data, navigate, isSuccess, isError, lastPage])

  if (data && user && user.uid !== data.author) return null

  return (
    <WorkspaceContent>
      <>
        {isSuccess && <TemplateContent {...data} />}
        {isLoading && <NotionPageLoader />}
      </>
    </WorkspaceContent>
  )
}

export default NotionPage
