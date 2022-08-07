import React from 'react'

import MainLayout from 'layouts/Main'
import PageDecorPanel from 'components/DecorPanel'
import { PageSvg, EmptyPageSvg } from 'components/ui/svg'
import * as Page from './EmptyPage.styles'

import IPage from 'models/page/IPage'
import { views } from '../../../../ViewsPanel'

const page: IPage = {
  parentPageId: null,
  parentListId: null,
  status: null,
  _id: '62e6f5d43311dfe648a07846',
  template: 'Notion',
  title: '',
  iconUrl: null,
  coverUrl: null,
  coverPosition: 50,
  favorite: false,
  expanded: false,
  fullWidth: false,
  smallText: false,
  locked: false,
  font: 'Default',
  descriptionExpanded: false,
  description: '',
  content: [],
  dependencies: [],
  sbOrder: null,
  taskOrder: null,
  author: '123312312312321321321',
  createdAt: '2022-07-31T21:36:20.192Z',
  updatedAt: '2022-07-31T21:36:20.192Z',
}

const EmptyPage = () => {
  return (
    <MainLayout>
      <Page.Wrapper>
        <PageDecorPanel {...page} />
        <Page.Container fullWidth={page.fullWidth}>
          <Page.Description>
            Start with an empty page, or pick a Notions template.
          </Page.Description>
          <>
            <PageSvg />
            <EmptyPageSvg />
          </>
          <Page.Description>
            With Notions template you can use this views schemas to track tasks:
          </Page.Description>
          <Page.ViewsList>
            {views.map(({ title, StartSvg }) => (
              <Page.ViewItem key={title}>
                <StartSvg />
                <Page.ViewTitle>{title}</Page.ViewTitle>
              </Page.ViewItem>
            ))}
          </Page.ViewsList>
        </Page.Container>
      </Page.Wrapper>
    </MainLayout>
  )
}

export default EmptyPage
