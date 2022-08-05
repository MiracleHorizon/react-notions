import { ChangeEvent, SetStateAction, Dispatch, RefObject } from 'react'
import { IPage } from '../models/page/IPage'

export declare type SetState<T> = Dispatch<SetStateAction<T>>
export type InputEvent = ChangeEvent<HTMLInputElement>
export type TDevice = 'desktop' | 'tablet' | 'mobile'
export type TButtonSize = 'small' | 'medium' | 'large'
export type TDivRef = RefObject<HTMLDivElement>
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
