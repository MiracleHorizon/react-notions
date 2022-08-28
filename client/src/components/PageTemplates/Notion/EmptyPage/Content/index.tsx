import React, { FC, memo, useCallback } from 'react'
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
import handleUpdatePageTemplate from 'utils/helpers/handleUpdatePageTemplate'
import { UPDATE_PAGE_TEMPLATES_OPTIONS } from 'utils/constants/app'
import NotionContentItem from 'models/pageContent/NotionContentItem.class'
import IPage from 'models/page/IPage'
import Description from './EmptyPageContent.styles'

const EmptyPageContent: FC<IPage> = memo(({ _id, status }) => {
  const isSelectable = useSelector(selectEmptyPageItemSelectable)
  const [createContentItem] = useCreateItemMutation()
  const [updatePage] = useUpdatePageMutation()
  const {
    selectedItem,
    handleSelectItem,
    handleKeydownSelect
  } = useSelectItem('', UPDATE_PAGE_TEMPLATES_OPTIONS.map(option => option.title))

  const handleSelectTemplate = useCallback(
    (template: string) => {
      template === 'Empty page'
        ? createContentItem(NotionContentItem.createText(_id))
        : updatePage({ _id, body: handleUpdatePageTemplate(template) })
    },
    [_id, createContentItem, updatePage]
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
          title='Notions List'
          StartSvg={PageSvg}
          isSelected={selectedItem === 'Notions List'}
          handleSelectItem={handleSelectItem}
          onClickAction={handleSelectTemplate}
        />
      )}
    </>
  )
})

export default EmptyPageContent
