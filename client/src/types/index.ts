import { ChangeEvent, SetStateAction, Dispatch, RefObject } from 'react'
import IPage from 'models/page/IPage'

export type SetState<T> = Dispatch<SetStateAction<T>>
export type InputEvent = ChangeEvent<HTMLInputElement>
export type TDivRef = RefObject<HTMLDivElement>
export type TClientRect = DOMRect | null

export type TDevice = 'desktop' | 'tablet' | 'mobile'
export type TButtonSize = 'small' | 'medium' | 'large'

export type TLastPage = IPage | undefined

export interface ElementCoords {
  top?: number
  bottom?: number
  left?: number
  right?: number
}

export interface IVoidClick {
  onClickAction: () => void
}
