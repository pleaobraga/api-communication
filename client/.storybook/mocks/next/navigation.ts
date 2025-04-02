const useRouter = () => ({
  push: (url: string) => console.log(`Router push: ${url}`),
  replace: (url: string) => console.log(`Router replace: ${url}`),
  prefetch: () => Promise.resolve(),
  back: () => console.log('Router back'),
  forward: () => console.log('Router forward')
})

const usePathname = () => '/mocked-path'
const useSearchParams = () => ({ get: () => null })

export { useRouter, usePathname, useSearchParams }
