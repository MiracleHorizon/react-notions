import solidBeigeCover from 'assets/img/page_covers/solid_colors_and_gradients/solid_beige.png'
import solidRedCover from 'assets/img/page_covers/solid_colors_and_gradients/solid_red.png'
import solidYellowCover from 'assets/img/page_covers/solid_colors_and_gradients/solid_yellow.png'
import solidBlueCover from 'assets/img/page_covers/solid_colors_and_gradients/solid_blue.png'
import gradientCover1 from 'assets/img/page_covers/solid_colors_and_gradients/gradient_1.png'
import gradientCover2 from 'assets/img/page_covers/solid_colors_and_gradients/gradient_2.png'
import gradientCover3 from 'assets/img/page_covers/solid_colors_and_gradients/gradient_3.png'
import gradientCover4 from 'assets/img/page_covers/solid_colors_and_gradients/gradient_4.png'
import gradientCover5 from 'assets/img/page_covers/solid_colors_and_gradients/gradient_5.png'
import gradientCover6 from 'assets/img/page_covers/solid_colors_and_gradients/gradient_6.png'
import gradientCover7 from 'assets/img/page_covers/solid_colors_and_gradients/gradient_7.png'

import nasaArchiveCover1 from 'assets/img/page_covers/nasa_archive/nasa_carina_nebula.jpg'
import nasaArchiveCover2 from 'assets/img/page_covers/nasa_archive/nasa_earth_grid.jpg'
import nasaArchiveCover3 from 'assets/img/page_covers/nasa_archive/nasa_fingerprints_of_water_on_the_sand.jpg'
import nasaArchiveCover4 from 'assets/img/page_covers/nasa_archive/nasa_orion_nebula.jpg'
import nasaArchiveCover5 from 'assets/img/page_covers/nasa_archive/nasa_great_sandy_desert_australia.jpg'
import nasaArchiveCover6 from 'assets/img/page_covers/nasa_archive/nasa_reduced_gravity_walking_simulator.jpg'
import nasaArchiveCover7 from 'assets/img/page_covers/nasa_archive/nasa_the_blue_marble.jpg'
import nasaArchiveCover8 from 'assets/img/page_covers/nasa_archive/nasa_wrights_first_flight.jpg'
import nasaArchiveCover9 from 'assets/img/page_covers/nasa_archive/nasa_robert_stewart_spacewalk.jpg'

import metJapaneseCover1 from 'assets/img/page_covers/met_museum_japanese/woodcuts_1.jpg'
import metJapaneseCover2 from 'assets/img/page_covers/met_museum_japanese/woodcuts_2.jpg'
import metJapaneseCover3 from 'assets/img/page_covers/met_museum_japanese/woodcuts_3.jpg'
import metJapaneseCover4 from 'assets/img/page_covers/met_museum_japanese/woodcuts_4.jpg'
import metJapaneseCover5 from 'assets/img/page_covers/met_museum_japanese/woodcuts_5.jpg'
import metJapaneseCover6 from 'assets/img/page_covers/met_museum_japanese/woodcuts_6.jpg'
import metJapaneseCover7 from 'assets/img/page_covers/met_museum_japanese/woodcuts_7.jpg'
import metJapaneseCover8 from 'assets/img/page_covers/met_museum_japanese/woodcuts_8.jpg'

import metPattern1 from 'assets/img/page_covers/met_museum_patterns/met_pattern_1.jpg'
import metPattern2 from 'assets/img/page_covers/met_museum_patterns/met_pattern_2.jpg'
import metPattern3 from 'assets/img/page_covers/met_museum_patterns/met_pattern_3.jpg'
import metPattern4 from 'assets/img/page_covers/met_museum_patterns/met_pattern_4.jpg'

import metCover1 from 'assets/img/page_covers/met_museum/met_1.jpg'
import metCover2 from 'assets/img/page_covers/met_museum/met_2.jpg'
import metCover3 from 'assets/img/page_covers/met_museum/met_3.jpg'
import metCover4 from 'assets/img/page_covers/met_museum/met_4.jpg'
import metCover5 from 'assets/img/page_covers/met_museum/met_5.jpg'
import metCover6 from 'assets/img/page_covers/met_museum/met_6.jpg'
import metCover7 from 'assets/img/page_covers/met_museum/met_7.jpg'
import metCover8 from 'assets/img/page_covers/met_museum/met_8.jpg'

export interface IGalleryList {
  title: string
  content: { coverImg: string }[]
}

export interface IEmojiList {
  title: string
  content: { emoji: string }[]
}

export const COVERS_GALLERY_LISTS: IGalleryList[] = [
  {
    title: 'Color & Gradient',
    content: [
      { coverImg: `${solidRedCover}` },
      { coverImg: `${solidYellowCover}` },
      { coverImg: `${solidBlueCover}` },
      { coverImg: `${solidBeigeCover}` },
      { coverImg: `${gradientCover1}` },
      { coverImg: `${gradientCover2}` },
      { coverImg: `${gradientCover3}` },
      { coverImg: `${gradientCover4}` },
      { coverImg: `${gradientCover5}` },
      { coverImg: `${gradientCover6}` },
      { coverImg: `${gradientCover7}` },
    ],
  },
  {
    title: 'NASA Archive',
    content: [
      { coverImg: `${nasaArchiveCover1}` },
      { coverImg: `${nasaArchiveCover2}` },
      { coverImg: `${nasaArchiveCover3}` },
      { coverImg: `${nasaArchiveCover4}` },
      { coverImg: `${nasaArchiveCover5}` },
      { coverImg: `${nasaArchiveCover6}` },
      { coverImg: `${nasaArchiveCover7}` },
      { coverImg: `${nasaArchiveCover8}` },
      { coverImg: `${nasaArchiveCover9}` },
    ],
  },
  {
    title: 'The Met Museum - Patterns',
    content: [
      { coverImg: `${metPattern1}` },
      { coverImg: `${metPattern2}` },
      { coverImg: `${metPattern3}` },
      { coverImg: `${metPattern4}` },
    ],
  },
  {
    title: 'The Met Museum - Japanese Prints',
    content: [
      { coverImg: `${metJapaneseCover1}` },
      { coverImg: `${metJapaneseCover2}` },
      { coverImg: `${metJapaneseCover3}` },
      { coverImg: `${metJapaneseCover4}` },
      { coverImg: `${metJapaneseCover5}` },
      { coverImg: `${metJapaneseCover6}` },
      { coverImg: `${metJapaneseCover7}` },
      { coverImg: `${metJapaneseCover8}` },
    ],
  },
  {
    title: 'The Met Museum',
    content: [
      { coverImg: `${metCover1}` },
      { coverImg: `${metCover2}` },
      { coverImg: `${metCover3}` },
      { coverImg: `${metCover4}` },
      { coverImg: `${metCover5}` },
      { coverImg: `${metCover6}` },
      { coverImg: `${metCover7}` },
      { coverImg: `${metCover8}` },
    ],
  },
]

export const PAGE_COVERS: string[] = [
  solidBeigeCover,
  solidRedCover,
  solidYellowCover,
  solidBlueCover,
  gradientCover1,
  gradientCover2,
  gradientCover3,
  gradientCover4,
  gradientCover5,
  gradientCover6,
  gradientCover7,
  nasaArchiveCover1,
  nasaArchiveCover2,
  nasaArchiveCover3,
  nasaArchiveCover4,
  nasaArchiveCover5,
  nasaArchiveCover6,
  nasaArchiveCover7,
  nasaArchiveCover8,
  nasaArchiveCover9,
  metJapaneseCover1,
  metJapaneseCover2,
  metJapaneseCover3,
  metJapaneseCover4,
  metJapaneseCover5,
  metJapaneseCover6,
  metJapaneseCover7,
  metJapaneseCover8,
  metPattern1,
  metPattern2,
  metPattern3,
  metPattern4,
  metCover1,
  metCover2,
  metCover3,
  metCover4,
  metCover5,
  metCover6,
  metCover7,
  metCover8,
]

// Эмоции было решено сделать схематично.
export const EMOJI_LISTS: IEmojiList[] = [
  {
    title: 'People',
    content: [
      { emoji: '😀' },
      { emoji: '😀' },
      { emoji: '😀' },
      { emoji: '😀' },
      { emoji: '😀' },
      { emoji: '😀' },
      { emoji: '😀' },
      { emoji: '😀' },
      { emoji: '😀' },
      { emoji: '😀' },
      { emoji: '😀' },
      { emoji: '😀' },
      { emoji: '😀' },
      { emoji: '😀' },
      { emoji: '😀' },
      { emoji: '😀' },
      { emoji: '😀' },
      { emoji: '😀' },
      { emoji: '😀' },
      { emoji: '😀' },
      { emoji: '😀' },
      { emoji: '😀' },
      { emoji: '😀' },
      { emoji: '😀' },
      { emoji: '😀' },
      { emoji: '😀' },
      { emoji: '😀' },
      { emoji: '😀' },
      { emoji: '😀' },
      { emoji: '😀' },
      { emoji: '😀' },
      { emoji: '😀' },
      { emoji: '😀' },
      { emoji: '😀' },
      { emoji: '😀' },
      { emoji: '😀' },
      { emoji: '😀' },
      { emoji: '😀' },
      { emoji: '😀' },
      { emoji: '😀' },
    ],
  },
  {
    title: 'Animals and nature',
    content: [
      { emoji: '🦖' },
      { emoji: '🦖' },
      { emoji: '🦖' },
      { emoji: '🦖' },
      { emoji: '🦖' },
      { emoji: '🦖' },
      { emoji: '🦖' },
      { emoji: '🦖' },
      { emoji: '🦖' },
      { emoji: '🦖' },
      { emoji: '🦖' },
      { emoji: '🦖' },
      { emoji: '🦖' },
      { emoji: '🦖' },
      { emoji: '🦖' },
      { emoji: '🦖' },
      { emoji: '🦖' },
      { emoji: '🐳' },
      { emoji: '🐳' },
      { emoji: '🐳' },
      { emoji: '🐳' },
      { emoji: '🐳' },
      { emoji: '🐳' },
      { emoji: '🐳' },
      { emoji: '🐳' },
      { emoji: '🐳' },
      { emoji: '🐳' },
      { emoji: '🐳' },
      { emoji: '🐳' },
      { emoji: '🐳' },
      { emoji: '🐳' },
      { emoji: '🐳' },
      { emoji: '🐳' },
      { emoji: '🐳' },
      { emoji: '🐳' },
      { emoji: '🐳' },
      { emoji: '🐳' },
      { emoji: '🐳' },
      { emoji: '🐳' },
      { emoji: '🐳' },
    ],
  },
]

export const EMOJIS_URLS: string[] = [
  'https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/2611-fe0f.svg',
  'https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/2705.svg',
  'https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f5a4.svg',
  'https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f30d.svg',
]
