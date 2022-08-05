export default interface FileUploaderProps {
  accept: 'audio' | 'image'
  action: (file: any) => void
}
