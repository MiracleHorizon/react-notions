import { SERVER_API } from 'utils/constants/app'

export default function handleImageUrl(imageUrl: string): string {
  const isStatic =
    imageUrl.startsWith('image/') ||
    imageUrl.startsWith('covers/') ||
    imageUrl.startsWith('emoji/')

  return isStatic ? `${SERVER_API}/${imageUrl}` : imageUrl
}
