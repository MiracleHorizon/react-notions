import sample from 'lodash.sample'
import { TasksListTitleColorsEnum } from 'models/decor/TasksListTitleColorsEnum'

export default function getRandomListColor() {
  return sample(
    Object.values(TasksListTitleColorsEnum).filter(c => c !== 'empty')
  )
}
