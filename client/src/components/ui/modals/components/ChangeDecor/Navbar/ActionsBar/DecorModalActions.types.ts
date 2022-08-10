export type TDecorDest ='cover' | 'icon'

export default interface DecorModalActionsProps {
  _id: string
  dest: TDecorDest
  activeCategory: string
}
