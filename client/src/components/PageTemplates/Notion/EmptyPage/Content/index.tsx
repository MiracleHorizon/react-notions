import React, { FC, memo, useCallback } from 'react'

import EmptyPageItem from '../Item - Checked'
import { PageSvg } from 'components/ui/svg'
import {
  useCreateItemMutation,
  useUpdatePageMutation,
} from 'services/pages.api'
import useSelectItem from 'hooks/useSelectItem'
import handleUpdatePageTemplate from 'utils/helpers/handleUpdatePageTemplate'
import { UPDATE_PAGE_TEMPLATES } from 'utils/constants/app'
import NotionContentItem from 'models/pageContent/NotionContentItem.class'
import IPage from 'models/page/IPage'
import Description from './EmptyPageContent.styles'

const EmptyPageContent: FC<IPage> = memo(page => {
  const { selectedItem, handleSelectItem } = useSelectItem('')
  const [createContentItem] = useCreateItemMutation()
  const [updatePage] = useUpdatePageMutation()

  const handleSelectTemplate = useCallback(
    async (template: string) => {
      if (template === 'Empty page') {
        await createContentItem(NotionContentItem.createText(page._id))
        return
      }

      updatePage({ _id: page._id, body: handleUpdatePageTemplate(template) })
    },
    [page._id, createContentItem, updatePage]
  )

  return (
    <>
      <Description>
        Start with an empty page, or pick a Notions template.
      </Description>
      {UPDATE_PAGE_TEMPLATES.map(template => (
        <EmptyPageItem
          key={template.title}
          isSelected={selectedItem === template.title}
          handleSelectItem={handleSelectItem}
          onClickAction={handleSelectTemplate}
          {...template}
        />
      ))}
      {page.status === null && (
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
