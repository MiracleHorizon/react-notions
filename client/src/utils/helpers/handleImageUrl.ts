import { SERVER_API } from 'utils/constants/app'

export default function handleImageUrl(imageUrl: string): string {
  return imageUrl.startsWith('image/') ? `${SERVER_API}/${imageUrl}` : imageUrl
}
