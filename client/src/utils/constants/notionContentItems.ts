import NotionContentItemTypes from 'models/pageContent/NotionContentItemTypes'

import textImg from 'assets/img/content_type_images/text-item-img.png'
import todoImg from 'assets/img/content_type_images/to_do_img.png'
import h1Img from 'assets/img/content_type_images/heading_1_img.png'
import h2Img from 'assets/img/content_type_images/heading_2_img.png'
import h3Img from 'assets/img/content_type_images/heading_3_img.png'
import tglH1Img from 'assets/img/content_type_images/toggle_heading_1.png'
import tglH2Img from 'assets/img/content_type_images/toggle_heading_2.png'
import tglH3Img from 'assets/img/content_type_images/toggle_heading_3.png'
import tglListImg from 'assets/img/content_type_images/toggle_list.png'
import bullListImg from 'assets/img/content_type_images/bulleted_list_img.png'
import numListImg from 'assets/img/content_type_images/numbered_list_img.png'
import quoteImg from 'assets/img/content_type_images/quote_img.png'
import pageLinkImg from 'assets/img/content_type_images/link_page_img.png'
import webBookmarkImg from 'assets/img/content_type_images/web_bookmark_img.png'
import dividerImg from 'assets/img/content_type_images/divider_img.png'
import imageImg from 'assets/img/content_type_images/image_img.png'
import videoImg from 'assets/img/content_type_images/video_img.png'

export const NOTION_CONTENT_ITEM_TYPE_OPTIONS = [
  {
    title: 'Text',
    desc: 'Just start writing with plain text.',
    imageUrl: `${textImg}`,
    type: NotionContentItemTypes.TEXT,
  },
  {
    title: 'To-do list',
    desc: 'Track tasks with a to-do list.',
    imageUrl: `${todoImg}`,
    type: NotionContentItemTypes.TODO,
  },
  {
    title: 'Heading 1',
    desc: 'Big section heading.',
    imageUrl: `${h1Img}`,
    type: NotionContentItemTypes.H1,
  },
  {
    title: 'Heading 2',
    desc: 'Medium section heading.',
    imageUrl: `${h2Img}`,
    type: NotionContentItemTypes.H2,
  },
  {
    title: 'Heading 3',
    desc: 'Small section heading.',
    imageUrl: `${h3Img}`,
    type: NotionContentItemTypes.H3,
  },
  {
    title: 'Bulleted list',
    desc: 'Create a simple bulleted list.',
    imageUrl: `${bullListImg}`,
    type: NotionContentItemTypes.BULL_LIST,
  },
  {
    title: 'Numbered list',
    desc: 'Create a list with numbering.',
    imageUrl: `${numListImg}`,
    type: NotionContentItemTypes.NUM_LIST,
  },
  {
    title: 'Toggle list',
    desc: 'Toggles can hide and show content inside.',
    imageUrl: `${tglListImg}`,
    type: NotionContentItemTypes.TGL_LIST,
  },
  {
    title: 'Toggle heading 1',
    desc: 'Hide content inside a large heading.',
    imageUrl: `${tglH1Img}`,
    type: NotionContentItemTypes.TGL_H1,
  },
  {
    title: 'Toggle heading 2',
    desc: 'Hide content inside a medium heading.',
    imageUrl: `${tglH2Img}`,
    type: NotionContentItemTypes.TGL_H2,
  },
  {
    title: 'Toggle heading 3',
    desc: 'Hide content inside a small heading.',
    imageUrl: `${tglH3Img}`,
    type: NotionContentItemTypes.TGL_H3,
  },
  {
    title: 'Link to page',
    desc: 'Link to an existing page.',
    imageUrl: `${pageLinkImg}`,
    type: NotionContentItemTypes.PAGE_URL,
  },
  {
    title: 'Quote',
    desc: 'Capture a quote.',
    imageUrl: `${quoteImg}`,
    type: NotionContentItemTypes.QUOTE,
  },
  {
    title: 'Divider',
    desc: 'Visually divide blocks.',
    imageUrl: `${dividerImg}`,
    type: NotionContentItemTypes.DIVIDER,
  },
  {
    title: 'Web bookmark',
    desc: 'Save a link as a visual bookmark.',
    imageUrl: `${webBookmarkImg}`,
    type: NotionContentItemTypes.WEB_BOOKMARK,
  },
  {
    title: 'Image',
    desc: 'Upload or embed with a link.',
    imageUrl: `${imageImg}`,
    type: NotionContentItemTypes.IMAGE,
  },
  {
    title: 'Video',
    desc: 'Embed from Youtube or something...',
    imageUrl: `${videoImg}`,
    type: NotionContentItemTypes.VIDEO,
  },
]
