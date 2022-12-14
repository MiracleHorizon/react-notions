import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { useSearchParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import WorkspaceContent from 'components/Workspace/Content'
import TemplateContent from 'components/PageTemplates/TemplateContent'
import NotionPageLoader from 'components/ui/loaders/NotionPage'
import useActions from 'hooks/useActions'
import { useLazyGetOnePageQuery } from 'services/notions.api'
import { selectUser } from 'store/slices/user/auth.selectors'
import { selectRedirectPageId } from 'store/slices/app/app.selectors'

const Notion = () => {
  const { setCurrentPage, openNotionTaskModal, closeNotionTaskModal } = useActions()
  const redirectPage = useSelector(selectRedirectPageId)
  const [getPage, { data: page, isLoading, isSuccess, isError }] = useLazyGetOnePageQuery()
  const user = useSelector(selectUser)

  const [searchParams] = useSearchParams()
  const { pathname } = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const pagePath = pathname.split('/').pop()
    if (pagePath) getPage(pagePath)
  }, [pathname, getPage])

  useEffect(() => {
    if (isSuccess && page) {
      setCurrentPage(page)
      window.localStorage.setItem('lastPageId', page._id)
    }

    if (isError) navigate(`/workspace/${redirectPage}`)
  }, [page, navigate, isSuccess, isError, redirectPage, setCurrentPage])

  useEffect(() => {
    searchParams.get('p') ? openNotionTaskModal() : closeNotionTaskModal()
  }, [searchParams, openNotionTaskModal, closeNotionTaskModal])

  // На данный момент стоит блокировка просмотра страницы для других пользователей.
  // В будущем, скорее всего, данная функциональность будет реализована.
  if (page && user._id !== page.author) navigate('*')

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
