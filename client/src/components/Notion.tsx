import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { useSearchParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import WorkspaceContent from 'components/Workspace/Content'
import TemplateContent from 'components/PageTemplates/TemplateContent'
import NotionPageLoader from 'components/ui/loaders/NotionPage'
import useActions from 'hooks/useActions'
import useTypedSelector from 'hooks/useTypedSelector'
import { useLazyGetOnePageQuery } from 'services/pages.api'
import { selectUser } from 'store/slices/auth/auth.selectors'

const Notion = () => {
  const { setCurrentPage, openNotionTaskModal, closeNotionTaskModal } = useActions()
  const [getPage, { data: page, isLoading, isSuccess, isError }] = useLazyGetOnePageQuery()
  const { lastPageId } = useTypedSelector(s => s.app)
  const [searchParams] = useSearchParams()
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const user = useSelector(selectUser)

  useEffect(() => {
    const pagePath = pathname.split('/').pop()
    if (pagePath) getPage(pagePath)
  }, [pathname, getPage])

  useEffect(() => {
    if (isSuccess && page) setCurrentPage(page)
    if (isError) navigate(`/workspace/${lastPageId ? lastPageId : ''}`)

    return () => {
      if (page) window.localStorage.setItem('lastPageId', page._id)
    }
  }, [page, navigate, isSuccess, isError, lastPageId, setCurrentPage])

  useEffect(() => {
    const taskPageParams = searchParams.get('p')
    if (taskPageParams) openNotionTaskModal()
    if (!taskPageParams) closeNotionTaskModal()
  }, [searchParams, openNotionTaskModal, closeNotionTaskModal])

  if (page && user._id !== page.author) return null

  return (
    <WorkspaceContent>
      <>
        {isSuccess && page && <TemplateContent {...page} />}
        {isLoading && <NotionPageLoader />}
      </>
    </WorkspaceContent>
  )
}

export default Notion
