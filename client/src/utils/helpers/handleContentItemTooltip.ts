import Types from 'models/pageContent/NotionContentItemTypes'

import textTooltip from 'assets/img/content_type_tooltips/text.png'
import pageLinkTooltip from 'assets/img/content_type_tooltips/link_to_page.png'
import todoTooltip from 'assets/img/content_type_tooltips/to_do_list.png'
import quoteTooltip from 'assets/img/content_type_tooltips/quote.png'
import h1Tooltip from 'assets/img/content_type_tooltips/header.png'
import h2Tooltip from 'assets/img/content_type_tooltips/header_2.png'
import h3Tooltip from 'assets/img/content_type_tooltips/header_3.png'
import tleH1Tooltip from 'assets/img/content_type_tooltips/toggle_h1.png'
import tleH2Tooltip from 'assets/img/content_type_tooltips/toggle_h2.png'
import tleH3Tooltip from 'assets/img/content_type_tooltips/toggle_h3.png'
import bullListTooltip from 'assets/img/content_type_tooltips/bulleted_list.png'
import numListTooltip from 'assets/img/content_type_tooltips/numbered_list.png'
import toggleListTooltip from 'assets/img/content_type_tooltips/toggle_list.png'
import dividerTooltip from 'assets/img/content_type_tooltips/divider.png'
import webBookmarkTooltip from 'assets/img/content_type_tooltips/web_bookmark.png'
import imgTooltip from 'assets/img/content_type_tooltips/image.png'
import videoTooltip from 'assets/img/content_type_tooltips/video.png'

export default function handleContentItemTooltip(type: Types) {
  switch (type) {
    case Types.TEXT:
      return {
        title: 'Just start writing with plain text.',
        imgUrl: `${textTooltip}`,
      }
    case Types.PAGE_LINK:
      return {
        title: 'Link to an existing page.',
        imgUrl: `${pageLinkTooltip}`,
      }
    case Types.TODO:
      return {
        title: 'Track tasks with a to-do list.',
        imgUrl: `${todoTooltip}`,
      }
    case Types.H1:
      return {
        title: 'Big section heading.',
        imgUrl: `${h1Tooltip}`,
      }
    case Types.H2:
      return {
        title: 'Medium section heading.',
        imgUrl: `${h2Tooltip}`,
      }
    case Types.H3:
      return {
        title: 'Small section heading.',
        imgUrl: `${h3Tooltip}`,
      }
    case Types.TGL_H1:
      return {
        title: 'Hide content inside a large heading.',
        imgUrl: `${tleH1Tooltip}`,
      }
    case Types.TGL_H2:
      return {
        title: 'Hide content inside a medium heading.',
        imgUrl: `${tleH2Tooltip}`,
      }
    case Types.TGL_H3:
      return {
        title: 'Hide content inside a small heading.',
        imgUrl: `${tleH3Tooltip}`,
      }
    case Types.QUOTE:
      return {
        title: 'Capture a quote.',
        imgUrl: `${quoteTooltip}`,
      }
    case Types.TGL_LIST:
      return {
        title: 'Toggles can hide and show content inside.',
        imgUrl: `${toggleListTooltip}`,
      }
    case Types.BULL_LIST:
      return {
        title: 'Create a simple bulleted list.',
        imgUrl: `${bullListTooltip}`,
      }
    case Types.NUM_LIST:
      return {
        title: 'Create a list with numbering.',
        imgUrl: `${numListTooltip}`,
      }
    case Types.WEB_BOOKMARK:
      return {
        title: 'Save a link as a visual bookmark.',
        imgUrl: `${webBookmarkTooltip}`,
      }
    case Types.DIVIDER:
      return {
        title: 'Visually divide blocks.',
        imgUrl: `${dividerTooltip}`,
      }
    case Types.IMAGE:
      return {
        title: 'Upload or embed with a link.',
        imgUrl: `${imgTooltip}`,
      }
    case Types.VIDEO:
      return {
        title: 'Embed from Youtube or something...',
        imgUrl: `${videoTooltip}`,
      }
    default:
      return {
        title: 'No image',
        imageUrl: '',
      }
  }
}
