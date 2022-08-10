import React, { FC, useCallback } from 'react'

import EmptyPageItem from '../Item'
import Divider from 'components/ui/Divider'
import { PageSvg } from 'components/ui/svg'
import {
  useCreateItemMutation,
  useUpdatePageMutation,
} from 'store/slices/pages/pages.api'
import { NOTIONS_LIST_VIEWS, UPDATE_PAGE_TEMPLATES } from 'utils/constants/app'
import updatePageTemplateReducer from 'utils/updatePageTemplateReducer'
import NotionContentItem from 'models/pageContent/NotionContentItem.class'
import IUpdatePageBody from 'models/api/pages/IUpdatePageBody'
import IPage from 'models/page/IPage'
import * as Content from './EmptyPageContent.styles'

const EmptyPageContent: FC<IPage> = page => {
  const [updatePage] = useUpdatePageMutation()
  const [createContentItem] = useCreateItemMutation()

  const handleSelectTemplate = useCallback(
    async (template: string) => {
      if (template === 'Empty page') {
        const body = NotionContentItem.createText({ parentPageId: page._id })

        await createContentItem(body)
        return
      }

      const body: IUpdatePageBody = updatePageTemplateReducer(template)
      updatePage({ _id: page._id, body })
    },
    [page._id]
  )

  return (
    <>
      <Divider />
      <Content.Description>
        Start with an empty page, or pick a Notions template.
      </Content.Description>
      {UPDATE_PAGE_TEMPLATES.map(template => (
        <EmptyPageItem
          key={template.title}
          onClickAction={handleSelectTemplate}
          {...template}
        />
      ))}
      {page.status === null && (
        <EmptyPageItem
          onClickAction={handleSelectTemplate}
          title='Notions List'
          StartSvg={PageSvg}
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
}

export default EmptyPageContent
