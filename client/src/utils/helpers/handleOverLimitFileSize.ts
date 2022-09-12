import {
  COVER_UPLOAD_RESTRICTION,
  ICON_UPLOAD_RESTRICTION,
  IMAGE_UPLOAD_RESTRICTION,
  VIDEO_UPLOAD_RESTRICTION,
  AUDIO_UPLOAD_RESTRICTION,
} from 'utils/constants/app'

type TKind = 'icon' | 'cover' | 'video' | 'audio' | 'image'

export default function handleOverLimitFileSize(kind: TKind) {
  switch (kind) {
    case 'icon':
      return ICON_UPLOAD_RESTRICTION / 1e6
    case 'cover':
      return COVER_UPLOAD_RESTRICTION / 1e6
    case 'image':
      return IMAGE_UPLOAD_RESTRICTION / 1e6
    case 'video':
      return VIDEO_UPLOAD_RESTRICTION / 1e6
    case 'audio':
      return AUDIO_UPLOAD_RESTRICTION / 1e6
  }
}
