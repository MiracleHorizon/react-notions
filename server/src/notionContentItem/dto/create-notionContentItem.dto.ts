export default class CreateNotionContentItemDto {
  readonly parentPageId: string
  readonly parentItemId: string | null
  readonly type: string
  readonly content: string
  readonly color: string
  readonly bgColor: string
  readonly expanded: boolean | null
  readonly completed: boolean | null
  readonly iconUrl: string | null
  readonly pageId: string | null
  readonly author: string
  readonly order?: number
}
