import { SetState } from 'types'

export default interface FileUploaderProps {
  accept: 'audio' | 'video' | 'image'
  setFile: SetState<FileList | null>
}
