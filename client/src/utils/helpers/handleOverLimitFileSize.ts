import {
  AUDIO_UPLOAD_RESTRICTION,
  COVER_UPLOAD_RESTRICTION,
  ICON_UPLOAD_RESTRICTION,
  VIDEO_UPLOAD_RESTRICTION,
} from 'utils/constants/app'

export default function handleOverLimitFileSize(
  dest: 'icon' | 'cover' | 'video' | 'audio'
) {
  switch (dest) {
    case 'icon':
      return ICON_UPLOAD_RESTRICTION / 1e6
    case 'cover':
      return COVER_UPLOAD_RESTRICTION / 1e6
    case 'video':
      return VIDEO_UPLOAD_RESTRICTION / 1e6
    case 'audio':
      return AUDIO_UPLOAD_RESTRICTION / 1e6
  }
}
