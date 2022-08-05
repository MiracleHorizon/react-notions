import sample from 'lodash.sample'
import { TasksListTitleColor } from 'models/decor/colors'

export default function getRandomListColor() {
  return sample(Object.values(TasksListTitleColor).filter(c => c !== 'empty'))
}
