import React, { FC } from 'react'
import { useNavigate } from 'react-router'

import useTypedSelector from 'hooks/useTypedSelector'
import { NotionsSelector } from 'store/slices/notions/notions.selectors'
import handleImageUrl from 'utils/helpers/handleImageUrl'
import * as Title from './PageTitle.styles'

const ParentPageTitle: FC<{ parentPageId: string }> = ({ parentPageId }) => {
  const parentPage = useTypedSelector(s => NotionsSelector.selectParentPage(s, parentPageId))
  const navigate = useNavigate()

  if (!parentPage) return null

  const handleOpenParentPage = () => navigate(`/workspace/${parentPage._id}`)

  return (
    <>
      <Title.Container onClick={handleOpenParentPage}>
        {parentPage.iconUrl && (
          <Title.Icon src={handleImageUrl(parentPage.iconUrl)} />
        )}
        <Title.Value>
          {parentPage.title === '' ? 'Untitled' : parentPage.title}
        </Title.Value>
      </Title.Container>
      <Title.TitlesDivider>/</Title.TitlesDivider>
    </>
  )
}

export default ParentPageTitle
