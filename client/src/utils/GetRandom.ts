import sample from 'lodash.sample'
import { EMOJIS_URLS, PAGE_COVERS } from 'utils/constants/decor'
import { TasksListTitleColorsEnum } from 'models/decor/TasksListTitleColorsEnum'

export default class GetRandom {
  static cover = () => sample(PAGE_COVERS)

  static icon = () => sample(EMOJIS_URLS)

  static listColor = () =>
    sample(Object.values(TasksListTitleColorsEnum).filter(c => c !== TasksListTitleColorsEnum.EMPTY))
}
