export default function handleAuthPathname(pathname: string): string {
  switch (pathname) {
    case '/login':
      return 'Log in to sync your content.'
    case '/register':
      return 'Create an account to use the service.'
    case '/activate':
      return 'Activate your account.'
    default:
      return 'Log in to sync your content'
  }
}
