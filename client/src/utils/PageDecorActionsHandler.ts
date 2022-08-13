import { TDecorDest } from 'components/ui/modals/components/ChangeDecor/Navbar/ActionsBar/DecorModalActions.types'
import GetRandom from './GetRandom'

export default class PageDecorActionsHandler {
  static remove = (dest: TDecorDest) =>
    dest === 'cover' ? { coverUrl: null, coverPosition: 50 } : { iconUrl: null }

  static random = (dest: TDecorDest) =>
    dest === 'cover'
      ? { coverUrl: GetRandom.cover() }
      : { iconUrl: GetRandom.icon() }
}
