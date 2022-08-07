import sample from 'lodash.sample'
import { TDecorDest } from 'components/ui/modals/components/ChangeDecor/Navbar/ActionsBar/DecorModalActions.types'
import { covers } from 'store/slices/decor'
import { iconsUrls } from './getRandomIcon'


export const removeDecorHandler = (dest: TDecorDest) =>
  dest === 'cover' ? { coverUrl: null, coverPosition: 50 } : { iconUrl: null }

export const randomDecorHandler = (dest: TDecorDest) =>
  dest === 'cover'
    ? { coverUrl: sample(covers) }
    : { iconUrl: sample(iconsUrls) }
