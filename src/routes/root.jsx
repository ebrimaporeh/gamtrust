import { createRootRoute, Outlet } from '@tanstack/react-router'

const RootComponent = () => {
  return (
    <>
      <Outlet />
    </>
  )
}

export const rootRoute = createRootRoute({
  component: RootComponent,
})