import { RootState } from 'store/index'
import IPage from 'models/page/IPage'
import INotionContentItem from 'models/pageContent/INotionContentItem'
import { TasksListTitleColorsEnum } from 'models/decor/TasksListTitleColorsEnum'

export class NotionsSelector {
  static selectFavoritePages(state: RootState): IPage[] {
    return state.notions.pages.filter(page => page.favorite)
  }

  static selectCommonPages(state: RootState): IPage[] {
    return state.notions.pages.filter(page =>
      !page.favorite &&
      !page.parentPageId &&
      !page.parentListId  &&
      !page.status
    )
  }

  static selectNoStatusPages(state: RootState): IPage[] {
    const noStatusTasksList = state.tasksLists.lists.find(
      list => list.color === TasksListTitleColorsEnum.EMPTY
    )

    if (!noStatusTasksList) return []

    return state.notions.pages.filter(page => page.status === noStatusTasksList._id)
  }

  static selectPageDependencies(state: RootState, _id: string): IPage[] {
    return state.notions.pages.filter(
      page => page.parentPageId === _id && page.status === null
    )
  }

  static selectListDepsLength(state: RootState, listId: string): number {
    return state.notions.pages.filter(page => page.parentListId === listId).length
  }

  static selectListTasks(state: RootState, listId: string): IPage[] {
    return state.notions.pages
      .filter(page => page.parentListId === listId)
      .sort((a, b) => a.taskOrder! - b.taskOrder!)
  }

  static selectParentPage(
    state: RootState,
    parentPageId: string
  ): IPage | undefined {
    return state.notions.pages.find(page => page._id === parentPageId)
  }

  static selectGalleryPages(state: RootState): IPage[] {
    const currentPage = state.notions.page
    return state.notions.pages.filter(
      page => page.parentPageId === currentPage._id && page.status
    )
  }

  static selectContentItemDeps(
    state: RootState,
    _id: string
  ): INotionContentItem[] {
    const currentPage = state.notions.page
    return currentPage.content.filter(item => item.parentItemId === _id)
  }
}
