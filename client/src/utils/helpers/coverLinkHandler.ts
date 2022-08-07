const IMAGES_SUPER_FAMOUS_LINK = 'https://images.superfamous.com/36-Gradients'
const NASA_ARCHIVE_LINK = 'https://www.flickr.com/photos/nasacommons/'
const MET_MUSEUM_LINK = 'https://www.metmuseum.org/art/collection'

export default function coverLinkHandler(listTitle: string): string {
  if (listTitle.startsWith('NASA')) {
    return NASA_ARCHIVE_LINK
  } else if (listTitle.startsWith('The Met Museum')) {
    return MET_MUSEUM_LINK
  } else {
    return IMAGES_SUPER_FAMOUS_LINK
  }
}
