import sample from 'lodash.sample'

export const iconsUrls: string[] = [
  'https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/2611-fe0f.svg',
  'https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/2705.svg',
  'https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f5a4.svg',
  'https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f30d.svg',
]

const getRandomIcon = () => sample(iconsUrls)

export default getRandomIcon
