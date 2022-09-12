export default interface IDecorList {
  _id: string
  title: string
  content: IDecorItem[]
}

export interface IDecorItem {
  imgUrl: string
  tooltipTitle: string
  tooltipDescription?: string
}
