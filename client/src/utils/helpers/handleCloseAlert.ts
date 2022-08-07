export default function handleCloseAlert(
  e: KeyboardEvent,
  closeAction: () => void
) {
  if (e.code === 'Enter') closeAction()
}
