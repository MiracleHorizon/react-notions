import sample from 'lodash.sample'
import { PAGE_EMOJIS_URLS, PAGE_COVERS_URLS } from 'utils/constants/decor'
import { TasksListTitleColorsEnum } from 'models/decor/TasksListTitleColorsEnum'

export default class GetRandom {
  public static cover = () => sample(PAGE_COVERS_URLS)

  public static icon = () => sample(PAGE_EMOJIS_URLS)

  public static listColor = () =>
    sample(
      Object.values(TasksListTitleColorsEnum).filter(
        c => c !== TasksListTitleColorsEnum.EMPTY
      )
    )
}
