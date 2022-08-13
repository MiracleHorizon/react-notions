import React, { FC } from 'react'
import { useNavigate } from 'react-router'

import useTypedSelector from 'hooks/useTypedSelector'
import * as Title from './PageTitle.styles'

const ParentPageTitle: FC<{ parentPageId: string }> = ({ parentPageId }) => {
  const navigate = useNavigate()

  const parentPage = useTypedSelector(state => state.pages.pages).find(
    item => item._id === parentPageId
  )

  if (!parentPage) return null

  const handleOpenParentPage = () => navigate(`/workspace/${parentPage?._id}`)

  return (
    <>
      <Title.Container onClick={handleOpenParentPage}>
        {parentPage.iconUrl && <Title.Icon src={parentPage.iconUrl} />}
        <Title.Text>
          {parentPage.title !== '' ? parentPage.title : 'Untitled'}
        </Title.Text>
      </Title.Container>
      <Title.TitlesDivider>/</Title.TitlesDivider>
    </>
  )
}

export default ParentPageTitle
