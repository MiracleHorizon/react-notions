import { TPageTemplate } from 'models/page/IPage'
import { PageActionsTypes } from 'hooks/usePageActions'

interface Params {
  dest: 'settings' | 'options'
  status?: string | null
  favorite: boolean
  locked: boolean
  template?: TPageTemplate
}

export default function handlePageOptions(params: Params): string[] {
  const { dest, status, favorite, locked, template } = params

  if (dest === 'options') {
    const pageWithStatusOptions = [
      PageActionsTypes.OPEN_IN_NEW_TAB,
      !locked ? 'Rename' : '',
      'Move to',
    ]

    return [
      PageActionsTypes.DELETE,
      favorite ? PageActionsTypes.UNFAVORITE : PageActionsTypes.FAVORITE,
      PageActionsTypes.COPY_LINK,
      !status && !locked ? PageActionsTypes.RENAME : '',
      ...(status ? pageWithStatusOptions : []),
      !status ? PageActionsTypes.MOVE : '',
    ].filter(item => item !== '')
  } else {
    const toggleOptions = [
      PageActionsTypes.SMALL_TEXT,
      PageActionsTypes.FULL_WIDTH,
    ]

    const defaultOptions = [
      locked ? PageActionsTypes.UNLOCK : PageActionsTypes.LOCK,
      favorite ? PageActionsTypes.UNFAVORITE : PageActionsTypes.FAVORITE,
      PageActionsTypes.COPY_LINK,
      PageActionsTypes.DELETE,
      PageActionsTypes.MOVE,
    ]

    if (template && template === 'Notion') {
      return toggleOptions.concat(defaultOptions)
    }

    return defaultOptions
  }
}
