import React, { FC, memo, useCallback, useMemo } from 'react'
import { useEventListener } from 'usehooks-ts'
import { useSelector } from 'react-redux'

import EmptyPageItem from '../Item'
import { PageSvg } from 'components/ui/svg'
import {
  useCreateItemMutation,
  useUpdatePageMutation,
} from 'services/notions.api'
import useSelectItem from 'hooks/useSelectItem'
import { selectEmptyPageItemSelectable } from 'store/slices/modals/modals.selectors'
import { selectUser } from 'store/slices/user/auth.selectors'
import handleUpdatePageTemplate from 'utils/helpers/handleUpdatePageTemplate'
import { UPDATE_PAGE_TEMPLATES_OPTIONS } from 'utils/constants/app'
import NotionContentItemTypes from 'models/pageContent/NotionContentItemTypes'
import NotionContentItem from 'models/pageContent/NotionContentItem'
import IPage from 'models/page/IPage'
import Description from './EmptyPageContent.styles'

const EmptyPageContent: FC<IPage> = memo(({ _id, status }) => {
  const isSelectable = useSelector(selectEmptyPageItemSelectable)
  const [createContentItem] = useCreateItemMutation()
  const [updatePage] = useUpdatePageMutation()
  const user = useSelector(selectUser)

  const options = useMemo(() => {
    return [
      ...UPDATE_PAGE_TEMPLATES_OPTIONS.map(option => option.title),
      'Notions database',
    ]
  }, [])
  const { selectedItem, handleSelectItem, handleKeydownSelect } = useSelectItem(
    '',
    options
  )

  const handleSelectTemplate = useCallback(
    (template: string) => {
      const createItemBody = {
        type: NotionContentItemTypes.TEXT,
        parentPageId: _id,
        author: user._id,
        order: 0,
      }

      template === 'Empty page'
        ? createContentItem(NotionContentItem.createItem(createItemBody))
        : updatePage({ _id, body: handleUpdatePageTemplate(template) })
    },
    [_id, user._id, createContentItem, updatePage]
  )

  useEventListener('keydown', e => {
    if (isSelectable) {
      handleKeydownSelect(e, () => handleSelectTemplate(selectedItem))
    }
  })

  return (
    <>
      <Description>
        Start with an empty page, or pick a Notions template.
      </Description>
      {UPDATE_PAGE_TEMPLATES_OPTIONS.map(option => (
        <EmptyPageItem
          key={option.title}
          isSelected={selectedItem === option.title}
          handleSelectItem={handleSelectItem}
          onClickAction={handleSelectTemplate}
          {...option}
        />
      ))}
      {status === null && (
        <EmptyPageItem
          title='Notions database'
          StartSvg={PageSvg}
          isSelected={selectedItem === 'Notions database'}
          handleSelectItem={handleSelectItem}
          onClickAction={handleSelectTemplate}
        />
      )}
    </>
  )
})

export default EmptyPageContent
