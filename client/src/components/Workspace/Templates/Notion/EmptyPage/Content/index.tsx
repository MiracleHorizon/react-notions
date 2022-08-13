import React, { FC, memo, useCallback } from 'react'

import EmptyPageItem from '../Item'
import { PageSvg } from 'components/ui/svg'
import {
  useCreateItemMutation,
  useUpdatePageMutation,
} from 'store/slices/pages/pages.api'
import useSelectItem from 'hooks/useSelectItem'
import handleUpdatePageTemplate from 'utils/helpers/handleUpdatePageTemplate'
import { NOTIONS_LIST_VIEWS, UPDATE_PAGE_TEMPLATES } from 'utils/constants/app'
import NotionContentItem from 'models/pageContent/NotionContentItem.class'
import IUpdatePageBody from 'models/api/pages/IUpdatePageBody'
import IPage from 'models/page/IPage'
import * as Content from './EmptyPageContent.styles'

const EmptyPageContent: FC<IPage> = memo(page => {
  const { selectedItem, handleSelectItem } = useSelectItem('')
  const [updatePage] = useUpdatePageMutation()
  const [createContentItem] = useCreateItemMutation()

  const handleSelectTemplate = useCallback(
    async (template: string) => {
      if (template === 'Empty page') {
        const body = NotionContentItem.createText(page._id)
        await createContentItem(body)
        return
      }

      const body: IUpdatePageBody = handleUpdatePageTemplate(template)
      updatePage({ _id: page._id, body })
    },
    [page._id]
  )

  return (
    <>
      <Content.Description>
        Start with an empty page, or pick a Notions template.
      </Content.Description>
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
      {/* <Content.Description>*/}
      {/*  With Notions template you can use this view schemas to track tasks:*/}
      {/* </Content.Description>*/}
      {/* <Content.ViewsList>*/}
      {/*  {NOTIONS_LIST_VIEWS.map(({ title, StartSvg }) => (*/}
      {/*    <Content.ViewItem key={title}>*/}
      {/*      <StartSvg />*/}
      {/*      <Content.ViewTitle>{title}</Content.ViewTitle>*/}
      {/*    </Content.ViewItem>*/}
      {/*  ))}*/}
      {/* </Content.ViewsList>*/}
    </>
  )
})

export default EmptyPageContent
